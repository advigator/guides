import { Callout } from '@/components/Callout'
import { QuickLink, QuickLinks } from '@/components/QuickLinks'

const tags = {
  callout: {
    attributes: {
      title: { type: String },
      type: {
        type: String,
        default: 'note',
        matches: ['note', 'warning'],
        errorLevel: 'critical',
      },
    },
    render: Callout,
  },
  figure: {
    selfClosing: true,
    attributes: {
      src: { type: String },
      alt: { type: String },
      caption: { type: String },
    },
    render: ({ src, alt = '', caption }) => (
      <figure>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt={alt} />
        <figcaption>{caption}</figcaption>
      </figure>
    ),
  },
  'amazon-console': {
    selfClosing: true,
    render: () => (
      <a href="https://advertising.amazon.com/" target="_blank">
        Amazon Ads console
      </a>
    ),
  },
  'chrome-extension': {
    selfClosing: true,
    render: () => (
      <a
        href="https://www.advigator.com/chrome-extension-for-amazon-seo"
        target="_blank"
      >
        Chrome extension
      </a>
    ),
  },
  'external-link': {
    selfClosing: true,
    attributes: {
      href: { type: String },
      name: { type: String },
    },
    render: ({ href, name }) => (
      <a href={href} target="_blank">
        {name}
      </a>
    ),
  },
  'quick-links': {
    render: QuickLinks,
  },
  youtube: {
    selfClosing: true,
    attributes: {
      id: { type: String },
    },
    render: ({ id }) => (
      <iframe
        className="aspect-video w-full"
        height="315"
        src={`https://www.youtube.com/embed/${id}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    ),
  },
  'quick-link': {
    selfClosing: true,
    render: QuickLink,
    attributes: {
      title: { type: String },
      description: { type: String },
      icon: { type: String },
      href: { type: String },
    },
  },
}

console.log('tags', tags)

export default tags
