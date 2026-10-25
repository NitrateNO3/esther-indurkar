import { CONTACT, LINKS } from '../data/contact.js'
import redBlazer from '../assets/images/esther-red-blazer.webp'
import './Contact.css'

const BADGE_TEXT = 'Request availability · Request availability · '

function Contact() {
  return (
    <section id="contact" className="contact" aria-labelledby="contact-title">
      <img className="contact__photo" src={redBlazer} alt="" loading="lazy" aria-hidden="true" />

      <div className="contact__inner container">
        <p className="caption" data-reveal>(08) — Let&rsquo;s connect</p>

        <h2 id="contact-title" className="contact__title" data-reveal>
          Take charge of <em>your mindset.</em>
        </h2>

        <div className="contact__row" data-reveal>
          <div className="contact__details">
            <a href={`mailto:${CONTACT.email}`} className="contact__email">
              {CONTACT.email}
            </a>
            <a href={CONTACT.phoneHref} className="caption contact__phone">
              {CONTACT.phoneDisplay}
            </a>
            <div className="contact__downloads">
              <a href={LINKS.speakerProfile} className="line-link" target="_blank" rel="noreferrer">
                Speaker profile
              </a>
              <a href={LINKS.trainerProfile} className="line-link" target="_blank" rel="noreferrer">
                Trainer profile
              </a>
            </div>
          </div>

          {/* Circular badge: text runs around a ring and slowly rotates */}
          <a href={`mailto:${CONTACT.email}`} className="contact__badge" aria-label="Request availability by email">
            <svg viewBox="0 0 200 200" aria-hidden="true">
              <defs>
                <path id="badge-circle" d="M100,100 m-78,0 a78,78 0 1,1 156,0 a78,78 0 1,1 -156,0" />
              </defs>
              <text>
                <textPath href="#badge-circle">{BADGE_TEXT}</textPath>
              </text>
            </svg>
            <span className="contact__badge-arrow" aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact
