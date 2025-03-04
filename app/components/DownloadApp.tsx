// components/DownloadApp.tsx
import Image from "next/image";
import Link from "next/link";

const DownloadApp = () => {
  return (
    <div className="w-full flex flex-col gap-y-6 items-center py-6 bg-black">
      <h1 className="text-2xl md:text-3xl text-white font-bold">Get Our Apps</h1>
      <div className="flex flex-col justify-center items-center gap-y-4 md:flex-row gap-x-6">
        <Link href="#" className="w-fit flex gap-4 items-center justify-center">
          <Image 
            src="playstore.png"
            width={60}
            height={60}
            alt="playstore"
          />
          <div className="flex flex-col justify-center">
            <p className="text-white text-lg md:text-xl">Get it on</p> 
            <p className="text-white text-2xl md:text-3xl font-bold">Google Play</p>
          </div>
        </Link>
        <Link href="#" className="w-fit flex gap-4 items-center justify-center">
          <Image 
            src="app-store.png"
            width={60}
            height={60}
            alt="app-store"
          />
          <div className="flex flex-col justify-center">
            <p className="text-white text-lg md:text-xl">Download on the</p> 
            <p className="text-white text-2xl md:text-3xl font-bold">App Store</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default DownloadApp;