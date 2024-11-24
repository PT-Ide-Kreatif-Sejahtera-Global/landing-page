import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const HeroSection = () => {
  return (
    <div className='max-h-screen-hpkecil lg:h-full'>
      <div className='relative z-0 self-stretch w-full'>
        <div className='inset-x-0 bottom-0 pt-[340px]'>
          <img src="/hero/wave.png" alt="wave-background" className='top-10' />
        </div>
        <div className='absolute inset-0 z-10 px-20 py-10'>
          <div className='flex flex-row justify-evenly'>
          <div className='flex flex-col justify-center gap-4'>
            <div className='text-6xl font-bold w-[500px]'>Grow your unique
            talent with us !</div>
            <div>Improve your skill to build your personal branding.</div>
            <button className='px-[20px] py-[10px] bg-[#ACF826] hover:bg-[#9cdd2c] text-[16px] font-bold rounded-xl w-[120px]'>Join Now</button>
          </div>
          <div>
            <img src="/hero/hero1.png" alt="band" className='h-[500px]' />
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection