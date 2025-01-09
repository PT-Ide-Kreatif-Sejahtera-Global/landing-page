import React from 'react'
import { PiArrowUpRightBold } from "react-icons/pi";
import { FaCheck } from "react-icons/fa";



const IMGITEM = [
  {
    img:'/Education_Assets/designer_course.webp',
    title:'Canva untuk UMK ramah disabilitas Daksa, Low-Vision, Disabilitas Rungu, dan Autistik',
    text:"Temukan cara mudah mendesain dengan Canva yang inklusif dan ramah disabilitas",
    text2:"Jadikan bisnis UMK Anda lebih profesional dan menarik perhatian pelanggan"
  },
  {
    img:'/Education_Assets/editor_course.webp',
    title:'Capcut untuk UMKM versi Masyarakat Umum',
    text:"Edit video bisnis Anda dengan mudah menggunakan Capcut",
    text2:"Tingkatkan daya tarik UMKM Anda dengan konten visual yang kreatif dan memukau"

  },
  {
    img:'/Education_Assets/fasion_course.webp',
    title:'Menjadi Fashion Desainer untuk UMKM Ramah Pemula',
    text:"Pelajari langkah awal menjadi fashion desainer untuk UMKM, mulai dari nol",
    text2:"Kembangkan kreativitas Anda dan buat produk UMKM yang unik dan stylish"

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
                <a href="https://ideathings.id/education" target='_blank'>
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

                  <div className='border-4 border-black w-80 h-96  group hover:opacity-100 duration-300 relative overflow-hidden  object-cover '>
                      <img className='relative group-hover:scale-105 duration-300 group-hover:blur-md'  src={item.img} alt="Logo"       />
                      <div className='absolute top-0   text-white  w-full '>
                          <div className='p-3 flex flex-col gap-2'>
                            <p className='font-bold text-xl drop-shadow-md'>{item.title}</p>
                            {/* <div className='border border-white'></div> */}
                          </div>
                      </div>
                      <div className='flex flex-col  gap-6 absolute bottom-0 w-fullh-40 bg-gradient-to-t  from-black to-transparent   translate-y-full py-4 group-hover:translate-y-0 duration-300'>
                          <div className='p-3'>
                              <div className='flex flex-col gap-3'>
                                  <div className='flex gap-3'>
                                      <FaCheck  className='text-white'/>
                                      <p className='text-xs text-white'>{item.text}</p>
                                  </div>
                                  <div className='flex gap-3'>
                                      <FaCheck  className='text-white'/>
                                      <p className='text-xs text-white'>{item.text2}</p>
                                  </div>
                              </div>
                            <p className='text-sm '></p>

                            <a href="https://ideathings.id/education" target='_blank' className='border border-black rounded-xl mt-3 h-10 flex justify-center text-center items-center w-full bg-lime-200 '>More</a>
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