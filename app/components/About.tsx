import React from "react";

const About = () => {
  return (
    <div className="container max-w-screen-2xl mx-auto xl:px-20">
      <div className="flex flex-col xl:flex-row">
        <div className="basis-1/2 flex items-center bg-lime-400 p-12 font-semibold text-5xl xl:text-7xl xl:hover:text-[80px] transition-all">
          What is iDeaThings ?
        </div>
        <div className="basis-1/2 p-12 flex items-center bg-slate-50">
          <div className="text-sm md:text-base text-justify">
            <span className="font-bold">iDeaThings</span>  adalah sociopreneur yang berkomitmen untuk
            menciptakan inklusi sosial dengan memberdayakan sumber daya manusia
            melalui berbagai bidang usaha yang telah berbadan hukum sebagai PT (Perseoran Terbatas).
            Saat ini, kami mengembangkan empat sektor utama: pendidikan,
            e-commerce, jasa kreatif, dan teknologi informasi, dengan
            menghadirkan brand unggulan <span className="font-bold">iDeaThings</span>. <span className="font-bold">iDeaThings</span> juga merupakan
            brand sociopreneur yang menjadi simbol inovasi dan keberlanjutan,
            berfokus pada pemberdayaan masyarakat serta menciptakan dampak
            positif yang merata di setiap sektor yang kami tekuni.
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
