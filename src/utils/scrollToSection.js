export function scrollToSection(event, sectionId) {
  event.preventDefault()

  document.getElementById(sectionId)?.scrollIntoView({
    behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
  })

  window.history.replaceState(null, '', `${window.location.pathname}${window.location.search}`)
}
