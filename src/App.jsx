import Hero from './components/Hero';
import Problem from './components/Problem';
import Solution from './components/Solution';
import AILayer from './components/AILayer';

function App() {
  return (
    <div className="min-h-screen bg-navy text-white selection:bg-red/30">
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-navy/80 backdrop-blur-md">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-2xl font-bold tracking-tight">
            Vitto<span className="text-red">.</span>
          </div>
          <nav className="hidden md:flex gap-8 text-sm font-medium text-gray-300">
            <a href="#" className="hover:text-white transition-colors">Platform</a>
            <a href="#" className="hover:text-white transition-colors">Solutions</a>
            <a href="#" className="hover:text-white transition-colors">Company</a>
          </nav>
          <div className="flex items-center gap-4">
            <button className="hidden sm:block text-sm font-medium text-gray-300 hover:text-white transition-colors">
              Sign In
            </button>
            <button className="px-5 py-2.5 bg-white text-navy font-medium text-sm rounded-lg hover:bg-gray-100 transition-colors">
              Request Demo
            </button>
          </div>
        </div>
      </header>

      <main>
        <Hero />
        <Problem />
        <Solution />
        <AILayer />
      </main>
    </div>
  );
}

export default App;
