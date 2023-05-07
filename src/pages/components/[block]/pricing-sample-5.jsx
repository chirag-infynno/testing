import { useRouter } from "next/router";
import PricingReact from "../../../components/pricing/sample-5/PricingReact";

const PricingSample5 = () => {
  const router = useRouter();
  return (
    <>
      <PricingReact color={router?.query?.color} />
    </>
  );
};
export default PricingSample5;
