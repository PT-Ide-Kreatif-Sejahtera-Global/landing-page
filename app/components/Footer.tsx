'use client'
import React from 'react'
import Image from 'next/image'



const Footer = () => {
  return (
    <div className='px-4 nd:px-20 bg-footer '>
        <div className='grid grid-cols-3'>
            <div>
                <div className='flex  items-center gap-3 text-white'>
                    <Image width={50} height={50} className="w-[50px] h-[50px] rounded-full" src="/logoideathings.png" alt="Logo" /> 
                    <h1 className='font-bold'>IDeaThings</h1>
                </div>
                <div className='text-white'>
                    <h1 className='font-bold'>PT.Ide Kreatif Sejahtera Global</h1>
                    <p className='text-sm'>PT. Ide Kreatif Sejahtera Global adalah perusahaan sosial
                    yang di bidang jasa dan lorem ipsum dolor si amet</p>
                </div>
            </div>

            <div>
                <div className='text-white'>
                    <h1 className='font-bold'>Our Services</h1>
                    <ul>
                        <li>Education</li>
                        <li>Product</li>
                        <li>Digital Talent</li>
                    </ul>
                </div>
            </div>

            <div>
                 
            </div>
        </div>
    </div>
  )
}

export default Footer