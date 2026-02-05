"use client";
import { useState } from "react";
import { PRODUCTS, PRODUCT_DETAILS, LAYERS } from "../../lib/data";

function ProductBrief({ productKey, product, detail, isExpanded, onToggle }) {
  const allEntities = LAYERS.flatMap((l) => l.entities);
  const relatedEntities = allEntities.filter((e) => detail.entities.includes(e.id));

  return (
    <div
      className="rounded-xl border transition-all duration-200 overflow-hidden"
      style={{
        borderColor: isExpanded ? `${product.color}50` : "#e2e8f0",
        background: "#f8fafc",
      }}
    >
      {/* Header - always visible */}
      <div
        onClick={onToggle}
        className="p-5 cursor-pointer flex items-start justify-between gap-4"
      >
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-2xl" style={{ color: product.color }}>{product.icon}</span>
            <div>
              <h3 className="m-0 font-mono text-base font-bold" style={{ color: product.color }}>
                {product.name}
              </h3>
              <span className="text-[10px] text-slate-500 uppercase tracking-widest font-mono">
                {product.phase} phase
              </span>
            </div>
          </div>
          <p className="m-0 text-sm text-slate-600">{product.tagline}</p>
        </div>
        <span className="text-slate-400 text-lg mt-1" style={{ transform: isExpanded ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.2s" }}>
          ▾
        </span>
      </div>

      {/* Expanded content */}
      {isExpanded && (
        <div className="px-5 pb-5 border-t border-slate-200">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-5">
            {/* Problem & Solution */}
            <div>
              <h4 className="font-mono text-[10px] text-slate-500 uppercase tracking-wider mb-2 mt-0">The Problem</h4>
              <p className="text-sm text-slate-600 leading-relaxed m-0 mb-5">{detail.problem}</p>

              <h4 className="font-mono text-[10px] text-slate-500 uppercase tracking-wider mb-2">The Solution</h4>
              <p className="text-sm text-slate-600 leading-relaxed m-0 mb-5">{detail.solution}</p>

              <h4 className="font-mono text-[10px] text-slate-500 uppercase tracking-wider mb-2">Platform Bridge</h4>
              <p className="text-xs text-slate-600 leading-relaxed m-0 p-3 rounded-lg border border-slate-200 bg-white">
                {detail.bridgeTo}
              </p>
            </div>

            {/* Tech & Outputs */}
            <div>
              <h4 className="font-mono text-[10px] text-slate-500 uppercase tracking-wider mb-2 mt-0">Outputs</h4>
              <div className="flex flex-wrap gap-1.5 mb-5">
                {detail.outputs.map((o, i) => (
                  <span key={i} className="text-[11px] px-2.5 py-1 rounded-md border border-slate-300 text-slate-600 bg-white">
                    {o}
                  </span>
                ))}
              </div>

              <h4 className="font-mono text-[10px] text-slate-500 uppercase tracking-wider mb-2">Tech Stack</h4>
              <div className="flex flex-col gap-1 mb-5">
                {detail.techStack.map((t, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-slate-600">
                    <span style={{ color: product.color }}>·</span>
                    {t}
                  </div>
                ))}
              </div>

              <h4 className="font-mono text-[10px] text-slate-500 uppercase tracking-wider mb-2">Data Entities</h4>
              <div className="flex flex-wrap gap-1.5">
                {relatedEntities.map((e) => (
                  <span
                    key={e.id}
                    className="font-mono text-[10px] px-2 py-1 rounded border"
                    style={{ color: product.color, background: `${product.color}10`, borderColor: `${product.color}30` }}
                  >
                    {e.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function ProductsPage() {
  const [expanded, setExpanded] = useState("blueprint");

  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <div className="mb-10">
        <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent-compass">
          Product Portfolio
        </span>
        <h1 className="text-3xl font-bold tracking-tight mt-2 mb-2 text-gradient">
          Product Briefs
        </h1>
        <p className="text-sm text-slate-600 max-w-xl">
          Each product solves a distinct problem in the services business lifecycle.
          They validate independently but share infrastructure that makes integration seamless.
        </p>
      </div>

      <div className="flex flex-col gap-3">
        {Object.entries(PRODUCTS).map(([key, prod]) => (
          <ProductBrief
            key={key}
            productKey={key}
            product={prod}
            detail={PRODUCT_DETAILS[key]}
            isExpanded={expanded === key}
            onToggle={() => setExpanded(expanded === key ? null : key)}
          />
        ))}
      </div>

      {/* Positioning Matrix */}
      <div className="mt-16">
        <h2 className="font-mono text-[11px] uppercase tracking-[0.15em] text-slate-500 mb-6">
          Buyer & Entry Point Matrix
        </h2>
        <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50">
                {["Product", "Primary Buyer", "Entry Point", "Monetization", "PMF Signal"].map((h) => (
                  <th key={h} className="text-left px-4 py-3 font-mono text-[10px] text-slate-500 uppercase tracking-wider font-medium">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                { key: "scout", buyer: "Founder / BD lead", entry: "Free tier monitoring", monetization: "Usage-based (signals/mo)", pmf: "Users check daily without prompting" },
                { key: "compass", buyer: "Exec / founder", entry: "First strategic decision", monetization: "Per-seat subscription", pmf: "Decisions documented & referenced later" },
                { key: "blueprint", buyer: "Sales lead / practice lead", entry: "First project estimate", monetization: "Per-project or subscription", pmf: "Used on real client project unprompted" },
                { key: "bench", buyer: "Ops lead / resource manager", entry: "Import contractor list", monetization: "Per-seat subscription", pmf: "Staffing decisions made through tool" },
                { key: "relay", buyer: "Project manager / account lead", entry: "First status update draft", monetization: "Per-project or subscription", pmf: "Client comms go through tool by default" },
                { key: "retro", buyer: "Team lead / delivery manager", entry: "First project close", monetization: "Bundled with Blueprint", pmf: "Retro insights referenced in next scope" },
                { key: "proof", buyer: "Sales / BD lead", entry: "First case study generated", monetization: "Per-seat or usage", pmf: "Prospect-tuned brief used in real pitch" },
              ].map((row) => (
                <tr key={row.key} className="border-b border-slate-100 hover:bg-slate-50">
                  <td className="px-4 py-3 font-mono text-xs font-semibold" style={{ color: PRODUCTS[row.key].color }}>
                    {PRODUCTS[row.key].name}
                  </td>
                  <td className="px-4 py-3 text-xs text-slate-700">{row.buyer}</td>
                  <td className="px-4 py-3 text-xs text-slate-600">{row.entry}</td>
                  <td className="px-4 py-3 text-xs text-slate-600">{row.monetization}</td>
                  <td className="px-4 py-3 text-xs text-slate-600">{row.pmf}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
