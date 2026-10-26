import { useCallback, useEffect, useRef, useState } from 'react'
import './Loader.css'

const COUNT_DURATION = 1600

// Intro curtain: her name, a counter to 100, then two crimson panels
// part like stage curtains. A click, tap or Esc skips straight to the
// (quicker) opening for visitors in a hurry.
//   onReveal – called as the curtains start opening (starts the hero)
//   onFinish – called once they've fully gone (App then removes this)
function Loader({ onReveal, onFinish }) {
  const [count, setCount] = useState(0)
  const [isOpening, setIsOpening] = useState(false)
  const [isSkipped, setIsSkipped] = useState(false)
  const frameRef = useRef(0)
  const hasOpenedRef = useRef(false)

  // Part the curtains, once only (the counter and a skip could both ask)
  const open = useCallback(() => {
    if (hasOpenedRef.current) return
    hasOpenedRef.current = true
    cancelAnimationFrame(frameRef.current)
    setIsOpening(true)
    onReveal()
  }, [onReveal])

  const skip = useCallback(() => {
    if (hasOpenedRef.current) return
    setIsSkipped(true)
    open()
  }, [open])

  useEffect(() => {
    window.scrollTo(0, 0)
    document.documentElement.style.overflow = 'hidden'

    const start = performance.now()
    frameRef.current = requestAnimationFrame(function tick(now) {
      const t = Math.min((now - start) / COUNT_DURATION, 1)
      setCount(Math.round((1 - Math.pow(1 - t, 3)) * 100))

      if (t < 1) {
        frameRef.current = requestAnimationFrame(tick)
      } else {
        open()
      }
    })

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') skip()
    }
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      cancelAnimationFrame(frameRef.current)
      window.removeEventListener('keydown', handleKeyDown)
      document.documentElement.style.overflow = ''
    }
  }, [open, skip])

  // Fires when the right-hand curtain finishes sliding away.
  const handleTransitionEnd = (event) => {
    if (!event.target.classList.contains('loader__curtain--right')) return
    document.documentElement.style.overflow = ''
    onFinish()
  }

  return (
    <div
      className={`loader ${isOpening ? 'loader--opening' : ''} ${isSkipped ? 'loader--skipped' : ''}`}
      onPointerDown={skip}
      onTransitionEnd={handleTransitionEnd}
      aria-hidden="true"
    >
      <span className="loader__curtain loader__curtain--left" />
      <span className="loader__curtain loader__curtain--right" />

      <div className="loader__content">
        <p className="loader__name">
          Esther <em>Indurkar</em>
        </p>
        <p className="caption loader__count">{String(count).padStart(3, '0')}</p>
        <p className="loader__skip">Click or tap anywhere to skip</p>
      </div>
    </div>
  )
}

export default Loader
