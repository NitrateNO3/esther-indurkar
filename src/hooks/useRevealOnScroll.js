import { useEffect } from 'react'

// Fades in every element marked with `data-reveal` the first time it
// scrolls into view. Called once from App, so sections only need the
// attribute and don't each set up their own observer.
export function useRevealOnScroll() {
  useEffect(() => {
    const elements = document.querySelectorAll('[data-reveal]')

    // Older browsers: just show everything.
    if (!('IntersectionObserver' in window)) {
      elements.forEach((element) => element.classList.add('is-visible'))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target) // animate once only
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' },
    )

    elements.forEach((element) => observer.observe(element))

    // Cleanup: stop observing if App ever unmounts.
    return () => observer.disconnect()
  }, [])
}
