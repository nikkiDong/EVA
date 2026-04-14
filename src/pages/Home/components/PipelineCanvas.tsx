import { useEffect, useRef } from 'react'

/* ─────────────────────────────────────────────────────────
   Demo-1 style connected-particle network
   — adapted from Codrops "Animated Background Headers"
   — recolored to EVA gold palette, no external deps
───────────────────────────────────────────────────────── */

interface Pt {
  x: number; y: number
  ox: number; oy: number
  tx: number; ty: number
  spd: number
  closest: Pt[]
  active: number
  cActive: number
  cr: number
}

function dist2(a: { x: number; y: number }, b: { x: number; y: number }) {
  return (a.x - b.x) ** 2 + (a.y - b.y) ** 2
}

export default function PipelineCanvas() {
  const wrapRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const wrap = wrapRef.current
    if (!wrap) return

    const canvas = document.createElement('canvas')
    canvas.style.cssText =
      'position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:0;'
    wrap.appendChild(canvas)
    const ctx = canvas.getContext('2d')!

    let width = 0, height = 0
    let raf = 0
    const mouse = { x: -9999, y: -9999 }
    let pts: Pt[] = []

    function newTarget(p: Pt) {
      p.tx = p.ox + (Math.random() - 0.5) * 110
      p.ty = p.oy + (Math.random() - 0.5) * 110
    }

    function build() {
      pts = []
      const cols = 22, rows = 22
      const cw = width / cols, ch = height / rows
      for (let r = 0; r <= rows; r++) {
        for (let c = 0; c <= cols; c++) {
          const ox = c * cw + Math.random() * cw
          const oy = r * ch + Math.random() * ch
          const p: Pt = {
            x: ox, y: oy, ox, oy,
            tx: ox, ty: oy,
            spd: 0.005 + Math.random() * 0.008,
            closest: [],
            active: 0, cActive: 0,
            cr: 1.5 + Math.random() * 2,
          }
          pts.push(p)
        }
      }
      for (const p of pts) {
        p.closest = pts
          .filter(q => q !== p)
          .sort((a, b) => dist2(p, a) - dist2(p, b))
          .slice(0, 5)
      }
      for (const p of pts) newTarget(p)
    }

    function resize() {
      width  = wrap!.offsetWidth  || window.innerWidth
      height = wrap!.offsetHeight || window.innerHeight
      canvas.width  = width
      canvas.height = height
      build()
    }

    function draw() {
      ctx.clearRect(0, 0, width, height)

      for (const p of pts) {
        // Float toward target
        p.x += (p.tx - p.x) * p.spd
        p.y += (p.ty - p.y) * p.spd
        if (Math.abs(p.x - p.tx) < 0.8 && Math.abs(p.y - p.ty) < 0.8) newTarget(p)

        // Activation by mouse distance
        const d = dist2(mouse, p)
        if      (d < 4000)  { p.active = 0.38; p.cActive = 0.70 }
        else if (d < 20000) { p.active = 0.16; p.cActive = 0.38 }
        else if (d < 50000) { p.active = 0.05; p.cActive = 0.14 }
        else                { p.active = 0;    p.cActive = 0 }

        // Lines
        if (p.active > 0) {
          ctx.lineWidth = 0.75
          for (const q of p.closest) {
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(q.x, q.y)
            ctx.strokeStyle = `rgba(65,105,225,${p.active})`
            ctx.stroke()
          }
        }

        // Dot
        if (p.cActive > 0) {
          ctx.beginPath()
          ctx.arc(p.x, p.y, p.cr, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(65,105,225,${p.cActive})`
          ctx.fill()
        }
      }

      raf = requestAnimationFrame(draw)
    }

    function onMove(e: MouseEvent) {
      mouse.x = e.clientX
      mouse.y = e.clientY
    }

    resize()
    draw()
    window.addEventListener('mousemove', onMove)
    window.addEventListener('resize', resize)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('resize', resize)
      if (wrap.contains(canvas)) wrap.removeChild(canvas)
    }
  }, [])

  return (
    <div
      ref={wrapRef}
      style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}
    />
  )
}
