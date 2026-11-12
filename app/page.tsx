import About from "@/components/About";
import BranchInfo from "@/components/BranchInfo";
import Categories from "@/components/Categories";
import ContactForm from "@/components/ContactForm";
import Hero from "@/components/Hero";
import Location from "@/components/Location";
import Products from "@/components/Products";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function HomePage() {
  return (
    <>
      <Hero />
      <BranchInfo />
      <Categories />
      <Products limit={8} />
      <About />
      <WhyChooseUs />
      <Location />
      <ContactForm />
    </>
  );
}
