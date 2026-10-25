import { useEffect, useState } from 'react'
import './Loader.css'

const COUNT_DURATION = 1600

// Intro curtain: her name, a counter to 100, then two crimson panels
// part like stage curtains.
//   onReveal – called as the curtains start opening (starts the hero)
//   onFinish – called once they've fully gone (App then removes this)
function Loader({ onReveal, onFinish }) {
  const [count, setCount] = useState(0)
  const [isOpening, setIsOpening] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
    document.documentElement.style.overflow = 'hidden'

    const start = performance.now()
    let frame = requestAnimationFrame(function tick(now) {
      const t = Math.min((now - start) / COUNT_DURATION, 1)
      setCount(Math.round((1 - Math.pow(1 - t, 3)) * 100))

      if (t < 1) {
        frame = requestAnimationFrame(tick)
      } else {
        setIsOpening(true)
        onReveal()
      }
    })

    return () => {
      cancelAnimationFrame(frame)
      document.documentElement.style.overflow = ''
    }
  }, [onReveal])

  // Fires when the right-hand curtain finishes sliding away.
  const handleTransitionEnd = (event) => {
    if (!event.target.classList.contains('loader__curtain--right')) return
    document.documentElement.style.overflow = ''
    onFinish()
  }

  return (
    <div
      className={`loader ${isOpening ? 'loader--opening' : ''}`}
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
      </div>
    </div>
  )
}

export default Loader
