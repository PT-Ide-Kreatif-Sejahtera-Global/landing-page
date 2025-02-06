import { useRouter } from "next/navigation";
import React from "react";

const HeroSection = () => {
  const router = useRouter();

  const handleNavigation = () => {
    router.push('https://ideathings.id//education'); 
  };
  return (
    <div className="max-h-full md:h-full mt-10 xl:mt-0">
      <div className="relative z-0 w-full h-full">
        <div className="inset-x-0 bottom-0 pt-[525px] xl:pt-[340px]">
          <img src="/hero/wave.png" alt="wave-background" className="w-full h-auto object-cover" />
        </div>
        <div className="absolute inset-0 flex flex-col xl:flex-row"> {/* Meningkatkan z-index untuk teks */}
          <div className="flex flex-col justify-center items-center xl:items-start gap-6 xl:gap-4 w-full xl:w-[500px] px-5 xl:px-20 py-10 z-20">
            <div className="text-5xl text-center xl:text-start xl:text-6xl font-bold">
              Grow your unique talent with us!
            </div>
            <div className="text-center xl:text-start">Improve your skill to build your personal branding.</div>
            <button onClick={handleNavigation} className="py-[10px] bg-lime-400 hover:bg-[#9cdd2c] text-[20px] font-bold rounded-xl w-[150px]">
              Join Now
            </button>
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
