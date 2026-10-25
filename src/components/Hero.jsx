import { CONTACT, LINKS } from '../data/contact.js'
import portrait from '../assets/images/esther-portrait.webp'
import './Hero.css'

const MIND_LETTERS = ['M', 'I', 'N', 'D']

// Three depth layers: "MIND" behind Esther, her photo, "& Emotions" in
// front. They shift by different amounts as the mouse moves, which
// gives the flat cut-out photo real depth.
// `isReady` (from App) turns true when the intro curtains open.
function Hero({ isReady }) {
  // Pointer position as -1…1 from the centre, stored in CSS variables.
  const handlePointerMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect()
    const x = ((event.clientX - rect.left) / rect.width) * 2 - 1
    const y = ((event.clientY - rect.top) / rect.height) * 2 - 1
    event.currentTarget.style.setProperty('--mx', x.toFixed(3))
    event.currentTarget.style.setProperty('--my', y.toFixed(3))
  }

  return (
    <section
      id="top"
      className={`hero ${isReady ? 'is-ready' : ''}`}
      onPointerMove={handlePointerMove}
    >
      <h1 className="visually-hidden">Esther Indurkar: Harness the Power of Mind &amp; Emotions</h1>

      <div className="hero__stage" aria-hidden="true">
        <div className="hero__layer hero__layer--back">
          <p className="hero__kicker">Harness the power of</p>
          <p className="hero__mind">
            {MIND_LETTERS.map((letter, index) => (
              <span key={letter} style={{ '--i': index }}>
                {letter}
              </span>
            ))}
          </p>
        </div>

        <div className="hero__layer hero__layer--photo">
          <img
            className="hero__photo"
            src={portrait}
            alt=""
            width="1080"
            height="1920"
            fetchPriority="high"
          />
        </div>

        <div className="hero__layer hero__layer--front">
          <p className="hero__emotions">&amp; Emotions</p>
        </div>
      </div>

      {/* ---------- Corner details ---------- */}
      <div className="hero__corner hero__corner--tl">
        <p className="hero__roles">
          Leadership Strategist
          <br />
          Global Keynote Speaker
        </p>
      </div>

      <a
        className="hero__corner hero__corner--tr"
        href={LINKS.tedxTalk}
        target="_blank"
        rel="noreferrer"
      >
        <span className="hero__play" aria-hidden="true">▶</span>
        <span className="hero__meta">TEDx Speaker</span>
        <span className="hero__watch">Watch the talk</span>
      </a>

      <div className="hero__corner hero__corner--bl">
        <p className="hero__lead">
          Esther helps organisations create high performing teams by breaking
          the barriers of the mind and unleashing their full potential.
        </p>
        <a href={`mailto:${CONTACT.email}`} className="hero__cta">
          Request availability
          <span aria-hidden="true">→</span>
        </a>
      </div>

      <a href="#about" className="hero__corner hero__corner--br hero__meta">
        Scroll
        <span className="hero__scroll-line" aria-hidden="true" />
      </a>
    </section>
  )
}

export default Hero
