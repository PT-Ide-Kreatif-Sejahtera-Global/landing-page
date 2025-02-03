import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const text = [
  {
    title: 'Olimpiade Paris 2024: Wujud Semangat Inklusif',
    desc: 'Olimpiade Paris 2024 merupakan acara olahraga internasional yang sangat dinantikan, terutama karena inisiatifnya yang ramah disabilitas.',
    img: '/Blog_Assets/blog_1.jpeg',
    url: 'https://ideathings.id/blog/bagaimana-cara-mewujudkan-fasilitas-umum-yang-ramah-disabilitas/'
  },
  {
    title: 'iDeathings: Mempersiapkan Penyandang Disabilitas Siap Kerja',
    desc: 'PT. IDE KREATIF SEJAHTRA GLOBAL dengan brand terbaru iDeathings mendukung edukasi dan pemberdayaan penyandang disabilitas di Indonesia.',
    img: '/Blog_Assets/blog_2.jpeg',
    url: 'https://ideathings.id/blog/bagaimana-cara-mewujudkan-fasilitas-umum-yang-ramah-disabilitas/'
  },
  {
    title: 'Cara Mewujudkan Fasilitas Umum yang Ramah Disabilitas',
    desc: 'Fasilitas umum yang ramah disabilitas adalah salah satu indikator penting untuk menilai tingkat inklusivitas suatu wilayah.',
    img: '/Blog_Assets/blog_3.jpeg',
    url: 'https://ideathings.id/blog/bagaimana-cara-mewujudkan-fasilitas-umum-yang-ramah-disabilitas/'
  },
]



const ServiceSection = () => {
  const router = useRouter();

  const handleNavigation = () => {
    router.push('https://ideathings.id/blog/'); // Ganti '/target-page' dengan rute yang diinginkan
  };

  return (
    <div className='px-4 lg:px-20 mt-20 mb-20  items-center'>
      <div className='col flex-col md:flex-row gap-5 lg:flex-row m-auto w-full text-center items-center justify-between '>
        <div className='flex flex-col text-center gap-3 md:text-start lg:text-center'>
          <h1 className='text-xl lg:text-2xl font-bold '>
            Blog Kami
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
                <div className='w-96 bg-transparent h-96  relative overflow-hidden lg:mt-0 mt-5 rounded-lg hover:scale-105 duration-300 group cursor-pointer object-cover'>
                <Link href={item.url} passHref>
                  <div className="w-full z-30 h-44 rounded-lg absolute opacity-100 group-hover:opacity-80">
                    <Image
                      src={item.img}
                      alt={item.title}
                      className="rounded-lg h- border-black opacity-100 hover:opacity-100 duration-300"
                      fill
                    />
                    <div className="absolute bottom-0 w-full bg-gradient-to-t opacity-100 group-hover:opacity-0 rounded-t-lg from-black to-transparent px-3 py-4">
                      <p className="text-white font-bold text-lg">
                        {item.title}
                      </p>

                    </div>
                  </div>
                </Link>
                  <div className='absolute mt-4 -z-10 top-0 w-full group-hover:bg-gradient-to-t bg-transparent from-gray-50 to-transparent px-3 translate-y-0 py-4 group-hover:translate-y-40 duration-300'>
                  <Link href={item.url} passHref>
                    <p className=' text-black font-bold text-xl mb-2'>{item.title}</p>
                    <p className='text-sm text-black mb-2'>{item.desc}</p>
                </Link>
                      <button onClick={handleNavigation} className="bg-lime-400 text-black w-full font-bold px-6 py-2 rounded-md hover:bg-[#9cdd2c] transition duration-300">
                      <span className="opacity-0 group-hover:opacity-100">MORE</span>
                      </button>
                    
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