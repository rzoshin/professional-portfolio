import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import ClientShell from "@/components/ClientShell";
import { personalInfo } from "@/lib/data";

export default function Home() {
  return (
    <>
      <ClientShell />
      <Navbar />

      <main>
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <footer>
        <p>
          © {new Date().getFullYear()}{" "}
          <span className="highlight">{personalInfo.name}</span>. All rights
          reserved. Built with ❤️ using Next.js
        </p>
      </footer>
    </>
  );
}
