import React from "react";
import Accordion from "./Accordion";
import FaqBg from "../../public/assets/common/Faq_bg.svg";
import Image from "next/image";

const Faq = () => {
  const accData = [
    {
      title: "What JS framework is used?",
      content:
        "The JS framework used in our project is React, along with Headless UI and React Icons.",
    },
    {
      title: "What version of Tailwind CSS is used?",
      content:
        "All the components is designed and developed for the latest version of Tailwind CSS, which is currently Tailwind CSS v3.3.",
    },
    {
      title: "What browsers are supported?",
      content:
        "Our components are designed to work in the latest, stable releases of all major browsers, including Chrome, Firefox, Safari, and Edge.We don't support Internet Explorer 11.",
    },
    {
      title: "Can I use this for client projects?",
      content:
        "Yes it can be used for custom websites and creating templates which can be sold to multiple clients.",
    },
    {
      title: "Do you offer technical support?",
      content: (
        <>
          {
            "Yes, we offer paid technical support. You can fill this form and we will get back to you "
          }
          <a
            className="text-themeColor-900 font-bold"
            href="https://infynno.com/get-a-quote/"
          >
            Get A Quote - Infynno Solutions
          </a>
        </>
      ),
    },
  ];
  return (
    <div className="w-full md:pb-20 pb-10">
      <div className="relative w-full h-full mx-auto flex flex-col items-center">
        <div className="w-full max-w-[1900px] h-auto">
          <div className="relative w-full h-40 lg:h-80 ">
            <Image src={FaqBg} alt="faq" fill />
          </div>
        </div>
        <div className="flex flex-col md:gap-2 absolute top-1/3">
          <h2 className="font-semibold  text-xl sm:text-3xl md:text-4xl xl:text-5xl leading-tight text-textColor-80">
            FAQ
          </h2>
          <div className="w-2 md:w-5 border md:border-2 border-themeColor-600 rounded-lg"></div>
        </div>
      </div>
      <div className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center sm:px-8 md:px-10 mt-[-30px]">
        {accData.map((acc, index) => {
          return (
            <div className="w-full" key={index}>
              <Accordion title={acc.title} content={acc.content} />
              <div className="w-full h-0 border border-[#A1C1EF]"></div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Faq;
