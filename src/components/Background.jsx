/**
 * Fixed, decorative backdrop: a few soft radial glows that adapt to the
 * active theme. Kept pattern-free on purpose (no grid) for a cleaner surface.
 */
export default function Background() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div
        className="animate-pulse-glow absolute -top-48 left-1/2 h-[42rem] w-[42rem] -translate-x-1/2 rounded-full blur-[130px]"
        style={{ background: 'radial-gradient(circle, var(--glow), transparent 66%)' }}
      />
      <div
        className="absolute right-[-14rem] top-1/3 h-[34rem] w-[34rem] rounded-full blur-[130px]"
        style={{ background: 'radial-gradient(circle, var(--glow-2), transparent 66%)' }}
      />
      <div
        className="absolute bottom-[-12rem] left-[-12rem] h-[32rem] w-[32rem] rounded-full blur-[130px]"
        style={{ background: 'radial-gradient(circle, var(--glow), transparent 66%)' }}
      />
    </div>
  )
}
