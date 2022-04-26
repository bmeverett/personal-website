import { initSeo } from 'remix-seo'

export const { getSeo, getSeoLinks, getSeoMeta } = initSeo({
  title: 'Brandon Everett',
  description: `Brandon Everett's site`,
  twitter: {
    card: 'summary',
    creator: '@bme2010',
    site: 'https://brandon-everett.dev',
    title: 'Brandon Everett',
    description: `Brandon Everett's site`,
  },
})
