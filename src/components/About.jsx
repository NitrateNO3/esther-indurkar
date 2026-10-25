import { CONTACT, LINKS } from '../data/contact.js'
import onStage from '../assets/images/esther-on-stage.webp'
import './About.css'

// Figures from her bio: close to 2 decades of corporate experience,
// over 5000+ Individuals, 1000+ Leaders & over 20+ Brands across 6 Verticals.
const STATS = [
  { value: '2', label: 'Decades of corporate experience' },
  { value: '5000+', label: 'Individuals guided' },
  { value: '1000+', label: 'Leaders' },
  { value: '20+', label: 'Brands' },
  { value: '6', label: 'Verticals' },
]

// "Meet Esther": her bio from estherindurkar.com in two parts:
//   1. two halves side by side: photo panel | heading, lead, numbers, buttons
//   2. a full-width band below with the rest of her bio
function About() {
  return (
    <section id="about" className="about" aria-labelledby="about-title">
      <div className="about__split">
        <figure className="about__figure" data-reveal>
          <div className="about__photo">
            <img
              src={onStage}
              alt="Esther Indurkar on stage, speaking to an audience"
              width="1103"
              height="1400"
              loading="lazy"
            />
          </div>
          <figcaption className="about__caption">
            <span>Esther Indurkar</span>
            Leadership Strategist · Global Keynote Speaker
          </figcaption>
        </figure>

        <div className="about__text" data-reveal>
          <h2 id="about-title" className="section-title">
            Meet <em>Esther</em>
          </h2>
          <p className="about__lead">
            Esther is a Leadership Strategist, Mindset Transformation Expert,
            Global Keynote Speaker and an Award-Winning Mentor with a background
            in Organisation and Leadership Development.
          </p>

          {/* Her numbers, pulled out of the bio into a highlight row */}
          <dl className="about__stats">
            {STATS.map((stat) => (
              <div key={stat.label}>
                <dt>{stat.label}</dt>
                <dd>{stat.value}</dd>
              </div>
            ))}
          </dl>

          <div className="about__actions">
            <a href={`mailto:${CONTACT.email}`} className="pill pill--solid">
              Request Availability
            </a>
            <a href={LINKS.linkedin} className="pill pill--outline" target="_blank" rel="noreferrer">
              Follow Esther on LinkedIn
            </a>
          </div>
        </div>
      </div>

      {/* ---------- Full-width band: the rest of her bio ---------- */}
      <div className="about__more">
        <div className="container">
          <article className="about__card" data-reveal>
            <div className="about__quote-panel">
              <span className="about__quote-mark" aria-hidden="true">&ldquo;</span>
              <p className="about__highlight">
                As an expert she helps organisations build world class teams,
                inspire peak performance and create a culture of{' '}
                <em>high trust – high performing individuals.</em>
              </p>
            </div>

          <div className="about__columns">
            <div>
              <span className="about__num" aria-hidden="true">01</span>
              <h3 className="about__subhead">What she does</h3>
              <p>
                She helps organisations create high performing teams by breaking
                the barriers of the mind and unleashing their full potential. Her
                journey to excellence has been fuelled with her persistent passion
                for empowering people, with the power of the mind.
              </p>
            </div>
            <div>
              <span className="about__num" aria-hidden="true">02</span>
              <h3 className="about__subhead">When it matters most</h3>
              <p>
                When the challenges are steep, and the competition is fierce,
                Esther supports organisations &amp; individuals with the tools
                they need to embark on a journey of self-discovery, empowerment
                &amp; unbridled success by taking charge of their mindset &amp;
                emotions.
              </p>
            </div>
          </div>
          </article>
        </div>
      </div>
    </section>
  )
}

export default About
