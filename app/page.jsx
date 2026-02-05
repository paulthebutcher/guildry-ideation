"use client";
import Link from "next/link";
import { PRODUCTS, PIPELINE_PHASES } from "../lib/data";

function PipelineDiagram() {
  return (
    <div className="flex items-center justify-start gap-0 py-6 overflow-x-auto">
      {PIPELINE_PHASES.map((phase, i) => {
        const prod = PRODUCTS[phase.key];
        return (
          <div key={phase.key} className="flex items-center">
            <div
              className="flex flex-col items-center gap-1.5 px-4 py-3 rounded-lg min-w-[80px] border transition-all duration-200 hover:scale-105 cursor-default"
              style={{
                background: `${prod.color}08`,
                borderColor: `${prod.color}30`,
              }}
            >
              <span className="font-mono text-lg" style={{ color: prod.color }}>{prod.icon}</span>
              <span className="font-mono text-xs font-semibold" style={{ color: prod.color }}>
                {prod.name}
              </span>
              <span className="text-[9px] text-slate-500 uppercase tracking-widest">
                {phase.label}
              </span>
            </div>
            {i < PIPELINE_PHASES.length - 1 && (
              <span className="text-slate-400 px-1 text-sm">→</span>
            )}
          </div>
        );
      })}
      <div className="flex items-center ml-3">
        <span className="text-slate-400 text-sm">↩</span>
        <span className="text-[9px] text-slate-500 ml-1.5 font-mono">loop</span>
      </div>
    </div>
  );
}

function ProductCard({ productKey, product }) {
  return (
    <div
      className="group rounded-xl p-5 border transition-all duration-200 hover:shadow-md"
      style={{
        background: "#f8fafc",
        borderColor: `${product.color}20`,
      }}
    >
      <div className="flex items-center gap-3 mb-3">
        <span className="text-xl" style={{ color: product.color }}>{product.icon}</span>
        <div>
          <h3 className="font-mono text-sm font-semibold m-0" style={{ color: product.color }}>
            {product.name}
          </h3>
          <span className="text-[10px] text-slate-500 uppercase tracking-widest font-mono">
            {product.phase}
          </span>
        </div>
      </div>
      <p className="text-xs text-slate-600 leading-relaxed m-0">
        {product.tagline}
      </p>
    </div>
  );
}

