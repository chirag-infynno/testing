import { TemplateConstant } from "@/utils/templateconstant";
import SEO from "@/components/Seo";
import SideLayout from "@/components/SideLayout";
import Layout from "@/components/HomeLayout";
import TemplateBG from "../../public/assets/common/listpageback.png";
import Image from "next/image";

const category = [
  {
    name: "All",
    type: "all",
  },
  {
    name: "3DNFT",
    type: "3dnft",
  },
  {
    name: "Crypto",
    type: "crypto",
  },
  {
    name: "Advocate",
    type: "advocate",
  },
  {
    name: "TBDesign",
    type: "tbdesign",
  },
  {
    name: "Dream Agency",
    type: "dreamagency",
  },
];

const Templates = () => {
  return (
    <>
      <SEO
        title="Templates - TailwindTap"
        image={`${process.env.NEXT_PUBLIC_APP_URL}/seo/templates.png`}
      />
      <div className="relative h-[200px] sm:h-48 top-16 w-full">
        <Image
          src={TemplateBG}
          fill
          alt="Template background image not found"
          className="object-cover"
        />
        <div className="absolute text-center lg:px-0 xl:px-28 px-3 md:px-7 h-full w-full flex justify-center items-center">
          <div className="flex flex-col justify-center items-center lg:w-2/3 gap-4 sm:gap-4 h-full">
            <div className="w-full flex justify-center ">
              <h1 className="font-semibold text-xl sm:text-3xl md:text-4xl xl:text-5xl leading-tight text-themeColor-50">
                Tailwind CSS
              </h1>
            </div>
            <p className="font-normal text-base sm:text-xl md:text-2xl leading-tight text-white">
              Examples of beautifully produced, completely responsive, and
              professionally designed templates that you can add to your
              Tailwind projects and modify as you like.
            </p>
          </div>
        </div>
      </div>
      <SideLayout
        listData={TemplateConstant}
        category={category}
        sidebarStyle="min-h-[calc(100vh-821px)]"
      />
    </>
  );
};
export default Templates;

Templates.getLayout = (page) => {
  return <Layout>{page} </Layout>;
};
