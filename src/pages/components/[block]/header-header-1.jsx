import Header from "@/components/header/header-1/HeaderReact";
import { useRouter } from "next/router";

const Header1 = () => {
  const router = useRouter();
  return (
    <>
      <Header color={router?.query?.color} />
    </>
  );
};
export default Header1;
