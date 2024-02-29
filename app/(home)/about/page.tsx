import Discord from "../_components/Discord";
import OurAimSection from "../_components/OurAimSection";
import Partners from "../_components/PartnersSection";
import PressClippingSection from "../_components/PressClippingSection";
import Testimonial from "../_components/Testimonial";
import OurTeam from "./_components/OurTeam";

const AboutPage = () => {
  return (
    <>
      <OurAimSection />
      <Partners />
      <PressClippingSection />
      <OurTeam />
      <Testimonial />
      <Discord />
    </>
  );
};

export default AboutPage;
