import { chapters, offerings, dayStages } from './content.js'

export function renderSections(root = document) {
  chapters.forEach(({ id, title, tagline, copy, image }) => {
    const el = root.getElementById(id)
    if (!el) return
    el.classList.add('section')

    const header = document.createElement('header')
    header.className = 'section-header'
    const h = document.createElement('h1')
    h.textContent = title
    const t = document.createElement('p')
    t.className = 'tagline'
    t.textContent = tagline
    header.appendChild(h)
    header.appendChild(t)

    const body = document.createElement('div')
    body.className = 'section-body'

    let media = null
    if (image) {
      media = document.createElement('figure')
      media.className = 'section-media'
      const img = document.createElement('img')
      img.src = image.src
      img.alt = image.alt || ''
      img.loading = image.loading || 'lazy'
      img.decoding = 'async'
      media.appendChild(img)
    }

    const c = document.createElement('p')
    c.textContent = copy
    body.appendChild(c)

    if (id === 'practices-offerings') {
      const list = document.createElement('ul')
      list.className = 'offerings-list'
      offerings.forEach(o => {
        const li = document.createElement('li')
        li.textContent = o.label
        list.appendChild(li)
      })
      body.appendChild(list)
    }

    if (id === 'day-at-kacima') {
      const seq = document.createElement('ol')
      seq.className = 'journey-sequence'
      dayStages.forEach(stage => {
        const li = document.createElement('li')
        li.textContent = stage
        seq.appendChild(li)
      })
      body.appendChild(seq)
    }

    el.innerHTML = ''
    el.appendChild(header)
    if (media) el.appendChild(media)
    el.appendChild(body)
  })
}
