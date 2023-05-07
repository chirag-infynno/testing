import Footer from "@/components/footer/example-1/FooterReact";
import { useRouter } from "next/router";

const InputSample1 = () => {
  const router = useRouter();
  return (
    <>
      <Footer color={router?.query?.color} />
    </>
  );
};
export default InputSample1;
