import React from 'react'
import { PiArrowUpRightBold } from "react-icons/pi";
import Image from 'next/image';
import Link from 'next/link';



const IMGITEM = [
  {
    img:'/Education_Assets/parenting_course.webp',
    title:'Belajar Parenting',
    subtitle:'Seigi Okta'
  },
  {
    img:'/Education_Assets/card-1.png'
  },
  {
    img:'/Education_Assets/card-1.png'
  },
  
]

const EducationSection = () => {

  return (
    <div className='px-4 md:px-40'>
        <div className=' flex flex-col md:flex-col gap-5 lg:flex-row items-center justify-between '>
            <div className='flex flex-col text-center gap-3  lg:text-start'>
                <h1 className='text-xl lg:text-2xl font-bold '>
                  Program Education
                </h1>
                <p className='text-sm'>
                  With our programs we can make you shine your career
                </p>
            </div>
            <div>
                <a href="http://">
                  <button className=' flex gap-3 border-black border-2 border-solid px-4 py-1 rounded-md items-center font-bold hover:text-lg duration-300'>
                    More
                  <PiArrowUpRightBold />
                  </button>
                </a>
            </div>
        </div>

        <div className='flex flex-col  lg:flex-row justify-center items-center gap-20 mt-10'>
            {IMGITEM.map((item, i) => (
              <div key={i} className='' >
                  {/* <div className='w-64 h-80 relative  overflow-hidden rounded-lg hover:scale-105 duration-300 group cursor-pointer  object-cover '>
                      <Image className='rounded-xl border-4 border-black opacity-40 group-hover:opacity-100 duration-300 '  src={item.img} alt="Logo" fill      />
                      <div className='absolute bottom-0 w-full bg-gradient-to-t  from-black to-transparent px-3 translate-y-full py-4 group-hover:translate-y-0 duration-300'>
                          <p className=' text-white font-bold text-xl'>{item.title}</p>
                          <p className='text-sm text-white'>{item.subtitle}</p>
                      </div>
                  </div> */}

                  <div className='w-80 h-96 relative overflow-hidden  object-cover '>
                      <img className=''  src={item.img} alt="Logo"       />
                      <div className='absolute top-0  text-white w-full '>
                          <div className='p-3 flex flex-col gap-2'>
                            <p className='font-bold text-xl'>{item.title}</p>
                            <p className='text-sm'>{item.subtitle}</p>
                            {/* <div className='border border-white'></div> */}
                          </div>
                      </div>
                      <div className='absolute bottom-0 w-full bg-lime-100 h-40'>
                          <div className='p-3 '>
                            <p className='font-bold text-xl'></p>
                            <p className='text-sm '></p>
                          </div>
                      </div>
                  </div>
              </div>
            ))}
        </div>
    </div>
  )
}

export default EducationSection