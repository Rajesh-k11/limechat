# LimeChat Careers Platform 🚀
> **Production-Grade Careers Web Application & Product Case Study**  
> *Built independently for the LimeChat Product Intern Role Application.*

---

## 🌟 Executive Summary

Instead of submitting another static document or generic CRUD chatbot, this project transforms LimeChat's candidate hiring experience into an official, enterprise-grade **Careers Platform**.

The platform is designed to give applicants, engineers, and product leaders an immersive look into LimeChat's vision, culture, Level 4 Autonomous AI commerce engine, and active job opportunities.

For the first 80–90% of the site, visitors experience an authentic, production-grade enterprise website. Near the footer of the landing page, an elegant **"Behind This Project"** section reveals the product thinking, AI-assisted development, and design decisions behind this build.

---

## 🚀 Live Product Features

### 1. Careers Landing Page (`/`)
- **Hero & Metrics**: High-impact messaging showcasing 50M+ automated messages, 300+ enterprise brands, and Level 4 Autonomous AI capabilities.
- **Platform Technology Module**: Live impact breakdown detailing intent accuracy (94.8%), resolution rates (78.2%), and latency benchmarks (<800ms).
- **Company DNA & Values**: 3-column interactive breakdown of core operational principles (*Customer Obsessed*, *Move with Velocity*, *Winning Together*).
- **Perks & Benefits Grid**: Responsive 8-card benefits matrix with top tech setups, learning budgets, and flexi-allowances.
- **Behind This Project (Grand Reveal)**: Elegant case study reveal section highlighting the motivation, AI-driven execution speed, and candidate UX problem-solving.

### 2. Interactive Open Roles Funnel (`/roles`)
- **Department Filters**: Real-time filtering across Product, Customer Success, Sales, and Engineering with active role counts.
- **Keyword Search**: Instant client-side search across role titles, key responsibilities, and required qualifications.
- **Job Detail Drawer**: Interactive modal system for deep-diving into responsibilities, qualifications, and perks without page reloads.
- **Hiring Standard Sidebar**: Contextual sidebar emphasizing LimeChat's high-ownership culture and spontaneous application pathways.

### 3. Life at LimeChat (`/life`)
- **Culture & Principles**: In-depth feature on LimeChat's signature **"Front Page Test"** integrity framework.
- **Voices from the Inside (Testimonial Carousel)**: Responsive horizontal carousel featuring rounded rectangle cards with department badges, quotes, team member avatars, and smooth scroll buttons.

### 4. Press & Media (`/press`)
- **AI Editorial Feature**: High-fidelity AI conversational intelligence hero visual (`limechat_editorial_ai_frontier.png`).
- **Recent Coverage Carousel**: Interactive scroll container featuring rectangular cards covering TechCrunch, Forbes, YourStory, and Inc42 publications.

---

## 🛠️ Technical Architecture & Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router, React 19)
- **Styling**: Pure [Tailwind CSS v4](https://tailwindcss.com/) with custom `@theme` brand tokens:
  - **Accent Lime**: `#C3ED3B`
  - **Deep Surface**: `#061B14`
  - **Typography**: Hanken Grotesk, Inter, & Geist
- **Iconography**: Material Symbols Outlined & Lucide React
- **Deployment**: [Netlify](https://www.netlify.com/) Ready (`netlify.toml` + `@netlify/plugin-nextjs`)

---

## 💻 Local Development Setup

### Prerequisites
- Node.js `v20.x` or higher
- npm `v10.x` or higher

### Installation & Running Locally

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/limechat-careers.git
   cd limechat-careers
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

4. **Run production build**:
   ```bash
   npm run build
   ```

---

## ☁️ Deployment Guide (Netlify)

This repository includes a pre-configured `netlify.toml` for seamless continuous deployment:

```toml
[build]
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"

[build.environment]
  NODE_VERSION = "20.x"
```

To deploy via Netlify CLI:
```bash
npx netlify deploy --prod
```

---

## 👤 Author & Application Context

- **Applicant**: Product Intern Candidate
- **Target Role**: Product Intern @ LimeChat
- **Core Motivation**: Demonstrating rapid prototyping, AI-assisted development workflows, design system thinking, and user empathy through a live production artifact.
