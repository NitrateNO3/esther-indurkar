import { LINKS } from '../data/contact.js'
import microphone from '../assets/images/esther-microphone.webp'
import './Talks.css'

// The Keynote Speeches page pairs each area with a signature talk.
const TALKS = [
  { numeral: 'I', area: 'Leadership Excellence', title: 'Rebooting Brilliance', subtitle: 'From limitations to being limitless' },
  { numeral: 'II', area: 'Employee Engagement', title: 'Shifting Gears', subtitle: 'From Chasing to Attracting' },
  { numeral: 'III', area: 'Personal Excellence', title: 'Stay Rooted, Keep Moving Forward', subtitle: 'My Journey of Speaking with Impact' },
  { numeral: 'IV', area: 'Emotional Mastery', title: 'From Chaos to Clarity', subtitle: 'Mindset Blueprint for Peak Performance' },
  { numeral: 'V', area: 'Purposeful Life', title: 'Breaking the Mould', subtitle: 'Embracing a renewed mindset for boundless success' },
]

// A one-screen "playbill": a TEDx feature card plus five signature talks.
function Talks() {
  return (
    <section id="speaking" className="talks" aria-labelledby="talks-title">
      <div className="talks__inner container">
        <header className="talks__header" data-reveal>
          <div>
            <p className="caption">(05) — Keynote speeches</p>
            <h2 id="talks-title" className="talks__title">
              Story driven <em>keynotes.</em>
            </h2>
          </div>
          <p className="talks__lede">
            She is recommended by many organizations to deliver keynotes in her
            unique style with relevant anecdotes, metaphors and humour.
          </p>
        </header>

        <ul className="talks__grid">
          {/* Feature card */}
          <li className="talk talk--feature" data-reveal>
            <img src={microphone} alt="Esther Indurkar speaking into a microphone" loading="lazy" />
            <div className="talk__feature-text">
              <p className="caption">TEDx Speaker</p>
              <a href={LINKS.tedxTalk} className="talk__play" target="_blank" rel="noreferrer">
                <span className="talk__play-icon" aria-hidden="true">▶</span>
                Watch the TEDx Talk
              </a>
            </div>
          </li>

          {TALKS.map((talk, index) => (
            <li key={talk.title} className="talk" data-reveal style={{ '--i': index + 1 }}>
              <a href={LINKS.keynoteSpeeches} className="talk__link" target="_blank" rel="noreferrer">
                <div className="talk__top">
                  <span className="talk__numeral">{talk.numeral}</span>
                  <span className="caption talk__area">{talk.area}</span>
                </div>
                <div className="talk__body">
                  <h3 className="talk__title">{talk.title}</h3>
                  <p className="talk__subtitle">{talk.subtitle}</p>
                </div>
                <span className="caption talk__more" aria-hidden="true">
                  Signature talk ↗
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Talks
