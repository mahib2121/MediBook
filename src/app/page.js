
import Hero from "@/Components/homepage/herosection";
import { Specialties } from "@/Components/homepage/Specialties";
import Testimonials from "@/Components/homepage/Testimonials";
import TopDoctor from "@/Components/homepage/topdoctor";
import WhyChooseUs from "@/Components/homepage/WhyChooseUs";
import Image from "next/image";

export default function Home() {
  return (
    <>

      <Hero></Hero>
      <Specialties></Specialties>
      <TopDoctor></TopDoctor>
      <WhyChooseUs></WhyChooseUs>
      <Testimonials></Testimonials>

    </>

  );
}
