import { CONTACT } from '../data/contact.js'
import hopePortrait from '../assets/images/esther-project-hope.webp'
import './ProjectHope.css'

const COLLABORATE_HREF = `mailto:${CONTACT.email}?subject=${encodeURIComponent('Collaborating with Project HOPE')}`

// Project HOPE, with Esther's own text from estherindurkar.com, in one
// compact card: photo on the left, text on the right with the last two
// paragraphs side by side so the whole thing fits on one screen.
function ProjectHope() {
  return (
    <section id="project-hope" className="hope section" aria-labelledby="hope-title">
      <div className="container">
        <article className="hope__card" data-reveal>
          <div className="hope__visual">
            <img
              src={hopePortrait}
              alt="Esther Indurkar smiling with her arms folded"
              width="1053"
              height="1400"
              loading="lazy"
            />
            <span className="hope__tag">At the heart of my endeavours</span>
          </div>

          <div className="hope__content">
            <h2 id="hope-title" className="hope__title">
              Project <em>HOPE</em>
            </h2>

            <p className="hope__lead">
              At the heart of my endeavours lies Project HOPE— an initiative
              committed to empowering the underprivileged by honing their
              communication abilities. Through targeted support and the infusion
              of contemporary educational strategies, we&rsquo;re dedicated not
              merely to assist these individuals but to equip them with
              essential tools for effective self-expression.
            </p>

            <div className="hope__columns">
              <p>
                Project HOPE is more than philanthropy; it&rsquo;s a dedication
                to nurturing communication skills among the underprivileged. By
                imparting the latest methodologies and technologies in
                communication, we aim to transform lives, enabling individuals to
                articulate their thoughts confidently and assert their presence
                in society.
              </p>
              <p className="hope__quote">
                Collaborating with us means contributing to the upliftment of
                our society. I strongly believe in the transformative power of
                communication, and together, we can empower the underprivileged
                to find their voices and contribute meaningfully to their
                communities.
              </p>
            </div>

            <a href={COLLABORATE_HREF} className="pill pill--solid hope__cta">
              Collaborate with Project HOPE
            </a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default ProjectHope
