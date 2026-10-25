import { CONTACT, PILLARS } from '../data/contact.js'
import './Contact.css'

// "Let's connect!": her four themes, contact details and the same form
// fields as the original site, in one card (wine panel | white form).
// There's no server yet, so sending opens the visitor's email app with
// the message already filled in.
function Contact() {
  const handleSubmit = (event) => {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    const body = [
      `Name: ${form.get('name')}`,
      `Email: ${form.get('email')}`,
      `Phone: ${form.get('phone')}`,
      '',
      form.get('goals'),
    ].join('\n')
    window.location.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent(
      `Website enquiry from ${form.get('name')}`,
    )}&body=${encodeURIComponent(body)}`
  }

  return (
    <section id="contact" className="contact section" aria-labelledby="contact-title">
      <div className="container">
        <article className="contact__card" data-reveal>
          {/* ---------- Left: wine panel ---------- */}
          <div className="contact__info">
            <h2 id="contact-title" className="contact__title">
              Let&rsquo;s <em>connect!</em>
            </h2>

            <ul className="contact__pillars">
              {PILLARS.map((pillar) => (
                <li key={pillar}>{pillar}</li>
              ))}
            </ul>

            <dl className="contact__details">
              <div>
                <dt>Email</dt>
                <dd>
                  <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
                </dd>
              </div>
              <div>
                <dt>Phone</dt>
                <dd>
                  <a href={CONTACT.phoneHref}>{CONTACT.phoneDisplay}</a>
                </dd>
              </div>
            </dl>
          </div>

          {/* ---------- Right: form ---------- */}
          <form className="contact__form" onSubmit={handleSubmit}>
            <div className="contact__row">
              <label>
                <span>Name</span>
                <input name="name" type="text" autoComplete="name" required />
              </label>
              <label>
                <span>Phone</span>
                <input name="phone" type="tel" autoComplete="tel" />
              </label>
            </div>
            <label>
              <span>Email</span>
              <input name="email" type="email" autoComplete="email" required />
            </label>
            <label>
              <span>Tell me more about your goals</span>
              <textarea name="goals" rows="5" />
            </label>
            <button type="submit" className="pill pill--solid contact__send">
              Send <span aria-hidden="true">→</span>
            </button>
          </form>
        </article>
      </div>
    </section>
  )
}

export default Contact
