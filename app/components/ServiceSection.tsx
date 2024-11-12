import React from 'react'
import Link from 'next/link';

const IMGITEM = [
  {
    img: '/Education_Assets/card-1.png'
  },
  {
    img: '/Education_Assets/card-1.png'
  },
]

const IMGITEM2 = [
  {
    img: '/Education_Assets/card-1.png'
  },
  {
    img: '/Education_Assets/card-1.png'
  },
]

const ServiceSection = () => {
  return (
    <div className='px-4 lg:px-20 mt-20  items-center'>
      <div className='col flex-col md:flex-row gap-5 lg:flex-row m-auto w-full text-center items-center justify-between '>
        <div className='flex flex-col text-center gap-3 md:text-start lg:text-center'>
          <h1 className='text-xl lg:text-2xl font-bold '>
          Our Services
          </h1>
          <p className='text-sm'>
            With our programs we can make you shine your career
          </p>
        </div>
        <div>
         
        </div>
      </div>

      <div className='col md:grid-cols-2 lg:grid-cols-4 lg:justify-center justify-between items-center w-full gap-20 mt-10'>
        <div className="grid lg:flex justify-around">
          {IMGITEM.map((item, i) => (
            <div key={i} className='' >
              <div className='w-96 bg-lime-100 h-44 relative overflow-hidden lg:mt-0 mt-5 rounded-lg hover:scale-105 duration-300 group cursor-pointer object-cover'>
                <div className='absolute bottom-0 w-full group-hover:bg-gradient-to-t bg-transparent  from-black to-transparent px-3 -translate-x-full py-4 group-hover:translate-x-0 duration-300'>
                  <p className=' text-white font-bold text-xl'>Lorem Ipsum Dolor</p>
                  <p className='text-sm text-white'>UI/UX</p>
                </div>
              </div>
            </div>

          ))}
        </div>


        <div className="grid lg:flex justify-around mt-5">
          {IMGITEM2.map((item2, i) => (
             <div key={i} className='' >
             <div className='w-96 bg-lime-100 h-44 relative overflow-hidden lg:mt-0 mt-5 rounded-lg hover:scale-105 duration-300 group cursor-pointer object-cover'>
               <div className='absolute bottom-0 w-full group-hover:bg-gradient-to-t bg-transparent  from-black to-transparent px-3 -translate-x-full py-4 group-hover:translate-x-0 duration-300'>
                 <p className=' text-white font-bold text-xl'>Lorem Ipsum Dolor</p>
                 <p className='text-sm text-white'>UI/UX</p>
               </div>
             </div>
           </div>

          ))}
        </div>

      </div>
    </div>
  )
}

export default ServiceSection