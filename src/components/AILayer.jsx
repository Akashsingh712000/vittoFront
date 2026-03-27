import { ArrowRight, Database, Brain, Gavel, ShieldAlert, BarChart3, Binary } from 'lucide-react';

export default function AILayer() {
  const modules = [
    {
      name: "Data-Based Assessment",
      description: "Unify fragmented data sources into a single, comprehensive borrower profile.",
      icon: Database,
    },
    {
      name: "ML Model",
      description: "Proprietary machine learning models continuously trained on vast lending datasets.",
      icon: Brain,
    },
    {
      name: "Rule Engine & Decisioning",
      description: "Dynamic, adaptive rules that optimize for risk, compliance, and yield automatically.",
      icon: Gavel,
    },
    {
      name: "Fraud Intelligence",
      description: "Proactive anomaly detection isolating bad actors before origination occurs.",
      icon: ShieldAlert,
    },
    {
      name: "Collection Intelligence",
      description: "Predictive behavioral analytics to prioritize and hyper-personalize outreach.",
      icon: BarChart3,
    },
    {
      name: "Agentic AI Layer",
      description: "Autonomous reasoning engine driving end-to-end intelligent operational workflows.",
      icon: Binary,
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-[#0A0A16] relative border-t border-white/5 overflow-hidden">
      {/* Background radial gradient */}
      <div className="absolute top-0 inset-x-0 flex justify-center pointer-events-none">
        <div className="w-[1000px] h-[500px] bg-red/5 blur-[120px] rounded-[100%] -translate-y-1/2" />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gray-300 font-semibold text-[10px] sm:text-xs tracking-wider uppercase mb-6 shadow-xl shadow-red/5 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-red animate-pulse" />
            Core Infrastructure
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-white leading-[1.1]">
            The AI Layer of <span className="text-transparent bg-clip-text bg-gradient-to-r from-red to-red/70">Vitto</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400">
            A comprehensive, modular stack designed to automate and augment every phase of the lending lifecycle.
          </p>
        </div>

        {/* 3x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {modules.map((mod, index) => {
            const Icon = mod.icon;
            return (
              <div 
                key={index} 
                className="group relative bg-[#13111C]/60 border border-white/10 hover:border-red/30 rounded-2xl p-8 hover:-translate-y-1 transition-all duration-300 flex flex-col h-full overflow-hidden backdrop-blur-md"
              >
                {/* Hover Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-red/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className="w-12 h-12 rounded-xl bg-black/40 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-red/20 group-hover:border-red/40 transition-colors duration-300 shadow-inner">
                    <Icon className="w-6 h-6 text-gray-400 group-hover:text-red transition-colors duration-300" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-red/90 transition-colors">
                    {mod.name}
                  </h3>
                  
                  <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-1 group-hover:text-gray-300 transition-colors">
                    {mod.description}
                  </p>
                  
                  <a href="#" className="inline-flex items-center gap-2 text-sm font-semibold text-white/70 group-hover:text-red transition-colors mt-auto w-fit">
                    Explore
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
