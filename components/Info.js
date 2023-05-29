'use client'
import Image from 'next/image';
import React, { useState } from 'react'

const Info = ({recommendation, direction,width,padding}) => {
    const [showMessage, setShowMessage] = useState(false);

    const handleMouseEnter = () => {
        setShowMessage(true);
    };

    const handleMouseLeave = () => {
        setShowMessage(false);
    };

  return (
    <div className='relative'>
      <Image 
        src='/assets/info.png'
        alt='info'
        width={17}
        height={17}
        className='ml-3 cursor-pointer'
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />

    {showMessage && (
        <div className={`absolute ${direction}-full left-1/2 transform  w-[150px] -translate-x-1/2 bg-[#f5f5f5] border-[0.5px] border-solid border-[black] px-[8px] py-[3px] rounded-lg shadow-lg`}>
            <p className='text-[14px]'>{recommendation}</p>
        </div>
    )}
    </div>
  )
}

export default Info
