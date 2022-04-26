import * as React from 'react'

import GitHubSvg from '~/assets/icons/github.svg'
import TwitterSvg from '~/assets/icons/twitter.svg'
import LinkedinSvg from '~/assets/icons/linkedin.svg'

export function preloadFooterSvg() {
  return [
    { rel: 'preload', href: GitHubSvg, as: 'image', type: 'image/svg+xml' },
    { rel: 'preload', href: TwitterSvg, as: 'image', type: 'image/svg+xml' },
    { rel: 'preload', href: LinkedinSvg, as: 'image', type: 'image/svg+xml' },
  ]
}

export default function Footer() {
  return (
    <footer className='text-center'>
      <div className='mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8'>
        <div className='mx-auto max-w-3xl space-y-6'>
          <div className='flex justify-center space-x-6'>
            <a
              className='text-blue-500 hover:text-opacity-75'
              href='https://twitter.com/bme2010'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='Twitter'
            >
              <Svg>
                <use href={`${TwitterSvg}#icon-twitter`} />
              </Svg>
            </a>

            <a
              className='text-gray-500 hover:text-opacity-75 dark:text-gray-300'
              href='https://github.com/bmeverett/website'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='GitHub'
            >
              <Svg>
                <use href={`${GitHubSvg}#icon-github`} />
              </Svg>
            </a>

            <a
              href='https://www.linkedin.com/in/brandon-everett-30746b59'
              aria-label='Linkedin'
              className='h-8 w-8 text-blue-500'
            >
              <Svg>
                <use href={`${LinkedinSvg}#icon-linkedin`} />
              </Svg>
            </a>
          </div>

          <p className='text-xs font-medium text-gray-800  dark:text-gray-100'>
            2022 Brandon Everett
          </p>
        </div>
      </div>
    </footer>
  )
}

function Svg({ children }: { children: React.ReactNode }) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' className='h-8 w-8'>
      {children}
    </svg>
  )
}
