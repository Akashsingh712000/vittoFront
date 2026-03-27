import { ArrowLeft, Clock, Share2, Linkedin, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ArticlePage() {
  return (
    <div className="bg-[#05050A] pb-32 min-h-screen pt-24 font-sans text-gray-300">
      <div className="container mx-auto px-6 max-w-3xl pt-12 relative z-10">
        
        {/* Back link & Meta */}
        <Link to="/" className="inline-flex items-center gap-2 text-red hover:text-white transition-colors mb-10 font-medium text-sm">
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>
        
        <div className="flex items-center gap-4 text-sm text-gray-500 mb-8 border-b border-white/10 pb-8">
          <span className="uppercase tracking-widest font-semibold text-white/50">Thought Leadership</span>
          <span className="w-1 h-1 rounded-full bg-gray-700" />
          <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> 5 min read</span>
        </div>

        {/* Article Header */}
        <h1 className="text-4xl md:text-5xl font-bold text-white leading-[1.2] mb-8 tracking-tight">
          Retrofit AI vs AI-Native Infrastructure in BFSI: The Hidden Cost of Patching Legacy Systems
        </h1>

        <div className="flex items-center justify-between py-6 border-y border-white/10 mb-12">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-red/20 border border-red/20 to-transparent flex items-center justify-center">
              <span className="text-red font-bold text-lg">V</span>
            </div>
            <div>
              <div className="font-semibold text-white">Vitto Engineering Team</div>
              <div className="text-sm text-gray-500">Infrastructure & Architecture</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-colors">
              <Linkedin className="w-4 h-4" />
            </button>
            <button className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-colors">
              <Twitter className="w-4 h-4" />
            </button>
            <button className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-colors">
              <Share2 className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Article Body */}
        <article className="prose prose-invert prose-lg max-w-none prose-headings:text-white prose-p:leading-relaxed prose-a:text-red hover:prose-a:text-white prose-strong:text-white">
          <p className="text-xl text-gray-400 font-medium leading-relaxed mb-10">
            For Chief Technology Officers and Risk Heads at mid-sized NBFCs, the current market mandate is clear: integrate AI or face obsolescence. Yet, the method of integration often determines whether an institution achieves operational alpha or compounds its technical debt to crippling levels. 
          </p>

          <p>
            The prevailing strategy for most institutions over the last two years has been the path of least resistance: <strong>Retrofitted AI</strong>. 
            This involves maintaining disparate legacy Loan Origination Systems (LOS), Loan Management Systems (LMS), and CRMs, while bolting on external AI wrappers or API-based microservices to handle localized automation. 
            Conversely, an <strong>AI-Native Infrastructure</strong> demands a fundamental rearchitecture—a unified, composable data layer where deterministic risk engines and autonomous Small Language Models (SLMs) share the exact same synchronized state.
          </p>

          <p>
            For a CTO presenting a roadmap to the board, distinguishing between these two approaches is not a semantic exercise; it is a financial and operational imperative.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-6">The Core Distinction: Wrapper vs. Core</h2>

          <div className="my-10 bg-[#0A0A16] border border-white/10 rounded-2xl overflow-hidden">
            <div className="grid grid-cols-3 bg-white/5 border-b border-white/10 text-sm font-semibold text-white/70 p-4">
              <div className="col-span-1">Architecture Axis</div>
              <div className="col-span-1 border-l border-white/10 pl-4">Retrofitted AI</div>
              <div className="col-span-1 border-l border-white/10 pl-4 text-red text-opacity-90">AI-Native Infrastructure</div>
            </div>
            <div className="grid grid-cols-3 text-sm p-4 border-b border-white/5">
              <div className="col-span-1 text-gray-400 font-medium pr-4">Data Access</div>
              <div className="col-span-1 border-l border-white/10 px-4">Asynchronous, siloed batch transfers via middleware.</div>
              <div className="col-span-1 border-l border-white/10 px-4">Synchronized, unified graph data layer executing in real-time.</div>
            </div>
            <div className="grid grid-cols-3 text-sm p-4 border-b border-white/5">
              <div className="col-span-1 text-gray-400 font-medium pr-4">Decision Latency</div>
              <div className="col-span-1 border-l border-white/10 px-4">High (API handshakes across decoupled LOS/LMS vendors).</div>
              <div className="col-span-1 border-l border-white/10 px-4">Sub-200ms (Edge-to-edge calculation within the same environment).</div>
            </div>
            <div className="grid grid-cols-3 text-sm p-4 border-b border-white/5">
              <div className="col-span-1 text-gray-400 font-medium pr-4">Model Type</div>
              <div className="col-span-1 border-l border-white/10 px-4">Generic Public LLMs (High hallucination risk, compliance hazard).</div>
              <div className="col-span-1 border-l border-white/10 px-4">Domain-Trained SLMs strictly bound by RAG pipelines on internal policy.</div>
            </div>
            <div className="grid grid-cols-3 text-sm p-4">
              <div className="col-span-1 text-gray-400 font-medium pr-4">Opex Scaling</div>
              <div className="col-span-1 border-l border-white/10 px-4">Compounding (License + Token costs + Middleware maintenance).</div>
              <div className="col-span-1 border-l border-white/10 px-4">Linear / Deflationary (Predictable unit economics per loan).</div>
            </div>
          </div>

          <h2 className="text-2xl font-bold mt-12 mb-6">The Decisioning Depth Problem</h2>
          <p>
            The fundamental flaw of retrofitted AI lies at the data layer. In lending, an AI model is only as intelligent as the context it can synchronously process. When an institution patches an AI module onto a ten-year-old monolithic LOS, the AI must rely on data transferred across brittle APIs. 
          </p>
          <p>
            This fragmentation creates a shallow decisioning environment. The AI might be asked to assess a borrower’s default risk, but because the LMS (historical repayment data), the CRM (interaction data), and the LOS (origination data) are isolated, the AI is effectively "blind" to the holistic 360-degree context. It evaluates a snapshot of the applicant rather than their continuous behavioral vector.
          </p>
          <p>
            An AI-Native architecture collapses these silos. By utilizing a unified data layer, the deterministic rule engine and the probabilistic machine learning models operate on the exact same graph. Anomalies in repayment behavior from the LMS instantly inform origination risk thresholds in the LOS without requiring nightly batch uploads or expensive data lake extracts.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-6">The Long-Term Cost Trap of Patching</h2>
          <p>
            Patching feels safe in the short term. The CapEx of integrating a generic LLM wrapper via API to parse documents seems minimal compared to entirely replacing an LOS. However, the long-term financial payload of retrofitted AI is disastrous.
          </p>
          <p>
            When institutions patch, they are paying cumulative rent:
          </p>
          <ul>
            <li><strong>Legacy Licensing Fees:</strong> Paying for the underlying, rigid software.</li>
            <li><strong>Compute & Token Costs:</strong> High variable costs for querying unoptimized, massive public LLMs (e.g., GPT-4) when a lean, localized Small Language Model (SLM) would suffice.</li>
            <li><strong>Integration & Middleware Debt:</strong> Constantly paying engineering teams to maintain custom ETL pipelines that repeatedly break when the legacy vendor updates an API.</li>
          </ul>
          <p>
            This creates an exponential cost curve. As loan volume increases, unit economics degrade. In contrast, AI-Native infrastructure provides predictable, deflationary scaling. A unified system replaces multiple vendor contracts with a single, harmonious environment.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-6">Why Rearchitecting is the Only Future-Proof Strategy</h2>
          <p>
            Mid-sized NBFCs and agile banks possess a critical advantage over Tier 1 legacy banks: they have the maneuverability to rip and replace their core without paralyzing their entire operation. 
          </p>
          <p>
            For compliance, relying on generative AI wrappers poses an existential regulatory threat. Regulators require strict auditability. If a loan is denied, the institution must deterministically prove why. Retrofitted generic LLMs operate as black boxes, prone to hallucinations and unexplainable drift. 
          </p>
          <p>
            AI-Native platforms solve this by utilizing strictly governed Retrieval-Augmented Generation (RAG) pipelines over domain-trained SLMs. The AI does not "guess"; it retrieves specific clauses from your approved credit policy and executes deterministic logic based on unified data.
          </p>
          
          <div className="bg-red/10 border-l-4 border-red p-6 my-10 rounded-r-xl">
            <strong className="text-white block mb-2 font-bold text-lg">The Verdict</strong>
            <p className="m-0 text-gray-300">
              Patching legacy systems with AI is akin to putting a jet engine on a horse-drawn carriage—the structural integrity will eventually fail under the speed of modern market demands. To achieve true agentic autonomy, instantaneous underwriting, and predictive collections, institutions must abandon the patchwork approach and transition to true, AI-Native unified infrastructure.
            </p>
          </div>

        </article>
      </div>
    </div>
  );
}
