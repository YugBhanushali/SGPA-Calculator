'use client'

import Field from '@/components/Fields'
import Image from 'next/image'
import Link from 'next/link'
import { Roboto_Mono } from 'next/font/google'

const roboto_Mono = Roboto_Mono({
  weight: ['400', '700'],
  subsets: ['latin'],
})

export default function Home() {

  return (
    <div className={`flex p-10 ${roboto_Mono.className}`} >
      <div className='flex flex-col justify-center items-center'>
        <Field />
        <Link href={"/branch"}>
          <h1 className='font-bold'>Branch</h1>
        </Link>
        <Link href={'https://github.com/YugBhanushali/SGPA-Calculator'}>
          <Image 
            src='/assets/github-logo.png'
            alt='Github Logo'
            width={30}
            height={30}
          />
        </Link>
        <Link href={"mailto:yug.bce21@sot.pdpu.ac.in"}>
          <h1 className='font-bold hover:underline'>Feedback</h1>
        </Link>
      </div>
    </div>
  )
}
