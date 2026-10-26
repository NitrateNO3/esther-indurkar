import { CONTACT, LINKS, SOCIAL_LINKS } from '../data/contact.js'
import './Footer.css'

const LINKS_LIST = [
  { label: 'Meet Esther', href: LINKS.meetEsther },
  { label: 'Corporate Trainings', href: LINKS.corporateTrainings },
  { label: 'Keynote Speeches', href: LINKS.keynoteSpeeches },
  { label: 'Assessment', href: LINKS.assessment },
  { label: 'Coaching & Consulting', href: LINKS.coachingConsulting },
  { label: 'Project HOPE', href: LINKS.projectHope },
  { label: 'Speaker Profile', href: LINKS.speakerProfile },
  { label: 'Trainer Profile', href: LINKS.trainerProfile },
]

// Logos for the social links, keyed by their label in SOCIAL_LINKS.
// Simple 24 × 24 shapes that take the link's colour.
const SOCIAL_ICONS = {
  LinkedIn: (
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.125 2.062 2.062 0 0 1 0 4.125zM7.119 20.452H3.555V9h3.564v11.452z" />
  ),
  Instagram: (
    <>
      <rect x="2.5" y="2.5" width="19" height="19" rx="5.5" fill="none" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="12" r="4.4" fill="none" stroke="currentColor" strokeWidth="2" />
      <circle cx="17.4" cy="6.6" r="1.3" />
    </>
  ),
  YouTube: (
    <path
      fillRule="evenodd"
      d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8zM9.6 15.6V8.4l6.2 3.6-6.2 3.6z"
    />
  ),
  Facebook: (
    <path d="M14 8.5V6.6c0-.9.6-1.1 1-1.1h2.6V1.6H14c-4 0-4.9 3-4.9 4.9v2H6.5v4h2.6v9.9H14v-9.9h3.4l.5-4H14z" />
  ),
}

// Calculated once when the page loads, not on every render.
const CURRENT_YEAR = new Date().getFullYear()

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner container">
        <div className="footer__brand">
          <p className="footer__name">
            Esther <em>Indurkar</em>
          </p>
          <p className="footer__tagline">Mindset Transformation Expert</p>
          <p className="footer__contact">
            <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
            <a href={CONTACT.phoneHref}>{CONTACT.phoneDisplay}</a>
          </p>
        </div>

        <ul className="footer__links">
          {LINKS_LIST.map((link) => (
            <li key={link.label}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>

        <ul className="footer__social">
          {SOCIAL_LINKS.map((social) => (
            <li key={social.label}>
              <a
                href={social.href}
                className="footer__social-link"
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
                title={social.label}
              >
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  {SOCIAL_ICONS[social.label]}
                </svg>
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="footer__bottom container">
        <p>&copy; {CURRENT_YEAR} Esther Indurkar</p>
        <a href="#top">Back to top ↑</a>
      </div>
    </footer>
  )
}

export default Footer
