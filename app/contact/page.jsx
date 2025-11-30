import Hero from "@/components/Hero";
import MainContent from "@/components/MainContent";
import Heading from "@/components/Heading";
import ContactClient from "@/components/ContactClient";

export const metadata = {
  title: "Contact — Dinh Quang Chung",
};

const Contact = () => {
  return (
    <>
      <Hero src="/images/contact/hero.png" alt="frontend developer" />
      <MainContent>
        <Heading text="Contact" className="text-center animate-clip-reveal" />
        <ContactClient />
      </MainContent>
    </>
  );
};

export default Contact;
