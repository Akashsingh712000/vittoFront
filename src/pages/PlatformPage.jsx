import { Database, Brain, Gavel, ShieldAlert, BarChart3, Binary, Lock, ShieldCheck, Zap, UserCheck, Search, Users } from 'lucide-react';

export default function PlatformPage() {
  const modules = [
    {
      name: "Data-Based Assessment",
      description: "Aggregates and normalizes unstructured alternate data alongside traditional bureau scores. Uses entity resolution algorithms to construct a real-time, 360-degree knowledge graph for each applicant.",
      icon: Database,
    },
    {
      name: "Machine Learning Model",
      description: "Proprietary gradient-boosted decision trees (XGBoost) and deep learning ensembles. Continuously trained to predict PD (Probability of Default) across diverse macro-economic cycles with < 1% drift.",
      icon: Brain,
    },
    {
      name: "Rule Engine & Decisioning",
      description: "Multi-parameter deterministic routing matrix. Evaluates soft & hard rules, bureau cut-offs, and compliance checkpoints dynamically, executing thousands of automated risk checks in under 200ms.",
      icon: Gavel,
    },
    {
      name: "Fraud Intelligence",
      description: "Vector-based anomaly detection comparing current application metrics against vast historical fraud topologies. Employs device fingerprinting, liveness checks, and synthetic identity isolation.",
      icon: ShieldAlert,
    },
    {
      name: "Collection Intelligence",
      description: "Predictive behavioral analytics mapping borrower interaction preferences (SMS vs Email vs Voice). Calculates optimal restructuring pathways dynamically using Markov Decision Processes.",
      icon: BarChart3,
    },
    {
      name: "Agentic AI Layer",
      description: "A secure framework of Small Language Models (SLMs) running atop a specialized Retrieval-Augmented Generation (RAG) architecture, bridging deterministic outputs with autonomous operational workflows.",
      icon: Binary,
    }
  ];

  const agents = [
    {
      role: "Borrower Agent",
      focus: "Self-Service Queries",
      details: "Acts as an interactive concierge inside the borrower's app. Can securely explain loan terms, calculate restructuring scenarios, and authenticate identity via context-aware dialogue rather than rigid decision trees.",
      icon: UserCheck
    },
    {
      role: "Field Agent",
      focus: "Assisted Collections",
      details: "A mobile copilot for field staff. Synthesizes an overdue borrower's history, suggests script adjustments based on predictive sentiment analysis, and automatically updates CRM records post-visit, eliminating manual logging.",
      icon: Search
    },
    {
      role: "Underwriter Agent",
      focus: "Policy Q&A & Copilot",
      details: "An interface for credit analysts to query complex internal policies. Analysts can ask \"Does this SME meet the revised September MSME guidelines?\" and receive cited, deterministically verified answers grounded strictly in the bank's operational manual.",
      icon: Users
    }
  ];

  return (
    <div className="bg-[#05050A] pb-24">
      
      {/* Platform Hero */}
      <section className="pt-32 pb-20 relative border-b border-white/10 overflow-hidden">
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-red/10 blur-[150px] rounded-full pointer-events-none" />
        <div className="container mx-auto px-6 max-w-7xl relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-white/5 border border-white/10 text-gray-300 font-semibold text-xs tracking-wider uppercase mb-8">
            The Vitto Architecture
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 text-white leading-tight">
            Core Architecture for <br /> Credit Operations
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed mb-10">
            A full-stack engine executing deterministic credit logic natively. We bypass API latency by embedding your credit policy directly into a specialized Small Language Model, executing underwriting and collections automatically without human orchestration.
          </p>
          <div className="inline-flex border border-white/10 rounded-full px-6 py-3 bg-white/5 backdrop-blur-sm text-lg md:text-xl font-bold text-white shadow-xl">
            Legacy vendors sell software wrappers. <span className="text-red ml-2">Vitto delivers programmatic execution.</span>
          </div>
        </div>
      </section>

      {/* 6 Modules Deep Dive */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Core Platform Modules</h2>
            <div className="w-20 h-1 bg-red rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {modules.map((mod, idx) => {
              const Icon = mod.icon;
              return (
                <div key={idx} className="bg-[#13111C]/80 border border-white/10 p-8 rounded-2xl hover:border-red/30 transition-colors group">
                  <div className="w-12 h-12 rounded-lg bg-black/40 border border-white/10 flex items-center justify-center mb-6 text-red shadow-inner">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{mod.name}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{mod.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Agentic AI Deep Dive */}
      <section className="py-24 bg-[#0A0A16] border-y border-white/5 relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-red/5 blur-[150px] rounded-full pointer-events-none -translate-y-1/2" />
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          
          <div className="mb-20 text-center max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-white">
              The Agentic AI Advantage
            </h2>
            <p className="text-lg text-gray-400 leading-relaxed">
              Why generic LLMs fail in lending, and how our domain-trained Small Language Models (SLMs) combined with strict RAG pipelines deliver compliant autonomy.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24 items-center">
            <div className="space-y-8">
              <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
                <h4 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                  <Lock className="w-5 h-5 text-red" />
                  Why not ChatGPT / Public LLMs?
                </h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Regulated lending requires absolute determinism. Public LLMs act as black boxes with high hallucination rates, shifting context boundaries, and critical PII/data-privacy risks. They cannot be reliably audited by regulators or easily forced to adhere to strict underwriting logic.
                </p>
              </div>

              <div className="bg-gradient-to-br from-red/10 to-transparent border border-red/20 p-6 rounded-2xl">
                <h4 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-red" />
                  Domain-Trained SLMs + RAG Pipeline
                </h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Vitto deploys highly specialized Small Language Models (SLMs) orchestrated through a Retrieval-Augmented Generation (RAG) pipeline. This architecture connects the AI directly to your specific credit policy PDFs and standard operating procedures. The model strictly grounds its reasoning in these retrieved documents—controlling hallucinations, ensuring 100% explainability, and maintaining policy compliance.
                </p>
              </div>
            </div>

            <div className="relative bg-[#0B0A14] border border-white/10 rounded-2xl p-8 shadow-2xl overflow-hidden aspect-square md:aspect-auto h-full flex items-center justify-center">
               <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(211,47,47,0.1)_0,transparent_70%)]" />
               <div className="relative z-10 flex flex-col items-center gap-4 text-center">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-red/80 to-red flex items-center justify-center shadow-[0_0_30px_rgba(211,47,47,0.4)]">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Full-Stack Autonomy</h3>
                  <p className="text-sm text-gray-400 max-w-sm">
                    Connecting unstructured policy logic to structured risk execution.
                  </p>
               </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="col-span-1 md:col-span-3 mb-6">
              <h3 className="text-2xl font-bold text-white">The Three Core Agents</h3>
            </div>
            {agents.map((agent, idx) => {
              const Icon = agent.icon;
              return (
                <div key={idx} className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-black/40 border border-white/10 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-red" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white">{agent.role}</h4>
                      <p className="text-xs text-red font-semibold uppercase tracking-wider">{agent.focus}</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-400 leading-relaxed">{agent.details}</p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

    </div>
  );
}
