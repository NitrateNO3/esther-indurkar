import './Testimonials.css'

// All nine testimonials from the homepage, quoted exactly.
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

// Three columns of three quotes each
const COLUMNS = [TESTIMONIALS.slice(0, 3), TESTIMONIALS.slice(3, 6), TESTIMONIALS.slice(6, 9)]

// One endlessly scrolling column. Cards are rendered twice and the track
// slides up by exactly half its height, so the loop has no visible seam.
function QuoteColumn({ items, reverse }) {
  return (
    <div className={`voices-col ${reverse ? 'voices-col--reverse' : ''}`}>
      <ul className="voices-col__track">
        {[...items, ...items].map((item, index) => (
          <li key={index} className="voice-card" aria-hidden={index >= items.length}>
            <figure>
              <blockquote>
                <p>&ldquo;{item.quote}&rdquo;</p>
              </blockquote>
              <figcaption>
                <span className="voice-card__initial" aria-hidden="true">
                  {item.name[0]}
                </span>
                <span>
                  <strong>{item.name}</strong>
                  {item.role}
                </span>
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </div>
  )
}

function Testimonials() {
  return (
    <section className="voices section" aria-labelledby="voices-title">
      <div className="voices__inner container">
        <header className="voices__intro" data-reveal>
          <h2 id="voices-title" className="section-title">
            Clients <em>talking</em>
          </h2>
          <p className="voices__note">
            Directors, HR heads, sales leaders, tech leads and entrepreneurs on
            Esther&rsquo;s sessions and keynotes.
          </p>
        </header>

        <div className="voices__columns" data-reveal>
          {COLUMNS.map((items, index) => (
            <QuoteColumn key={index} items={items} reverse={index === 1} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
