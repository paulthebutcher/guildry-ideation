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
          Seven products.<br />One data layer.
        </h1>

        <p className="text-lg text-slate-600 max-w-2xl leading-relaxed mb-8">
          AI tools that help professional services firms scope projects accurately,
          staff them with the right people, manage client relationships, and turn
          completed work into new business.
        </p>

        <div className="flex gap-3 flex-wrap">
          <Link
            href="/data-model"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-mono text-xs font-semibold no-underline transition-all text-white"
            style={{ background: "#0d9488" }}
          >
            View Data Model →
          </Link>
          <Link
            href="/products"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-mono text-xs font-semibold no-underline border transition-all text-slate-600 border-slate-300 hover:border-slate-400 hover:bg-slate-50"
          >
            Product Briefs
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
              <span className="text-accent-armature">→</span>
              <span><strong className="text-slate-800">Advisors</strong> — GTM and engineering perspectives to pressure-test the approach</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent-armature">→</span>
              <span><strong className="text-slate-800">Validation partners</strong> — folks in services businesses willing to share how they work today</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent-armature">→</span>
              <span><strong className="text-slate-800">Potential technical cofounder</strong> — if this resonates and you want to build it</span>
            </li>
          </ul>
        </div>

        <div className="rounded-xl p-6 border border-slate-200 bg-slate-50">
          <h2 className="font-mono text-[11px] uppercase tracking-[0.15em] text-slate-500 mb-4 mt-0">
            Target Market
          </h2>
          <p className="text-sm text-slate-600 m-0 mb-3">
            <strong className="text-slate-800">Professional services firms</strong> — agencies, consultancies, studios, and freelancers who sell expertise and deliver projects.
          </p>
          <div className="flex items-center gap-2 text-xs text-slate-500 font-mono">
            <span className="px-2 py-1 rounded bg-white border border-slate-200">Boutique</span>
            <span>→</span>
            <span className="px-2 py-1 rounded bg-white border border-slate-200">Middle Market</span>
            <span>→</span>
            <span className="px-2 py-1 rounded bg-white border border-slate-200">Enterprise</span>
          </div>
          <p className="text-xs text-slate-500 mt-3 m-0">
            Starting small to learn fast, then scaling the playbook.
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

      {/* Key Decisions */}
      <section className="mb-20">
        <h2 className="font-mono text-[11px] uppercase tracking-[0.15em] text-slate-500 mb-6">
          Key Architectural Bets
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            {
              title: "Separate brands, shared infra",
              body: "Each product has its own GTM, pricing, and buyer persona. But they share auth, data models, the conversational intake engine, and document generation. Adding a new product means defining a new schema target and tool definitions — not rebuilding infrastructure.",
            },
            {
              title: "Conversational intake as the core pattern",
              body: "Every product uses the same interaction model: take messy open input → ask smart follow-up questions → fill a structured schema → generate outputs. This is one codebase that serves all seven products with different configurations.",
            },
            {
              title: "Nullable FKs for progressive integration",
              body: "Cross-product references are always nullable. Armature works without Plinth. Relay works without Bench. When you're ready to wire them together, it's populating a single foreign key field — not a migration.",
            },
            {
              title: "Learning loop as competitive moat",
              body: "Retro → PhasePerformance → EstimationModel is a data flywheel. Every completed project makes the next estimate more accurate. Competitors without your historical data can't replicate this, even if they copy the UI.",
            },
          ].map((item, i) => (
            <div key={i} className="rounded-xl p-5 border border-slate-200 bg-slate-50">
              <h3 className="font-mono text-sm font-semibold text-accent-secondary mb-2 mt-0">{item.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed m-0">{item.body}</p>
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
            { href: "/data-model", title: "Data Model", desc: "17 entities, 7 layers", color: "#0d9488" },
            { href: "/products", title: "Products", desc: "Briefs for all 7 products", color: "#4f46e5" },
            { href: "/architecture", title: "Architecture", desc: "Repo structure & principles", color: "#dc2626" },
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
