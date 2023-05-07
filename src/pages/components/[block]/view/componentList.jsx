import Animation from "@/components/animation/animation-infinite/AnimationReact";
import ButtonSample1 from "@/components/button/sample1/ButtonSampleReact";
import ButtonSample2 from "@/components/button/sample2/ButtonSampleReact";
import ButtonSample3 from "@/components/button/sample3/ButtonSampleReact";
import Cards from "@/components/card/profilecard/CardReact";
import CheckBox from "@/components/checkbox/checkbox-sample-1/CheckboxReact";
import CreditCard2 from "@/components/creditcard/card-2/CreditcardReact";
import CreditCard3 from "@/components/creditcard/card-3/CreditcardReact";
import CreditCard1 from "@/components/creditcard/card-1/CreditcardReact";
import Input from "@/components/input/input-sample-1/InputReact";
import RadioButton from "@/components/radiobutton/radiobutton-sample-1/RadioButtonReact";
import Timer1 from "@/components/timer/timer-1/TimerReact";
import Timer2 from "@/components/timer/timer-2/TimerReact";
import Timer3 from "@/components/timer/timer-3/TimerReact";
import Timer4 from "@/components/timer/timer-4/TimerReact";
import Timer5 from "@/components/timer/timer-5/TimerReact";
import SpotlightCard from "@/components/card/spotlight/CardReact";
import PricingReact from "@/components/pricing/sample-1/PricingReact";
import Pricing from "@/components/pricing/sample-2/PricingReact";
import Sample3 from "@/components/pricing/sample-3/PricingReact";
import Sample4 from "@/components/pricing/sample-4/PricingReact";
import Sample5 from "@/components/pricing/sample-5/PricingReact";
import Carousel from "@/components/carousel/carousel-1/CarouselReact";
import Carousel2 from "@/components/carousel/carousel-2/CarouselReact";
import Footer1 from "@/components/footer/example-1/FooterReact";
import Header1 from "@/components/header/header-1/HeaderReact";

const componetList = (targetKey, color) => {
  if (targetKey === "button-sample1") return <ButtonSample1 color={color} />;
  else if (targetKey === "button-sample2")
    return <ButtonSample2 color={color} />;
  else if (targetKey === "button-sample3")
    return <ButtonSample3 color={color} />;
  else if (targetKey === "pricing-sample-1")
    return <PricingReact color={color} />;
  else if (targetKey === "pricing-sample-2") return <Pricing color={color} />;
  else if (targetKey === "pricing-sample-3") return <Sample3 color={color} />;
  else if (targetKey === "pricing-sample-4") return <Sample4 color={color} />;
  else if (targetKey === "pricing-sample-5") return <Sample5 color={color} />;
  else if (targetKey === "creditcard-card-1")
    return <CreditCard1 color={color} />;
  else if (targetKey === "creditcard-card-2")
    return <CreditCard2 color={color} />;
  else if (targetKey === "creditcard-card-3")
    return <CreditCard3 color={color} />;
  else if (targetKey === "carousel-carousel-1")
    return <Carousel color={color} />;
  else if (targetKey === "carousel-carousel-2")
    return <Carousel2 color={color} />;
  else if (targetKey === "card-profilecard") return <Cards color={color} />;
  else if (targetKey === "card-spotlight")
    return <SpotlightCard color={color} />;
  else if (targetKey === "animation-animation-infinite")
    return <Animation color={color} />;
  else if (targetKey === "input-input-sample-1") return <Input color={color} />;
  else if (targetKey === "radiobutton-radiobutton-sample-1")
    return <RadioButton color={color} />;
  else if (targetKey === "checkbox-checkbox-sample-1")
    return <CheckBox color={color} />;
  else if (targetKey === "timer-timer-1") return <Timer1 color={color} />;
  else if (targetKey === "timer-timer-2") return <Timer2 color={color} />;
  else if (targetKey === "timer-timer-3") return <Timer3 color={color} />;
  else if (targetKey === "timer-timer-4") return <Timer4 color={color} />;
  else if (targetKey === "timer-timer-5") return <Timer5 color={color} />;
  else if (targetKey === "footer-example-1") return <Footer1 color={color} />;
  else if (targetKey === "header-header-1") return <Header1 color={color} />;
  else return <p> NO Component</p>;
};

export default componetList;
