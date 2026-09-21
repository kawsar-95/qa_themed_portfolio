import SmoothScroll from "@/components/chrome/SmoothScroll";
import PipelineNav from "@/components/chrome/PipelineNav";
import SocialRail from "@/components/chrome/SocialRail";
import Marquee from "@/components/Marquee";
import Interlude from "@/components/Interlude";
import Hero from "@/components/acts/Hero";
import About from "@/components/acts/About";
import Skills from "@/components/acts/Skills";
import Experience from "@/components/acts/Experience";
import Projects from "@/components/acts/Projects";
import TerminalSection from "@/components/acts/TerminalSection";
import Contact from "@/components/acts/Contact";

export default function Pipeline() {
  return (
    <SmoothScroll>
      <PipelineNav />
      <SocialRail />

      <main>
        <Hero />
        <Marquee />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Interlude />
        <TerminalSection />
        <Contact />
      </main>
    </SmoothScroll>
  );
}
