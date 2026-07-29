'use client';

import { useRef } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const testimonials = [
  {
    quote: '"The velocity here is unmatched, but it\'s grounded in radical candor. You\'re expected to move fast, challenge assumptions, and advocate for the user every day."',
    name: 'Priya S.',
    role: 'Senior AI Engineer',
    dept: 'Engineering',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA2HEM3_LBrGZtIX_6ndlauSxdZa83DwbEP3B1LIsrUjQC4bqrTWYAtYxETAf2pf6hXLOs16qNnkng3_rDbRiwmC3v4C_u2VeFC_cA_JWnnG5-_OBDqdfnm5bh9j14z6sSoilkmbIW7siah9QfUHLOBwltbDvB_SeB51yr1RLhtxHpxiDtCc0trA3mJPioQKRtIf_t34CoWeY3ad96Qx9rPpJZbtLLo_lqtMYM3z0v7Y82L8e4h7Fo2'
  },
  {
    quote: '"I\'ve worked at larger tech firms, but the ownership you get at LimeChat is different. When you ship a feature, you see its direct GMV impact on global brands the very next day."',
    name: 'Rahul M.',
    role: 'Product Lead',
    dept: 'Product',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCfZnmRj3XBOcosz6HSoSHxNTGvjaJ96G6YaWOoRGb9yt711kIP7gtAhMruIURsYuG3woPCfeprobu74ovj6HWCJ5hnobKk7iUOiIzSNSNhlyxHyMERflJZhQ_nELktcTpK2_VhlNx4GYbM_1GSB_ut8jckvtFj4qYDmBd7JtYCqd0AQ7GX7dRrbUhgLO6EuOy7Sfl5r3tEVptwXtqjj394YAmbzyk3Ody7fIT95QeiGTngzU16Tj2W'
  },
  {
    quote: '"The \'Front Page Test\' really resonated with me during the interview process, and it holds true in practice. We don\'t take ethical shortcuts just to hit a metric."',
    name: 'Ananya K.',
    role: 'Head of Customer Success',
    dept: 'Customer Success',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCSa0xoqmAw-MlZMyCWyxWFECV9Zht1uuxZHvU4qFQswFwl0hD5masWnD8LYlKAd_rBvdrw_ss1T5CIlNzsbUSaPFGBuAXDmGcQgOTxHoK48dA8hq0Tj2vV9NWpGse0KAku9jXos555KmqE3L8rklpM3_Ap9-zNsX0OfiDXYYZ9pX_SKnMBL0wvsmIhEbyADJcI63mxxpxWCws0amm6gl3XDYG3_seuywZ6U_EPavHUc3Lnr0gCJ_kv'
  },
  {
    quote: '"Sales at LimeChat is consultative. We aren\'t selling vaporware; we show brands live data on how Level 4 AI reduces resolution times by 80% within 14 days."',
    name: 'Siddharth V.',
    role: 'Mid-Market Account Executive',
    dept: 'Sales',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDYCGasHpb14PxAD3hIEEF4DbIWL9K8KUgwIdumu26pZ2yh70t_fE0nd3XosBZTF6EDeU3wqyqDVTyfyZa67T5VSRwX8Io2l5YtQi2bn6dFAqBPCuidaLEXNPyqOnp9X22Ex4rA3ShXMyVy23YwbiNihxamjBub9g-qL5F4TOTbg0R0eh1y8UPcqFzdw58eDPXvMsVI8y0_1MBwkSmVWPUtvI-qvy-9fFlEeWols8iapyMY8epkX75b'
  },
  {
    quote: '"The engineering standards are world-class. From real-time streaming LLM responses to sub-100ms vector index lookups, every day presents a fun technical puzzle."',
    name: 'Rohan D.',
    role: 'Lead Frontend Engineer',
    dept: 'Engineering',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBQxLsugGk3sGn3r6ypy0C8nt5FjBTDA9o1YK4vFSAC-N2_gGo5AdL2Xt-JTU8QMibAFF1DrLKZgGT0SObRPxa3frgAEiL0MxFNixqRYuksLJFPOMHdnP2IZvyUYev_SYA4fbhO-misMvukZ6ntx7VZ_PB75eEw5_8JfLNF90m3_oVCe7mFXMUhtNN0CFzGBr4ps_dzmTTzxw8ZOIIm1e7mLs0f8CA-KLonnSbo5wfNc9OAmTgqZHrZ'
  },
  {
    quote: '"Cross-functional collaboration is super fluid here. CS Ops sits directly with Product and R&D to translate customer insights into production feature releases."',
    name: 'Megha P.',
    role: 'CS Ops Specialist',
    dept: 'Operations',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCkI-EqOHPAGK_GZCVpdr7l7sgzriFyVQPGHZcWInjniPj7Qmz65u7b_mwoZWEaCR67jOQOi7GeGBQKVnIMksJUHaNexw5GP54CglALG4scMsNIVh_V3Qju3xOb3Ht7eNwp0hUFU2NsuLfSu3jNHOSSmuCOMo7z_w0jXZTwUk0rhPOUYcudDCnDOPPnNK5TkpRyQAYQ81a5SgLFoIf01Cb8kRD3mixlC9_vg_hcd3NrN7Pu39snve1z'
  }
];

