import Banner from "@/components/ui/Banner";
import About from "@/components/ui/About";
import Projects from "@/components/ui/Project";
import Skills from "@/components/ui/Skills";
import Contact from "@/components/ui/Contact";

export default function MainContent() {
  return (
    <main className="flex-grow content">
      <Banner />
      <About />
      <Projects />

      <Skills />

      <Contact />
    </main>
  );
}
