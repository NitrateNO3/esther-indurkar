import { useEffect, useState } from 'react'
import { CONTACT } from '../data/contact.js'
import portrait from '../assets/images/esther-portrait.webp'
import onStage from '../assets/images/esther-on-stage.webp'
import redBlazer from '../assets/images/esther-red-blazer.webp'
import microphone from '../assets/images/esther-microphone.webp'
import hopePortrait from '../assets/images/esther-project-hope.webp'
import logo from '../assets/images/esther-logo.png'
import './Navbar.css'

// Each menu link previews a different photograph on hover.
const NAV_LINKS = [
  { label: 'Home', href: '#top', image: portrait },
  { label: 'Meet Esther', href: '#about', image: onStage },
  { label: 'Services', href: '#services', image: microphone },
  { label: 'Project HOPE', href: '#project-hope', image: hopePortrait },
  { label: 'Contact', href: '#contact', image: redBlazer },
]

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [previewIndex, setPreviewIndex] = useState(0)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // While the menu is open: lock page scroll and close on Escape.
  useEffect(() => {
    if (!isMenuOpen) return

    document.documentElement.style.overflow = 'hidden'
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setIsMenuOpen(false)
    }
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.documentElement.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isMenuOpen])

  const closeMenu = () => setIsMenuOpen(false)

  const headerClassName = ['navbar', isScrolled && 'navbar--scrolled', isMenuOpen && 'navbar--open']
    .filter(Boolean)
    .join(' ')

  return (
    <header className={headerClassName}>
      <div className="navbar__bar container">
        <a href="#top" className="navbar__brand" onClick={closeMenu}>
          <img src={logo} alt="Esther Indurkar" width="451" height="104" />
        </a>

        {/* Quick links on wide screens; the full menu has them all */}
        <ul className="navbar__links">
          {NAV_LINKS.slice(1, 5).map((link) => (
            <li key={link.href}>
              <a href={link.href} className="navbar__link">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="navbar__right">
          <a href="#contact" className="navbar__connect" onClick={closeMenu}>
            Let&rsquo;s Connect
          </a>
          <button
            type="button"
            className="navbar__toggle"
            aria-expanded={isMenuOpen}
            aria-controls="site-menu"
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            <span className="navbar__toggle-label">{isMenuOpen ? 'Close' : 'Menu'}</span>
            <span className="navbar__toggle-lines" aria-hidden="true">
              <i />
              <i />
            </span>
          </button>
        </div>
      </div>

      {/* ---------- Full-screen menu ---------- */}
      <nav id="site-menu" className="menu" aria-label="Main" inert={!isMenuOpen}>
        <div className="menu__inner container">
          <ol className="menu__links">
            {NAV_LINKS.map((link, index) => (
              <li key={link.href} style={{ '--i': index }}>
                <a
                  href={link.href}
                  className="menu__link"
                  onClick={closeMenu}
                  onMouseEnter={() => setPreviewIndex(index)}
                  onFocus={() => setPreviewIndex(index)}
                >
                  <span className="caption menu__index">0{index + 1}</span>
                  {link.label}
                </a>
              </li>
            ))}
          </ol>

          <div className="menu__preview" aria-hidden="true">
            {NAV_LINKS.map((link, index) => (
              <img
                key={link.href}
                src={link.image}
                alt=""
                className={index === previewIndex ? 'is-active' : ''}
                loading="lazy"
              />
            ))}
          </div>

          <div className="menu__footer caption">
            <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
            <a href={CONTACT.phoneHref}>{CONTACT.phoneDisplay}</a>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