export default function LifeAtLimeChat() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <>
      <Header />
      <main className="w-full pt-20 bg-background">
        <div className="flex flex-col w-full">

          {/* Hero */}
          <div className="relative w-full min-h-[480px] py-20 bg-surface-deep flex items-center justify-center overflow-hidden">
            <div
              className="absolute inset-0 z-0 bg-cover bg-center opacity-30"
              style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDYCGasHpb14PxAD3hIEEF4DbIWL9K8KUgwIdumu26pZ2yh70t_fE0nd3XosBZTF6EDeU3wqyqDVTyfyZa67T5VSRwX8Io2l5YtQi2bn6dFAqBPCuidaLEXNPyqOnp9X22Ex4rA3ShXMyVy23YwbiNihxamjBub9g-qL5F4TOTbg0R0eh1y8UPcqFzdw58eDPXvMsVI8y0_1MBwkSmVWPUtvI-qvy-9fFlEeWols8iapyMY8epkX75b')" }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-surface-deep via-surface-deep/80 to-transparent z-10"></div>
            <div className="relative z-30 max-w-[1440px] w-full px-4 md:px-margin-desktop text-center">
              <span className="inline-block px-4 py-1.5 rounded-full bg-accent-lime/20 font-label-sm text-xs text-accent-lime tracking-widest uppercase mb-6 font-bold">
                Our Culture &amp; DNA
              </span>
              <h1 className="font-display-lg text-4xl sm:text-6xl text-pure-white mb-6 font-bold tracking-tight">
                Winning <span className="text-accent-lime italic">Together.</span>
              </h1>
              <p className="font-body-lg text-base md:text-lg text-pure-white/80 max-w-2xl mx-auto leading-relaxed">
                Velocity is our advantage. Empathy is our compass. At LimeChat, we build intelligent systems while maintaining profound human connection.
              </p>
            </div>
          </div>

          {/* Front Page Test */}
          <div className="max-w-[1440px] mx-auto w-full px-4 md:px-margin-desktop py-20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-5 relative group">
                <div className="absolute -inset-4 bg-accent-lime/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500 z-0"></div>
                <div
                  className="relative z-10 aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl bg-surface-container bg-cover bg-center border border-outline-variant/30"
                  style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBQxLsugGk3sGn3r6ypy0C8nt5FjBTDA9o1YK4vFSAC-N2_gGo5AdL2Xt-JTU8QMibAFF1DrLKZgGT0SObRPxa3frgAEiL0MxFNixqRYuksLJFPOMHdnP2IZvyUYev_SYA4fbhO-misMvukZ6ntx7VZ_PB75eEw5_8JfLNF90m3_oVCe7mFXMUhtNN0CFzGBr4ps_dzmTTzxw8ZOIIm1e7mLs0f8CA-KLonnSbo5wfNc9OAmTgqZHrZ')" }}
                ></div>
              </div>
              <div className="lg:col-span-7 flex flex-col gap-6">
                <h2 className="font-headline-md text-3xl md:text-4xl text-on-surface font-bold">
                  The "Front Page" Test.
                </h2>
                <div className="space-y-4 font-body-md text-on-surface-variant leading-relaxed">
                  <p>
                    Integrity isn't just a corporate buzzword here; it's the operational baseline for every line of code we ship and every customer interaction we manage.
                  </p>
                  <div className="bg-surface-container-low p-6 md:p-8 rounded-2xl border-l-4 border-accent-lime relative shadow-sm">
                    <p className="font-body-lg text-base md:text-lg text-on-surface font-semibold italic">
                      "Before making a critical decision, ask yourself: If this choice and the reasoning behind it were published on the front page of a major newspaper tomorrow, would I be proud?"
                    </p>
                  </div>
                  <p>
                    If the answer is anything less than an absolute yes, we pause, recalibrate, and find a better path.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonials Carousel Section */}
          <div className="w-full bg-surface-container-low py-20">
            <div className="max-w-[1440px] mx-auto w-full px-4 md:px-margin-desktop">
              
              <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-10">
                <div>
                  <span className="font-label-sm text-xs text-primary tracking-widest uppercase mb-1 block font-bold">
                    The Team
                  </span>
                  <h2 className="font-headline-md text-3xl md:text-4xl text-on-surface font-bold">
                    Voices from the Inside.
                  </h2>
                </div>

                {/* Arrow Scroll Buttons */}
                <div className="flex items-center gap-3 mt-4 md:mt-0">
                  <button
                    onClick={() => scroll('left')}
                    className="w-11 h-11 rounded-full bg-pure-white border border-outline-variant/40 flex items-center justify-center shadow-sm hover:bg-primary hover:text-pure-white hover:border-primary transition-all text-on-surface"
                    aria-label="Scroll Testimonials Left"
                  >
                    <span className="material-symbols-outlined text-xl">arrow_back</span>
                  </button>
                  <button
                    onClick={() => scroll('right')}
                    className="w-11 h-11 rounded-full bg-surface-deep text-accent-lime flex items-center justify-center shadow-md hover:bg-primary hover:text-pure-white transition-all"
                    aria-label="Scroll Testimonials Right"
                  >
                    <span className="material-symbols-outlined text-xl">arrow_forward</span>
                  </button>
                </div>
              </div>

              {/* Scrollable Container with Fixed Width Cards */}
              <div
                ref={scrollRef}
                className="flex gap-6 overflow-x-auto pb-6 scrollbar-none snap-x snap-mandatory"
              >
                {testimonials.map((t) => (
                  <div
                    key={t.name}
                    className="w-[340px] md:w-[380px] max-w-[380px] bg-pure-white p-7 rounded-3xl shadow-sm border border-outline-variant/30 flex-shrink-0 flex flex-col justify-between snap-start group hover:shadow-md hover:border-primary/40 transition-all"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="material-symbols-outlined text-primary text-3xl">
                          format_quote
                        </span>
                        <span className="bg-canvas-neutral text-on-surface-variant font-label-sm text-[11px] px-3 py-1 rounded-full uppercase font-bold">
                          {t.dept}
                        </span>
                      </div>
                      <p className="font-body-md text-sm md:text-base text-on-surface leading-relaxed mb-6 font-normal">
                        {t.quote}
                      </p>
                    </div>

                    <div className="flex items-center gap-3 pt-4 border-t border-outline-variant/20">
                      <div
                        className="w-12 h-12 rounded-full bg-surface-container bg-cover bg-center shrink-0 border border-outline-variant/30"
                        style={{ backgroundImage: `url('${t.img}')` }}
                      ></div>
                      <div className="flex flex-col">
                        <h4 className="font-headline-sm text-base text-on-surface font-bold">{t.name}</h4>
                        <p className="font-body-sm text-xs text-on-surface-variant">{t.role}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>

          {/* CTA */}
          <div className="w-full bg-pure-white py-20 border-t border-surface-container text-center">
            <div className="max-w-[1440px] mx-auto w-full px-4 md:px-margin-desktop">
              <h2 className="font-headline-md text-3xl md:text-4xl text-on-surface font-bold mb-4">
                Ready to move faster?
              </h2>
              <p className="font-body-lg text-base text-on-surface-variant mb-8 max-w-lg mx-auto leading-relaxed">
                We are always looking for exceptional builders to join our mission. Check out our open roles.
              </p>
              <Link
                href="/roles"
                className="bg-primary text-on-primary px-8 py-4 rounded-full font-label-md text-sm font-bold shadow-md hover:bg-primary/90 transition-all inline-flex items-center gap-2"
              >
                View Open Positions
                <span className="material-symbols-outlined text-lg">arrow_outward</span>
              </Link>
            </div>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
