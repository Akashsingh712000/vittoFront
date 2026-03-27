import { ArrowRight, Play } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Glow effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[500px] bg-red/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red/10 border border-red/20 text-red font-medium text-sm mb-8">
            <span className="w-2 h-2 rounded-full bg-red animate-pulse" />
            Designed for Banks, NBFCs & MFIs
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-tight">
            AI-First Infrastructure for <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
              Modern Financial Services
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-3xl mx-auto leading-relaxed">
            Vitto is not a retrofitted SaaS product with an AI tab bolted on. We replace fragmented legacy vendors with a 
            unified, agentic infrastructure designed from the ground up for institution-grade decisioning and full-stack operational automation.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
            <button className="w-full sm:w-auto px-8 py-4 bg-red hover:bg-red/90 text-white rounded-lg font-medium transition-colors flex items-center justify-center gap-2 group">
              Book a Demo
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-lg font-medium transition-colors flex items-center justify-center gap-2">
              <Play className="w-4 h-4" />
              Explore Platform
            </button>
          </div>
        </div>

        {/* Dashboard Preview / Mockup */}
        <div className="relative mx-auto max-w-5xl">
          <div className="absolute -inset-1 bg-gradient-to-t from-red/20 to-transparent blur-2xl opacity-50" />
          <div className="relative rounded-xl border border-white/10 bg-navy/50 backdrop-blur-sm overflow-hidden shadow-2xl">
            {/* Mockup Header */}
            <div className="flex items-center px-4 py-3 border-b border-white/10 bg-black/20">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red/50" />
                <div className="w-3 h-3 rounded-full bg-white/20" />
                <div className="w-3 h-3 rounded-full bg-white/20" />
              </div>
              <div className="mx-auto flex items-center gap-2 text-xs font-medium text-gray-400">
                app.vitto.ai <span className="text-red">/</span> dashboard
              </div>
            </div>
            
            {/* Mockup Content */}
            <div className="aspect-[16/9] bg-[#0A0A16] flex items-center justify-center p-8">
              <div className="w-full h-full grid grid-cols-12 grid-rows-6 gap-4">
                 {/* Sidebar Mock */}
                 <div className="col-span-2 row-span-6 bg-white/5 rounded-lg border border-white/5 p-4 flex flex-col gap-3">
                    <div className="w-full h-8 bg-white/10 rounded mb-4" />
                    <div className="w-3/4 h-4 bg-white/5 rounded" />
                    <div className="w-full h-4 bg-white/5 rounded" />
                    <div className="w-5/6 h-4 bg-white/5 rounded" />
                 </div>
                 {/* Main Content Area */}
                 <div className="col-span-7 row-span-4 bg-white/5 rounded-lg border border-white/5 p-6 space-y-4">
                    <div className="flex justify-between items-center mb-6">
                      <div className="w-1/3 h-6 bg-white/10 rounded" />
                      <div className="w-24 h-6 bg-red/20 rounded" />
                    </div>
                    <div className="w-full h-32 bg-white/5 rounded-lg border border-white/5" />
                    <div className="flex gap-4">
                      <div className="w-1/2 h-24 bg-white/5 rounded-lg border border-white/5" />
                      <div className="w-1/2 h-24 bg-white/5 rounded-lg border border-white/5" />
                    </div>
                 </div>
                 {/* Right Panel / Agentic AI Layer */}
                 <div className="col-span-3 row-span-6 bg-white/5 rounded-lg border border-white/5 p-6 flex flex-col items-center justify-center relative overflow-hidden text-center">
                    <div className="absolute inset-0 bg-gradient-to-b from-red/10 to-transparent opacity-50 pointer-events-none" />
                    <div className="w-12 h-12 rounded-full bg-red/20 flex items-center justify-center mb-4">
                      <div className="w-6 h-6 rounded-full bg-red animate-pulse" />
                    </div>
                    <p className="text-gray-300 font-medium text-sm mb-2">Underwriting Agent Active</p>
                    <p className="text-gray-500 text-xs text-balance">Real-time policy evaluation and decisioning on new applications.</p>
                 </div>
                 {/* Bottom Table */}
                 <div className="col-span-7 row-span-2 bg-white/5 rounded-lg border border-white/5 p-4 space-y-2">
                    <div className="w-full h-6 bg-white/5 rounded mb-2" />
                    <div className="w-full h-6 bg-white/5 rounded" />
                    <div className="w-3/4 h-6 bg-white/5 rounded" />
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
