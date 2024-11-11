import React from 'react'
import { PiArrowUpRightBold } from "react-icons/pi";
import Image from 'next/image';



const IMGITEM = [
  {
    img:'/Education_Assets/card-1.png'
  },
  {
    img:'/Education_Assets/card-1.png'
  },
  {
    img:'/Education_Assets/card-1.png'
  },
  {
    img:'/Education_Assets/card-1.png'
  }
]

const EducationSection = () => {
  return (
    <div className='px-4 md:px-20'>
        <div className='flex mx-auto items-center justify-between '>
            <div className='flex flex-col text-center md:text-start lg:text-start'>
                <h1 className='text-xl lg:text-2xl font-bold '>
                  Program Education
                </h1>
                <p className='text-sm'>
                  With our programs we can make you shine your career
                </p>
            </div>
            <div>
                <a className='flex gap-3 border-black border-2 border-solid px-4 py-1 rounded-md items-center font-bold' href="http://" target='_blank'>
                  More
                  <PiArrowUpRightBold />
                </a>
            </div>
        </div>

        <div className='grid grid-cols-4 gap-16 mt-10'>
            {IMGITEM.map((item, i) => (
              <div key={i} className=''>
                  <Image className='h-64 w- '  src={item.img} alt="Logo" width={200} height={200} />
              </div>
            ))}
        </div>
    </div>
  )
}

export default EducationSection