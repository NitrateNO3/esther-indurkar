import { useEffect, useRef } from 'react'
import './Impact.css'

// Figures from the "Meet Esther" bio on estherindurkar.com.
const STATS = [
  { value: 5000, suffix: '+', label: 'Individuals guided' },
  { value: 1000, suffix: '+', label: 'Leaders' },
  { value: 20, suffix: '+', label: 'Brands' },
  { value: 6, suffix: '', label: 'Verticals' },
]

const CREDENTIALS = [
  'TEDx Speaker',
  'TEDEd Mentor',
  'Award Winning Mentor',
  'Asia Book of World Records Holder',
  'Featured in Global Publications',
]

// Counts from 0 to `value` the first time it scrolls into view.
// It writes straight to the DOM, so React doesn't re-render every frame.
// The real number is in the HTML from the start (correct without JS).
function CountUp({ value }) {
  const ref = useRef(null)

  useEffect(() => {
    const element = ref.current
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const format = (n) => n.toLocaleString('en-IN')
    element.textContent = format(0)
    let frame = 0

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        observer.disconnect()
        const start = performance.now()
        frame = requestAnimationFrame(function tick(now) {
          const t = Math.min((now - start) / 2200, 1)
          element.textContent = format(Math.round((1 - Math.pow(1 - t, 4)) * value))
          if (t < 1) frame = requestAnimationFrame(tick)
        })
      },
      { threshold: 0.5 },
    )

    observer.observe(element)
    return () => {
      observer.disconnect()
      cancelAnimationFrame(frame)
    }
  }, [value])

  return <span ref={ref}>{value.toLocaleString('en-IN')}</span>
}

function Impact() {
  return (
    <section className="impact" aria-labelledby="impact-title">
      <span className="impact__ring" aria-hidden="true" />

      <div className="impact__inner container">
        <header className="impact__header" data-reveal>
          <p className="caption">(04) — Impact</p>
          <h2 id="impact-title" className="impact__title">
            Close to <em>2 decades</em> of corporate experience.
          </h2>
        </header>

        <dl className="impact__stats">
          {STATS.map((stat, index) => (
            <div key={stat.label} className="impact__stat" data-reveal style={{ '--i': index }}>
              <dt className="impact__label">{stat.label}</dt>
              <dd className="impact__value">
                <CountUp value={stat.value} />
                {stat.suffix && <span className="impact__plus">{stat.suffix}</span>}
              </dd>
            </div>
          ))}
        </dl>

        <ul className="impact__credentials caption" data-reveal>
          {CREDENTIALS.map((credential) => (
            <li key={credential}>{credential}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Impact
