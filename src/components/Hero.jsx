import { ArrowRight, Play, ShieldCheck, Activity, BrainCircuit } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-navy min-h-screen flex flex-col justify-center">
      {/* Background Glow effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[600px] bg-red/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-[-10%] w-[500px] h-[500px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Main Content */}
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gray-300 font-medium text-sm mb-8 backdrop-blur-sm shadow-xl shadow-red/5">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-red"></span>
            </span>
            <span>Built specifically for Banks, NBFCs & MFIs</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-tight">
            AI-First Infrastructure for <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-500">
              Modern Financial Services
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-white font-medium mb-4 max-w-3xl mx-auto">
            Traditional LOS is a system of record. <span className="text-red">Vitto is a system of intelligence.</span>
          </p>
          <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-3xl mx-auto leading-relaxed">
            This is not retrofitted AI. This is not fragmented vendors. Vitto is a unified execution environment designed from the ground up for institution-grade decisioning and full-stack operational automation.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-24">
            <button className="w-full sm:w-auto px-8 py-4 bg-red hover:bg-[#E53935] text-white rounded-lg font-medium transition-all shadow-lg shadow-red/20 flex items-center justify-center gap-2 group hover:scale-[1.02]">
              Book a Demo
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-lg font-medium transition-all flex items-center justify-center gap-2 hover:scale-[1.02]">
              <Play className="w-4 h-4 fill-current opacity-80" />
              Explore Platform
            </button>
          </div>
        </div>

        {/* Dashboard Preview / Mockup */}
        <div className="relative mx-auto max-w-5xl group perspective-1000">
          <div className="absolute -inset-1 bg-gradient-to-t from-red/30 via-red/5 to-transparent blur-3xl opacity-60 group-hover:opacity-80 transition-opacity duration-1000" />
          
          <div className="relative rounded-2xl border border-white/10 bg-[#0B0B13]/90 backdrop-blur-xl overflow-hidden shadow-2xl transition-transform duration-700 ease-out hover:rotate-x-2">
            
            {/* Mockup Header */}
            <div className="flex items-center px-4 py-3 border-b border-white/10 bg-white/5 backdrop-blur-md">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red/80 shadow-[0_0_8px_rgba(211,47,47,0.6)]" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <div className="mx-auto flex items-center gap-2 text-xs font-medium text-gray-400 bg-black/20 px-3 py-1 rounded-md border border-white/5">
                <ShieldCheck className="w-3 h-3 text-red" />
                app.vitto.ai <span className="text-gray-600">/</span> overview
              </div>
            </div>
            
            {/* Mockup Content */}
            <div className="aspect-[16/9] lg:aspect-[21/9] bg-[#0A0A16] flex items-center justify-center p-6 lg:p-8 relative overflow-hidden">
              {/* Grid Background Pattern */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]" />

              <div className="w-full h-full z-10 grid grid-cols-12 grid-rows-6 gap-4 lg:gap-6">
                 
                 {/* Sidebar Mock */}
                 <div className="col-span-3 lg:col-span-2 row-span-6 bg-white/5 rounded-xl border border-white/5 p-4 flex flex-col gap-4 backdrop-blur-sm">
                    <div className="w-full h-10 bg-white/10 rounded-lg mb-4 flex items-center px-3">
                       <div className="w-5 h-5 rounded bg-red/40 mr-3" />
                       <div className="w-16 h-3 bg-white/20 rounded" />
                    </div>
                    <div className="w-full h-8 bg-white/5 rounded-md flex items-center px-3 gap-3">
                       <div className="w-4 h-4 rounded-full bg-white/20" />
                       <div className="w-12 h-2 bg-white/20 rounded" />
                    </div>
                    <div className="w-full h-8 bg-black/20 border border-white/5 rounded-md flex items-center px-3 gap-3">
                       <div className="w-4 h-4 rounded-full bg-red text-red flex items-center justify-center shadow-[0_0_10px_rgba(211,47,47,0.4)]"><div className="w-1.5 h-1.5 bg-white rounded-full"/></div>
                       <div className="w-16 h-2 bg-white/40 rounded" />
                    </div>
                    <div className="w-full h-8 bg-white/5 rounded-md flex items-center px-3 gap-3">
                       <div className="w-4 h-4 rounded-full bg-white/20" />
                       <div className="w-14 h-2 bg-white/20 rounded" />
                    </div>
                    
                    <div className="mt-auto w-full p-3 bg-gradient-to-br from-red/10 to-transparent border border-red/10 rounded-lg">
                       <div className="w-8 h-8 rounded-full bg-red/20 flex items-center justify-center mb-2">
                         <BrainCircuit className="w-4 h-4 text-red" />
                       </div>
                       <div className="w-20 h-2 bg-white/40 rounded mb-1" />
                       <div className="w-16 h-2 bg-white/20 rounded" />
                    </div>
                 </div>

                 {/* Main Content Area */}
                 <div className="col-span-9 lg:col-span-7 row-span-4 bg-white/5 rounded-xl border border-white/5 p-6 space-y-5 backdrop-blur-sm flex flex-col">
                    <div className="flex justify-between items-end mb-2">
                      <div>
                        <div className="w-32 h-6 bg-white/80 rounded mb-2" />
                        <div className="w-48 h-3 bg-white/30 rounded" />
                      </div>
                      <div className="w-24 h-8 bg-red/20 border border-red/30 rounded-lg flex items-center justify-center gap-2">
                        <Activity className="w-3 h-3 text-red" />
                        <div className="w-10 h-2 bg-red/60 rounded" />
                      </div>
                    </div>
                    
                    {/* Graph Mockup */}
                    <div className="flex-1 w-full bg-black/20 rounded-lg border border-white/5 p-4 flex items-end gap-2 isolate relative overflow-hidden">
                      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-red/5 to-transparent" />
                      {Array.from({ length: 12 }).map((_, i) => (
                        <div key={i} className="flex-1 bg-white/10 rounded-t-sm relative group" style={{ height: `${20 + Math.random() * 80}%` }}>
                          <div className="absolute inset-0 bg-red/40 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                      ))}
                    </div>
                    
                    {/* Stats Row */}
                    <div className="flex gap-4 h-24">
                      <div className="flex-1 bg-black/20 rounded-lg border border-white/5 p-4 flex flex-col justify-between">
                         <div className="w-16 h-3 bg-white/30 rounded" />
                         <div className="w-24 h-6 bg-white/80 rounded" />
                      </div>
                      <div className="flex-1 bg-black/20 rounded-lg border border-white/5 p-4 flex flex-col justify-between">
                         <div className="w-16 h-3 bg-white/30 rounded" />
                         <div className="w-24 h-6 bg-white/80 rounded" />
                      </div>
                    </div>
                 </div>

                 {/* Right Panel / Agentic AI Layer */}
                 <div className="hidden lg:flex col-span-3 row-span-6 bg-[#13111C]/80 rounded-xl border border-red/20 p-6 flex-col relative overflow-hidden shadow-lg shadow-red/5">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-red/20 blur-[50px] pointer-events-none" />
                    
                    <div className="flex items-center gap-3 mb-6 relative z-10">
                      <div className="w-10 h-10 rounded-xl bg-red/20 border border-red/30 flex items-center justify-center">
                        <span className="relative flex h-3 w-3">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-3 w-3 bg-red"></span>
                        </span>
                      </div>
                      <div>
                        <p className="text-gray-200 font-semibold text-sm">Underwriting Agent</p>
                        <p className="text-red font-medium text-xs">Active & Processing</p>
                      </div>
                    </div>

                    <div className="flex-1 flex flex-col gap-3 relative z-10">
                      <div className="w-full bg-black/40 rounded-lg p-3 border border-white/5">
                        <div className="flex items-center justify-between mb-2">
                          <div className="w-20 h-3 bg-white/40 rounded" />
                          <div className="w-12 h-3 bg-green-500/50 rounded" />
                        </div>
                        <div className="w-full h-2 bg-white/10 rounded" />
                        <div className="w-4/5 h-2 bg-white/10 rounded mt-1.5" />
                      </div>
                      <div className="w-full bg-black/40 rounded-lg p-3 border border-red/20 shadow-[0_0_10px_rgba(211,47,47,0.1)]">
                        <div className="flex items-center justify-between mb-2">
                          <div className="w-24 h-3 bg-white/60 rounded" />
                          <div className="w-12 h-3 bg-yellow-500/50 rounded" />
                        </div>
                        <div className="w-full h-2 bg-red/30 rounded" />
                        <div className="w-3/5 h-2 bg-red/30 rounded mt-1.5" />
                      </div>
                      <div className="w-full bg-black/40 rounded-lg p-3 border border-white/5">
                        <div className="flex items-center justify-between mb-2">
                          <div className="w-16 h-3 bg-white/40 rounded" />
                          <div className="w-12 h-3 bg-green-500/50 rounded" />
                        </div>
                        <div className="w-full h-2 bg-white/10 rounded" />
                      </div>
                    </div>
                    
                    <div className="mt-4 pt-4 border-t border-white/10 relative z-10">
                      <div className="w-full h-8 bg-red/10 rounded-lg border border-red/20 flex items-center justify-center">
                        <div className="w-24 h-2 bg-red/60 rounded" />
                      </div>
                    </div>
                 </div>

                 {/* Bottom Table */}
                 <div className="col-span-9 lg:col-span-7 row-span-2 bg-white/5 rounded-xl border border-white/5 p-5 flex flex-col gap-3 backdrop-blur-sm">
                    <div className="flex justify-between items-center mb-1">
                       <div className="w-24 h-4 bg-white/40 rounded" />
                       <div className="w-16 h-4 bg-white/10 rounded" />
                    </div>
                    <div className="w-full h-10 bg-black/20 rounded-lg border border-white/5 flex items-center px-4 gap-4">
                       <div className="w-6 h-6 rounded bg-white/10" />
                       <div className="w-32 h-3 bg-white/30 rounded" />
                       <div className="w-20 h-3 bg-white/20 rounded ml-auto" />
                       <div className="w-16 h-6 bg-green-500/20 rounded-full border border-green-500/30" />
                    </div>
                    <div className="w-full h-10 bg-black/20 rounded-lg border border-white/5 flex items-center px-4 gap-4 opacity-70">
                       <div className="w-6 h-6 rounded bg-white/10" />
                       <div className="w-40 h-3 bg-white/30 rounded" />
                       <div className="w-16 h-3 bg-white/20 rounded ml-auto" />
                       <div className="w-16 h-6 bg-red/20 rounded-full border border-red/30" />
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
