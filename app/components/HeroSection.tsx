import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import Link from "next/link";

const HeroSection = () => {
  const router = useRouter();

  const handleNavigation = () => {
    router.push('https://ideathings.id//education'); 
  };
  return (
    <div className="max-h-full md:h-full">
      <div className="relative z-0 w-full h-full">
        {/* <div className="inset-x-0 bottom-0 pt-[525px] xl:pt-[340px]">
          <img src="/hero/wave.png" alt="wave-background" className="w-full h-auto object-cover" />
        </div> */}
        <Image
          src="/hero/wave.png"
          alt="wave-backround"
          width={200}
          height={500}
          className="w-full h-screen object-cover"
        />
        <div className="absolute inset-0 flex flex-col xl:flex-row"> {/* Meningkatkan z-index untuk teks */}
          <div className="flex flex-col justify-center items-center xl:items-start gap-6 xl:gap-4 w-full xl:w-[500px] px-5 xl:px-20 py-10 z-20 bg-lime-400/40 md:bg-transparent min-h-screen">
            <div className="text-5xl text-center xl:text-start xl:text-6xl font-bold">
              Grow your unique talent with us!
            </div>
            <div className="text-center xl:text-start py-2 px-4 bg-lime-400/50 rounded-lg font-bold">Improve your skill to build your personal branding.</div>
            <button onClick={handleNavigation} className="py-4 w-full bg-gradient-to-r from-lime-400 to-lime-200 text-xl md:text-2xl font-bold rounded-xl px-8 hover:py-8 hover:px-10 duration-300">
              Join Now
            </button>
            <Link href="https://wa.me/085161609396/" className="text-center xl:text-start py-2 px-4 bg-lime-400/50 rounded-lg font-bold flex justify-center">
            <div className="flex flex-col justify-center">
              <p>Jasa Digital</p>
              <p>Agency</p>
            </div>
              <Image 
                src="whatsapp.png"
                width={60}
                height={60}
                alt="whatsapp"
              />
            </Link>
          </div>
          <div className="absolute right-0 top-0 h-full w-auto z-10"> {/* Gambar di belakang teks */}
            <img src="/hero/hero1.png" alt="band" className="h-full w-auto object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
