import { LINKS } from '../data/contact.js'
import './Services.css'

// The four services and their links, as on the estherindurkar.com homepage.
const SERVICES = [
  {
    title: 'Corporate Trainings',
    text: 'Esther has an in-depth knowledge of having worked with different team dynamics, corporate culture and leadership mindsets.',
    linkLabel: 'Check out her signature topics',
    href: LINKS.corporateTrainings,
  },
  {
    title: 'Keynote Speeches',
    text: 'Esther delivers engaging, practical & Story Driven Keynotes on the themes of Leadership, Influence and Mindset for excellence.',
    linkLabel: 'Check out her signature talks',
    href: LINKS.keynoteSpeeches,
  },
  {
    title: 'Assessments',
    text: 'Assess your organisations’ current state and learn key insights and strategies to implement to get to your desired goals.',
    linkLabel: 'Check out the approach',
    href: LINKS.assessment,
  },
  {
    title: 'Coaching & Consulting',
    text: 'Esther blends empathy with science to help Business Owners & Leaders see the situation with clarity and take charge of it.',
    linkLabel: 'Check out her signature themes',
    href: LINKS.coachingConsulting,
  },
]

function Services() {
  return (
    <section id="services" className="services section" aria-labelledby="services-title">
      <div className="container">
        <h2 id="services-title" className="section-title services__title" data-reveal>
          Our <em>Services</em>
        </h2>

        <ol className="services__grid">
          {SERVICES.map((service, index) => (
            <li key={service.title} data-reveal style={{ '--i': index }}>
              {/* The whole card is one link, so it's easy to click */}
              <a href={service.href} className="service-card" target="_blank" rel="noreferrer">
                <span className="service-card__number" aria-hidden="true">
                  0{index + 1}
                </span>
                <h3 className="service-card__title">{service.title}</h3>
                <p className="service-card__text">{service.text}</p>
                <span className="service-card__foot">
                  <span className="service-card__link">{service.linkLabel}</span>
                  <span className="service-card__arrow" aria-hidden="true">→</span>
                </span>
              </a>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export default Services
