import HeroComponents from "./HomeComponents/HeroComponents";
import HomeTools from "./HomeComponents/HomeTools";
import Projects from "./HomeComponents/Projects";
import Services from "./HomeComponents/Services";
import Process from "./HomeComponents/Process"; 
import Testimonials from "./HomeComponents/Testimonials";
import FAQ from "./HomeComponents/FAQ";
import CTAContact from "./HomeComponents/FooterCTA";


export default function Home() {
  return (
    <>
    <div className="bg-[#ECEBE4] w-full min-h-screen px-2 sm:px-4 md:px-8 lg:px-12 pt-24 md:pt-28">

      <HeroComponents />
      <Projects />
    </div>

      <Testimonials />
      <HomeTools />
    <div className="bg-[#ECEBE4] w-full min-h-screen p-2 sm:p-4 md:p-8 lg:p-12">

      <Process />
      <Services/>
      <FAQ/>
      <CTAContact/>
    </div>
    </>

  );
}
