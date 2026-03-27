import { ArrowRight, Info } from 'lucide-react';

export default function CtaBanner() {
  return (
    <section className="py-20 md:py-32 bg-[#05050A] relative px-6 border-t border-white/5">
      <div className="container mx-auto max-w-7xl">
        <div className="relative rounded-3xl overflow-hidden bg-red border border-red/40 shadow-[0_0_80px_rgba(211,47,47,0.25)]">
          
          {/* Decorative background elements inside the banner */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/10 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/3 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-black/20 blur-[80px] rounded-full translate-y-1/3 -translate-x-1/3 pointer-events-none" />
          
          <div className="relative z-10 px-8 py-16 md:px-16 md:py-20 lg:py-24 flex flex-col lg:flex-row items-center justify-between gap-10">
            
            <div className="max-w-3xl text-center lg:text-left">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-[1.1] tracking-tight drop-shadow-md">
                Discover the key to <br className="hidden md:block" />
                grow your business
              </h2>
              <p className="text-white/80 text-lg md:text-xl font-medium max-w-xl mx-auto lg:mx-0">
                Deploy Vitto's agentic infrastructure today to automate decisioning, eliminate risk blind spots, and drastically reduce operational overhead.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0 w-full lg:w-auto">
              <button className="w-full sm:w-auto px-8 py-4 bg-white text-red hover:bg-gray-100 rounded-xl font-bold transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 flex items-center justify-center gap-2 group text-lg">
                Book a Demo
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
              </button>
              <button className="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 rounded-xl font-semibold transition-all flex items-center justify-center gap-2 hover:-translate-y-1 text-lg">
                <Info className="w-5 h-5" />
                Learn More
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
