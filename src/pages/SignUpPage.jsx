import { useState } from 'react';
import { ArrowLeft, ShieldCheck, Mail, Phone, Loader2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function SignUpPage() {
  const [authStage, setAuthStage] = useState('initial'); // 'initial', 'loading_otp', 'verify_otp', 'loading_verify', 'verified'
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState(['', '', '', '', '', '']);

  const handleRequestOtp = (e) => {
    e.preventDefault();
    if (!email || !phone) return;
    
    setAuthStage('loading_otp');
    // Simulate API Request
    setTimeout(() => {
      setAuthStage('verify_otp');
    }, 1500);
  };

  const handleOtpChange = (element, index) => {
    if (isNaN(element.value)) return;

    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

    // Focus next input
    if (element.nextSibling && element.value !== "") {
      element.nextSibling.focus();
    }
  };

  const handleOtpKeyDown = (e, index) => {
    if (e.key === 'Backspace' && !otp[index] && e.target.previousSibling) {
      e.target.previousSibling.focus();
    }
  };

  const handleVerifyOtp = (e) => {
    e.preventDefault();
    const otpValue = otp.join('');
    if (otpValue.length !== 6) return;
    
    setAuthStage('loading_verify');
    // Simulate API Verification
    setTimeout(() => {
      // In a real app, we would transition to Step 2 here
      alert("Verification successful! Proceeding to Step 2...");
      setAuthStage('verified');
    }, 1500);
  };

  return (
    <div className="bg-[#05050A] min-h-screen flex text-gray-300 font-sans selection:bg-red/30">
      
      {/* Left Panel - Branding/Social Proof */}
      <div className="hidden lg:flex flex-col flex-1 relative overflow-hidden bg-[#0A0A16] border-r border-white/10 p-12 justify-between">
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-red/10 blur-[150px] rounded-full pointer-events-none" />
        
        <div className="relative z-10">
          <Link to="/" className="text-2xl font-bold tracking-tight text-white mb-20 inline-block">
            Vitto<span className="text-red">.</span>
          </Link>
          <div className="mt-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight mb-8">
              Access the Institutional <br /> Decisioning Engine
            </h1>
            <p className="text-lg text-gray-400 max-w-md leading-relaxed">
              Join leading Banks and NBFCs running their risk, underwriting, and automation pipelines natively on Vitto.
            </p>
          </div>
        </div>

        <div className="relative z-10 bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md max-w-md">
          <div className="flex items-start gap-4 mb-4">
            <div className="w-10 h-10 rounded-full bg-red/10 border border-red/20 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5 text-red" />
            </div>
            <div>
              <p className="text-white font-medium mb-1 line-clamp-2">"Vitto didn't just digitize our lending process; they rebuilt our core risk engine."</p>
              <p className="text-xs text-gray-500 font-medium">Chief Risk Officer, Aura Finance</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Panel - Auth Flow */}
      <div className="flex-1 flex flex-col items-center justify-center p-6 md:p-12 relative">
        <div className="w-full max-w-md relative z-10">
          
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-white transition-colors mb-12">
            <ArrowLeft className="w-4 h-4" />
            Back to Platform
          </Link>

          <div className="mb-10">
            <span className="text-red font-semibold text-xs tracking-widest uppercase mb-3 block">Step 01</span>
            <h2 className="text-3xl font-bold text-white mb-3">Identity Verification</h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              {authStage === 'initial' || authStage === 'loading_otp' 
                ? "Enter your organizational email and mobile number to receive a secure one-time passcode limit access to institutional participants."
                : `We've sent a 6-digit initialization code to ${email}.`}
            </p>
          </div>

          {/* Initial Form */}
          {(authStage === 'initial' || authStage === 'loading_otp') && (
            <form onSubmit={handleRequestOtp} className="space-y-5 animate-in fade-in slide-in-from-bottom-4 duration-500">
              
              <div className="space-y-2">
                <label htmlFor="email" className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Corporate Email</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                  <input
                    type="email"
                    id="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@nbfc.com"
                    disabled={authStage === 'loading_otp'}
                    className="w-full bg-[#13111C] border border-white/10 rounded-xl py-3.5 pl-12 pr-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-red/50 focus:ring-1 focus:ring-red/50 transition-all disabled:opacity-50"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="phone" className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Mobile Number</label>
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                  <input
                    type="tel"
                    id="phone"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+1 (555) 000-0000"
                    disabled={authStage === 'loading_otp'}
                    className="w-full bg-[#13111C] border border-white/10 rounded-xl py-3.5 pl-12 pr-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-red/50 focus:ring-1 focus:ring-red/50 transition-all disabled:opacity-50"
                  />
                </div>
              </div>

              <button 
                type="submit"
                disabled={authStage === 'loading_otp' || !email || !phone}
                className="w-full mt-8 bg-red hover:bg-[#E53935] text-white py-4 rounded-xl font-bold transition-all disabled:opacity-50 disabled:hover:bg-red flex items-center justify-center gap-2 group shadow-[0_0_30px_-5px_rgba(211,47,47,0.3)]"
              >
                {authStage === 'loading_otp' ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Provisioning Code...
                  </>
                ) : (
                  <>
                    Request Secure OTP
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>

            </form>
          )}

          {/* OTP Verification Form */}
          {(authStage === 'verify_otp' || authStage === 'loading_verify' || authStage === 'verified') && (
            <form onSubmit={handleVerifyOtp} className="space-y-8 animate-in fade-in slide-in-from-right-8 duration-500">
              
              <div className="flex justify-between items-center gap-2 md:gap-4">
                {otp.map((data, index) => {
                  return (
                    <input
                      className="w-12 h-14 md:w-14 md:h-16 bg-[#13111C] border border-white/10 rounded-xl text-center text-xl md:text-2xl font-bold text-white focus:outline-none focus:border-red/50 focus:ring-1 focus:ring-red/50 transition-all disabled:opacity-50"
                      type="text"
                      name="otp"
                      maxLength="1"
                      key={index}
                      value={data}
                      onChange={(e) => handleOtpChange(e.target, index)}
                      onKeyDown={(e) => handleOtpKeyDown(e, index)}
                      onFocus={(e) => e.target.select()}
                      disabled={authStage === 'loading_verify' || authStage === 'verified'}
                    />
                  );
                })}
              </div>

              <div className="flex flex-col gap-4">
                <button 
                  type="submit"
                  disabled={authStage === 'loading_verify' || authStage === 'verified' || otp.join('').length !== 6}
                  className="w-full bg-red hover:bg-[#E53935] text-white py-4 rounded-xl font-bold transition-all disabled:opacity-50 disabled:hover:bg-red flex items-center justify-center gap-2 shadow-[0_0_30px_-5px_rgba(211,47,47,0.3)]"
                >
                  {authStage === 'loading_verify' ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Authenticating...
                    </>
                  ) : authStage === 'verified' ? (
                    "Authenticated"
                  ) : (
                    "Verify Pipeline"
                  )}
                </button>
                
                <button 
                  type="button" 
                  onClick={() => {
                    setOtp(['', '', '', '', '', '']);
                    setAuthStage('initial');
                  }}
                  disabled={authStage === 'loading_verify' || authStage === 'verified'}
                  className="text-sm font-medium text-gray-500 hover:text-white transition-colors"
                >
                  Did not receive the code? Go back
                </button>
              </div>

            </form>
          )}

        </div>
      </div>
    </div>
  );
}
