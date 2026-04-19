import { useEffect, useRef, useState } from 'react'

export function useInView<T extends Element = HTMLDivElement>(
  options?: IntersectionObserverInit
) {
  const ref = useRef<T>(null)
  const [inView, setInView] = useState(false)

  const threshold = options?.threshold ?? 0.12
  const rootMargin = options?.rootMargin ?? '0px 0px -60px 0px'
  const root = options?.root ?? null

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { threshold, rootMargin, root }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold, rootMargin, root])

  return [ref, inView] as const
}
