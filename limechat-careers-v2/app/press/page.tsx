'use client';

import { useRef } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const newsItems = [
  {
    pub: 'TechCrunch',
    date: 'Sep 28, 2023',
    title: 'LimeChat launches robust ecommerce chatbot integrated with Microsoft Azure',
    summary: 'Leveraging Level 3 & Level 4 AI models to deliver human-like conversational experience for online retailers.'
  },
  {
    pub: 'Forbes',
    date: 'Aug 15, 2023',
    title: 'Unlocking growth: How brands are using WhatsApp for massive customer acquisition',
    summary: 'Case study analysis on how proactive conversational commerce yields 35% higher conversion than email.'
  },
  {
    pub: 'YourStory',
    date: 'Mar 10, 2023',
    title: 'LimeChat Raises $4.2 Mn Funding to scale D2C Conversational Marketing globally',
    summary: 'Led by Stellaris Venture Partners and Pi Ventures to expand R&D team and product line.'
  },
  {
    pub: 'Inc42',
    date: 'Jan 22, 2022',
    title: 'Conversational AI startup secures Seed funding from Pi Ventures, Stellaris',
    summary: 'Empowering enterprise D2C sellers with automated support and conversational checkout.'
  },
  {
    pub: 'Economic Times',
    date: 'Nov 14, 2023',
    title: 'D2C Revolution: How AI Chatbots are driving 3x higher retention for Indian brands',
    summary: 'Top Indian brands adopt LimeChat to reduce customer support response time by 80%.'
  },
  {
    pub: 'Retail Asia',
    date: 'Feb 05, 2024',
    title: 'LimeChat expands Southeast Asia footprint with new regional partnership network',
    summary: 'Accelerating enterprise e-commerce adoption across Singapore, Indonesia, and Malaysia.'
  }
];

