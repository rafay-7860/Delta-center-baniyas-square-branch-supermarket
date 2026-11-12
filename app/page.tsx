import About from "@/components/About";
import BranchInfo from "@/components/BranchInfo";
import ContactForm from "@/components/ContactForm";
import Hero from "@/components/Hero";
import Location from "@/components/Location";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function HomePage() {
  return (
    <>
      <Hero />
      <BranchInfo />
      <Services />
      <About />
      <WhyChooseUs />
      <Location />
      <ContactForm />
    </>
  );
}
