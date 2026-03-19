import { useEffect, useRef } from 'react'

/* ─────────────────────────────────────────────────────────
   Global custom cursor
   • Inner dot  — snaps to mouse instantly
   • Outer ring — lerps behind at 0.10 for a fluid lag effect
   • Hover state — both elements smoothly grow via lerped radii
   • Touch/coarse-pointer devices — falls back to default cursor
───────────────────────────────────────────────────────── */

export default function CustomCursor() {
  const dotRef  = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Skip on touch-only / coarse-pointer devices
    if (window.matchMedia('(hover: none), (pointer: coarse)').matches) return

    const dot  = dotRef.current!
    const ring = ringRef.current!

    // Make them visible
    dot.style.display  = 'block'
    ring.style.display = 'block'
    document.body.classList.add('custom-cursor')

    let mx = -200, my = -200    // mouse position
    let rx = -200, ry = -200    // ring position (lerped)
    let dr = 4,    rr = 20      // dot/ring radii (lerped on hover)
    let hovering = false
    let raf = 0

    function onMove(e: MouseEvent) {
      mx = e.clientX
      my = e.clientY
    }

    function onOver(e: MouseEvent) {
      const t = e.target as HTMLElement
      if (t.closest('a, button, [role="button"], input, textarea, select, label, [tabindex]')) {
        hovering = true
      }
    }

    function onOut(e: MouseEvent) {
      const t = e.target as HTMLElement
      if (t.closest('a, button, [role="button"], input, textarea, select, label, [tabindex]')) {
        hovering = false
      }
    }

    function loop() {
      // Lerp ring toward mouse
      rx += (mx - rx) * 0.10
      ry += (my - ry) * 0.10

      // Lerp radii
      const tDr = hovering ? 6  : 4
      const tRr = hovering ? 28 : 20
      dr += (tDr - dr) * 0.15
      rr += (tRr - rr) * 0.15

      // Dot
      dot.style.transform = `translate(${mx - dr}px, ${my - dr}px)`
      dot.style.width     = `${dr * 2}px`
      dot.style.height    = `${dr * 2}px`

      // Ring
      ring.style.transform    = `translate(${rx - rr}px, ${ry - rr}px)`
      ring.style.width        = `${rr * 2}px`
      ring.style.height       = `${rr * 2}px`
      ring.style.borderColor  = hovering
        ? 'rgba(184,147,90,0.9)'
        : 'rgba(184,147,90,0.55)'
      ring.style.background   = hovering
        ? 'rgba(184,147,90,0.07)'
        : 'transparent'

      raf = requestAnimationFrame(loop)
    }

    window.addEventListener('mousemove', onMove)
    document.addEventListener('mouseover', onOver)
    document.addEventListener('mouseout',  onOut)
    loop()

    return () => {
      cancelAnimationFrame(raf)
      document.body.classList.remove('custom-cursor')
      window.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseover', onOver)
      document.removeEventListener('mouseout',  onOut)
    }
  }, [])

  return (
    <>
      {/* Inner dot — immediate */}
      <div
        ref={dotRef}
        style={{
          display: 'none',
          position: 'fixed',
          top: 0, left: 0,
          width: 8, height: 8,
          background: '#b8935a',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 99999,
          willChange: 'transform, width, height',
        }}
      />
      {/* Outer ring — lagging */}
      <div
        ref={ringRef}
        style={{
          display: 'none',
          position: 'fixed',
          top: 0, left: 0,
          width: 40, height: 40,
          border: '1.5px solid rgba(184,147,90,0.55)',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 99998,
          willChange: 'transform, width, height',
          transition: 'background 0.2s, border-color 0.2s',
        }}
      />
    </>
  )
}
