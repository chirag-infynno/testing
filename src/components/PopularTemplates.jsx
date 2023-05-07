import { TemplateConstant } from "@/utils/templateconstant";
import React from "react";
import CustomSlider from "./CustomSlider";

const PopularTemplates = () => {
  return (
    <div className="w-full max-w-7xl mx-auto flex flex-col gap-6 md:gap-12 items-center justify-center px-5 sm:px-8 md:px-10">
      <div className="flex flex-col gap-1 justify-start w-full">
        <h2 className="font-semibold text-xl sm:text-3xl md:text-4xl leading-tight text-textColor-80">
          Production-ready Tailwind CSS templates for Every Need
        </h2>
        <div className="w-9 md:w-24 border md:border-2 border-themeColor-600 rounded-lg"></div>
        <p className="font-normal text-sm sm:text-lg md:text-xl text-textColor-60">
          TailwindTap provides stunning landing page templates for every need.
          Whether you need to create an e-commerce website, an admin dashboard,
          or a landing page for your startup, we have you covered. With our
          Plain React and Tailwind CSS-supported code, you can easily customize
          our pre-made templates to fit your specific needs.
        </p>
      </div>
      <div>
        <CustomSlider type="templates" sliderData={TemplateConstant} />
      </div>
    </div>
  );
};

export default PopularTemplates;
