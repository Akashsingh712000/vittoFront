export default function Problem() {
  const problems = [
    {
      number: "01",
      title: "Fragmented Systems",
      description: "Siloed LOS, LMS, CRM with no unified data layer."
    },
    {
      number: "02",
      title: "Non-AI Native Vendors",
      description: "AI bolted on top of legacy systems."
    },
    {
      number: "03",
      title: "Reactive Collections",
      description: "No predictive capability, manual prioritization."
    },
    {
      number: "04",
      title: "Static Rule Engines",
      description: "Rules that don't learn or adapt."
    }
  ];

  return (
    <section className="py-24 bg-navy relative border-t border-white/5">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="mb-16 md:mb-20">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            The Reality of Today's <br className="hidden md:block" />
            <span className="text-gray-400">Lending Technology</span>
          </h2>
          <div className="w-20 h-1 bg-red rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem) => (
            <div 
              key={problem.number}
              className="bg-white/5 border border-white/10 rounded-xl p-8 hover:bg-white/10 transition-colors group relative overflow-hidden"
            >
              {/* Subtle gradient hover effect */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-red/10 rounded-bl-[100px] -mr-8 -mt-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="text-5xl font-extrabold text-white/10 mb-6 group-hover:text-red/20 transition-colors font-sans tracking-tighter">
                {problem.number}
              </div>
              
              <h3 className="text-xl font-semibold text-white mb-3">
                {problem.title}
              </h3>
              
              <p className="text-gray-400 text-sm leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
