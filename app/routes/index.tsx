import type * as React from 'react'
import { Link } from '@remix-run/react'
import type {
  HeadersFunction,
  LinksFunction,
  MetaFunction,
} from '@remix-run/server-runtime'
import { getSeo } from '~/utils/seo'

const [seoMeta, seoLinks] = getSeo()

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

export default function Index() {
  return (
    <>
      <section className='mx-auto mt-4 w-[90vw]'>
        <div className='mx-auto max-w-4xl'>
          <p className='text-md text-gray-800 dark:text-gray-100'>
            Introduction
          </p>
          <p className='lg:prose-md prose prose-zinc mx-auto max-w-4xl pt-8 dark:prose-invert'>
            <h2>
              Hi 👋 I'm Brandon. I'm employed as a software engineer, but am an
              all around tech nerd 🤓
            </h2>
            I grew up in the suburbs of Pittsburgh, PA and attended college at
            Grove City College. While there I met my wife, Emma. I convinced her
            to move to Pittsburgh and we've lived here ever since. We just
            recently had our first child and have been enjoying adjusting to our
            new life with her. When I'm not coding, I enjoy playing keyboard on
            the worship team at Riverside Community Church. But I can't get away
            from coding too much, because I enjoy making sounds using various
            software instruments. Check out my recent &nbsp;
            <Link to='/projects'>Projects</Link>
            &nbsp; to see what I've been working on.
          </p>
        </div>
      </section>
    </>
  )
}


