import React from 'react'

const HeroSection = () => {
  return (
    <div className='max-h-screen-hpkecil lg:h-full'>
      <div className='relative z-0 self-stretch w-full'>
        <div className='inset-x-0 bottom-0 pt-[300px]'>
          <img src="/hero/wave.png" alt="wave-background" className='top-10' />
        </div>
        <div className='absolute inset-0 z-10 px-20 py-10'>
          <div>
            <div>Grow your unique
            talent with us !</div>
            <div>Improve your skill to build your personal branding.</div>
            <button className='px-[20px] py-[10px] bg-[#ACF826] text-[16px] font-bold rounded-xl'>Join Now</button>
          </div>
          <div>gambar</div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection