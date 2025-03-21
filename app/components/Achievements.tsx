// components/Achievements.tsx
import React from 'react';
import Image from 'next/image';

const achievementsData = [
  {
    title: "Finalis 5 Besar Wirausaha Muda Pemula 2024",
    description: "Kategori Sociopreneur se-Nasional dari KEMENPORA RI",
    imageUrl: "/Achievements_Assets/Finalis_5_Besar_Wirausaha_Muda_Pemula_2024.jpeg", // Ganti dengan path gambar yang sesuai
  },
  {
    title: "Lolos 225 Besar Lomba Wismilak Diplomat Success Challenge Season 15",
    description: "Tahun 2024",
    imageUrl: "/Achievements_Assets/Lolos_450_Besar_Lomba_Wismilak.png", // Ganti dengan path gambar yang sesuai
  },
];

const Achievements = () => {
  return (
    <section className="py-10 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6">Prestasi</h2>
        <p className="text-center text-lg text-gray-700 mb-4">
          Berikut Pencapaian kami dari awal terbentuk hingga saat ini.
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          {achievementsData.map((achievement, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden max-w-xs w-full">
              <Image
                src={achievement.imageUrl}
                alt={achievement.title}
                width={400}
                height={250}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{achievement.title}</h3>
                <p className="text-gray-600">{achievement.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;