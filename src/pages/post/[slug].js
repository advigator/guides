import fs from 'fs'
import path, { dirname } from 'path'
import matter from 'gray-matter'

// export async function getStaticPaths({ locales }) {
const file = fs.readFileSync(
  path.join(process.cwd(), '../../posts/en.md'),
  'utf-8'
)

const pathsArray = []

console.log(matter(file))
// }
