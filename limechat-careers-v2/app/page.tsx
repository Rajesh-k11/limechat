import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function CareersHome() {
  return (
    <>
      <Header />
      <main className="w-full pt-20">
        <div className="flex flex-col w-full relative overflow-hidden bg-background">

          {/* ── Hero ── */}
          <section className="relative min-h-[720px] flex items-center justify-center pt-16 pb-20 px-4 md:px-margin-desktop overflow-hidden">
            <div className="absolute inset-0 z-0">
              <div className="absolute top-1/4 right-1/4 w-[60vw] h-[60vw] rounded-full bg-primary/5 blur-[120px] mix-blend-multiply pointer-events-none"></div>
              <div className="absolute bottom-1/4 left-1/4 w-[40vw] h-[40vw] rounded-full bg-accent-lime/15 blur-[100px] mix-blend-multiply pointer-events-none"></div>
              <svg className="absolute inset-0 w-full h-full opacity-15" preserveAspectRatio="none" viewBox="0 0 100 100">
                <pattern height="8" id="grid" patternUnits="userSpaceOnUse" width="8">
                  <path className="text-surface-variant" d="M 8 0 L 0 0 0 8" fill="none" stroke="currentColor" strokeWidth="0.5"></path>
                </pattern>
                <rect fill="url(#grid)" height="100%" width="100%"></rect>
              </svg>
            </div>

            <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
              
              {/* Official Portal Pill Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-surface-deep text-accent-lime rounded-full mb-6 shadow-md">
                <span className="w-2 h-2 rounded-full bg-accent-lime animate-pulse"></span>
                <span className="font-label-sm text-xs uppercase tracking-widest font-bold">
                  Careers at LimeChat
                </span>
              </div>

              <h1 className="font-display-lg text-4xl sm:text-5xl md:text-7xl text-on-surface mb-6 tracking-tight font-bold leading-tight">
                Build the future of <br className="hidden md:block" />
                <span className="relative inline-block text-primary">
                  conversational commerce.
                  <svg className="absolute w-full h-3 -bottom-1 left-0 text-accent-lime z-0" preserveAspectRatio="none" viewBox="0 0 100 10">
                    <path d="M0,5 Q50,10 100,5" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="4"></path>
                  </svg>
                </span>
              </h1>

              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-8 leading-relaxed">
                Join the team redefining how 300+ global D2C brands interact with millions of customers using proactive, Level 4 Conversational AI.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-4">
                <Link
                  href="/roles"
                  className="group relative px-8 py-4 bg-primary text-on-primary rounded-full font-label-md text-sm font-bold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 flex items-center gap-2"
                >
                  Explore Open Positions
                  <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </Link>

                <Link
                  href="/life"
                  className="px-8 py-4 bg-pure-white text-on-surface border border-outline-variant/50 rounded-full font-label-md text-sm font-bold shadow-sm hover:bg-surface-container transition-all flex items-center gap-2"
                >
                  Life at LimeChat
                  <span className="material-symbols-outlined text-lg">groups</span>
                </Link>
              </div>

              {/* Key Stats Bar */}
              <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-3xl pt-8 border-t border-outline-variant/30">
                <div>
                  <span className="block font-headline-md text-2xl md:text-3xl text-primary font-bold">50M+</span>
                  <span className="font-label-sm text-xs text-on-surface-variant uppercase tracking-wider">Messages Automated</span>
                </div>
                <div>
                  <span className="block font-headline-md text-2xl md:text-3xl text-primary font-bold">300+</span>
                  <span className="font-label-sm text-xs text-on-surface-variant uppercase tracking-wider">Enterprise Brands</span>
                </div>
                <div>
                  <span className="block font-headline-md text-2xl md:text-3xl text-primary font-bold">Level 4</span>
                  <span className="font-label-sm text-xs text-on-surface-variant uppercase tracking-wider">Autonomous AI</span>
                </div>
                <div>
                  <span className="block font-headline-md text-2xl md:text-3xl text-primary font-bold">4.9 / 5</span>
                  <span className="font-label-sm text-xs text-on-surface-variant uppercase tracking-wider">Glassdoor Rating</span>
                </div>
              </div>

            </div>
          </section>

          {/* ── Official Platform Feature Section ── */}
          <section className="py-20 px-4 md:px-margin-desktop bg-surface-deep text-pure-white relative overflow-hidden">
            <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 flex flex-col gap-6">
                <span className="bg-accent-lime text-surface-deep font-label-sm text-xs px-3.5 py-1 rounded-full font-bold uppercase tracking-wider w-fit">
                  Level 4 AI Engine
                </span>
                <h2 className="font-display-lg text-3xl md:text-5xl text-pure-white font-bold leading-tight">
                  Autonomous Commerce at Scale.
                </h2>
                <p className="font-body-md text-base text-pure-white/80 leading-relaxed">
                  LimeChat powers multi-channel conversational intelligence for leading e-commerce enterprises across WhatsApp, Web Chat, and Social. Our Level 4 AI agents handle end-to-end customer intent, order tracking, and recommendation engines with sub-second response times.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
                  <div className="p-5 bg-pure-white/5 rounded-2xl border border-pure-white/10">
                    <h4 className="font-headline-sm text-accent-lime text-base font-bold mb-1">Human-Level Empathy</h4>
                    <p className="font-body-sm text-xs text-pure-white/70">Context-aware intent classification that understands nuance, tone, and customer intent.</p>
                  </div>
                  <div className="p-5 bg-pure-white/5 rounded-2xl border border-pure-white/10">
                    <h4 className="font-headline-sm text-accent-lime text-base font-bold mb-1">3x GMV Growth</h4>
                    <p className="font-body-sm text-xs text-pure-white/70">Proactive marketing flows that convert abandoned carts into instant chat checkouts.</p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 flex justify-center">
                <div className="bg-pure-white/10 p-8 rounded-3xl border border-pure-white/15 backdrop-blur-md w-full max-w-md flex flex-col gap-5">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-accent-lime text-surface-deep font-bold flex items-center justify-center">
                      <span className="material-symbols-outlined text-xl">auto_awesome</span>
                    </div>
                    <div>
                      <h4 className="font-headline-sm text-base text-pure-white font-bold">LimeChat Platform Impact</h4>
                      <span className="font-label-sm text-xs text-accent-lime">Live Metrics</span>
                    </div>
                  </div>
                  <hr className="border-pure-white/10" />
                  <div className="space-y-3 font-body-sm text-xs text-pure-white/80">
                    <div className="flex justify-between items-center">
                      <span>Intent Accuracy</span>
                      <span className="font-bold text-accent-lime">94.8%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Avg Response Latency</span>
                      <span className="font-bold text-accent-lime">&lt; 800ms</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Resolution Rate</span>
                      <span className="font-bold text-accent-lime">78.2%</span>
                    </div>
                  </div>
                  <Link
                    href="/roles"
                    className="w-full text-center bg-accent-lime text-surface-deep font-label-md text-xs font-bold py-3.5 rounded-2xl hover:bg-pure-white transition-colors mt-2 shadow-md"
                  >
                    Join the Engineering &amp; Product Team ↗
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* ── Values ── */}
          <section className="py-20 px-4 md:px-margin-desktop bg-surface-container-low relative">
            <div className="max-w-[1440px] mx-auto">
              <div className="mb-12 max-w-2xl">
                <h2 className="font-label-md text-xs text-primary uppercase tracking-widest flex items-center gap-2 mb-2">
                  <span className="w-8 h-[2px] bg-primary"></span>
                  Our DNA
                </h2>
                <h3 className="font-headline-md text-3xl md:text-4xl text-on-surface font-bold">
                  The principles that drive us.
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                
                <div className="bg-pure-white p-8 rounded-3xl shadow-sm border border-outline-variant/30 hover:shadow-md transition-all">
                  <span className="material-symbols-outlined text-primary text-4xl mb-4">favorite</span>
                  <h4 className="font-headline-sm text-xl text-on-surface font-bold mb-2">Customer Obsessed</h4>
                  <p className="font-body-md text-sm text-on-surface-variant leading-relaxed">
                    We start with the customer and work backwards. Every feature and model tweak is built to create magic for end-users.
                  </p>
                </div>

                <div className="bg-pure-white p-8 rounded-3xl shadow-sm border border-outline-variant/30 hover:shadow-md transition-all">
                  <span className="material-symbols-outlined text-primary text-4xl mb-4">bolt</span>
                  <h4 className="font-headline-sm text-xl text-on-surface font-bold mb-2">Move with Velocity</h4>
                  <p className="font-body-md text-sm text-on-surface-variant leading-relaxed">
                    Speed is our moat. We prioritize rapid iteration, trusting data and intuition to guide swift, high-impact decisions.
                  </p>
                </div>

                <div className="bg-surface-deep text-pure-white p-8 rounded-3xl shadow-md hover:shadow-lg transition-all">
                  <span className="material-symbols-outlined text-accent-lime text-4xl mb-4">groups</span>
                  <h4 className="font-headline-sm text-xl text-pure-white font-bold mb-2">Winning Together</h4>
                  <p className="font-body-md text-sm text-pure-white/80 leading-relaxed">
                    Execution is a team sport. We check egos at the door, collaborate cross-functionally, and celebrate collective wins.
                  </p>
                </div>

              </div>
            </div>
          </section>

          {/* ── Perks & Benefits ── */}
          <section className="py-20 px-4 md:px-margin-desktop bg-pure-white">
            <div className="max-w-[1440px] mx-auto">
              <div className="text-center mb-12">
                <h2 className="font-headline-md text-3xl md:text-4xl text-on-surface font-bold mb-3">Perks &amp; Benefits</h2>
                <p className="font-body-lg text-sm md:text-base text-on-surface-variant max-w-xl mx-auto">
                  We invest heavily in our team so everyone can execute their best work.
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { icon: 'account_balance_wallet', label: 'Flexi Benefits', desc: 'Customizable monthly allowance.' },
                  { icon: 'menu_book', label: 'Learning Budget', desc: 'Unlimited books and course stipends.' },
                  { icon: 'health_and_safety', label: 'Health Insurance', desc: 'Comprehensive family cover.' },
                  { icon: 'flight_takeoff', label: 'Paid Time Off', desc: 'Generous vacation and wellness days.' },
                  { icon: 'schedule', label: 'Flexible Hours', desc: 'Work when you produce your best.' },
                  { icon: 'restaurant', label: 'Catered Lunch', desc: 'Fresh daily meals & snacks.' },
                  { icon: 'child_care', label: 'Parental Leave', desc: 'Dedicated support for new parents.' },
                  { icon: 'devices', label: 'Top Tech Setup', desc: 'M2/M3 MacBooks & 4K displays.' },
                ].map(({ icon, label, desc }) => (
                  <div key={label} className="p-6 bg-canvas-neutral rounded-2xl hover:bg-surface-container transition-all text-center flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                      <span className="material-symbols-outlined text-2xl text-primary">{icon}</span>
                    </div>
                    <h5 className="font-label-md text-sm text-on-surface font-bold mb-1">{label}</h5>
                    <p className="font-body-sm text-xs text-on-surface-variant">{desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── Bottom Call To Action ── */}
          <section className="py-20 px-4 md:px-margin-desktop bg-surface border-t border-outline-variant/30 text-center">
            <div className="max-w-[1440px] mx-auto">
              <h2 className="font-display-lg text-3xl md:text-5xl text-on-surface font-bold mb-4">
                Ready to build with us?
              </h2>
              <p className="font-body-lg text-on-surface-variant max-w-xl mx-auto mb-8 leading-relaxed">
                Check out open roles in Product, Customer Success, Engineering, and Sales.
              </p>
              <Link
                href="/roles"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-on-primary rounded-full font-label-md text-sm font-bold hover:bg-primary/90 transition-all shadow-lg"
              >
                Explore Open Positions
                <span className="material-symbols-outlined text-lg">arrow_forward</span>
              </Link>
            </div>
          </section>

          {/* ── GRAND REVEAL: Behind This Project Section ── */}
          <section className="py-24 px-4 md:px-margin-desktop bg-surface-deep text-pure-white relative overflow-hidden border-t border-pure-white/10">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-lime/10 rounded-full blur-[140px] pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/30 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="max-w-[1200px] mx-auto relative z-10">
              
              <div className="text-center max-w-3xl mx-auto mb-16">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-accent-lime/15 border border-accent-lime/30 rounded-full mb-6">
                  <span className="w-2 h-2 rounded-full bg-accent-lime animate-pulse"></span>
                  <span className="font-label-sm text-xs text-accent-lime uppercase tracking-widest font-bold">
                    Behind This Project
                  </span>
                </div>

                <h2 className="font-display-lg text-3xl sm:text-5xl text-pure-white font-bold mb-3 tracking-tight">
                  Why this project exists.
                </h2>

                <div className="mt-6 text-pure-white/85 font-body-md text-base md:text-lg leading-relaxed space-y-4 text-left md:text-center">
                  <p>
                    While applying for LimeChat's Product Intern role, I noticed an opportunity to improve the hiring experience itself.
                  </p>
                  <p>
                    Rather than submitting another demo project, I redesigned the Careers experience into a modern, interactive platform that reflects LimeChat's product quality, engineering culture, and design standards.
                  </p>
                  <p className="text-accent-lime font-medium">
                    This project demonstrates how I approach product problems: identify friction, prototype rapidly using AI-assisted tools, validate through design, and ship polished user experiences.
                  </p>
                </div>
              </div>



            </div>
          </section>

        </div>
      </main>
      <Footer />
    </>
  );
}
