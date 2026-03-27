import { Users, FileText, PhoneCall, BookOpen, MessageSquare, CheckCircle2 } from 'lucide-react';

export default function AutomationPage() {
  const layers = [
    {
      id: "A",
      title: "Customer Acquisition",
      icon: Users,
      modules: [
        "Lead Management",
        "Partner Onboarding",
        "DIY / Assisted Journeys",
        "Partner / Employee Journeys"
      ]
    },
    {
      id: "B",
      title: "Underwriting & LOS",
      icon: FileText,
      modules: [
        "KYC (Individual + Entity)",
        "UCIC & Dedupe",
        "Document Fetch & Analyzer",
        "Rule Engine & Underwriting",
        "E-Sign & Disbursement"
      ]
    },
    {
      id: "C",
      title: "Collections",
      icon: PhoneCall,
      modules: [
        "Allotment & Queuing",
        "PTP Capture",
        "Payment Gateway Integration",
        "Omni-channel Automation (WhatsApp, SMS, AI Calls)"
      ]
    },
    {
      id: "D",
      title: "LMS",
      icon: BookOpen,
      modules: [
        "Ledger Creation",
        "Insurance Auto Deduct",
        "Loan Closure",
        "Debt Tagging"
      ]
    },
    {
      id: "E",
      title: "CRM & Communications",
      icon: MessageSquare,
      modules: [
        "360 Customer View",
        "Service Management",
        "Internal Hub",
        "Campaigns",
        "Reporting & Analytics"
      ]
    }
  ];

  return (
    <div className="bg-[#05050A] pb-24 min-h-screen">
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative border-b border-white/5 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-red/10 blur-[150px] rounded-full pointer-events-none" />
        <div className="container mx-auto px-6 max-w-7xl relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-white/5 border border-white/10 text-gray-300 font-semibold text-xs tracking-wider uppercase mb-8">
            The Operational Stack
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 text-white leading-tight">
            Operational Layer <br /> Architecture
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed mb-10">
            A full suite of operational modules powered by credit policies, rule engines, and machine learning models to evaluate borrower risk and automate your workflows in real time.
          </p>
          <div className="inline-flex border border-white/10 rounded-full px-6 py-3 bg-white/5 backdrop-blur-sm text-lg md:text-xl font-bold text-white shadow-xl transform transition-transform hover:scale-105 hover:border-red/30">
            Legacy LOS manages applications. <span className="text-red ml-2">Vitto evaluates risk and executes decisions.</span>
          </div>
        </div>
      </section>

      {/* 5 Layers Display */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6 max-w-7xl">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 relative">
            
            {/* Connecting visual line for desktop */}
            <div className="hidden lg:block absolute left-1/2 top-10 bottom-10 w-px bg-gradient-to-b from-red/50 via-red/10 to-transparent -translate-x-1/2 opacity-20 pointer-events-none" />

            {layers.map((layer, index) => {
              const Icon = layer.icon;
              return (
                <div 
                  key={layer.id} 
                  className={`relative group bg-[#13111C]/80 border border-white/10 rounded-3xl p-8 lg:p-12 hover:border-red/40 transition-all duration-500 backdrop-blur-md hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(211,47,47,0.15)] ${
                    index === layers.length - 1 && layers.length % 2 !== 0 ? 'lg:col-span-2 lg:max-w-2xl lg:mx-auto w-full' : ''
                  }`}
                >
                  <div className="absolute -top-6 -right-4 text-[150px] font-black text-white/[0.02] group-hover:text-red/[0.04] transition-colors duration-500 select-none pointer-events-none leading-none z-0">
                    {layer.id}
                  </div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center gap-6 mb-8">
                      <div className="w-16 h-16 rounded-2xl bg-[#0A0A16] border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-red/10 group-hover:border-red/30 transition-colors duration-500 shadow-inner">
                        <Icon className="w-8 h-8 text-red/80 group-hover:text-red transition-colors" />
                      </div>
                      <div>
                        <div className="text-red font-semibold text-sm tracking-widest uppercase mb-1">
                          Layer {layer.id}
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                          {layer.title}
                        </h2>
                      </div>
                    </div>

                    <div className="bg-[#0A0A16]/50 rounded-2xl p-6 border border-white/5 backdrop-blur-md">
                      <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-4">Included Modules</h4>
                      <ul className="space-y-4">
                        {layer.modules.map((module, mIdx) => (
                          <li key={mIdx} className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-green-500/80 shrink-0 mt-0.5" />
                            <span className="text-gray-300 font-medium leading-relaxed group-hover:text-white transition-colors">
                              {module}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

    </div>
  );
}
