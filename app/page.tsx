import HeroComponents from "./HomeComponents/HeroComponents";
import HomeTools from "./HomeComponents/HomeTools";
import Projects from "./HomeComponents/Projects";
import Services from "./HomeComponents/Services";
import Process from "./HomeComponents/Process"; 
import Testimonials from "./HomeComponents/Testimonials";
import FAQ from "./HomeComponents/FAQ";
import CTAContact from "./HomeComponents/FooterCTA";
import Button from "./HomeComponents/Button";

export default function Home() {
  return (
    <>
    <div className="bg-[#ECEBE4] w-full min-h-screen p-2 sm:p-4 md:p-8 lg:p-20">

      <HeroComponents />
      <HomeTools />
      <Projects />

<div className="max-w-7xl mx-auto mt-20 ">

    <Button/>
</div>
    </div>

      <Testimonials />
    <div className="bg-[#ECEBE4] w-full min-h-screen p-2 sm:p-4 md:p-8 lg:p-20">

      <Process />
      <Services/>
      <FAQ/>
      <CTAContact/>
    </div>
    </>

  );
}
