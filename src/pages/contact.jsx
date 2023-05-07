import Layout from "@/components/HomeLayout";
import Contact from "@/components/Contact";
import SEO from "@/components/Seo";

const ContactPage = () => {
  return (
    <>
      <SEO
        title="Contact Us - TailwindTap"
        image={`${process.env.NEXT_PUBLIC_APP_URL}/seo/contactus.png`}
      />
      <div className="mt-16 lg:mt-32 lg:mb-12">
        <Contact />
      </div>
    </>
  );
};
export default ContactPage;

ContactPage.getLayout = (page) => {
  return <Layout>{page} </Layout>;
};