export default function HomePage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      {/* Hero */}
      <div className="mb-20">
        <div className="flex items-center gap-2 mb-4">
          <span className="font-mono text-[11px] px-2 py-1 rounded bg-amber-50 text-amber-700 border border-amber-200">
            Stage: Idea + Docs
          </span>
        </div>

        <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight mb-6 text-gradient leading-tight">
          Projects that get<br />smarter over time.
        </h1>

        <p className="text-lg text-slate-600 max-w-2xl leading-relaxed mb-4">
          A project intelligence platform for services firms. Scope work, staff teams,
          manage clients, and learn from every project — with a data flywheel that
          makes your next estimate more accurate than your last.
        </p>

        <p className="text-sm text-slate-500 max-w-2xl mb-8">
          For agencies tired of underquoting projects, scrambling to staff them, and forgetting what they learned. Your 10th project estimate is 40% more accurate than your 1st — because the system learns from every project you close.
        </p>

        <div className="flex gap-3 flex-wrap">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-mono text-xs font-semibold no-underline transition-all text-white"
            style={{ background: "#0d9488" }}
          >
            See the Products →
          </Link>
          <Link
            href="/challenges"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-mono text-xs font-semibold no-underline border transition-all text-slate-600 border-slate-300 hover:border-slate-400 hover:bg-slate-50"
          >
            Design Challenges
          </Link>
        </div>
      </div>

      {/* Looking For + Target Market */}
      <section className="mb-20 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="rounded-xl p-6 border border-slate-200 bg-slate-50">
          <h2 className="font-mono text-[11px] uppercase tracking-[0.15em] text-slate-500 mb-4 mt-0">
            Looking For
          </h2>
          <ul className="space-y-2 text-sm text-slate-600 m-0 p-0 list-none">
            <li className="flex items-start gap-2">
              <span className="text-accent-blueprint">→</span>
              <span><strong className="text-slate-800">Advisors</strong> — GTM and engineering perspectives to pressure-test the approach</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent-blueprint">→</span>
              <span><strong className="text-slate-800">Validation partners</strong> — folks in services businesses willing to share how they work today</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent-blueprint">→</span>
              <span><strong className="text-slate-800">Potential technical cofounder</strong> — if this resonates and you want to build it</span>
            </li>
          </ul>
        </div>

        <div className="rounded-xl p-6 border border-slate-200 bg-slate-50">
          <h2 className="font-mono text-[11px] uppercase tracking-[0.15em] text-slate-500 mb-4 mt-0">
            Target Market
          </h2>
          <p className="text-sm text-slate-600 m-0 mb-3">
            <strong className="text-slate-800">Services firms with existing process</strong> — agencies and consultancies already using tools like Notion, Asana, or Monday to manage work. They have the habit; they just don't have a system that learns.
          </p>
          <div className="flex items-center gap-2 text-xs text-slate-500 font-mono">
            <span className="px-2 py-1 rounded bg-white border border-slate-200">50-100 people</span>
            <span>→</span>
            <span className="px-2 py-1 rounded bg-white border border-slate-200">100-200</span>
            <span>→</span>
            <span className="px-2 py-1 rounded bg-white border border-slate-200">200+</span>
          </div>
          <p className="text-xs text-slate-500 mt-3 m-0">
            Big enough to have real process. Small enough to not be locked into enterprise PSA tools.
          </p>
        </div>
      </section>

      {/* Pipeline */}
      <section className="mb-20">
        <h2 className="font-mono text-[11px] uppercase tracking-[0.15em] text-slate-500 mb-2">
          The Lifecycle
        </h2>
        <p className="text-sm text-slate-600 mb-4 max-w-xl">
          Every services business cycles through the same phases: notice → decide → scope → staff → manage → learn → sell.
          Each product owns one phase. The feedback loop makes the whole system smarter.
        </p>
        <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
          <PipelineDiagram />
        </div>
      </section>

      {/* Product Grid */}
      <section className="mb-20">
        <h2 className="font-mono text-[11px] uppercase tracking-[0.15em] text-slate-500 mb-6">
          The Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
          {Object.entries(PRODUCTS).map(([key, prod]) => (
            <ProductCard key={key} productKey={key} product={prod} />
          ))}
        </div>
      </section>

      {/* The Problem Today */}
      <section className="mb-20">
        <h2 className="font-mono text-[11px] uppercase tracking-[0.15em] text-slate-500 mb-6">
          The Problem Today
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {[
            {
              tool: "Project management",
              examples: "Monday, Asana, Notion",
              gap: "Tracks tasks, not project economics. No connection between what you scoped and what you delivered. Learning stays in your head.",
            },
            {
              tool: "Time tracking",
              examples: "Harvest, Toggl, Clockify",
              gap: "Records hours but doesn't analyze them. You know you went over budget — but not why, or how to prevent it next time.",
            },
            {
              tool: "PSA suites",
              examples: "Kantata, Accelo, Teamwork",
              gap: "Enterprise-grade, enterprise-priced, enterprise-complex. 6-month implementations. Built for compliance, not intelligence.",
            },
          ].map((item, i) => (
            <div key={i} className="rounded-xl p-5 border border-slate-200 bg-white">
              <div className="font-mono text-xs font-semibold text-slate-800 mb-1">{item.tool}</div>
              <div className="text-[10px] text-slate-400 mb-3 font-mono">{item.examples}</div>
              <p className="text-xs text-slate-600 leading-relaxed m-0">{item.gap}</p>
            </div>
          ))}
        </div>
        <div className="p-4 rounded-xl border border-amber-200 bg-amber-50">
          <p className="text-sm text-amber-800 m-0">
            <strong>The common thread:</strong> These tools capture data but don't learn from it.
            Your 100th project estimate is no more accurate than your 10th — because the system has no memory.
          </p>
        </div>
      </section>

      {/* Why Now */}
      <section className="mb-20">
        <h2 className="font-mono text-[11px] uppercase tracking-[0.15em] text-slate-500 mb-6">
          Why Now
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            {
              title: "LLMs changed the input layer",
              body: "Before 2023, building a system that understands 'it's a medium-sized redesign, maybe 8 weeks' required years of NLP work. Now Claude can extract structured project data from natural language in seconds. The conversational interface is suddenly viable.",
            },
            {
              title: "Services firms are data-rich but insight-poor",
              body: "Every agency has years of SOWs, time logs, and retro notes buried in Google Drive. The data exists — it's just never been connected. LLMs can parse unstructured history and bootstrap the learning model from day one.",
            },
            {
              title: "The tool stack is fragmenting",
              body: "Firms now use 5-10 tools for what used to be one PSA suite. Each tool is best-in-class at its job but siloed from the others. There's an opportunity for a layer that connects them — not replaces them.",
            },
            {
              title: "Remote work raised the stakes",
              body: "Distributed teams can't rely on hallway knowledge transfer. 'Ask Sarah, she did a project like this' doesn't work when Sarah is in a different timezone. Institutional knowledge needs to live in the system.",
            },
          ].map((item, i) => (
            <div key={i} className="rounded-xl p-5 border border-slate-200 bg-slate-50">
              <h3 className="font-mono text-sm font-semibold text-accent-scout mb-2 mt-0">{item.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed m-0">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* The Math */}
      <section className="mb-20">
        <h2 className="font-mono text-[11px] uppercase tracking-[0.15em] text-slate-500 mb-6">
          The Math
        </h2>
        <div className="rounded-xl border border-slate-200 overflow-hidden">
          <div className="p-6 bg-slate-50 border-b border-slate-200">
            <p className="text-sm text-slate-600 m-0">
              For a 75-person agency doing $10M in annual revenue across ~50 projects:
            </p>
          </div>
          <div className="p-6 bg-white">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  metric: "Estimation accuracy",
                  before: "±30% variance",
                  after: "±15% variance",
                  impact: "On a $200K average project, that's $30K less overrun risk per project.",
                  value: "$1.5M/year",
                },
                {
                  metric: "Scoping time",
                  before: "8 hours per SOW",
                  after: "2 hours per SOW",
                  impact: "At $150/hr blended rate, that's $900 saved per project.",
                  value: "$45K/year",
                },
                {
                  metric: "Retro capture rate",
                  before: "20% of projects",
                  after: "80% of projects",
                  impact: "4x more learning data means estimates improve 4x faster.",
                  value: "Compounds",
                },
              ].map((item, i) => (
                <div key={i} className="text-center">
                  <div className="font-mono text-[10px] text-slate-500 uppercase tracking-wider mb-2">{item.metric}</div>
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <span className="text-xs text-slate-400 line-through">{item.before}</span>
                    <span className="text-slate-400">→</span>
                    <span className="text-xs text-teal-700 font-semibold">{item.after}</span>
                  </div>
                  <p className="text-[11px] text-slate-500 mb-2 m-0">{item.impact}</p>
                  <div className="font-mono text-lg font-bold text-accent-blueprint">{item.value}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="p-4 bg-teal-50 border-t border-teal-200">
            <p className="text-sm text-teal-800 m-0 text-center">
              <strong>Conservative estimate:</strong> 10-20x ROI in year one. The value compounds as the model learns.
            </p>
          </div>
        </div>
      </section>

      {/* Why It Works */}
      <section className="mb-20">
        <h2 className="font-mono text-[11px] uppercase tracking-[0.15em] text-slate-500 mb-6">
          Why This Approach
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            {
              title: "Your data compounds",
              body: "Every project you complete makes the next one easier. Estimates get more accurate. Staffing gets smarter. Case studies write themselves. Competitors without your project history can't replicate this.",
            },
            {
              title: "Integrated from day one",
              body: "This isn't seven tools you buy separately. It's one system where scoping feeds staffing, delivery feeds learning, and learning feeds the next scope. The value is in the connections.",
            },
            {
              title: "Captures passively",
              body: "The biggest failure mode is falling back to old habits. Guildry integrates with the tools you already use — syncing from Slack, calendars, and project boards — so it learns even when you forget to tell it.",
            },
            {
              title: "Meets you where you are",
              body: "Not a blank slate. Import your past SOWs and project data to bootstrap the model. The system gets useful fast because it starts with your history, not from zero.",
            },
          ].map((item, i) => (
            <div key={i} className="rounded-xl p-5 border border-slate-200 bg-slate-50">
              <h3 className="font-mono text-sm font-semibold text-accent-secondary mb-2 mt-0">{item.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed m-0">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Integrations */}
      <section className="mb-20">
        <h2 className="font-mono text-[11px] uppercase tracking-[0.15em] text-slate-500 mb-6">
          Integrations
        </h2>
        <div className="rounded-xl border border-slate-200 p-6 bg-slate-50">
          <p className="text-sm text-slate-600 mb-4 m-0">
            Guildry doesn't replace your existing tools — it learns from them. Planned integrations:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { category: "Project tracking", tools: "Asana, Monday, Notion, Linear, Jira" },
              { category: "Time & billing", tools: "Harvest, Toggl, Clockify, QuickBooks" },
              { category: "Communication", tools: "Slack, Gmail, Google Calendar" },
              { category: "Documents", tools: "Google Drive, Dropbox, SharePoint" },
            ].map((item, i) => (
              <div key={i} className="p-3 rounded-lg bg-white border border-slate-200">
                <div className="font-mono text-[10px] text-slate-500 uppercase tracking-wider mb-1">{item.category}</div>
                <div className="text-xs text-slate-700">{item.tools}</div>
              </div>
            ))}
          </div>
          <p className="text-xs text-slate-500 mt-4 m-0">
            Integration priority will be based on early customer feedback. What do you use?
          </p>
        </div>
      </section>

      {/* Day One */}
      <section className="mb-20">
        <h2 className="font-mono text-[11px] uppercase tracking-[0.15em] text-slate-500 mb-6">
          Day One Experience
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {[
            {
              step: "1",
              title: "Connect your tools",
              desc: "Link your project tracker, time tracker, and document storage. We'll scan for historical project data.",
              time: "15 min",
            },
            {
              step: "2",
              title: "Import past work",
              desc: "Upload SOWs, proposals, and retro notes. The AI parses them into structured project records.",
              time: "30 min",
            },
            {
              step: "3",
              title: "Scope your first project",
              desc: "Tell the system about an upcoming project. It suggests estimates based on your imported history.",
              time: "20 min",
            },
            {
              step: "4",
              title: "See the flywheel",
              desc: "As you close projects and run retros, watch the estimates get more accurate over time.",
              time: "Ongoing",
            },
          ].map((item, i) => (
            <div key={i} className="rounded-xl p-5 border border-slate-200 bg-white relative">
              <div className="absolute -top-3 -left-2 w-7 h-7 rounded-full bg-accent-blueprint flex items-center justify-center">
                <span className="font-mono text-xs font-bold text-white">{item.step}</span>
              </div>
              <h3 className="font-mono text-xs font-semibold text-slate-800 mb-2 mt-2">{item.title}</h3>
              <p className="text-[11px] text-slate-600 leading-relaxed m-0 mb-2">{item.desc}</p>
              <div className="font-mono text-[10px] text-slate-400">{item.time}</div>
            </div>
          ))}
        </div>
        <p className="text-xs text-slate-500 mt-4 text-center">
          Target: useful estimates within the first hour. Value compounds from there.
        </p>
      </section>

      {/* FAQ */}
      <section className="mb-20">
        <h2 className="font-mono text-[11px] uppercase tracking-[0.15em] text-slate-500 mb-6">
          Common Questions
        </h2>
        <div className="space-y-3">
          {[
            {
              q: "How is this different from [Monday/Asana/Notion]?",
              a: "Those tools track tasks. Guildry tracks project economics — and learns from them. Think of it as a layer that sits on top of your existing stack and adds intelligence.",
            },
            {
              q: "Do I have to replace my current tools?",
              a: "No. Guildry integrates with your existing tools and learns from the data they capture. You keep using what works; we add the learning layer.",
            },
            {
              q: "How long until it's actually useful?",
              a: "With historical data import, you can get useful estimates in hour one. Without history, you'll need 5-10 closed projects for the model to calibrate. We're designing the onboarding to front-load value.",
            },
            {
              q: "What about data privacy?",
              a: "SOWs and project data are sensitive. We're designing for strict tenant isolation from day one. Enterprise customers will have options for dedicated infrastructure. More details in the Challenges section.",
            },
            {
              q: "Is this AI-generated fluff?",
              a: "The AI handles input (natural language → structured data) and synthesis (data → insights). The core value — your historical project data and the patterns in it — is real and yours. The AI accelerates; it doesn't fabricate.",
            },
            {
              q: "Why not just use a spreadsheet?",
              a: "You could. Many firms do. But spreadsheets don't learn, don't integrate, and don't scale with you. If your spreadsheet system is working, you're probably not the target market — yet.",
            },
          ].map((item, i) => (
            <div key={i} className="rounded-xl p-5 border border-slate-200 bg-white">
              <h3 className="font-mono text-xs font-semibold text-slate-800 mb-2 mt-0">{item.q}</h3>
              <p className="text-xs text-slate-600 leading-relaxed m-0">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Navigation Links */}
      <section className="border-t border-slate-200 pt-12">
        <h2 className="font-mono text-[11px] uppercase tracking-[0.15em] text-slate-500 mb-6">
          Explore
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            { href: "/products", title: "Products", desc: "Briefs for all 7 products", color: "#4f46e5" },
            { href: "/system/ai", title: "AI System", desc: "How the AI layer works", color: "#0d9488" },
            { href: "/challenges", title: "Challenges", desc: "Design problems to solve", color: "#db2777" },
            { href: "/roadmap", title: "Roadmap", desc: "6-month phased plan", color: "#b45309" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group rounded-xl p-5 border border-slate-200 no-underline transition-all hover:border-slate-300 hover:shadow-sm bg-slate-50"
            >
              <span className="block font-mono text-sm font-semibold mb-1 transition-colors" style={{ color: link.color }}>
                {link.title} →
              </span>
              <span className="text-xs text-slate-500">{link.desc}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-20 pt-8 border-t border-slate-200 flex justify-between items-center">
        <span className="font-mono text-[10px] text-slate-500">
          Guildry · Internal Docs
        </span>
        <span className="font-mono text-[10px] text-slate-500">
          Last updated: Feb 2026
        </span>
      </footer>
    </div>
  );
}
