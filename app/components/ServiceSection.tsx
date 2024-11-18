import React from 'react'
import Link from 'next/link';

const text = [
  {
    title: 'form a idea to become things with ideathings'
  },
  {
    title: 'Make your dreams come true and develop your talents with us!'
  },
]



const ServiceSection = () => {
  return (
    <div className='px-4 lg:px-20 mt-20 mb-20  items-center'>
      <div className='col flex-col md:flex-row gap-5 lg:flex-row m-auto w-full text-center items-center justify-between '>
        <div className='flex flex-col text-center gap-3 md:text-start lg:text-center'>
          <h1 className='text-xl lg:text-2xl font-bold '>
          Our Services
          </h1>
          <p className='text-sm'>
          Bersama ideathings kembangkan dirimu dan bisnis mu!

          </p>
        </div>
        <div>
         
        </div>
      </div>

      <div className='col md:grid-cols-2 lg:grid-cols-4 lg:justify-center justify-between items-center w-full gap-20 mt-10'>
        <div className="grid lg:flex justify-around">
          {text.map((item, i) => (
            <div key={i} className='' >
              <div className='w-96 bg-lime-100 h-44 relative overflow-hidden lg:mt-0 mt-5 rounded-lg hover:scale-105 duration-300 group cursor-pointer object-cover'>
                <div className='absolute bottom-0 w-full group-hover:bg-gradient-to-t bg-transparent  from-white to-transparent px-3 -translate-x-full py-4 group-hover:translate-x-0 duration-300'>
                  <p className=' text-black font-bold text-xl'>{item.title}</p>
                  <p className='text-sm text-black'>Lorem Ipsum</p>
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