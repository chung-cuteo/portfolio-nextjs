import "swiper/css"; 
import Hero from "@/components/Hero";
import MainContent from "@/components/MainContent";
import Heading from "@/components/Heading";
import WorkSliderClient from "@/components/WorkSliderClient";
import projects from "@/data/projectsWork";

export const metadata = {
  title: "Works — Dinh Quang Chung",
};

const Work = () => {
  return (
    <>
      <Hero src="/images/works/hero.png" />
      <MainContent>
        <Heading text="Works" className="text-center animate-clip-reveal" />
        <WorkSliderClient projects={projects} />
      </MainContent>
    </>
  );
};

export default Work;
