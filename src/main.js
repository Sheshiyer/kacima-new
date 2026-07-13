import { renderSections } from './sections.js'
import { enableQA } from './qa.js'

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

if (prefersReducedMotion) {
  document.documentElement.classList.add('reduced-motion')
}

// sections are rendered dynamically below

renderSections()
const sections = Array.from(document.querySelectorAll('section[data-scene]'))
enableQA()

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      const el = entry.target
      if (entry.isIntersecting) {
        el.classList.add('active')
        el.classList.remove('inactive')
      } else {
        el.classList.remove('active')
        el.classList.add('inactive')
      }
    })
  },
  { threshold: 0.6 }
)
sections.forEach(s => observer.observe(s))

// Removed parallax; transitions handled via CSS for consistency

const form = document.getElementById('contact-form')
if (form) {
  const status = document.createElement('div')
  status.id = 'form-status'
  status.setAttribute('role', 'status')
  status.setAttribute('aria-live', 'polite')
  form.appendChild(status)
  form.addEventListener('submit', e => {
    e.preventDefault()
    const name = document.getElementById('name')
    const email = document.getElementById('email')
    const message = document.getElementById('message')
    const errors = []
    if (!name.value.trim()) errors.push('Name is required')
    if (!email.value.trim() || !/^\S+@\S+\.\S+$/.test(email.value)) errors.push('Valid email is required')
    if (!message.value.trim()) errors.push('Message is required')
    ;[name, email, message].forEach(el => el.removeAttribute('aria-invalid'))
    if (errors.length) {
      status.textContent = errors.join(' • ')
      status.dataset.state = 'error'
      if (!name.value.trim()) name.setAttribute('aria-invalid', 'true')
      if (!email.value.trim() || !/^\S+@\S+\.\S+$/.test(email.value)) email.setAttribute('aria-invalid', 'true')
      if (!message.value.trim()) message.setAttribute('aria-invalid', 'true')
      return
    }
    status.textContent = 'Message prepared. No submission in Phase 1.'
    status.dataset.state = 'ok'
    form.dataset.submitted = 'true'
  })
}
