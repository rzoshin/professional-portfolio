import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Training from "@/components/Training";
import Achievements from "@/components/Achievements";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ClientShell from "@/components/ClientShell";
import RevealOnScroll from "@/components/RevealOnScroll";

export default function Home() {
  return (
    <>
      <ClientShell />
      <Navbar />

      <main className="site-main">
        <Hero />
        <RevealOnScroll>
          <About />
        </RevealOnScroll>
        <div className="section-separator" aria-hidden="true" />
        <RevealOnScroll>
          <Education />
        </RevealOnScroll>
        <div className="section-separator" aria-hidden="true" />
        <RevealOnScroll>
          <Experience />
        </RevealOnScroll>
        <div className="section-separator" aria-hidden="true" />
        <RevealOnScroll>
          <Training />
        </RevealOnScroll>
        <div className="section-separator" aria-hidden="true" />
        <RevealOnScroll>
          <Achievements />
        </RevealOnScroll>
        <div className="section-separator" aria-hidden="true" />
        <RevealOnScroll>
          <Skills />
        </RevealOnScroll>
        <div className="section-separator" aria-hidden="true" />
        <RevealOnScroll>
          <Projects />
        </RevealOnScroll>
        <div className="section-separator" aria-hidden="true" />
        <RevealOnScroll>
          <Contact />
        </RevealOnScroll>
      </main>

      <Footer />
    </>
  );
}
