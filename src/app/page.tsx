import Contact from "@/components/ui/Contact";
import Footer from "@/components/ui/Footer";
import Navbar from "@/components/ui/NavBar";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Sticky Navbar */}
      <header className="sticky top-0 z-50">
        <Navbar />
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        <Contact />
      </main>

      {/* Footer at the bottom */}
      <footer className="mt-auto">
        <Footer />
      </footer>
    </div>
  );
}
