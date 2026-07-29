'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface JobRole {
  id: string;
  title: string;
  dept: string;
  deptLabel: string;
  location: string;
  type: string;
  status: 'Active' | 'Hot' | 'Featured';
  summary: string;
  responsibilities: string[];
  qualifications: string[];
  perks: string[];
}

const allJobs: JobRole[] = [
  {
    id: 'product-intern',
    title: 'Product Intern',
    dept: 'product',
    deptLabel: 'Product',
    location: 'Bengaluru / Hybrid',
    type: 'Internship (3-6 Months)',
    status: 'Featured',
    summary: 'Work directly with founders and senior PMs to build, test, and iterate on Level 3 & Level 4 AI Agents for 300+ enterprise e-commerce brands.',
    responsibilities: [
      'Conduct deep customer discovery interviews with D2C brand managers & CS leads.',
      'Define specs, user flows, and wireframes for new Conversational Commerce features.',
      'Analyze conversation metrics & agent intent accuracy to optimize prompt pipelines.',
      'Coordinate cross-functionally with Engineering & Design to ship features bi-weekly.'
    ],
    qualifications: [
      'Strong product intuition with demonstrated AI/Web side-projects or prototypes.',
      'Empathy for user friction points and ability to articulate complex UX clearly.',
      'Familiarity with Figma, SQL/analytics tools, and LLM capabilities/limitations.',
      'Relentless bias for action and high execution speed.'
    ],
    perks: ['Pre-Placement Offer (PPO) opportunity', 'Direct founder mentorship', 'Flexible hybrid work']
  },
  {
    id: 'cs-associate',
    title: 'Customer Success Associate',
    dept: 'customer-success',
    deptLabel: 'Customer Success',
    location: 'Bengaluru',
    type: 'Full-time',
    status: 'Active',
    summary: 'Join our customer success team to drive value, adoption, and long-term satisfaction for high-growth e-commerce brand partners.',
    responsibilities: [
      'Own end-to-end customer onboarding and initial chatbot configuration.',
      'Monitor key performance indicators (GMV impact, resolution rate, response time).',
      'Provide rapid triage for customer queries and feature requests.',
      'Collaborate with Product to translate customer feedback into roadmap items.'
    ],
    qualifications: [
      '0-2 years experience in Customer Success, Account Management, or SaaS Ops.',
      'Exceptional written and verbal communication skills.',
      'Analytical mindset with comfort navigating analytics dashboards.',
      'High ownership mindset and problem-solving drive.'
    ],
    perks: ['Comprehensive health insurance', 'Performance bonuses', 'Catered meals']
  },
  {
    id: 'cs-ops',
    title: 'Customer Success Ops Specialist',
    dept: 'customer-success',
    deptLabel: 'Customer Success',
    location: 'Bengaluru',
    type: 'Full-time',
    status: 'Active',
    summary: 'Optimize customer success workflows, analytics, and internal automation to scale customer retention across enterprise accounts.',
    responsibilities: [
      'Build automated health-score tracking and churn warning systems.',
      'Streamline CS playbooks, CRM workflows, and support documentation.',
      'Analyze cohort retention data to spot upsell and optimization opportunities.',
      'Train CS team members on new tools and operational guidelines.'
    ],
    qualifications: [
      '1-3 years in RevOps, CS Ops, or Business Operations at a B2B SaaS startup.',
      'Advanced Excel/Google Sheets, SQL, and CRM experience (HubSpot/Salesforce).',
      'Strong process design skills and quantitative rigor.'
    ],
    perks: ['Learning allowance', 'Top-tier Mac hardware', 'Flexible PTO']
  },
  {
    id: 'csm',
    title: 'Customer Success Manager (CSM)',
    dept: 'customer-success',
    deptLabel: 'Customer Success',
    location: 'Bengaluru',
    type: 'Full-time',
    status: 'Hot',
    summary: 'Lead strategic enterprise brand accounts, drive business reviews, and ensure maximum ROI from LimeChat\'s AI suite.',
    responsibilities: [
      'Manage portfolio of top enterprise D2C accounts with annual revenue goals.',
      'Execute quarterly business reviews (QBRs) with CXOs and Marketing Heads.',
      'Identify expansion opportunities (upsell, cross-sell, new channels).',
      'Act as trusted AI consultant to help brands scale WhatsApp revenue.'
    ],
    qualifications: [
      '3-5 years managing enterprise B2B SaaS accounts.',
      'Proven track record of maintaining >100% Net Revenue Retention (NRR).',
      'Deep understanding of e-commerce metrics (CAC, LTV, conversion rate).'
    ],
    perks: ['Competitive equity options', 'Executive coaching budget', 'Full medical cover']
  },
  {
    id: 'ae-midmarket',
    title: 'Mid-Market Account Executive (AE)',
    dept: 'sales',
    deptLabel: 'Sales',
    location: 'Bengaluru',
    type: 'Full-time',
    status: 'Hot',
    summary: 'Drive outbound & inbound pipeline growth to close mid-market e-commerce deals across India and Southeast Asia.',
    responsibilities: [
      'Own the full sales cycle from initial demo to contract closing.',
      'Conduct consultative sales presentations highlighting ROI of Level 3/4 AI.',
      'Partner with SDRs and Solution Engineers to craft custom proposals.',
      'Maintain rigorous CRM pipeline accuracy and forecasting.'
    ],
    qualifications: [
      '2-4 years closing experience in B2B SaaS (E-commerce / MarTech preferred).',
      'Consistent record of quota attainment (>100% of target).',
      'Strong negotiation, objection handling, and relationship-building skills.'
    ],
    perks: ['Uncapped commission structure', 'Relocation assistance', 'Wellness stipends']
  },
  {
    id: 'sr-ai-engineer',
    title: 'Senior AI / ML Research Engineer',
    dept: 'engineering',
    deptLabel: 'Engineering',
    location: 'Bengaluru',
    type: 'Full-time',
    status: 'Featured',
    summary: 'Architect custom LLM orchestration, RAG models, and autonomous conversational agents that process 50M+ messages monthly.',
    responsibilities: [
      'Design, train, and fine-tune domain-specific LLM & intent classification models.',
      'Build low-latency streaming infrastructure for real-time AI responses.',
      'Implement guardrails against hallucination and bias in customer interactions.',
      'Publish internal tech benchmarks and mentor junior engineering staff.'
    ],
    qualifications: [
      '3+ years building production ML / NLP systems.',
      'Deep expertise in PyTorch/TensorFlow, Transformer models, Vector DBs (Pinecone/Milvus).',
      'Solid backend skills in Python, FastAPI, and Distributed Systems.'
    ],
    perks: ['High equity grant', 'Conference travel sponsorship', 'Latest AI hardware']
  }
];

