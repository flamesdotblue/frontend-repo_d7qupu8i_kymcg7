import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Sections from './components/Sections';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-[#0B0B15] text-white scroll-smooth">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <div className="relative">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1000px_400px_at_50%_-100px,rgba(108,99,255,0.15),transparent)]" />
          <div className="relative space-y-24 py-24">
            <Sections />
            <Contact />
          </div>
        </div>
      </main>

      <footer className="mt-8 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[#C9C9D3]">
          <p>© {new Date().getFullYear()} ProjectVerse. All rights reserved.</p>
          <div className="flex items-center gap-3 text-sm">
            <a href="#services" className="hover:text-white">Services</a>
            <span className="opacity-30">•</span>
            <a href="#portfolio" className="hover:text-white">Portfolio</a>
            <span className="opacity-30">•</span>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
