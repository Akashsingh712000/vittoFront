import { Outlet, Link } from 'react-router-dom';
import Footer from './Footer';

export default function Layout() {
  return (
    <div className="min-h-screen bg-navy text-white selection:bg-red/30 flex flex-col">
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-navy/80 backdrop-blur-md">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold tracking-tight">
            Vitto<span className="text-red">.</span>
          </Link>
          <nav className="hidden md:flex gap-8 text-sm font-medium text-gray-300">
            <Link to="/platform" className="hover:text-white transition-colors">Platform</Link>
            <Link to="/automation" className="hover:text-white transition-colors">Automation</Link>
            <Link to="/article" className="hover:text-white transition-colors">Insights</Link>
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

      <main className="flex-1 mt-20">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
