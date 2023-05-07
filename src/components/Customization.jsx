import { COMPONENT_LIST } from "@/utils/constant";
import React from "react";
import PreviewSecion from "./PreviewSection";
import { TemplateConstant } from "@/utils/templateconstant";
import Link from "next/link";

const Customization = () => {
  return (
    <div className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center px-5 sm:px-8 md:px-10">
      <div className="flex flex-col gap-2">
        <h2 className="font-semibold text-xl sm:text-3xl md:text-4xl leadin-[59px] text-textColor-80">
          Customize Top Quality ready-Made Tailwind CSS Components
        </h2>
        <div className="border md:border-2 rounded-xl border-themeColor-600 w-16 md:w-40 h-0"></div>
        <p className="font-normal text-sm sm:text-lg md:text-xl text-textColor-60">
          {/* You may put over well-made {COMPONENT_LIST.length}&nbsp;+
          <Link href="/components">&nbsp;Components&nbsp;</Link>
          and {TemplateConstant.length}&nbsp;+&nbsp;
          <Link href="templates">Templates</Link> page into your Tailwind
          projects and modify them as you like. They are all professionally
          designed and fully responsive. */}
          Royalty-free Tailwind CSS components to simply copy and paste the code
          into your website. Plus, with our customizable code, you can easily
          make adjustments to the design and functionality of each component,
          ensuring that your website looks and works exactly as you want it to.
          Easy to Use, Easy to Customize!
        </p>
      </div>
      <div className="relative w-full h-full">
        <PreviewSecion
          component={
            COMPONENT_LIST.filter((data) => data.slug == "spotlight")[0]
          }
          page="components"
          array_map={COMPONENT_LIST}
          query_slug="spotlight"
          setComponentHeight={true}
        />
      </div>
    </div>
  );
};

export default Customization;
