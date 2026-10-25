import { CONTACT } from '../data/contact.js'
import hopePortrait from '../assets/images/esther-project-hope.webp'
import './ProjectHope.css'

const COLLABORATE_HREF = `mailto:${CONTACT.email}?subject=${encodeURIComponent('Collaborating with Project HOPE')}`

// Phrases from her Project HOPE text, floating as little speech bubbles.
const BUBBLES = ['Find their voices', 'Self-expression', 'Communication skills', 'Upliftment of our society']

function ProjectHope() {
  return (
    <section id="project-hope" className="hope" aria-labelledby="hope-title">
      <div className="hope__inner container">
        {/* ---------- Sun-framed portrait with floating bubbles ---------- */}
        <div className="hope__visual" aria-hidden="true">
          <span className="hope__halo" />
          <div className="hope__sun">
            <img src={hopePortrait} alt="" loading="lazy" />
          </div>
          {BUBBLES.map((bubble, index) => (
            <span key={bubble} className={`hope__bubble hope__bubble--${index + 1}`}>
              {bubble}
            </span>
          ))}
        </div>

        {/* ---------- Text ---------- */}
        <div className="hope__text">
          <p className="caption hope__label" data-reveal>
            (07) — At the heart of my endeavours
          </p>
          <h2 id="hope-title" className="hope__title" data-reveal>
            Project <em>HOPE</em>
          </h2>
          <p className="hope__lead" data-reveal>
            An initiative committed to empowering the underprivileged by honing
            their communication abilities.
          </p>
          <p className="hope__body" data-reveal>
            Project HOPE is more than philanthropy; it&rsquo;s a dedication to
            nurturing communication skills among the underprivileged, enabling
            individuals to articulate their thoughts confidently and assert their
            presence in society.
          </p>
          <p className="hope__belief" data-reveal>
            &ldquo;I strongly believe in the transformative power of
            communication.&rdquo;
          </p>
          <a href={COLLABORATE_HREF} className="hope__cta" data-reveal>
            Collaborate with Project HOPE
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default ProjectHope
