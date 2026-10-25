import portrait from '../assets/images/esther-portrait.webp'
import './Testimonials.css'

// All nine testimonials from the homepage, quoted exactly.
// The first one is featured in the large crimson block.
const TESTIMONIALS = [
  { quote: 'She is able to establish a deep connection with the audience.', name: 'Shuming', role: 'Director' },
  { quote: 'Ms. Esther’s sessions ignited a paradigm shift in my thinking. Truly transformative!', name: 'Chhabbi', role: 'Tech Lead' },
  { quote: 'Empowering and insightful – Esther’s wisdom is a treasure trove for success.', name: 'Iris', role: 'Head National Sales' },
  { quote: 'Esther’s sessions are a masterclass in unlocking your full potential.', name: 'Mahesh', role: 'Admin Incharge' },
  { quote: 'Inspirational, impactful, and unforgettable – Ms. Esther’s training is a game-changer.', name: 'Prabhakar', role: 'Business head' },
  { quote: 'Esther’s keynote is a catalyst for personal and professional growth.', name: 'John', role: 'Sales Manager' },
  { quote: 'Grateful for Esther’s wisdom, which has positively impacted my career and life.', name: 'Dristi', role: 'Head HR' },
  { quote: 'Ms. Esther’s keynote left me awestruck and ready to conquer new heights.', name: 'Mike', role: 'Head HR' },
  { quote: 'Team Esther’s sessions are a roadmap to success – a must-experience for anyone.', name: 'Kelly', role: 'Entrepreneur' },
]

const [FEATURED, ...OTHERS] = TESTIMONIALS

// A one-screen "wall of praise": title, featured quote, portrait and
// eight smaller quotes, placed on a grid (see grid-template-areas in CSS).
function Testimonials() {
  return (
    <section className="praise" aria-labelledby="praise-title">
      <div className="praise__grid container">
        <header className="praise__title-cell" data-reveal>
          <p className="caption">(06) — Clients talking</p>
          <h2 id="praise-title" className="praise__title">
            In their <em>words.</em>
          </h2>
        </header>

        <figure className="praise__featured" data-reveal>
          <blockquote>
            <p>&ldquo;{FEATURED.quote}&rdquo;</p>
          </blockquote>
          <figcaption className="caption">
            {FEATURED.name} — {FEATURED.role}
          </figcaption>
        </figure>

        <div className="praise__portrait" aria-hidden="true">
          <img src={portrait} alt="" loading="lazy" />
        </div>

        {/* On desktop this wrapper "disappears" (display: contents) so each
            quote sits in its own grid cell; on phones it becomes a swipe strip. */}
        <div className="praise__others">
          {OTHERS.map((item, index) => (
            <figure
              key={item.name}
              className={`praise__quote praise__quote--${index + 1}`}
              data-reveal
              style={{ '--i': index }}
            >
              <span className="praise__number">{String(index + 2).padStart(2, '0')}</span>
              <blockquote>
                <p>&ldquo;{item.quote}&rdquo;</p>
              </blockquote>
              <figcaption className="caption">
                <span>{item.name}</span> — {item.role}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
