import React from "react";

const About = () => {
  return (
    <div className="container max-w-screen-2xl mx-auto px-20">
      <div className="flex flex-row">
        <div className="basis-1/2 bg-[#e6fa9c] p-12 font-semibold text-7xl">
          What is iDeaThings ?
        </div>
        <div className="basis-1/2 px-12 flex items-center bg-slate-50">
          <div className="text-[18px] text-justify">
            <span className="font-bold">iDeaThings</span> is a sociopreneur in the field of inclusion that empowers
            human resources in various business fields that have been
            incorporated as PT (Perseroan Terbatas). Currently our company is starting a business in
            the fields of <span className="font-bold"> Education, E-Commerce, Creative and Information
            Technology Services </span> under the iDeaThings brand. iDeaThings is a
            sociopreneur brand in various business fields.
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
