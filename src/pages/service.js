const fs = require('fs')

export async function RenameToEn() {
  if (fs.existsSync('./src/pages/index.fr.md')) {
    fs.rename('./src/pages/index.fr.md', './src/pages/index.md', (err) => {
      if (err) throw err
    })
  }
}

export async function RenameToFr() {
  if (fs.existsSync('./src/pages/index.md')) {
    fs.rename('./src/pages/index.md', './src/pages/index.fr.md', (err) => {
      if (err) throw err
    })
  }
}
