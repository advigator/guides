import Head from 'next/head'
import { slugifyWithCounter } from '@sindresorhus/slugify'
import { useRouter } from 'next/router'
import { IntlProvider } from 'react-intl'
import { Layout } from '@/components/Layout'

import 'focus-visible'
import '@/styles/tailwind.css'

function getNodeText(node) {
  let text = ''
  for (let child of node.children ?? []) {
    if (typeof child === 'string') {
      text += child
    }
    text += getNodeText(child)
  }
  return text
}

function collectHeadings(nodes, slugify = slugifyWithCounter()) {
  let sections = []

  for (let node of nodes) {
    if (node.name === 'h2' || node.name === 'h3') {
      let title = getNodeText(node)
      if (title) {
        let id = slugify(title)
        node.attributes.id = id
        if (node.name === 'h3') {
          if (!sections[sections.length - 1]) {
            throw new Error(
              'Cannot add `h3` to table of contents without a preceding `h2`'
            )
          }
          sections[sections.length - 1].children.push({
            ...node.attributes,
            title,
          })
        } else {
          sections.push({ ...node.attributes, title, children: [] })
        }
      }
    }

    sections.push(...collectHeadings(node.children ?? [], slugify))
  }

  return sections
}

export default function App({ Component, pageProps }) {
  let router = useRouter()

  let title = pageProps.markdoc?.frontmatter.title

  let pageTitle =
    pageProps.markdoc?.frontmatter.pageTitle ||
    `${pageProps.markdoc?.frontmatter.title} - Guides`

  let description = pageProps.markdoc?.frontmatter.description

  let content_en = []
  let content_fr = []

  for (let i = 0; i < 10; i++) {
    if (i < 5) content_en.push(pageProps.markdoc?.content[i])
    else content_fr.push(pageProps.markdoc?.content[i])
  }

  let content = router.locale === 'en' ? content_en : content_fr

  let tableOfContents = content.length ? collectHeadings(content) : []

  let propContent = {}

  propContent =
    router.locale === 'en'
      ? {
          markdoc: {
            content: content_en,
            file: { path: '\\index.md' },
            frontmatter: {
              title: 'Guides',
              description:
                'Learn how to use Advigator to grow your business on Amazon',
            },
          },
        }
      : {
          markdoc: {
            content: content_fr,
            file: { path: '\\index.fr.md' },
            frontmatter: {
              title: 'Guides',
              description:
                'Apprenez à utiliser Advigator pour développer votre activité sur Amazon',
            },
          },
        }

  return (
    <IntlProvider locale={router.locale}>
      <Head>
        <title>{pageTitle}</title>
        {description && <meta name="description" content={description} />}
        <link rel="alternate" hrefLang="en" href={`https://localhost:8080/`} />
        <link
          rel="alternate"
          hrefLang="en"
          href={`https://localhost:8080/en`}
        />
        <link
          rel="alternate"
          hrefLang="fr"
          href={`https://localhost:8080/fr`}
        />
      </Head>
      <Layout title={title} tableOfContents={tableOfContents}>
        <Component {...propContent} />
      </Layout>
    </IntlProvider>
  )
}
