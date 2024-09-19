import About from "@/components/ui/About";
import Banner from "@/components/ui/Banner";
import Contact from "@/components/ui/Contact";
import Footer from "@/components/ui/Footer";
import Navbar from "@/components/ui/NavBar";

import Projects from "@/components/ui/Project";
import Skills from "@/components/ui/Skills";

export default function Home() {
  return (
    <div className="flex bg-primary text-secondary flex-col min-h-screen mx-auto">
      {/* Sticky Navbar */}
      <header className="sticky top-0 z-50">
        <Navbar />
      </header>

      {/* Main Content */}
      <main className="flex-grow content">
        <Banner />
        <About />
        <Projects />
        <div className="bg-tech bg-cover bg-center bg-no-repeat pb-10">
          <Skills />
        </div>
        <Contact />
      </main>

      {/* Footer at the bottom */}
      <footer className="mt-auto">
        <Footer />
      </footer>
    </div>
  );
}