export default function PressPage() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -380 : 380;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <>
      <Header />
      <main className="w-full pt-20 bg-background">
        <div className="flex flex-col w-full relative">

          {/* Header Section */}
          <section className="w-full bg-surface-container-low pt-16 pb-12 px-4 md:px-margin-desktop">
            <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
              <div className="flex flex-col gap-3 max-w-2xl">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-accent-lime animate-pulse"></span>
                  <span className="font-label-md text-xs text-primary uppercase tracking-widest font-bold">Newsroom</span>
                </div>
                <h1 className="font-display-lg text-4xl md:text-6xl text-on-surface font-bold tracking-tight">Press &amp; Media</h1>
                <p className="font-body-lg text-base md:text-lg text-on-surface-variant leading-relaxed">
                  The latest announcements, press releases, and stories about how LimeChat is transforming conversational commerce globally.
                </p>
              </div>
              <div className="flex items-center gap-4">
                <a
                  href="https://www.limechat.ai/"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-surface-container-highest text-on-surface px-6 py-3 rounded-full font-label-md text-sm font-bold shadow-sm hover:bg-surface-variant transition-colors inline-flex items-center gap-2"
                >
                  <span className="material-symbols-outlined text-lg">download</span> Download Media Kit
                </a>
              </div>
            </div>
          </section>

          {/* Featured Story */}
          <section className="w-full bg-surface-container-low pb-16 px-4 md:px-margin-desktop relative overflow-hidden">
            <div className="max-w-[1440px] mx-auto">
              <div className="relative w-full rounded-3xl overflow-hidden shadow-xl bg-surface-deep flex flex-col lg:flex-row group transition-transform duration-500 hover:shadow-2xl">
                
                {/* Image Side */}
                <div className="w-full lg:w-1/2 relative min-h-[320px] lg:min-h-[460px] overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCkI-EqOHPAGK_GZCVpdr7l7sgzriFyVQPGHZcWInjniPj7Qmz65u7b_mwoZWEaCR67jOQOi7GeGBQKVnIMksJUHaNexw5GP54CglALG4scMsNIVh_V3Qju3xOb3Ht7eNwp0hUFU2NsuLfSu3jNHOSSmuCOMo7z_w0jXZTwUk0rhPOUYcudDCnDOPPnNK5TkpRyQAYQ81a5SgLFoIf01Cb8kRD3mixlC9_vg_hcd3NrN7Pu39snve1z')" }}
                  ></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-surface-deep via-transparent to-transparent lg:hidden"></div>
                  <div className="absolute top-4 left-4 bg-pure-white/10 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-2">
                    <span className="material-symbols-outlined text-accent-lime text-sm animate-bounce">star</span>
                    <span className="font-label-sm text-xs text-pure-white uppercase font-bold">Featured Story</span>
                  </div>
                </div>

                {/* Content Side */}
                <div className="w-full lg:w-1/2 p-8 lg:p-12 flex flex-col justify-between relative z-10 text-pure-white">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-pure-white rounded-full flex items-center justify-center p-2 shadow-md shrink-0">
                        <svg className="w-full h-full text-surface-deep" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M11.4 24H0V12.6h11.4V24zM24 24H12.6V12.6H24V24zM11.4 11.4H0V0h11.4v11.4zm12.6 0H12.6V0H24v11.4z"></path>
                        </svg>
                      </div>
                      <span className="font-label-md text-xs text-pure-white/70">Press Release • Oct 12, 2023</span>
                    </div>

                    <h2 className="font-display-lg text-2xl lg:text-3xl text-pure-white font-bold group-hover:text-accent-lime transition-colors leading-tight mb-4">
                      LimeChat teams up with Microsoft to build next-generation advanced AI chatbots
                    </h2>

                    <p className="font-body-md text-sm md:text-base text-pure-white/80 leading-relaxed mb-6">
                      Strategic partnership leverages Azure OpenAI services to bring unprecedented intelligence, scale, and personalization to D2C conversational commerce experiences across global markets.
                    </p>
                  </div>

                  <div className="flex items-center gap-2 pt-4 border-t border-pure-white/10">
                    <span className="font-label-md text-sm text-accent-lime font-bold">Read Full Story</span>
                    <span className="material-symbols-outlined text-accent-lime text-lg group-hover:translate-x-1 transition-transform">
                      arrow_forward
                    </span>
                  </div>
                </div>

              </div>
            </div>
          </section>

          {/* Recent Coverage Carousel */}
          <section className="w-full bg-surface py-16 px-4 md:px-margin-desktop">
            <div className="max-w-[1440px] mx-auto">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <span className="font-label-sm text-xs text-primary uppercase tracking-widest font-bold block mb-1">In The News</span>
                  <h3 className="font-headline-md text-2xl md:text-3xl text-on-surface font-bold">Recent Coverage</h3>
                </div>

                {/* Scroll Action Buttons */}
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => scroll('left')}
                    className="w-11 h-11 rounded-full bg-pure-white border border-outline-variant/40 flex items-center justify-center shadow-sm hover:bg-primary hover:text-pure-white hover:border-primary transition-all text-on-surface"
                    aria-label="Scroll Left"
                  >
                    <span className="material-symbols-outlined text-xl">arrow_back</span>
                  </button>
                  <button
                    onClick={() => scroll('right')}
                    className="w-11 h-11 rounded-full bg-surface-deep text-accent-lime flex items-center justify-center shadow-md hover:bg-primary hover:text-pure-white transition-all"
                    aria-label="Scroll Right"
                  >
                    <span className="material-symbols-outlined text-xl">arrow_forward</span>
                  </button>
                </div>
              </div>

              {/* Scrollable Horizontal Container */}
              <div
                ref={scrollRef}
                className="flex gap-6 overflow-x-auto pb-4 scrollbar-none snap-x snap-mandatory"
              >
                {newsItems.map((item) => (
                  <article
                    key={item.title}
                    className="min-w-[320px] md:min-w-[380px] max-w-[380px] bg-pure-white rounded-3xl p-7 border border-outline-variant/30 shadow-sm hover:shadow-md hover:border-primary/40 transition-all flex flex-col justify-between group cursor-pointer snap-start shrink-0"
                  >
                    <div>
                      <div className="flex justify-between items-center mb-4">
                        <span className="font-headline-sm text-lg text-primary font-bold">{item.pub}</span>
                        <span className="font-label-sm text-xs text-on-surface-variant bg-canvas-neutral px-2.5 py-1 rounded-full">{item.date}</span>
                      </div>
                      <h4 className="font-headline-sm text-lg text-on-surface group-hover:text-primary transition-colors font-bold leading-snug mb-3">
                        {item.title}
                      </h4>
                      <p className="font-body-sm text-xs text-on-surface-variant leading-relaxed line-clamp-3 mb-4">
                        {item.summary}
                      </p>
                    </div>

                    <div className="flex items-center gap-2 pt-4 border-t border-outline-variant/20 text-primary font-label-md text-xs font-bold">
                      <span>Read Full Article</span>
                      <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
                        arrow_forward
                      </span>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* Editorial Section */}
          <section className="w-full bg-surface-container-high py-20 px-4 md:px-margin-desktop relative">
            <div className="max-w-[1440px] mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                
                <div className="lg:col-span-6 flex flex-col gap-6">
                  <span className="font-label-sm text-xs text-primary uppercase tracking-widest font-bold">Featured Editorial</span>
                  <h2 className="font-display-lg text-3xl md:text-5xl text-on-surface font-bold leading-tight">
                    The Emergence of LimeChat.
                  </h2>
                  <p className="font-body-lg text-base md:text-lg text-on-surface-variant leading-relaxed">
                    A deep dive into how a vision for frictionless commerce evolved into the leading conversational AI platform for global brands.
                  </p>

                  <div className="flex items-center gap-4 pt-4 border-t border-outline-variant/30">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-primary text-on-primary font-bold flex items-center justify-center text-sm shadow-md">
                        N &amp; A
                      </div>
                      <div className="flex flex-col">
                        <span className="font-label-md text-sm text-on-surface font-bold">By the Founders</span>
                        <span className="font-label-sm text-xs text-on-surface-variant uppercase">Nitin &amp; Aniket • 8 min read</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-6 relative">
                  <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl bg-surface-deep">
                    <div
                      className="absolute inset-0 bg-cover bg-center border border-pure-white/10"
                      style={{ backgroundImage: "url('/limechat_editorial_ai_frontier.png')" }}
                    ></div>
                    <div className="absolute bottom-6 right-6 bg-pure-white/90 backdrop-blur-md rounded-2xl p-4 shadow-lg border border-pure-white/20">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="w-2 h-2 rounded-full bg-accent-lime"></span>
                        <span className="font-label-sm text-[10px] text-surface-deep uppercase font-bold">Live Platform Impact</span>
                      </div>
                      <div className="font-headline-sm text-2xl text-surface-deep font-bold">50M+</div>
                      <div className="font-label-sm text-xs text-surface-deep/70">Conversations Automated</div>
                    </div>
                  </div>
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
