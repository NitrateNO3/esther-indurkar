import { useRef, useState } from 'react'
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

function Testimonials() {
  const trackRef = useRef(null)
  const [canGoBack, setCanGoBack] = useState(false)
  const [canGoForward, setCanGoForward] = useState(true)

  // Grey out an arrow once the row is scrolled to that end
  function updateArrows() {
    const track = trackRef.current
    setCanGoBack(track.scrollLeft > 4)
    setCanGoForward(track.scrollLeft + track.clientWidth < track.scrollWidth - 4)
  }

  // Move by one card (card width + gap)
  function scrollByCard(direction) {
    const track = trackRef.current
    const card = track.firstElementChild
    const gap = parseFloat(getComputedStyle(track).columnGap) || 0
    track.scrollBy({ left: direction * (card.offsetWidth + gap), behavior: 'smooth' })
  }

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
          <div className="voices__arrows">
            <button
              type="button"
              className="voices__arrow"
              onClick={() => scrollByCard(-1)}
              disabled={!canGoBack}
              aria-label="Previous testimonial"
            >
              ←
            </button>
            <button
              type="button"
              className="voices__arrow"
              onClick={() => scrollByCard(1)}
              disabled={!canGoForward}
              aria-label="Next testimonial"
            >
              →
            </button>
          </div>
        </header>

        {/* Swipe, drag the scrollbar or use the arrows to move through the quotes */}
        <div
          className={`voices__scroller ${canGoForward ? 'voices__scroller--more' : ''}`}
          data-reveal
        >
          <p className="voices__hint" aria-hidden="true">
            Swipe to read more <span className="voices__hint-arrow">→</span>
          </p>
          <ul className="voices__track" ref={trackRef} onScroll={updateArrows}>
            {TESTIMONIALS.map((item) => (
              <li key={item.name} className="voice-card">
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
      </div>
    </section>
  )
}

export default Testimonials
