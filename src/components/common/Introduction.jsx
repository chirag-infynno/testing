import HtmlLogo from "@/utils/images/HtmlLogo";
import ReactLogo from "@/utils/images/ReactLogo";
import TailwindLogo from "@/utils/images/TailwindLogo";
import VueLogo from "@/utils/images/VueLogo";
import Image from "next/image";
import HomeBack from "../../../public/assets/common/home-back.png";
import LaravelLogo from "@/utils/images/LaravelLogo";

const Introduction = () => {
  return (
    <div>
      <div className="mt-16 w-full relative font-nunito flex justify-center items-center h-auto py-5 md:py-8">
        <Image src={HomeBack} fill alt="Home background image not found" />
        <div className="relative max-w-[1920px] lg:px-14 xl:px-[110px] text-center flex-col gap-5 md:gap-9 flex">
          <div className=" flex flex-col gap-4 text-themeColor-50">
            <h1 className="font-bold text-2xl md:text-4xl xl:leading-[70px] text-center tracking-wide">
              Free Open-Source Tailwind CSS Starter Components and Templates
            </h1>

            <p className="text-base sm:text-lg md:text-2xl tracking-wider text-center">
              We offers free open-source starter components and templates in
              Plain <strong>HTML, React, VueJs,</strong> and
              <strong> Laravel</strong> for SaaS, SPAs, Dashboards, NFT, and
              Startup Landing pages. Choose from our vast selection of
              royalty-free <strong>Tailwind CSS</strong> components and
              templates to create a unique website in minutes. With TailwindTap,
              you can easily build websites for any platform, without any
              hassle.
            </p>
          </div>

          <div className="flex justify-center gap-8 md:gap-14 w-full px-5 sm:px-0">
            <div className="cursor-pointer group relative">
              <span className="absolute -bottom-7 -left-5 scale-0 transition-all rounded bg-themeColor-50 p-1 text-xs text-themeColor-900 font-bold md:group-hover:scale-100 whitespace-nowrap">
                Tailwind CSS
              </span>
              <TailwindLogo className="w-full" />
            </div>
            <div className="cursor-pointer  group relative">
              <span className="absolute -bottom-7 right-0 scale-0 transition-all rounded bg-themeColor-50 p-1 text-xs text-themeColor-900 font-bold md:group-hover:scale-100">
                HMTL
              </span>
              <HtmlLogo className="w-full" />
            </div>
            <div className="cursor-pointer  group relative">
              <span className="absolute -bottom-7 right-0 scale-0 transition-all rounded bg-themeColor-50 p-1 text-xs text-themeColor-900 font-bold md:group-hover:scale-100">
                ReactJs
              </span>
              <ReactLogo className="w-full" />
            </div>
            <div className="cursor-pointer group relative">
              <span className="absolute -bottom-7 right-0 scale-0 transition-all rounded bg-themeColor-50 p-1 text-xs text-themeColor-900 font-bold md:group-hover:scale-100">
                VueJS
              </span>
              <VueLogo className="w-full" />
            </div>
            <div className="cursor-pointer group relative">
              <span className="absolute -bottom-7 right-0 scale-0 transition-all rounded bg-themeColor-50 p-1 text-xs text-themeColor-900 font-bold md:group-hover:scale-100">
                Laravel
              </span>
              <LaravelLogo className="w-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Introduction;
