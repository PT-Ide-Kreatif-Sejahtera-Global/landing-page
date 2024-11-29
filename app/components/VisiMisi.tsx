import React from "react";

const VisiMisi = () => {
  return (
    <div className="container max-w-screen-2xl mx-auto xl:px-20 flex flex-col xl:flex-row ">
      <div className="basis-1/2 flex flex-col text-[18px] bg-slate-50 p-12">
        <div>
          <span className="font-bold">VISI</span> <br />
          <hr />
          <p className="text-justify">
            Menjadikan iDeaThings sebagai perusahaan sociopreneur yang
            menciptakan lingkungan inklusif bagi seluruh lapisan masyarakat.
            Kami berkomitmen untuk menyediakan peluang kerja bagi kaum difabel
            dan menjawab tantangan yang dihadapi oleh kaum marjinal. Melalui
            visi ini, kami berharap dapat membuka berbagai kesempatan emas untuk
            mewujudkan masyarakat yang lebih inklusif dan berdaya.
          </p>{" "}
          <br />
          <span className="font-bold">MISI</span> <br />
          <hr />
          <p className="text-justify">
            iDeaThings menghadirkan peluang kerja bagi kaum marjinal, terutama
            mereka yang kurang memiliki akses pendidikan, sebagai langkah nyata
            untuk menciptakan perubahan sosial. Kami bertekad untuk memperluas
            dampak usaha ini dengan mengembangkan inovasi di berbagai bidang,
            seperti pengembangan aplikasi, EduTech, E-Commerce, dan sektor
            lainnya, demi membangun ekosistem yang inklusif dan berkelanjutan.
          </p>
        </div>
        <div></div>
      </div>
      <div className="basis-1/2 text-5xl xl:text-7xl order-first xl:order-last flex items-center bg-lime-400 xl:hover:text-[80px] transition-all p-12 font-semibold">
        Vision and Mision
      </div>
    </div>
  );
};

export default VisiMisi;
