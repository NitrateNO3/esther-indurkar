import { useState } from 'react'
import { LINKS } from '../data/contact.js'
import onStage from '../assets/images/esther-on-stage.webp'
import redBlazer from '../assets/images/esther-red-blazer.webp'
import microphone from '../assets/images/esther-microphone.webp'
import portrait from '../assets/images/esther-portrait.webp'
import hopePortrait from '../assets/images/esther-project-hope.webp'
import './Services.css'

// Every text value below comes from the matching page on estherindurkar.com.
const SERVICES = [
  {
    numeral: 'I',
    title: 'Corporate Trainings',
    tag: 'Re-MIND · Re-ALIGN · Re-THINK',
    image: onStage,
    text: 'Our training programs are impactful, practical, experiential and very interactive helping the participants dig deep to change behaviours for exceptional results.',
    points: ['Leadership Programs', 'Soft Skills Programs', 'Transformational Programs'],
    href: LINKS.corporateTrainings,
  },
  {
    numeral: 'II',
    title: 'Leadership Programs',
    tag: 'The Re-MIND series',
    image: redBlazer,
    text: 'Cultivate the mindset of a leader who will drive innovation, inspire teams and lead the organization from chaos to clarity.',
    points: ['Effective leadership', 'Decision-making skills', 'Organizational efficiency'],
    href: LINKS.corporateTrainings,
  },
  {
    numeral: 'III',
    title: 'Keynote Speeches',
    tag: 'Leadership · Influence · Mindset',
    image: microphone,
    text: 'Esther delivers engaging, practical & Story Driven Keynotes, in her unique style with relevant anecdotes, metaphors and humour.',
    points: ['Rebooting Brilliance', 'From Chaos to Clarity', 'Breaking the Mould'],
    href: LINKS.keynoteSpeeches,
  },
  {
    numeral: 'IV',
    title: 'Assessments',
    tag: 'Culture · Competencies · Mindset',
    image: portrait,
    text: 'Clarity on the current status of corporate culture, leadership competencies and employee mindset, with a detailed report and precise, targeted actionables.',
    points: ['One-to-one understanding', 'Focus group discussion', 'Enterprise-wide survey'],
    href: LINKS.assessment,
  },
  {
    numeral: 'V',
    title: 'Coaching & Consulting',
    tag: 'Empathy with science',
    image: hopePortrait,
    text: 'Esther blends empathy with science to help Business Owners & Leaders see the situation with clarity and take charge of it.',
    // Three different kinds of fact, so each gets a label (shown as a row)
    facts: [
      { label: 'For', value: 'Business owners & leaders' },
      { label: 'Also offers', value: 'Strategic Business Initiatives' },
      { label: 'Approach', value: 'Brutally honest' },
    ],
    href: LINKS.coachingConsulting,
  },
]

function Services() {
  const [activeIndex, setActiveIndex] = useState(0)
  const active = SERVICES[activeIndex]

  return (
    <section id="services" className="services" aria-labelledby="services-title">
      <div className="services__layout container">
        {/* Arched frame that swaps photos with the active service */}
        <figure className="services__frame" aria-hidden="true">
            <div className="services__arch">
              {SERVICES.map((service, index) => (
                <img
                  key={service.title}
                  src={service.image}
                  alt=""
                  loading="lazy"
                  className={index === activeIndex ? 'is-active' : ''}
                />
              ))}
            </div>
            <figcaption className="services__frame-caption">
              <span key={activeIndex} className="services__frame-title">
                {active.title}
              </span>
              <span className="caption">
                {active.numeral} / V
              </span>
            </figcaption>
        </figure>

        <div className="services__content">
          <header className="services__header">
            <p className="caption">(03) — Services</p>
            <h2 id="services-title" className="services__title">
              The work, <em>in five forms.</em>
            </h2>
          </header>

          {/* Fixed-height list: hovering or focusing a name selects it */}
          <ol className="services__list" role="tablist" aria-label="Services">
            {SERVICES.map((service, index) => {
              const isActive = index === activeIndex
              return (
                <li key={service.title}>
                  <button
                    type="button"
                    role="tab"
                    id={`service-tab-${index}`}
                    aria-selected={isActive}
                    aria-controls="service-detail"
                    className={`service ${isActive ? 'is-active' : ''}`}
                    onMouseEnter={() => setActiveIndex(index)}
                    onFocus={() => setActiveIndex(index)}
                    onClick={() => setActiveIndex(index)}
                  >
                    <span className="service__numeral">{service.numeral}</span>
                    <span className="service__name">
                      <span className="service__title">{service.title}</span>
                      <span className="service__tag">{service.tag}</span>
                    </span>
                    <span className="service__arrow" aria-hidden="true">→</span>
                  </button>
                </li>
              )
            })}
          </ol>

          {/* One detail area that swaps content; its size never changes */}
          <div
            id="service-detail"
            role="tabpanel"
            aria-labelledby={`service-tab-${activeIndex}`}
            className="services__detail"
          >
            <div key={activeIndex} className="services__detail-inner">
              <p className="services__text">{active.text}</p>
              <div className="services__detail-foot">
                {/* Either labelled facts or a list of tags, depending on the service */}
                {active.facts ? (
                  <dl className="services__facts">
                    {active.facts.map((fact) => (
                      <div key={fact.label}>
                        <dt>{fact.label}</dt>
                        <dd>{fact.value}</dd>
                      </div>
                    ))}
                  </dl>
                ) : (
                  <ul className="services__points">
                    {active.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                )}
                <a href={active.href} className="line-link" target="_blank" rel="noreferrer">
                  Read more
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
