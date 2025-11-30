import Hero from "@/components/Hero";
import MainContent from "@/components/MainContent";
import Heading from "@/components/Heading";
import ResumeTabs from "@/components/ResumeTabs";
import { experiences, educations, skills, about } from "@/data/resumeData";

export const metadata = {
  title: "Resume — Dinh Quang Chung",
};

const Resume = () => {
  return (
    <>
      <Hero src="/images/resume/hero.png" />
      <MainContent>
        <Heading text="Resume" className="text-center animate-clip-reveal" />
        <ResumeTabs
          experiences={experiences}
          educations={educations}
          skills={skills}
          about={about}
        />
      </MainContent>
    </>
  );
};

export default Resume;
