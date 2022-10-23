import Link from 'next/link';
import * as React from 'react';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

export default function HomePage() {
  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />

      <main>
        <div className='flex h-screen flex-col items-center justify-center bg-black'>
          {/* Title */}
          <h1 className='text-5xl text-gray-200'>Who's watching?</h1>

          {/* Profiles */}
          <div className='mt-8 flex flex-row flex-wrap justify-center gap-5'>
            {/* Profile 1 */}
            <Link href='/movies'>
              <a href='#' className='group flex flex-col items-center gap-2'>
                <img
                  className='rounded border-2 border-transparent group-hover:border-2 group-hover:border-gray-300'
                  src='https://picsum.photos/seed/a/150/150'
                  alt='Profile 1'
                />
                <p className='text-gray-500 group-hover:text-gray-300'>
                  {' '}
                  Cauan{' '}
                </p>
              </a>
            </Link>

            <Link href='/movies'>
              <a href='#' className='group flex flex-col items-center gap-2'>
                <img
                  className='rounded border-2 border-transparent group-hover:border-2 group-hover:border-gray-300'
                  src='https://picsum.photos/seed/b/150/150'
                  alt='Profile 2'
                />
                <p className='text-gray-500 group-hover:text-gray-300'> Neo </p>
              </a>
            </Link>

            {/* Profile 3 */}
            <Link href='/movies'>
              <a href='#' className='group flex flex-col items-center gap-2'>
                <img
                  className='rounded border-2 border-transparent group-hover:border-2 group-hover:border-gray-300'
                  src='https://picsum.photos/seed/c/150/150'
                  alt='Profile 3'
                />
                <p className='text-gray-500 group-hover:text-gray-300'>
                  {' '}
                  Sunny{' '}
                </p>
              </a>
            </Link>
            <Link href='/movies'>
              {/* Add Profile */}
              <a href='#' className='group flex flex-col items-center gap-3 '>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-[150px] w-[150px] border-2 border-transparent group-hover:bg-gray-300'
                  viewBox='0 0 20 20'
                  fill='#6b7280'
                >
                  <path
                    fillRule='evenodd'
                    d='M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z'
                    clipRule='evenodd'
                  />
                </svg>
                <p className='text-gray-500 group-hover:text-gray-300'>
                  {' '}
                  Add Profile{' '}
                </p>
              </a>
            </Link>
          </div>

          {/* Manage Profiles */}
          <button className='mt-20 border-2 border-gray-600 px-4 py-1 text-gray-600 hover:border-gray-400 hover:text-gray-400'>
            Manage Profiles
          </button>
        </div>
      </main>
    </Layout>
  );
}
