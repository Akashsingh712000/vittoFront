import { Zap, ShieldCheck, TrendingUp, Link } from 'lucide-react';

export default function Impact() {
  const metrics = [
    {
      value: "80%",
      label: "Faster Credit Decisions",
      description: "Automate manual underwriting layers, reducing TAT from days to minutes while maintaining strict policy adherence.",
      icon: Zap,
    },
    {
      value: "3x",
      label: "Reduced Portfolio Risk",
      description: "Real-time anomaly detection and predictive intelligence drop NPA rates significantly across all tranches.",
      icon: ShieldCheck,
    },
    {
      value: "45%",
      label: "Increased Recovery Rates",
      description: "Hyper-personalized, AI-driven collection strategies optimize engagement channels and restructure offers.",
      icon: TrendingUp,
    },
    {
      value: "40+",
      label: "Pre-Built Integrations",
      description: "Plug-and-play connectors for leading LOS, LMS, credit bureaus, and alternate data providers out of the box.",
      icon: Link,
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-[#05050A] relative border-t border-white/5 overflow-hidden">
      {/* Dynamic Backgrounds */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[500px] bg-red/5 blur-[120px] rounded-[100%] pointer-events-none" />
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20 lg:mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gray-300 font-semibold text-[10px] sm:text-xs tracking-wider uppercase mb-6 backdrop-blur-sm shadow-xl shadow-red/5">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            Measurable From Day One
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-white leading-[1.1]">
            Institutional-Grade <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red to-red/70">
              Business Impact
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400">
            Vitto isn't just a platform upgrade; it's a measurable acceleration of your entire lending and collections life cycle.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <div 
                key={index} 
                className="group relative bg-[#13111C]/80 border border-white/10 hover:border-red/30 rounded-3xl p-8 hover:-translate-y-2 transition-all duration-500 flex flex-col items-center text-center overflow-hidden backdrop-blur-md"
              >
                {/* Glowing Overlay Background Effect */}
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-red/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                
                <div className="relative z-10 w-full flex flex-col items-center">
                  <div className="w-12 h-12 rounded-2xl bg-black/50 border border-white/5 flex items-center justify-center mb-8 group-hover:bg-red/20 group-hover:border-red/40 transition-colors duration-500 shadow-inner">
                    <Icon className="w-6 h-6 text-red opacity-80 group-hover:opacity-100 transition-opacity" />
                  </div>
                  
                  <div className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500 mb-4 tracking-tighter group-hover:from-red group-hover:to-red/60 transition-all duration-500">
                    {metric.value}
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 tracking-tight">
                    {metric.label}
                  </h3>
                  
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {metric.description}
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
