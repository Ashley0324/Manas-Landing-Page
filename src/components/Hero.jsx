import { curve, heroBackground, robot } from "../assets";
import Button from "./Button";
import Section from "./Section";
import { useRef } from "react";
import CompanyLogos from "./CompanyLogos";

const Hero = () => {
  const parallaxRef = useRef(null);

  return (
    <Section
      className="pt-[12rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <div className="container relative " ref={parallaxRef}>
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]" >
          <h1 className="h1 mb-6">
            Build your Emotional &nbsp;AI-bot,&nbsp; with {` `}
            <span className="inline-block relative">
              Manas{" "}
              <img
                src={curve}
                className="absolute top-full left-0 w-full xl:-mt-2"
                width={624}
                height={28}
                alt="Curve"
              />
            </span>
          </h1>
          <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
            Smarter, Faster and More Powerful
          </p>
          <Button href="/login">
            Enter Now
          </Button>
        </div>
        <div className="absolute -top-[80%] left-1/2 w-[200%] -translate-x-1/2 md:-top-[200%] md:w-[200%] lg:-top-[200%]">
            <img
              src={heroBackground}
              className="w-full"
              width={2440}
              height={1600}
              alt="hero"
            />
          </div>
        <CompanyLogos className="relative z-10 mt-20 lg:block" />
      </div>
    </Section>
  );
};

export default Hero;
