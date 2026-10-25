import { CONTACT, LINKS, PILLARS, SOCIAL_LINKS } from '../data/contact.js'
import './Footer.css'

const EXPLORE_LINKS = [
  { label: 'Meet Esther', href: LINKS.meetEsther },
  { label: 'Corporate Trainings', href: LINKS.corporateTrainings },
  { label: 'Keynote Speeches', href: LINKS.keynoteSpeeches },
  { label: 'Assessment', href: LINKS.assessment },
  { label: 'Coaching & Consulting', href: LINKS.coachingConsulting },
  { label: 'Project HOPE', href: LINKS.projectHope },
]

const DOWNLOADS = [
  { label: 'Speaker Profile', href: LINKS.speakerProfile },
  { label: 'Trainer Profile', href: LINKS.trainerProfile },
]

// Calculated once when the page loads, not on every render.
const CURRENT_YEAR = new Date().getFullYear()

// Champagne closing page: name and tagline, her pillars, link columns,
// and a slim bottom bar.
function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div>
            <p className="footer__name">
              Esther <em>Indurkar</em>
            </p>
            <p className="footer__tagline">Harness the Power of Mind &amp; Emotions</p>
          </div>

          <ol className="footer__pillars">
            {PILLARS.map((pillar) => (
              <li key={pillar}>{pillar}</li>
            ))}
          </ol>
        </div>

        <div className="footer__grid">
          <nav aria-label="Explore">
            <h2 className="footer__heading">Explore</h2>
            <ul>
              {EXPLORE_LINKS.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="footer__link">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="footer__heading">Contact</h2>
            <ul>
              <li>
                <a href={`mailto:${CONTACT.email}`} className="footer__link">
                  {CONTACT.email}
                </a>
              </li>
              <li>
                <a href={CONTACT.phoneHref} className="footer__link">
                  {CONTACT.phoneDisplay}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="footer__heading">Follow</h2>
            <ul>
              {SOCIAL_LINKS.map((social) => (
                <li key={social.label}>
                  <a href={social.href} className="footer__link" target="_blank" rel="noreferrer">
                    {social.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="footer__heading">Media kit</h2>
            <ul>
              {DOWNLOADS.map((download) => (
                <li key={download.label}>
                  <a href={download.href} className="footer__link" target="_blank" rel="noreferrer">
                    {download.label} ↗
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p>&copy; {CURRENT_YEAR} Esther Indurkar · Mindset Transformation Expert</p>
          <a href="#top" className="footer__top-link">
            Back to top <span aria-hidden="true">↑</span>
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
