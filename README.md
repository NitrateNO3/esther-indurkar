# Esther Indurkar: Homepage

Personal brand homepage for [estherindurkar.com](https://estherindurkar.com), built with React + Vite.
All copy is taken from the current estherindurkar.com site.

## Run it

```bash
npm install     # first time only
npm run dev     # local dev server at http://localhost:5173
npm run build   # production build into dist/
npm run lint    # check code with oxlint
```

## Structure

```
src/
  App.jsx                 page layout: the order of sections
  main.jsx                entry point: loads global CSS, mounts <App />
  components/             one component + one CSS file per section, in page order:
    Navbar (+ full-screen menu)  Hero  About  Duality  Services
    Impact  Talks  Testimonials  ProjectHope  Contact  Footer
    Loader                intro curtains
  data/contact.js         email, phone, social links, page URLs, brand pillars
  hooks/
    useSmoothScroll.js    inertia scrolling (Lenis) + smooth anchor links
    useScrollProgress.js  writes scroll progress (0–1) to a --progress CSS variable
    useRevealOnScroll.js  fade-in for elements marked data-reveal
  styles/
    variables.css         design tokens: wine/champagne palette, Bodoni + Manrope + mono
    global.css            reset, base type, shared helpers (.container, .caption, .wipe-button…)
  assets/images/          Esther's photos (WebP)
```

## Conventions

- Colours, sizes and spacing always come from `variables.css`. No raw hex values in components.
- Class names follow BEM: `.block__element--modifier` (e.g. `.hero__title`, `.button--primary`).
- Each section's styles live next to its component, so deleting a section deletes its CSS too.
- Scroll-driven effects never re-render React: `useScrollProgress` sets `--progress` and CSS turns it into motion.
- Don't centre an element with the `translate` property in a rule that also sets `transform`: the CSS minifier drops it. Use `left: 0; right: 0; margin-inline: auto` instead.
- Animations are disabled automatically for users with `prefers-reduced-motion`.
- The intro curtain plays once per browser session. To see it again, open a new tab or clear `esther-intro-played` from sessionStorage.
