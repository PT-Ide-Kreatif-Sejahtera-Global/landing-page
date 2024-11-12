'use client'
import React from 'react'
import Image from 'next/image'
import { MdMailOutline } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";

const FOOTERCONTACT = [
  {
    icon:<MdMailOutline />,
    title:"email@mail.com"
  },
  {
    icon:<FaInstagram />,
    title:"@ideathings.id"
  },
  {
    icon:<FiYoutube />,
    title:"youtube.com/ideathings"
  }

]


const Footer = () => {
  return (
    <div className='px-4 nd:px-20 bg-footer '>
        <div className='grid grid-cols-3'>
            <div className='flex flex-col gap-3 justify-center'>
                <div className='flex  items-center gap-3 text-white'>
                    <Image width={50} height={50} className="w-[50px] h-[50px] rounded-full" src="/logoideathings.png" alt="Logo" /> 
                    <h1 className='font-bold'>IDeaThings</h1>
                </div>
                <div className='text-white flex flex-col'>
                    <h1 className='font-bold'>PT.Ide Kreatif Sejahtera Global</h1>
                    <p className='text-sm'>PT. Ide Kreatif Sejahtera Global adalah perusahaan sosial
                    yang di bidang jasa dan lorem ipsum dolor si amet</p>
                </div>
            </div>

             <div className='text-white flex flex-col gap-2 justify-center items-center'>
                 <h1 className='font-bold'>Our Services</h1>
                 <ul className='flex flex-col gap-1'>
                     <li>Education</li>
                     <li>Product</li>
                     <li>Digital Talent</li>
                 </ul>
             </div>
            <div className='gap-2 flex flex-col justify-center items-center'>
              <h1 className='font-bold text-white'>Contact Us</h1>
                {FOOTERCONTACT.map((item, i) => (
                  <ul key={i} className='text-white flex items-center gap-3'>
                      <li className='mt-1'>{item.icon}</li>
                      <li>{item.title}</li>                   
                  </ul>
                ))}
                 
            </div>
            
        </div>
    </div>
  )
}

export default Footer