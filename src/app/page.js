import Header from "@/Components/homepage/header";
import Hero from "@/Components/homepage/herosection";
import { Specialties } from "@/Components/homepage/Specialties";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header />
      <Hero></Hero>
      <Specialties></Specialties>
    </>

  );
}
