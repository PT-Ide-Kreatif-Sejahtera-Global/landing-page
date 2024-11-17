import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const HeroSection = () => {
  return (
    <>
      <div className='px-4 md:px-28 py-24'>
          <div className='text-center gap-10 flex flex-col justify-center items-center'>
              <h1 className='text-4xl md:text-5xl font-bold'>Grow Your Unique Talent With IdeaThings!</h1>
              <h2 className='text-xl md:text-2xl font-bold'>Temukan bakat dan kembangkan bisnis mu bersama kami</h2>
              <p className='md:text-xl'>Bersama IdeaThigs mari wujudkan mimpimu!</p>

              <Link href={'/'} target='_blank'>
                  <button className='bg-bran py-3 px-5 rounded-xl font-bold animate-bounce hover:scale-105 hover:text-white hover:bg-black duration-300'>register now</button>
              </Link>
          </div>
      </div>
      <div className='bottom-0 '>
          <Image className='w-full h-auto' src={'/floor.svg'} width={200} height={200} alt={''}></Image>
      </div>
    </>
  )
}

export default HeroSection