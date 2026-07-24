/**
 * Ambient background — three oversized colour fields drifting on very long loops.
 *
 * Deliberately uses radial-gradient falloff instead of `filter: blur()`. A blurred
 * element this large is expensive to repaint; a gradient that fades to transparent
 * costs nothing and reads the same. Only `transform` is animated, so the whole
 * thing stays on the compositor and never triggers layout or paint.
 */
/**
 * `ellipse closest-side` is load-bearing. With `circle`, the gradient radius is
 * measured to the box's farthest CORNER, so on a non-square box the colour is
 * still visible when it reaches the nearer edges — and gets clipped there as a
 * hard straight line. `closest-side` pins the falloff to the nearest edge on each
 * axis, so every boundary is already fully transparent.
 *
 * The intermediate stops are anti-banding. A two-stop fade this dark only spans a
 * handful of 8-bit values, which renders as visible contour rings; extra stops
 * approximate a smoother curve and break them up.
 */
function field(r: number, g: number, b: number, peak: number) {
  const c = (a: number) => `rgba(${r},${g},${b},${a})`
  return [
    'radial-gradient(ellipse closest-side,',
    `${c(peak)} 0%,`,
    `${c(peak * 0.62)} 30%,`,
    `${c(peak * 0.28)} 55%,`,
    `${c(peak * 0.08)} 78%,`,
    'transparent 100%)',
  ].join(' ')
}

export default function Background() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div
        className="animate-drift-slow absolute left-[-25%] top-[-30%] h-[95vh] w-[95vw] opacity-[var(--aurora-opacity)]"
        style={{ background: field(56, 130, 246, 0.08) }}
      />
      <div
        className="animate-drift-mid absolute right-[-30%] top-[15%] h-[90vh] w-[90vw] opacity-[var(--aurora-opacity)]"
        style={{ background: field(139, 92, 246, 0.065) }}
      />
      <div
        className="animate-drift-fast absolute bottom-[-35%] left-[10%] h-[85vh] w-[85vw] opacity-[var(--aurora-opacity)]"
        style={{ background: field(20, 130, 200, 0.05) }}
      />
    </div>
  )
}
