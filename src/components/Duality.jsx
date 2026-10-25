import portrait from '../assets/images/esther-portrait.webp'
import redBlazer from '../assets/images/esther-red-blazer.webp'
import './Duality.css'

// "Mind & Emotions" as a diptych: two panels joined by a crimson "&".
// Her four pillars (from her site) are split between the two sides.
const PANELS = [
  {
    id: 'mind',
    index: 'I',
    title: 'Mind',
    line: 'Breaking the barriers of the mind.',
    pillars: ['Take charge of your mindset', 'Be a peak performer'],
    photo: portrait,
    alt: 'Esther Indurkar smiling, in a white blazer',
  },
  {
    id: 'emotions',
    index: 'II',
    title: 'Emotions',
    line: 'Harness the power of emotions.',
    pillars: ['Channelise your emotions', 'Live empowered'],
    photo: redBlazer,
    alt: 'Esther Indurkar in a red blazer, speaking with her hand raised',
  },
]

function Duality() {
  return (
    <section className="duality" aria-labelledby="duality-title">
      <h2 id="duality-title" className="visually-hidden">
        Mind and Emotions
      </h2>

      {PANELS.map((panel) => (
        <article key={panel.id} className={`panel panel--${panel.id}`} tabIndex={0}>
          <div className="panel__text">
            <p className="caption panel__caption">
              (02) — {panel.index}
            </p>
            <p className="panel__title">{panel.title}</p>
            <p className="panel__line">{panel.line}</p>
            <ol className="panel__pillars">
              {panel.pillars.map((pillar) => (
                <li key={pillar}>{pillar}</li>
              ))}
            </ol>
          </div>

          <img className="panel__photo" src={panel.photo} alt={panel.alt} loading="lazy" />

          {/* The "&" sits on the seam, attached to the first panel */}
          {panel.id === 'mind' && (
            <span className="duality__amp" aria-hidden="true">
              &amp;
            </span>
          )}
        </article>
      ))}
    </section>
  )
}

export default Duality
