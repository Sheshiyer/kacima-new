export function enableQA() {
  const params = new URLSearchParams(location.search)
  if (!params.has('qa')) return

  const events = []
  const sections = Array.from(document.querySelectorAll('section[data-scene]'))
  const start = performance.now()

  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      events.push({ id: e.target.id, isIntersecting: e.isIntersecting, t: performance.now() - start })
    })
    console.table(events.slice(-5))
  }, { threshold: 0.6 })
  sections.forEach(s => observer.observe(s))

  const report = () => {
    const activeCount = sections.filter(s => s.classList.contains('active')).length
    console.log('QA Report:', { activeCount, events: events.length })
  }
  window.addEventListener('scroll', () => { clearTimeout(window.__qaTimer); window.__qaTimer = setTimeout(report, 200) })
}
