import SpotlightCard from "@/components/card/spotlight/CardReact";
import { useRouter } from "next/router";

const Card = () => {
  const router = useRouter();
  return (
    <>
      <SpotlightCard color={router?.query?.color} />
    </>
  );
};
export default Card;
