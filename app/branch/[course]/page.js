'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Roboto_Mono } from 'next/font/google'
import {Analytics} from '@vercel/analytics/react'
import { usePathname, useSearchParam } from 'next/navigation'
import Field from '@/components/Fields'

const roboto_Mono = Roboto_Mono({
  weight: ['400', '700'],
  subsets: ['latin'],
})

export default function Home() {
    const pathName = usePathname()
    console.log(pathName);
    const course = pathName.split('/')[2]
  return (
    <main className={`flex p-10 ${roboto_Mono.className}`} >
      <div className='flex flex-col justify-center items-center'>
        <Field course={course} />
        <Link href={'https://github.com/YugBhanushali/SGPA-Calculator'}>
          <Image 
            src='/assets/github-logo.png'
            alt='Github Logo'
            width={30}
            height={30}
          />
        </Link>
      </div>
      <Analytics/>
    </main>
  )
}
