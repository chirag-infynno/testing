import Introduction from "@/components/common/Introduction";
import Customization from "@/components/Customization";
import Faq from "@/components/Faq";
import PopularComponents from "@/components/PopularComponents";
import PopularTemplates from "@/components/PopularTemplates";
import HomeBg from "../../public/assets/common/line.png";
import Image from "next/image";
import Layout from "@/components/HomeLayout";
import SEO from "@/components/Seo";
import ReactGa from "react-ga";
import { useEffect } from "react";
// UA-267446080-1

const id = "UA-267446080-1";
ReactGa.initialize(id);

export default function Home() {
  const [visitorCount, setVisitorCount] = useState(0);
  useEffect(() => {
    ReactGa.pageview(window.location.pathname);
  }, []);

  useEffect(() => {
    setVisitorCount((prevCount) => prevCount + 1);
  }, []);
  return (
    <>
      <SEO
        image={`${process.env.NEXT_PUBLIC_APP_URL}/seo/homepage.png`}
        title="TailwindTap - Best Pre-Made TailwindCSS Components, Template"
        description="TailwindTap offers free open-source starter components & templates in Plain HTML, React, VueJs & Laravel for SaaS, SPAs, Dashboards, NFT & Startup Landing pages."
        keywords="Tailwind CSS components, Tailwind CSS templates, Open-source Tailwind CSS, Ready-made components, Responsive components, Plain HTML templates, React templates, VueJs templates, Laravel-supported templates, SaaS website templates, SPA templates, Admin dashboard templates, NFT landing page templates, Startup product templates, Royalty-free components"
      />
      <div className="relative">
        <Image src={HomeBg} className="z-0" fill alt="homebg" />
        <div className="relative">
          {" "}
          <h1 className="text-8xl text-red-600">user</h1>
          <h1 className="text-8xl text-red-600">{visitorCount}</h1>
          {/* <Introduction /> */}
        </div>
        <div className="relative mt-10">
          <Customization />
        </div>
        <div className="relative mt-14">
          <PopularComponents />
        </div>
        <div className="relative mt-24">
          <PopularTemplates />
        </div>
        <div className="relative mt-10">
          <Faq />
        </div>
      </div>
    </>
  );
}

Home.getLayout = (page) => {
  return <Layout>{page} </Layout>;
};
