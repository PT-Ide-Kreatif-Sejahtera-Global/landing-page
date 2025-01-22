import { useRouter } from "next/navigation";
import React from "react";

const HeroSection = () => {
  const router = useRouter();

  const handleNavigation = () => {
    router.push('https://ideathings.id//education'); 
  };
  return (
    <div className="max-h-full md:h-full mt-10 xl:mt-0">
      <div className="relative z-0 self-stretch w-full">
        <div className="inset-x-0 bottom-0 pt-[525px] xl:pt-[340px]">
          <img src="/hero/wave.png" alt="wave-background" className="top-10" />
        </div>
        <div className="absolute inset-0 z-10 px-5 xl:px-20 py-10">
          <div className="flex flex-col xl:flex-row gap-5 justify-between">
            <div className="flex flex-col justify-center items-center xl:items-start gap-6 xl:gap-4">
              <div className="text-5xl text-center xl:text-start xl:text-6xl font-bold xl:w-[500px]">
                Grow your unique talent with us !
              </div>
              <div className="text-center xl:text-start ">Improve your skill to build your personal branding.</div>
              <button onClick={handleNavigation} className="py-[10px] bg-lime-400 hover:bg-[#9cdd2c] text-[20px] font-bold rounded-xl w-[150px] ">
                Join Now
              </button>
            </div>
            <div>
              <img src="/hero/hero1.png" alt="band" className="xl:h-[500px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
