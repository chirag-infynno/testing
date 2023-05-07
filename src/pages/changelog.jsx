import MonthData from "@/components/common/MonthData";
import { COMPONENT_LIST } from "@/utils/constant";
import { TemplateConstant } from "@/utils/templateconstant";
import React, { useEffect, useState } from "react";
import compareDesc from "date-fns/compareDesc";
import Gradient from "../../public/assets/common/Line_Gradient.svg";
import Image from "next/image";
import Layout from "@/components/HomeLayout";
import SEO from "@/components/Seo";

const ChangeLog = () => {
  const [changelog, setChangeLog] = useState([]);
  const logDates = [];
  useEffect(() => {
    setChangeLog(
      [...COMPONENT_LIST, ...TemplateConstant].sort((d, d2) =>
        compareDesc(new Date(d.date), new Date(d2.date))
      )
    );
  }, []);

  return (
    <>
      <SEO
        title="Changelog - TailwindTap"
        image={`${process.env.NEXT_PUBLIC_APP_URL}/seo/changelog.png`}
        description="Evolution history of component and template in which month which tailwind tap is created"
      />
      <div className="mt-16 mb-8 flex flex-col w-full">
        <div>
          <Image
            src={Gradient}
            alt="gradient"
            fill
            className="object-cover bg-left"
          />
        </div>
        <div className="py-6 md:py-24 lg:py-30 flex items-center justify-center w-full bg-themeColor-200">
          <div className="flex flex-col gap-6 items-center justify-center">
            <div className="text-2xl md:text-[56px] font-semibold">
              Changelog
            </div>
            <div className="text-textColor-80 text-base md:text-[24px] font-normal leading-[33px] px-5 md:px-0  md:max-w-[592px] text-center">
              Weekly update log of free & premium tailwind CSS components and
              templates.
            </div>
          </div>
        </div>

        {changelog?.map((data, index) => {
          const cardData = changelog.filter(
            (d) =>
              new Date(d.date).getMonth() === new Date(data.date).getMonth()
          );

          if (logDates.includes(new Date(data.date).getMonth() + 1)) {
            return null;
          } else {
            logDates.push(new Date(data.date).getMonth() + 1);
          }

          return (
            <div key={index}>
              <MonthData cardData={cardData} />
            </div>
          );
        })}
      </div>
    </>
  );
};
export default ChangeLog;

ChangeLog.getLayout = (page) => {
  return <Layout>{page} </Layout>;
};
