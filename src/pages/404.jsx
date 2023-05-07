import Layout from "@/components/HomeLayout";
import SEO from "@/components/Seo";
import Image from "next/image";
import Link from "next/link";

const NotFoundPage = () => {
  return (
    <>
      <SEO title="404 - TailwindTap" />
      <div className="mt-16">
        <div className="w-full h-[500px] relative flex items-center ">
          <Image src="/404.svg" alt="404 image not found" fill />
        </div>
        <div className="flex mb-10 justify-center">
          <Link href="/">
            <button className="py-3 rounded bg-themeColor-600 hover:bg-themeColor-700 px-6 font-bold uppercase text-white shadow-md transition text-sm duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none active:shadow-lg">
              Back to Home
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};
export default NotFoundPage;

NotFoundPage.getLayout = (page) => {
  return <Layout>{page} </Layout>;
};
