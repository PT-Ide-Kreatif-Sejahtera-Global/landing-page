import React from 'react';
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
];

const ServiceSection = () => {
  const router = useRouter();

  const handleNavigation = () => {
    router.push('https://ideathings.id/blog/'); // Ganti '/target-page' dengan rute yang diinginkan
  };

  return (
    <div className='px-4 lg:px-20 mt-20 mb-20 items-center'>
      <div className='flex flex-col text-center gap-5 m-auto w-full'>
        <h1 className='text-2xl lg:text-3xl font-bold'>
          Blog Kami
        </h1>
        <p className='text-sm'>
          Bersama ideathings kembangkan dirimu dan bisnis mu!
        </p>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10'>
        {text.map((item, i) => (
          <div key={i} className='relative bg-transparent rounded-lg overflow-hidden group cursor-pointer'>
            <Link href={item.url} passHref>
              <div className='relative w-full h-64'>
                <Image
                  src={item.img}
                  alt={item.title}
                  layout='fill'
                  className='object-cover rounded-lg transition-transform duration-300 group-hover:scale-105'
                />
                <div className='absolute bottom-0 w-full bg-gradient-to-t from-black to-transparent opacity-80 px-3 py-4'>
                  <p className='text-white font-bold text-lg'>{item.title}</p>
                </div>
              </div>
            </Link>
            <div className='p-4'>
              <Link href={item.url} passHref>
                <p className='text-black font-bold text-xl mb-2'>{item.title}</p>
                <p className='text-sm text-black mb-2'>{item.desc}</p>
              </Link>
              <button onClick={handleNavigation} className='bg-lime-400 text-black w-full font-bold px-6 py-2 rounded-md hover:bg-[#9cdd2c] transition duration-300'>
                MORE
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceSection;