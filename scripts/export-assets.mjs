import fs from 'node:fs'
import path from 'node:path'
import sharp from 'sharp'

const svgDir = path.resolve('assets/svg')
const pngDir = path.resolve('assets/png')
const printDir = path.resolve('assets/print')

for (const dir of [pngDir, printDir]) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true })
}

const files = fs.readdirSync(svgDir).filter(f => f.endsWith('.svg'))
console.log(`Found ${files.length} SVGs`)

for (const file of files) {
  const src = path.join(svgDir, file)
  const base = file.replace(/\.svg$/, '')

  const webOut = path.join(pngDir, `${base}.png`)
  const printOut = path.join(printDir, `${base}-print.png`)

  const svgBuffer = fs.readFileSync(src)

  await sharp(svgBuffer, { density: 300 })
    .png({ compressionLevel: 9 })
    .resize({ width: 2000 })
    .toFile(webOut)
  console.log(`Wrote ${webOut}`)

  await sharp(svgBuffer, { density: 600 })
    .png({ compressionLevel: 9 })
    .resize({ width: 4000 })
    .toFile(printOut)
  console.log(`Wrote ${printOut}`)
}

console.log('Export complete.')
