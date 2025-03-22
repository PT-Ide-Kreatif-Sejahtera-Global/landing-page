import React from 'react';
import Link from 'next/link'; // Pastikan untuk mengimpor Link dari Next.js
import Image from 'next/image'; // Pastikan untuk mengimpor Image dari Next.js
import { FaStar } from 'react-icons/fa'; // Menggunakan ikon bintang dari react-icons

const DigitalAgencySection = () => {
  return (
    <div className="bg-gray-100 px-4 lg:px-20 py-10"> {/* Menggunakan latar belakang abu-abu dan padding vertikal */}
      <h2 className="text-2xl lg:text-3xl font-bold text-center mb-6">Jasa Digital Agensi</h2>
      
      <Link href="https://wa.me/085161609396/" className="text-center xl:text-start py-2 px-3 bg-lime-400/50 rounded-lg font-bold flex justify-center items-center mx-auto w-60">
        <div className="flex flex-col justify-center">
          <p className="text-sm">Jasa Digital Agency</p>
        </div>
        <Image 
          src="/whatsapp.png" // Ganti dengan path yang benar untuk gambar WhatsApp
          width={40}
          height={40}
          alt="WhatsApp"
        />
      </Link>

      <p className="text-center text-2xl mb-8 mt-5">
        Testimoni
      </p>

      <div className="flex flex-col items-center">
        <div className="flex mb-2">
          {[...Array(5)].map((_, index) => (
            <FaStar key={index} className="text-yellow-500" />
          ))}
        </div>
        <p className="text-center text-lg italic">
          "Izinkan saya mengulas apa yang anda buat kemarin, untuk desainnya sangat bagus dan menyesuaikan dengan tren masa kini! Saya berikan bintang 5 untuk karya ini."
        </p>
        <p className="text-center text-sm text-gray-600 mt-2">
          - Bernardus Andre Agusta, CEO PT. Spesial Karya Mandiri
        </p>
      </div>
    </div>
  );
};

export default DigitalAgencySection;