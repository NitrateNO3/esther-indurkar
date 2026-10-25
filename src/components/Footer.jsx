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
              <a href={social.href} target="_blank" rel="noreferrer">
                {social.label}
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