const filters = [
  { key: 'all', label: 'All Departments' },
  { key: 'product', label: 'Product' },
  { key: 'customer-success', label: 'Customer Success' },
  { key: 'sales', label: 'Sales' },
  { key: 'engineering', label: 'Engineering' },
];

export default function OpenPositions() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedJob, setSelectedJob] = useState<JobRole | null>(null);
  const [appliedJob, setAppliedJob] = useState<string | null>(null);

  const filteredJobs = allJobs.filter((job) => {
    const matchesFilter = activeFilter === 'all' || job.dept === activeFilter;
    const matchesSearch =
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <>
      <Header />
      <main className="w-full pt-20 bg-canvas-neutral min-h-screen">
        <div className="flex flex-col w-full">

          {/* Decorative Hero Background */}
          <div className="relative w-full bg-surface-deep text-pure-white pt-16 pb-20 px-4 md:px-margin-desktop overflow-hidden">
            <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[70%] bg-accent-lime/10 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[60%] bg-primary/30 rounded-full blur-[100px] pointer-events-none"></div>
            
            <div className="max-w-[1440px] mx-auto relative z-10 flex flex-col md:flex-row gap-8 items-start md:items-end justify-between">
              <div className="flex flex-col gap-4 max-w-3xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent-lime/15 border border-accent-lime/30 rounded-full w-fit">
                  <span className="w-2 h-2 rounded-full bg-accent-lime animate-pulse"></span>
                  <span className="font-label-sm text-[11px] text-accent-lime uppercase tracking-widest font-bold">
                    We Are Hiring
                  </span>
                </div>
                <h1 className="font-display-lg text-4xl md:text-6xl text-pure-white font-bold tracking-tight leading-tight">
                  Build intelligence that <br />
                  <span className="text-accent-lime italic">scales empathy.</span>
                </h1>
                <p className="font-body-lg text-body-lg text-pure-white/80 max-w-xl">
                  We are seeking curious, high-velocity builders to engineer the future of AI commerce. Explore open roles across Product, Engineering, Success, and Sales.
                </p>
              </div>

              {/* Counter Card */}
              <div className="bg-pure-white/10 backdrop-blur-md border border-pure-white/15 p-6 rounded-2xl flex flex-col items-center justify-center text-center min-w-[180px]">
                <span className="font-display-lg text-5xl font-bold text-accent-lime">{allJobs.length}</span>
                <span className="font-label-sm text-xs text-pure-white/70 uppercase tracking-wider mt-1">
                  Active Positions
                </span>
              </div>
            </div>
          </div>

          {/* Search & Filter Bar */}
          <section className="w-full px-4 md:px-margin-desktop py-8 bg-surface border-b border-outline-variant/30 sticky top-20 z-30 shadow-sm backdrop-blur-md">
            <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row gap-4 items-center justify-between">
              
              {/* Filter Tabs */}
              <div className="flex items-center gap-2 overflow-x-auto w-full lg:w-auto pb-2 lg:pb-0 scrollbar-none">
                {filters.map((f) => {
                  const count = f.key === 'all' 
                    ? allJobs.length 
                    : allJobs.filter((j) => j.dept === f.key).length;
                  const isActive = activeFilter === f.key;
                  return (
                    <button
                      key={f.key}
                      onClick={() => setActiveFilter(f.key)}
                      className={`whitespace-nowrap px-4 py-2 rounded-full font-label-md text-sm transition-all flex items-center gap-2 ${
                        isActive
                          ? 'bg-surface-deep text-accent-lime font-bold shadow-sm'
                          : 'bg-surface-container text-on-surface-variant hover:bg-surface-container-high'
                      }`}
                    >
                      {f.label}
                      <span className={`text-xs px-2 py-0.5 rounded-full ${
                        isActive ? 'bg-accent-lime text-surface-deep font-bold' : 'bg-outline-variant/30 text-on-surface-variant'
                      }`}>
                        {count}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Search Box */}
              <div className="relative w-full lg:w-80">
                <span className="material-symbols-outlined absolute left-3 top-2.5 text-on-surface-variant text-xl">
                  search
                </span>
                <input
                  type="text"
                  placeholder="Search by title or keyword..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-pure-white border border-outline-variant/50 rounded-full font-body-sm text-sm focus:outline-none focus:border-primary transition-all"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-2.5 text-on-surface-variant text-xs hover:text-on-surface"
                  >
                    Clear
                  </button>
                )}
              </div>
            </div>
          </section>

          {/* Job List Section */}
          <section className="w-full px-4 md:px-margin-desktop py-12">
            <div className="max-w-[1440px] mx-auto grid grid-cols-12 gap-8">

              {/* Sidebar Info Card */}
              <aside className="col-span-12 lg:col-span-4 flex flex-col gap-6">
                
                {/* Official Hiring Philosophy Card */}
                <div className="bg-gradient-to-br from-surface-deep to-primary p-7 rounded-3xl shadow-xl text-pure-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-accent-lime/10 rounded-full blur-2xl"></div>
                  <div className="relative z-10 flex flex-col gap-3">
                    <span className="bg-accent-lime/20 text-accent-lime font-label-sm text-[11px] uppercase tracking-widest px-3 py-1 rounded-full w-fit font-bold">
                      Our Hiring Standard
                    </span>
                    <h3 className="font-headline-sm text-xl text-pure-white font-bold">
                      High Ownership &amp; Radical Candor
                    </h3>
                    <p className="font-body-sm text-sm text-pure-white/80 leading-relaxed">
                      At LimeChat, every team member has direct agency over critical roadmap decisions. We value execution speed, user empathy, and deep technical curiosity.
                    </p>
                    <div className="pt-2 flex items-center gap-3">
                      <a
                        href="https://www.limechat.ai/"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 text-accent-lime font-label-md text-xs font-bold hover:underline"
                      >
                        Explore Platform Tech ↗
                      </a>
                    </div>
                  </div>
                </div>

                {/* Spontaneous Application */}
                <div className="bg-pure-white p-6 rounded-3xl border border-outline-variant/30 shadow-sm flex flex-col gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent-lime/20 flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-2xl">send</span>
                  </div>
                  <div>
                    <h4 className="font-headline-sm text-lg text-on-surface font-bold">Don't see your role?</h4>
                    <p className="font-body-sm text-sm text-on-surface-variant mt-1">
                      We are always looking for high-ownership engineers, PMs, and marketers. Send us your resume directly.
                    </p>
                  </div>
                  <a
                    href="mailto:careers@limechat.ai?subject=Spontaneous%20Application%20-%20LimeChat"
                    className="inline-flex items-center justify-center gap-2 bg-surface-deep text-accent-lime font-label-md text-sm font-bold py-3 px-6 rounded-full hover:bg-primary hover:text-pure-white transition-all text-center"
                  >
                    Submit General Application
                    <span className="material-symbols-outlined text-sm">mail</span>
                  </a>
                </div>
              </aside>

              {/* Main Jobs Listing */}
              <div className="col-span-12 lg:col-span-8 flex flex-col gap-4">
                {filteredJobs.length === 0 ? (
                  <div className="bg-pure-white p-12 rounded-3xl text-center flex flex-col items-center justify-center gap-3 border border-outline-variant/30">
                    <span className="material-symbols-outlined text-4xl text-on-surface-variant">search_off</span>
                    <h3 className="font-headline-sm text-xl text-on-surface">No matching roles found</h3>
                    <p className="font-body-sm text-sm text-on-surface-variant">
                      Try adjusting your search terms or department filter.
                    </p>
                    <button
                      onClick={() => { setActiveFilter('all'); setSearchQuery(''); }}
                      className="mt-2 text-primary font-label-md text-sm font-bold hover:underline"
                    >
                      Reset All Filters
                    </button>
                  </div>
                ) : (
                  filteredJobs.map((job) => (
                    <article
                      key={job.id}
                      onClick={() => setSelectedJob(job)}
                      className="bg-pure-white p-6 md:p-8 rounded-3xl border border-outline-variant/30 shadow-sm hover:shadow-md hover:border-primary/40 transition-all cursor-pointer flex flex-col md:flex-row justify-between items-start md:items-center gap-6 group relative overflow-hidden"
                    >
                      <div className="absolute top-0 left-0 w-2 h-full bg-accent-lime opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      
                      <div className="flex flex-col gap-3 flex-1">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="bg-surface-container text-on-surface-variant font-label-sm text-[11px] uppercase tracking-wider px-3 py-1 rounded-full font-semibold">
                            {job.deptLabel}
                          </span>
                          <span className="bg-canvas-neutral text-on-surface-variant font-label-sm text-[11px] px-3 py-1 rounded-full flex items-center gap-1">
                            <span className="material-symbols-outlined text-[13px]">location_on</span>
                            {job.location}
                          </span>
                          <span className={`font-label-sm text-[11px] uppercase tracking-wider px-3 py-1 rounded-full font-bold ${
                            job.status === 'Featured'
                              ? 'bg-accent-lime/30 text-surface-deep'
                              : job.status === 'Hot'
                              ? 'bg-red-100 text-red-700'
                              : 'bg-primary/10 text-primary'
                          }`}>
                            {job.status}
                          </span>
                        </div>

                        <div>
                          <h2 className="font-headline-sm text-2xl text-on-surface group-hover:text-primary transition-colors font-bold">
                            {job.title}
                          </h2>
                          <p className="font-body-sm text-sm text-on-surface-variant mt-2 line-clamp-2 leading-relaxed">
                            {job.summary}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 shrink-0">
                        <span className="font-label-md text-xs font-bold text-primary group-hover:translate-x-1 transition-transform flex items-center gap-1">
                          View Details <span className="material-symbols-outlined text-sm">arrow_forward</span>
                        </span>
                      </div>
                    </article>
                  ))
                )}
              </div>

            </div>
          </section>

          {/* Job Details Modal / Drawer */}
          {selectedJob && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-surface-deep/70 backdrop-blur-sm animate-in fade-in duration-200">
              <div className="bg-pure-white w-full max-w-3xl max-h-[90vh] rounded-3xl shadow-2xl overflow-hidden flex flex-col relative animate-in zoom-in-95 duration-200">
                
                {/* Modal Header */}
                <div className="p-6 md:p-8 bg-surface-deep text-pure-white relative">
                  <button
                    onClick={() => setSelectedJob(null)}
                    className="absolute top-6 right-6 text-pure-white/70 hover:text-pure-white bg-pure-white/10 rounded-full p-2 hover:bg-pure-white/20 transition-all"
                  >
                    <span className="material-symbols-outlined text-xl">close</span>
                  </button>

                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-accent-lime text-surface-deep font-label-sm text-xs px-3 py-1 rounded-full font-bold uppercase">
                      {selectedJob.deptLabel}
                    </span>
                    <span className="text-pure-white/70 font-label-sm text-xs flex items-center gap-1">
                      <span className="material-symbols-outlined text-sm">location_on</span>
                      {selectedJob.location}
                    </span>
                  </div>

                  <h2 className="font-headline-md text-2xl md:text-3xl text-pure-white font-bold">
                    {selectedJob.title}
                  </h2>
                  <p className="font-body-sm text-sm text-pure-white/80 mt-2">
                    {selectedJob.type}
                  </p>
                </div>

                {/* Modal Body */}
                <div className="p-6 md:p-8 overflow-y-auto flex flex-col gap-6 font-body-md text-on-surface">
                  <div>
                    <h3 className="font-headline-sm text-base text-primary font-bold uppercase tracking-wider mb-2">
                      Role Overview
                    </h3>
                    <p className="text-on-surface-variant leading-relaxed text-sm">
                      {selectedJob.summary}
                    </p>
                  </div>

                  <div>
                    <h3 className="font-headline-sm text-base text-primary font-bold uppercase tracking-wider mb-3">
                      Key Responsibilities
                    </h3>
                    <ul className="flex flex-col gap-2">
                      {selectedJob.responsibilities.map((resp, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-on-surface-variant">
                          <span className="material-symbols-outlined text-accent-forest text-lg shrink-0 mt-0.5">check_circle</span>
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-headline-sm text-base text-primary font-bold uppercase tracking-wider mb-3">
                      Qualifications & Skills
                    </h3>
                    <ul className="flex flex-col gap-2">
                      {selectedJob.qualifications.map((qual, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-on-surface-variant">
                          <span className="material-symbols-outlined text-primary text-lg shrink-0 mt-0.5">arrow_right</span>
                          <span>{qual}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-headline-sm text-base text-primary font-bold uppercase tracking-wider mb-3">
                      Perks & Benefits
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedJob.perks.map((perk, i) => (
                        <span key={i} className="bg-surface-container px-3 py-1.5 rounded-xl text-xs font-label-md text-on-surface">
                          ✨ {perk}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Modal Footer CTA */}
                <div className="p-6 bg-surface-container-low border-t border-outline-variant/30 flex items-center justify-between gap-4">
                  <div>
                    <span className="font-label-sm text-xs text-on-surface-variant block">Ready to apply?</span>
                    <span className="font-headline-sm text-sm font-bold text-on-surface">{selectedJob.title}</span>
                  </div>

                  {appliedJob === selectedJob.id ? (
                    <div className="bg-accent-forest text-pure-white px-6 py-3 rounded-full font-label-md text-sm font-bold flex items-center gap-2">
                      <span className="material-symbols-outlined text-sm">check</span> Application Submitted!
                    </div>
                  ) : (
                    <button
                      onClick={() => setAppliedJob(selectedJob.id)}
                      className="bg-accent-lime text-surface-deep hover:bg-primary hover:text-pure-white px-6 py-3 rounded-full font-label-md text-sm font-bold transition-all shadow-md flex items-center gap-2"
                    >
                      Apply Now <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </button>
                  )}
                </div>

              </div>
            </div>
          )}

        </div>
      </main>
      <Footer />
    </>
  );
}
