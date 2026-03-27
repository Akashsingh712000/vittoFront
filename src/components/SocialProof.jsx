import { Quote } from 'lucide-react';

export default function SocialProof() {
  const testimonials = [
    {
      quote: "Vitto didn't just digitize our lending process; they rebuilt our core risk engine. We cut our decision time by 85% while simultaneously dropping NPAs.",
      author: "Sarah Jenkins",
      designation: "Chief Risk Officer",
      institution: "Aura Finance (NBFC)"
    },
    {
      quote: "The autonomous layer operates with strict determinism. It continually adapts our collection strategies, resulting in a 40% increase in early-stage recoveries within the first quarter.",
      author: "Michael Chang",
      designation: "Head of Digital Collections",
      institution: "First Pioneer Bank"
    }
  ];

  const partners = [
    "Nova Bank", "Equitas Lending", "Pinnacle MFI", "Vertex Capital", "Core Finance"
  ];

  return (
    <section className="py-24 md:py-32 bg-[#0A0A16] relative border-t border-white/5 overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-red/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* Partner Logos Row */}
        <div className="mb-24 lg:mb-32">
          <div className="flex items-center gap-4 mb-10 w-full max-w-2xl mx-auto">
            <div className="h-px bg-gradient-to-r from-transparent to-white/10 flex-1" />
            <p className="text-center text-[10px] md:text-sm font-semibold tracking-widest text-gray-500 uppercase">
              Trusted by institution-grade partners
            </p>
            <div className="h-px bg-gradient-to-l from-transparent to-white/10 flex-1" />
          </div>

          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 hover:opacity-100 transition-opacity duration-700">
            {partners.map((partner, index) => (
              <div key={index} className="flex items-center gap-2 group cursor-default">
                <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-red/40 group-hover:bg-red/10 transition-colors duration-300">
                  <span className="text-xs font-black text-white group-hover:text-red transition-colors">{partner.charAt(0)}</span>
                </div>
                <span className="text-xl md:text-2xl font-bold tracking-tight text-white/50 group-hover:text-white transition-colors duration-300">
                  {partner}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {testimonials.map((test, index) => (
            <div 
              key={index}
              className="group relative bg-[#13111C]/60 border border-white/10 hover:border-red/40 rounded-3xl p-8 md:p-10 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_-15px_rgba(211,47,47,0.15)] flex flex-col justify-between backdrop-blur-md"
            >
              {/* Decorative Quote Icon Effect */}
              <div className="absolute -top-6 -left-4 w-12 h-12 bg-[#0A0A16] rounded-xl border border-white/10 flex items-center justify-center group-hover:border-red/40 group-hover:bg-red/10 transition-colors duration-500 shadow-xl shadow-red/5">
                <Quote className="w-5 h-5 text-gray-500 group-hover:text-red transition-colors" />
              </div>

              <div className="mb-10 mt-4 relative z-10">
                <p className="text-xl md:text-2xl text-gray-300 leading-relaxed font-medium group-hover:text-white transition-colors duration-500">
                  "{test.quote}"
                </p>
              </div>

              <div className="flex items-center gap-4 mt-auto">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-white/5 to-white/10 border border-white/10 flex items-center justify-center shrink-0 group-hover:border-red/30 transition-colors duration-500">
                  <span className="text-white font-bold text-xl">{test.name.charAt(0)}</span>
                </div>
                <div>
                  <h4 className="text-white font-bold tracking-tight text-lg">{test.name}</h4>
                  <p className="text-sm text-gray-400 mt-0.5">{test.designation}, <span className="text-red/90 font-medium">{test.institution}</span></p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
