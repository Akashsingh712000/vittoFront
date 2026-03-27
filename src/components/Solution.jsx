import { BrainCircuit, Merge, Target } from 'lucide-react';

export default function Solution() {
  const features = [
    {
      title: "Domain-trained Models",
      description: "Our AI is pre-trained specifically on lending ontologies, regulatory frameworks, and banking data schemas—no generic LLM hallucinations.",
      icon: BrainCircuit,
    },
    {
      title: "Unified Architecture",
      description: "A single, composable data layer that seamlessly integrates your LOS, LMS, and CRM into one holistic, automated edge-to-edge system.",
      icon: Merge,
    },
    {
      title: "Explainability",
      description: "Every decision is fully traceable. Generate instantaneous, regulatory-compliant audit trails for risk and compliance teams.",
      icon: Target,
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-[#05050A] relative border-t border-white/5 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 -right-[20%] w-[800px] h-[800px] bg-red/10 blur-[200px] rounded-full pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-0 left-[10%] w-[400px] h-[400px] bg-white/5 blur-[150px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Column: Copy */}
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gray-300 font-semibold text-[10px] sm:text-xs tracking-wider uppercase mb-8 backdrop-blur-sm shadow-xl shadow-red/5">
              <span className="w-1.5 h-1.5 rounded-full bg-red animate-pulse" />
              The Vitto Solution
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-8 text-white leading-[1.1]">
              AI-native decisioning <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red to-red/60">
                meets full stack
              </span> <br />
              operational automation
            </h2>
            
            <p className="text-lg md:text-xl text-gray-400 leading-relaxed mb-10">
              We replace brittle rules engines and disjointed legacy platforms with a dynamic, learning infrastructure that adapts to market conditions and unique borrower profiles in real-time.
            </p>
          </div>

          {/* Right Column: Feature List */}
          <div className="flex flex-col gap-6 relative">
            {/* Connecting decorative line */}
            <div className="hidden md:block absolute left-[23px] top-10 bottom-10 w-px bg-gradient-to-b from-red/50 via-red/20 to-transparent pointer-events-none" />

            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={index} 
                  className="group relative bg-[#13111C]/60 border border-white/5 hover:bg-[#1A1825]/90 hover:border-white/15 p-6 md:p-8 rounded-2xl transition-all duration-500 flex items-start gap-5 backdrop-blur-md hover:-translate-x-2"
                >
                  <div className="w-12 h-12 shrink-0 rounded-xl bg-[#0A0A16] border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:border-red/40 group-hover:bg-red/10 group-hover:shadow-[0_0_20px_rgba(211,47,47,0.2)] transition-all duration-500 relative z-10">
                    <Icon className="w-6 h-6 text-gray-300 group-hover:text-red transition-colors duration-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-red/90 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 text-sm md:text-base leading-relaxed group-hover:text-gray-300 transition-colors">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
