"use client";
import Link from "next/link";

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
          manage clients, and learn from every project. A learning loop that
          makes your next estimate more accurate than your last.
        </p>

        <p className="text-sm text-slate-500 max-w-2xl mb-8">
          For agencies tired of underquoting projects, scrambling to staff them, and forgetting what they learned. Your 10th estimate is 40% more accurate than your 1st because the system learns from every project you close.
        </p>

        <div className="flex gap-3 flex-wrap">
          <Link
            href="/story"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-mono text-xs font-semibold no-underline transition-all text-white"
            style={{ background: "#0d9488" }}
          >
            See the Before & After →
          </Link>
          <Link
            href="/products"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-mono text-xs font-semibold no-underline border transition-all text-slate-600 border-slate-300 hover:border-slate-400 hover:bg-slate-50"
          >
            The 7 Products
          </Link>
          <a
            href="https://github.com/paulthebutcher/guildry"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-mono text-xs font-semibold no-underline border transition-all text-slate-600 border-slate-300 hover:border-slate-400 hover:bg-slate-50"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
            GitHub
          </a>
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
              <span><strong className="text-slate-800">Advisors</strong> with GTM and engineering perspectives to pressure-test the approach</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent-blueprint">→</span>
              <span><strong className="text-slate-800">Validation partners</strong> in services businesses willing to share how they work today</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent-blueprint">→</span>
              <span><strong className="text-slate-800">Potential technical cofounder</strong> if this resonates and you want to build it</span>
            </li>
          </ul>
        </div>

        <div className="rounded-xl p-6 border border-slate-200 bg-slate-50">
          <h2 className="font-mono text-[11px] uppercase tracking-[0.15em] text-slate-500 mb-4 mt-0">
            Target Market
          </h2>
          <p className="text-sm text-slate-600 m-0 mb-3">
            <strong className="text-slate-800">Services firms with existing process.</strong> Agencies and consultancies already using tools like Notion, Asana, or Monday. They have the habit; they just don't have a system that learns.
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

      {/* Why Now */}
      <section className="mb-20">
        <h2 className="font-mono text-[11px] uppercase tracking-[0.15em] text-slate-500 mb-6">
          Why Now
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            {
              title: "LLMs changed the input layer",
              body: "Before 2023, building a system that understands 'it's a medium-sized redesign, maybe 8 weeks' required years of NLP work. Now Claude can extract structured project data from natural language in seconds.",
            },
            {
              title: "Services firms are data-rich but insight-poor",
              body: "Every agency has years of SOWs, time logs, and retro notes buried in Google Drive. The data exists but has never been connected. LLMs can parse unstructured history and bootstrap the learning model from day one.",
            },
            {
              title: "The tool stack is fragmenting",
              body: "Firms now use 5-10 tools for what used to be one PSA suite. Each tool is best-in-class but siloed. There's an opportunity for a layer that connects them without replacing them.",
            },
            {
              title: "Remote work raised the stakes",
              body: "Distributed teams can't rely on hallway knowledge transfer. 'Ask Sarah, she did a project like this' doesn't work across timezones. Institutional knowledge needs to live in the system.",
            },
          ].map((item, i) => (
            <div key={i} className="rounded-xl p-5 border border-slate-200 bg-slate-50">
              <h3 className="font-mono text-sm font-semibold text-accent-scout mb-2 mt-0">{item.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed m-0">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* The Learning Loop */}
      <section className="mb-20">
        <h2 className="font-mono text-[11px] uppercase tracking-[0.15em] text-slate-500 mb-6">
          The Learning Loop
        </h2>
        <div className="rounded-xl border border-slate-200 p-8 bg-slate-50">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            {/* Loop diagram */}
            <div className="relative w-64 h-64 flex-shrink-0">
              {/* Center */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-teal-500 to-indigo-600 flex items-center justify-center shadow-lg">
                  <span className="text-white text-xs font-mono font-bold text-center leading-tight">Your<br/>Data</span>
                </div>
              </div>
              {/* Orbiting items */}
              {[
                { label: "Scope", icon: "📐", angle: 0, color: "#4f46e5" },
                { label: "Staff", icon: "👥", angle: 72, color: "#7c3aed" },
                { label: "Deliver", icon: "🚀", angle: 144, color: "#db2777" },
                { label: "Learn", icon: "📊", angle: 216, color: "#b45309" },
                { label: "Improve", icon: "📈", angle: 288, color: "#0d9488" },
              ].map((item, i) => {
                const rad = (item.angle * Math.PI) / 180;
                const x = 50 + 38 * Math.cos(rad);
                const y = 50 + 38 * Math.sin(rad);
                return (
                  <div
                    key={i}
                    className="absolute w-14 h-14 rounded-full bg-white border-2 flex flex-col items-center justify-center shadow-sm"
                    style={{
                      left: `${x}%`,
                      top: `${y}%`,
                      transform: "translate(-50%, -50%)",
                      borderColor: item.color,
                    }}
                  >
                    <span className="text-lg">{item.icon}</span>
                    <span className="text-[8px] font-mono font-semibold" style={{ color: item.color }}>{item.label}</span>
                  </div>
                );
              })}
              {/* Arrows */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
                <defs>
                  <marker id="arrowhead" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
                    <path d="M0,0 L6,3 L0,6 Z" fill="#94a3b8" />
                  </marker>
                </defs>
                {[0, 72, 144, 216, 288].map((angle, i) => {
                  const nextAngle = (angle + 72) % 360;
                  const rad1 = (angle * Math.PI) / 180;
                  const rad2 = (nextAngle * Math.PI) / 180;
                  const r = 38;
                  const midAngle = ((angle + 36) * Math.PI) / 180;
                  return (
                    <path
                      key={i}
                      d={`M ${50 + (r - 5) * Math.cos(rad1 + 0.3)} ${50 + (r - 5) * Math.sin(rad1 + 0.3)}
                          Q ${50 + (r + 5) * Math.cos(midAngle)} ${50 + (r + 5) * Math.sin(midAngle)}
                          ${50 + (r - 5) * Math.cos(rad2 - 0.3)} ${50 + (r - 5) * Math.sin(rad2 - 0.3)}`}
                      fill="none"
                      stroke="#cbd5e1"
                      strokeWidth="1.5"
                      markerEnd="url(#arrowhead)"
                    />
                  );
                })}
              </svg>
            </div>
            {/* Explanation */}
            <div className="max-w-sm">
              <h3 className="font-mono text-sm font-semibold text-slate-800 mb-3 mt-0">Every cycle makes the next one better</h3>
              <div className="space-y-3 text-xs text-slate-600">
                <p className="m-0"><strong className="text-indigo-600">Scope</strong> a project using AI-suggested estimates based on your history.</p>
                <p className="m-0"><strong className="text-violet-600">Staff</strong> it with contractors matched by skills and past performance.</p>
                <p className="m-0"><strong className="text-pink-600">Deliver</strong> with real-time tracking against the original scope.</p>
                <p className="m-0"><strong className="text-amber-600">Learn</strong> what went well and what didn't when it closes.</p>
                <p className="m-0"><strong className="text-teal-600">Improve</strong> the model so next project's estimates are more accurate.</p>
              </div>
              <p className="text-xs text-slate-500 mt-4 m-0">
                <strong>The moat:</strong> Competitors can copy features. They can't copy your project history.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="mb-20">
        <h2 className="font-mono text-[11px] uppercase tracking-[0.15em] text-slate-500 mb-6">
          Integrations
        </h2>
        <div className="rounded-xl border border-slate-200 p-6 bg-slate-50">
          <p className="text-sm text-slate-600 mb-4 m-0">
            Guildry doesn't replace your existing tools. It learns from them.
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

      {/* FAQ */}
      <section className="mb-20">
        <h2 className="font-mono text-[11px] uppercase tracking-[0.15em] text-slate-500 mb-6">
          Common Questions
        </h2>
        <div className="space-y-3">
          {[
            {
              q: "Do I have to replace my current tools?",
              a: "No. Guildry integrates with your existing tools and learns from the data they capture. You keep using what works; we add the learning layer.",
            },
            {
              q: "How long until it's actually useful?",
              a: "With historical data import, you can get useful estimates in hour one. Without history, you'll need 5-10 closed projects for the model to calibrate.",
            },
            {
              q: "What about data privacy?",
              a: "SOWs and project data are sensitive. We're designing for strict tenant isolation, encryption, and clear data residency policies from day one.",
              link: "/system/security",
            },
          ].map((item, i) => (
            <div key={i} className="rounded-xl p-5 border border-slate-200 bg-white">
              <h3 className="font-mono text-xs font-semibold text-slate-800 mb-2 mt-0">{item.q}</h3>
              <p className="text-xs text-slate-600 leading-relaxed m-0">
                {item.a}
                {item.link && (
                  <Link href={item.link} className="ml-1 text-teal-600 hover:text-teal-700 underline">
                    Learn more →
                  </Link>
                )}
              </p>
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
            { href: "/story", title: "Before & After", desc: "The transformation story", color: "#db2777" },
            { href: "/products", title: "Products", desc: "Briefs for all 7 products", color: "#4f46e5" },
            { href: "/challenges", title: "Challenges", desc: "Design problems to solve", color: "#7c3aed" },
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
