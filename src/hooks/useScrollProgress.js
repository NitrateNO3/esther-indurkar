import { useEffect } from 'react'

const clamp = (value) => Math.min(Math.max(value, 0), 1)

// How far through a scroll range an element is, from 0 to 1:
//   'through' – 0 when its top enters the bottom of the screen,
//               1 when its bottom leaves the top.
//   'pinned'  – for tall sections with a sticky child: 0 when the
//               section's top reaches the top of the screen, 1 at its end.
//   'exit'    – 0 at rest, 1 once the element has scrolled fully away.
//
// The value is written to a CSS variable (--progress) on the element
// rather than React state. Scroll fires dozens of times a second, and
// skipping re-renders keeps the motion smooth; CSS turns it into movement.
export function useScrollProgress(ref, mode = 'through') {
  useEffect(() => {
    const element = ref.current
    if (!element) return

    let frame = 0

    const update = () => {
      frame = 0
      const rect = element.getBoundingClientRect()
      const viewport = window.innerHeight
      let progress

      if (mode === 'pinned') {
        progress = -rect.top / Math.max(rect.height - viewport, 1)
      } else if (mode === 'exit') {
        progress = -rect.top / rect.height
      } else {
        progress = (viewport - rect.top) / (rect.height + viewport)
      }

      element.style.setProperty('--progress', clamp(progress).toFixed(4))
    }

    const requestUpdate = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', requestUpdate, { passive: true })
    window.addEventListener('resize', requestUpdate)

    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', requestUpdate)
      window.removeEventListener('resize', requestUpdate)
    }
  }, [ref, mode])
}
