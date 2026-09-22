import { motion } from 'framer-motion'
import { Cloud, TrendingUp, Users, CheckCircle2, BarChart3 } from 'lucide-react'

const stats = [
  { label: 'Open Cases', value: '128', icon: Users, tone: 'from-indigo-500 to-blue-500' },
  { label: 'SLA Met', value: '94%', icon: CheckCircle2, tone: 'from-emerald-500 to-teal-500' },
  { label: 'Automations', value: '12', icon: TrendingUp, tone: 'from-cyan-500 to-sky-500' },
]

const bars = [40, 65, 50, 80, 60, 95, 70]

// A stylised, illustrative CRM dashboard mock — not a real Salesforce screenshot —
// used only to reinforce that Salesforce is this site's flagship focus.
export default function SalesforceDashboardMock() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.15 }}
      className="relative mx-auto w-full max-w-md"
    >
      <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-indigo-400/20 to-cyan-400/20 blur-2xl" />

      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl shadow-slate-900/5 dark:border-white/10 dark:bg-slate-900/80 dark:shadow-black/30">
        {/* window chrome */}
        <div className="flex items-center gap-2 border-b border-slate-200 bg-slate-50 px-4 py-2.5 dark:border-white/10 dark:bg-white/[0.03]">
          <span className="h-2.5 w-2.5 rounded-full bg-rose-400/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
          <span className="ml-2 flex items-center gap-1.5 text-xs font-medium text-slate-500 dark:text-slate-400">
            <Cloud size={12} className="text-indigo-500 dark:text-cyan-400" />
            Service Cloud Console
          </span>
        </div>

        <div className="p-4">
          <div className="grid grid-cols-3 gap-2.5">
            {stats.map(({ label, value, icon: Icon, tone }) => (
              <div
                key={label}
                className="rounded-xl border border-slate-200 bg-slate-50 p-2.5 dark:border-white/10 dark:bg-white/[0.03]"
              >
                <span
                  className={`flex h-6 w-6 items-center justify-center rounded-md bg-gradient-to-br ${tone} text-white`}
                >
                  <Icon size={12} />
                </span>
                <p className="mt-2 font-heading text-sm font-bold text-slate-900 dark:text-white">{value}</p>
                <p className="text-[10px] text-slate-500 dark:text-slate-500">{label}</p>
              </div>
            ))}
          </div>

          <div className="mt-3 rounded-xl border border-slate-200 bg-slate-50 p-3 dark:border-white/10 dark:bg-white/[0.03]">
            <div className="mb-2 flex items-center justify-between">
              <p className="flex items-center gap-1.5 text-[11px] font-semibold text-slate-600 dark:text-slate-400">
                <BarChart3 size={12} /> Weekly Case Volume
              </p>
            </div>
            <div className="flex h-16 items-end gap-1.5">
              {bars.map((h, i) => (
                <motion.span
                  key={i}
                  initial={{ height: 0 }}
                  whileInView={{ height: `${h}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className="flex-1 rounded-t bg-gradient-to-t from-indigo-500 to-cyan-400"
                />
              ))}
            </div>
          </div>

          <div className="mt-3 flex flex-col gap-1.5">
            {['Case #4471 — Escalated', 'Case #4468 — Resolved', 'Case #4462 — In Progress'].map((row) => (
              <div
                key={row}
                className="flex items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-2.5 py-1.5 text-[11px] text-slate-600 dark:border-white/10 dark:bg-white/[0.02] dark:text-slate-400"
              >
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-br from-indigo-500 to-cyan-400" />
                {row}
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}
