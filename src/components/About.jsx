import { LINKS } from '../data/contact.js'
import microphone from '../assets/images/esther-microphone.webp'
import './About.css'

// Figures from the "Meet Esther" bio on estherindurkar.com.
const NUMBERS = [
  { value: '2', label: 'Decades' },
  { value: '5000+', label: 'Individuals' },
  { value: '1000+', label: 'Leaders' },
  { value: '20+', label: 'Brands' },
]

// One still, cinematic frame: text on the left, Esther on the right
// with a giant outlined "Esther" behind her (echoing "MIND" in the hero).
function About() {
  return (
    <section id="about" className="about" aria-labelledby="about-title">
      <p className="about__backdrop" aria-hidden="true">
        Esther
      </p>

      <div className="about__inner container">
        <div className="about__text">
          <p className="caption about__label" data-reveal>
            (01) — Meet Esther
          </p>

          <h2 id="about-title" className="about__statement" data-reveal>
            Leadership Strategist, <em>Mindset Transformation Expert,</em> Global
            Keynote Speaker <span className="about__amp">&amp;</span>{' '}
            <em>Award-Winning Mentor.</em>
          </h2>

          <p className="about__bio" data-reveal>
            She helps organisations create high performing teams by breaking the
            barriers of the mind and unleashing their full potential, with a
            background in Organisation and Leadership Development.
          </p>

          <dl className="about__numbers" data-reveal>
            {NUMBERS.map((number) => (
              <div key={number.label}>
                <dt className="caption">{number.label}</dt>
                <dd>{number.value}</dd>
              </div>
            ))}
          </dl>

          <div className="about__sign" data-reveal>
            <p className="about__signature">— Esther Indurkar</p>
            <a href={LINKS.linkedin} className="line-link" target="_blank" rel="noreferrer">
              Follow on LinkedIn
            </a>
          </div>
        </div>
      </div>

      <figure className="about__figure">
        <img
          src={microphone}
          alt="Esther Indurkar in a maroon outfit, speaking into a microphone"
          width="718"
          height="1070"
          loading="lazy"
        />
      </figure>
    </section>
  )
}

export default About
