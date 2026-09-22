import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useSpring, useTransform, useMotionValueEvent } from 'framer-motion'
import { Cloud, Flag, Trophy } from 'lucide-react'
import type { RoadmapItem } from '../../types/course'

const VIEW_WIDTH = 400
const SEGMENT_HEIGHT = 150
const TOP_PAD = 60
const BOTTOM_PAD = 60
const LEFT_X = 140
const RIGHT_X = 260
const LABEL_GAP = 30
const LABEL_WIDTH = 100

// Builds a smooth, continuously winding vertical road through N points,
// alternating left/right so it reads as an actual road, not a straight line.
function buildRoadPath(count: number) {
  const anchors = Array.from({ length: count }, (_, i) => ({
    x: i % 2 === 0 ? LEFT_X : RIGHT_X,
    y: TOP_PAD + i * SEGMENT_HEIGHT,
  }))

  let d = `M ${anchors[0].x} ${anchors[0].y}`
  for (let i = 1; i < anchors.length; i++) {
    const prev = anchors[i - 1]
    const curr = anchors[i]
    const midY = (prev.y + curr.y) / 2
    d += ` C ${prev.x} ${midY}, ${curr.x} ${midY}, ${curr.x} ${curr.y}`
  }

  return { d, anchors }
}

// A winding "road" that draws itself and carries a travelling cloud marker as the
// visitor scrolls it into view. Runs in normal document flow (no position:sticky —
// sticky + ancestor overflow clipping is unreliable across browsers), so it works
// the same way on every device: scroll progress of this element drives the animation.
export default function Roadmap({ items }: { items: RoadmapItem[] }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const pathRef = useRef<SVGPathElement>(null)
  const [pathLength, setPathLength] = useState(0)
  const [markerPoint, setMarkerPoint] = useState({ x: LEFT_X, y: TOP_PAD })

  const points = [{ label: 'START' }, ...items, { label: 'CAREER READY' }]
  const { d, anchors } = buildRoadPath(points.length)
  const viewHeight = TOP_PAD + (points.length - 1) * SEGMENT_HEIGHT + BOTTOM_PAD

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.85', 'end 0.4'],
  })
  const progress = useSpring(scrollYProgress, { stiffness: 90, damping: 24, mass: 0.4 })
  const pathLengthMotion = useTransform(progress, [0, 1], [0, 1])

  useEffect(() => {
    if (pathRef.current) setPathLength(pathRef.current.getTotalLength())
  }, [d])

  useMotionValueEvent(progress, 'change', (v) => {
    const path = pathRef.current
    if (!path || !pathLength) return
    const clamped = Math.min(Math.max(v, 0), 0.999)
    const point = path.getPointAtLength(clamped * pathLength)
    setMarkerPoint({ x: point.x, y: point.y })
  })

  return (
    <div ref={containerRef} className="mx-auto w-full max-w-sm">
      <svg
        viewBox={`0 0 ${VIEW_WIDTH} ${viewHeight}`}
        className="w-full"
        style={{ height: 'auto' }}
        preserveAspectRatio="xMidYMid meet"
      >
        {/* road base */}
        <path d={d} fill="none" className="stroke-slate-300 dark:stroke-white/10" strokeWidth={26} strokeLinecap="round" />
        {/* unfilled centre line (full route, faint) */}
        <path
          d={d}
          fill="none"
          className="stroke-slate-400/60 dark:stroke-white/20"
          strokeWidth={2.5}
          strokeDasharray="10 12"
          strokeLinecap="round"
        />
        {/* progressive glowing route already travelled */}
        <motion.path
          ref={pathRef}
          d={d}
          fill="none"
          stroke="url(#roadGradient)"
          strokeWidth={5}
          strokeLinecap="round"
          strokeDasharray="10 12"
          style={{ pathLength: pathLengthMotion }}
        />
        <defs>
          <linearGradient id="roadGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#6366f1" />
            <stop offset="100%" stopColor="#22d3ee" />
          </linearGradient>
          <filter id="markerGlow" x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* milestone posts */}
        {anchors.map((a, i) => {
          const isFirst = i === 0
          const isLast = i === anchors.length - 1
          const side = a.x === LEFT_X ? -1 : 1
          const labelEdge = a.x + side * LABEL_GAP
          return (
            <g key={i}>
              <line x1={a.x} y1={a.y} x2={labelEdge} y2={a.y} className="stroke-slate-300 dark:stroke-white/15" strokeWidth={2} />
              <circle
                cx={a.x}
                cy={a.y}
                r={isFirst || isLast ? 9 : 6.5}
                className={
                  isFirst || isLast
                    ? 'fill-emerald-500 dark:fill-emerald-400'
                    : 'fill-white dark:fill-slate-950 stroke-indigo-500 dark:stroke-cyan-400'
                }
                strokeWidth={isFirst || isLast ? 0 : 2.5}
              />
              <foreignObject x={side === -1 ? labelEdge - LABEL_WIDTH : labelEdge} y={a.y - 16} width={LABEL_WIDTH} height={40}>
                <div
                  className={`flex h-full items-center rounded-lg border border-slate-200 bg-white/90 px-2 text-center text-[10px] font-bold leading-tight text-slate-800 shadow-sm dark:border-white/10 dark:bg-slate-900/90 dark:text-slate-100 ${
                    side === -1 ? 'justify-end text-right' : 'justify-start text-left'
                  }`}
                >
                  {points[i].label}
                </div>
              </foreignObject>
            </g>
          )
        })}

        {/* traveling marker: the CloudByteLabs "cloud" journeying the road */}
        <g style={{ transform: `translate(${markerPoint.x}px, ${markerPoint.y}px)` }}>
          <circle r={16} className="fill-white dark:fill-slate-950" filter="url(#markerGlow)" />
          <circle r={16} fill="url(#roadGradient)" opacity={0.18} />
          <circle r={13} fill="url(#roadGradient)" />
          <foreignObject x={-8} y={-8} width={16} height={16}>
            <Cloud className="h-4 w-4 text-white" strokeWidth={2.5} />
          </foreignObject>
        </g>

        {/* start / finish icons */}
        <foreignObject x={anchors[0].x - 10} y={anchors[0].y - 46} width={20} height={20}>
          <Flag className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
        </foreignObject>
        <foreignObject x={anchors[anchors.length - 1].x - 10} y={anchors[anchors.length - 1].y - 46} width={20} height={20}>
          <Trophy className="h-5 w-5 text-amber-500 dark:text-amber-400" />
        </foreignObject>
      </svg>
    </div>
  )
}
