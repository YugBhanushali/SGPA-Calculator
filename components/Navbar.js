import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div id='pdf' className='flex flex-col'>
        <Link href={'/'}>
            <h1 className='text-[20px] font-bold text-center'>SGPA Calculator</h1>
        </Link>
    </div>
  )
}

export default Navbar
