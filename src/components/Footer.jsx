import { ArrowRight, MessageCircle, Briefcase, Globe } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#030305] pt-20 pb-10 border-t border-white/10 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red/5 blur-[120px] rounded-full pointer-events-none -translate-y-1/2" />
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* Brand & Newsletter Column */}
          <div className="col-span-1 lg:col-span-5 pr-0 lg:pr-12">
            <div className="text-3xl font-bold tracking-tight text-white mb-4">
              Vitto<span className="text-red">.</span>
            </div>
            <p className="text-gray-400 mb-8 max-w-sm leading-relaxed text-sm">
              AI-First Infrastructure for Modern Financial Services. Designed specifically for Banks, NBFCs, and MFIs.
            </p>
            
            <div className="mb-6">
              <h4 className="text-white font-semibold mb-3 text-sm">Subscribe to insights</h4>
              <div className="relative max-w-md flex items-center">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-red/50 transition-colors"
                />
                <button className="absolute right-1 top-1 bottom-1 bg-red hover:bg-[#E53935] text-white px-4 rounded-md transition-colors flex items-center justify-center">
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Navigation Columns */}
          <div className="col-span-1 lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {/* Pages Column */}
            <div>
              <h4 className="text-white font-semibold mb-6 tracking-wide text-sm">Pages</h4>
              <ul className="space-y-4">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Home</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Careers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Contact</a></li>
              </ul>
            </div>

            {/* Platform Column */}
            <div>
              <h4 className="text-white font-semibold mb-6 tracking-wide text-sm">Platform</h4>
              <ul className="space-y-4">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">AI Underwriting</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Fraud Detection</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Collections Layer</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">API Documentation</a></li>
              </ul>
            </div>

            {/* Partners Column */}
            <div>
              <h4 className="text-white font-semibold mb-6 tracking-wide text-sm">Partners</h4>
              <ul className="space-y-4">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Integration Hub</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Banking Network</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Data Providers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Become a Partner</a></li>
              </ul>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Socials */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/10 gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} Vitto Technologies. All rights reserved.
          </p>
          
          <div className="flex items-center gap-6">
            <a href="#" className="text-gray-500 hover:text-white transition-colors">
              <span className="sr-only">Twitter</span>
              <MessageCircle className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors">
              <span className="sr-only">LinkedIn</span>
              <Briefcase className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors">
              <span className="sr-only">Website</span>
              <Globe className="w-5 h-5" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
