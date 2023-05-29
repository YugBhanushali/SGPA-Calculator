import React from 'react'
import { Roboto_Mono } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Link from 'next/link'

const roboto_Mono = Roboto_Mono({
  weight: ['400', '700'],
  subsets: ['latin'],
})

const page = () => {
  //how to do email to link
  //automobile
  return (
    <div className='mt-[20px]'>
      <Navbar />
      <div className={`flex flex-col justify-center items-center p-10 ${roboto_Mono.className}`} >
        <Link href={"/branch/Computer"}><p>Computer enginnering</p></Link>
        <Link href={"/branch/Information"}><p>Information Technology</p></Link>
        <Link href={"/branch/ECE"}><p>ECE</p></Link>
        <Link href={"/branch/Mechanical"}><p>Mechanical</p></Link>
        <Link href={"/branch/Civil"}><p>Civil</p></Link>
        <Link href={"/branch/Chemical"}><p>Chemical</p></Link>
        <Link href={"/branch/Electrical"}><p>Electrical</p></Link>
        <Link href={"/branch/Automobile"}><p>Automobile</p></Link>
      <div className=' text-center w-[300px] justify-center items-center mt-4 text-[13px]'>
        <span>
          Currently I have added the subject for Computer branch sem-4 only. I will add the subject for other branches soon you can contribute to this project by sending subject name and its credits on 
        </span>
        <span >
           <Link href={'mailto:yug.bce21@sot.pdpu.ac.in'}> <span className=' underline font-bold'>Email</span></Link>
        </span>.
      </div>
      </div>
    </div>
  )
}

export default page
