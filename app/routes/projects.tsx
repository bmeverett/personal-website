import type {
  HeadersFunction,
  LinksFunction,
  LoaderFunction,
  MetaFunction,
} from '@remix-run/server-runtime'
import { json } from '@remix-run/server-runtime'
import { useLoaderData } from '@remix-run/react'
import BlogList from '~/components/blog-list'
import { getMdxListItems } from '~/utils/mdx.server'
import { getSeo } from '~/utils/seo'

type LoaderData = { projects: Awaited<ReturnType<typeof getMdxListItems>> }

const [seoMeta, seoLinks] = getSeo({
  title: 'Projects',
  description: 'Projects',
  twitter: {
    title: 'Projects',
    description: 'My Projects',
  },
})

export const meta: MetaFunction = () => {
  return { ...seoMeta }
}

export const links: LinksFunction = () => {
  return [...seoLinks]
}

export const headers: HeadersFunction = ({ loaderHeaders }) => {
  return {
    'cache-control':
      loaderHeaders.get('cache-control') ?? 'private, max-age=60',
    Vary: 'Cookie',
  }
}

export const loader: LoaderFunction = async () => {
  const projects = await getMdxListItems({ contentDirectory: 'projects' })
  return json<LoaderData>(
    { projects: projects },
    {
      headers: { 'cache-control': 'private, max-age=60', Vary: 'Cookie' },
    },
  )
}

export default function Projects() {
  const { projects: blogList } = useLoaderData<LoaderData>()

  return (
    <section className='mx-auto max-w-4xl pt-24'>
      <BlogList blogList={blogList} />
    </section>
  )
}
