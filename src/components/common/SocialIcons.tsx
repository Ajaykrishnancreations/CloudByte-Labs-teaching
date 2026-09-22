// lucide-react's installed version ships generic icons only (brand/logo icons were
// removed upstream), so social links use simple text badges instead of brand marks.
function Badge({ label, size = 16 }: { label: string; size?: number }) {
  return (
    <span
      className="flex items-center justify-center font-bold leading-none"
      style={{ fontSize: size * 0.55 }}
    >
      {label}
    </span>
  )
}

export const LinkedinBadge = (props: { size?: number }) => <Badge label="in" {...props} />
export const InstagramBadge = (props: { size?: number }) => <Badge label="IG" {...props} />
export const YoutubeBadge = (props: { size?: number }) => <Badge label="YT" {...props} />
export const GithubBadge = (props: { size?: number }) => <Badge label="GH" {...props} />
