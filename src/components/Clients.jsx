import './Clients.css'

// "Awesomeness delivered": the organisation logos from the gallery on
// estherindurkar.com. import.meta.glob (a Vite feature) loads every
// image in the folder, so adding a logo only means dropping in a file.
const logoModules = import.meta.glob('../assets/logos/*.jpg', { eager: true, import: 'default' })
const LOGOS = Object.keys(logoModules)
  .sort()
  .map((path) => logoModules[path])

// Split the logos into two rows
const HALF = Math.ceil(LOGOS.length / 2)
const ROWS = [LOGOS.slice(0, HALF), LOGOS.slice(HALF)]

// One endlessly scrolling row. The logos are rendered twice and the
// track slides by exactly half its width, so the loop has no visible seam.
function LogoRow({ logos, reverse }) {
  return (
    <div className={`clients__row ${reverse ? 'clients__row--reverse' : ''}`}>
      <ul className="clients__track">
        {[...logos, ...logos].map((logo, index) => (
          <li key={index} className="clients__item" aria-hidden={index >= logos.length}>
            <img src={logo} alt={index < logos.length ? 'Client organisation logo' : ''} loading="lazy" width="500" height="500" />
          </li>
        ))}
      </ul>
    </div>
  )
}

function Clients() {
  return (
    <section className="clients section" aria-labelledby="clients-title">
      <div className="container">
        <h2 id="clients-title" className="section-title clients__title" data-reveal>
          Awesomeness <em>delivered</em>
        </h2>
      </div>

      <div className="clients__rows" data-reveal>
        <LogoRow logos={ROWS[0]} />
        <LogoRow logos={ROWS[1]} reverse />
      </div>
    </section>
  )
}

export default Clients
