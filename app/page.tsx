import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { WhyUs } from "@/components/sections/WhyUs";
import { Team } from "@/components/sections/Team";
import { Process } from "@/components/sections/Process";
import { Projects } from "@/components/sections/Projects";
import { TechStack } from "@/components/sections/TechStack";
import { CTA } from "@/components/sections/CTA";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main id="main">
        <Hero />
        <Services />
        <WhyUs />
        <Team />
        <Process />
        <Projects />
        <TechStack />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
