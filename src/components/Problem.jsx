import { Database, Bot, Clock, Code2 } from 'lucide-react';

export default function Problem() {
  const problems = [
    {
      number: "01",
      title: "Fragmented Systems",
      description: "Siloed LOS, LMS, CRM with no unified data layer.",
      icon: Database,
    },
    {
      number: "02",
      title: "Non-AI Native Vendors",
      description: "AI bolted on top of legacy systems.",
      icon: Bot,
    },
    {
      number: "03",
      title: "Reactive Collections",
      description: "No predictive capability, manual prioritization.",
      icon: Clock,
    },
    {
      number: "04",
      title: "Static Rule Engines",
      description: "Rules that don't learn or adapt.",
      icon: Code2,
    }
  ];

  return (
    <section className="py-32 bg-[#0A0A16] relative border-t border-white/5 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-red/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-900/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="mb-20 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-red/10 border border-red/20 text-red font-semibold text-xs tracking-wider uppercase mb-6">
            The Industry Standard
          </div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-white leading-tight">
            The Reality of Today's <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-600">
              Lending Technology
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red to-transparent rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <div 
                key={problem.number}
                className="group relative bg-[#13111C]/80 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:border-red/30 transition-all duration-500 overflow-hidden hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(211,47,47,0.15)] flex flex-col h-full"
              >
                {/* Number overlay in background */}
                <div className="absolute -top-6 -right-4 text-9xl font-black text-white/[0.03] group-hover:text-red/[0.05] transition-colors duration-500 select-none pointer-events-none">
                  {problem.number}
                </div>

                {/* Subtle gradient hover effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-red/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className="w-14 h-14 rounded-xl bg-black/40 border border-white/5 flex items-center justify-center mb-8 group-hover:border-red/20 group-hover:bg-red/10 transition-colors duration-500 shadow-inner">
                    <Icon className="w-6 h-6 text-gray-400 group-hover:text-red transition-colors duration-500" />
                  </div>
                  
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-red font-mono font-bold text-sm tracking-widest">{problem.number}</span>
                    <div className="h-px bg-white/10 flex-1" />
                  </div>
                  
                  <h3 className="text-xl md:text-2xl font-semibold text-white mb-4 leading-snug">
                    {problem.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm leading-relaxed mt-auto">
                    {problem.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
