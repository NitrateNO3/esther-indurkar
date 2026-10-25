import microphone from '../assets/images/esther-microphone.webp'
import './Credentials.css'

// "Here's what makes Esther Special", as listed on estherindurkar.com.
// `word` is the big display word on each tile; `label` is her exact text.
const CREDENTIALS = [
  { word: 'TEDx', label: 'TEDx Speaker', tone: 'crimson' },
  { word: '5000+', label: 'Impacted 5000+ individuals worldwide', tone: 'wine' },
  { word: 'TEDEd', label: 'TEDEd Mentor', tone: 'white' },
  { word: 'Award', label: 'Award Winning Mentor', tone: 'blush' },
  { word: 'Global', label: 'Featured in Global Publications', tone: 'white' },
  { word: 'Record', label: 'Asia Book of World Records Holder', tone: 'white' },
  { word: 'Change', label: 'Leader in Creating Impactful Change', tone: 'blush' },
]

// A mosaic of tiles: TEDx is the tall feature tile (with her photo),
// the rest fill a 3 × 2 grid beside it.
function Credentials() {
  return (
    <section className="credentials" aria-labelledby="credentials-title">
      <div className="container">
        <h2 id="credentials-title" className="section-title credentials__title" data-reveal>
          Here&rsquo;s what makes Esther <em>Special</em>
        </h2>

        <ul className="credentials__mosaic">
          {CREDENTIALS.map((item, index) => (
            <li
              key={item.label}
              className={`tile tile--${item.tone} ${index === 0 ? 'tile--feature' : ''}`}
              data-reveal
              style={{ '--i': index }}
            >
              <span className="tile__word" aria-hidden="true">
                {item.word}
              </span>
              <span className="tile__label">{item.label}</span>
              {index === 0 && <img className="tile__photo" src={microphone} alt="" loading="lazy" />}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Credentials
