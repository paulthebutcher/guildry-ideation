"use client";
import { PRODUCTS, ROADMAP_PHASES } from "../../lib/data";

function PhaseCard({ phase, index }) {
  const productsInPhase = {
    0: [],
    1: ["armature"],
    2: ["bench", "retro"],
    3: ["relay", "folio"],
    4: ["signal", "plinth"],
  };

  const products = productsInPhase[index] || [];

  return (
    <div className="relative">
      {/* Timeline connector */}
      {index < ROADMAP_PHASES.length - 1 && (
        <div className="absolute left-6 top-full w-px h-8 bg-slate-200" />
      )}

      <div className="rounded-xl border border-slate-200 overflow-hidden bg-white shadow-sm">
        {/* Phase header */}
        <div className="p-5 border-b border-slate-100 bg-slate-50">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center font-mono text-sm font-bold"
                style={{ background: `${phase.color}15`, color: phase.color }}
              >
                {index}
              </div>
              <div>
                <h3 className="m-0 text-base font-semibold text-slate-800">{phase.name}</h3>
                <span className="font-mono text-[10px] text-slate-500">{phase.phase}</span>
              </div>
            </div>
            <span className="font-mono text-xs px-3 py-1 rounded-full border border-slate-200 text-slate-600 bg-white">
              {phase.timeline}
            </span>
          </div>

          {/* Product badges */}
          {products.length > 0 && (
            <div className="flex gap-1.5 mt-3">
              {products.map((key) => (
                <span
                  key={key}
                  className="font-mono text-[10px] px-2.5 py-1 rounded-md font-semibold"
                  style={{ color: PRODUCTS[key].color, background: `${PRODUCTS[key].color}15` }}
                >
                  {PRODUCTS[key].icon} {PRODUCTS[key].name}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Items */}
        <div className="p-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
            {phase.items.map((item, i) => (
              <div key={i} className="flex items-start gap-2 text-xs text-slate-600">
                <span className="text-slate-400 mt-0.5">○</span>
                <span>{item}</span>
              </div>
            ))}
          </div>

          {/* Milestone */}
          <div className="rounded-lg p-3 border border-slate-200 bg-slate-50">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[10px] font-mono uppercase tracking-wider font-semibold" style={{ color: phase.color }}>
                Milestone
              </span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed m-0">{phase.milestone}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function RoadmapPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      {/* Header */}
      <div className="mb-10">
        <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent-signal">
          Implementation Plan
        </span>
        <h1 className="text-3xl font-bold tracking-tight mt-2 mb-2 text-gradient-warm">
          Roadmap
        </h1>
        <p className="text-sm text-slate-600 max-w-xl">
          26-week phased plan. Foundation first, then products in order of PMF urgency.
          Each phase has a clear milestone that validates before moving on.
        </p>
      </div>

      {/* Timeline overview */}
      <div className="mb-10 p-5 rounded-xl border border-slate-200 overflow-x-auto bg-slate-50">
        <h3 className="font-mono text-[10px] text-slate-500 uppercase tracking-wider mb-4 m-0">
          26-Week Overview
        </h3>
        <div className="flex gap-1 min-w-[600px]">
          {ROADMAP_PHASES.map((phase, i) => {
            const weeks = parseInt(phase.timeline.match(/\d+/g)?.[1] || "3") - parseInt(phase.timeline.match(/\d+/g)?.[0] || "1") + 1;
            const widthPct = (weeks / 26) * 100;
            return (
              <div
                key={i}
                className="rounded-md p-2 text-center bg-white border"
                style={{
                  width: `${widthPct}%`,
                  minWidth: "80px",
                  borderColor: `${phase.color}40`,
                  borderLeft: `3px solid ${phase.color}`,
                }}
              >
                <div className="font-mono text-[10px] font-semibold" style={{ color: phase.color }}>
                  {phase.name}
                </div>
                <div className="text-[9px] text-slate-500 font-mono mt-0.5">{phase.timeline}</div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Phase Cards */}
      <div className="flex flex-col gap-8">
        {ROADMAP_PHASES.map((phase, i) => (
          <PhaseCard key={i} phase={phase} index={i} />
        ))}
      </div>

      {/* Validation Framework */}
      <section className="mt-16">
        <h2 className="font-mono text-[11px] uppercase tracking-[0.15em] text-slate-500 mb-6">
          Validation Gates
        </h2>
        <div className="rounded-xl p-6 border border-slate-200 bg-slate-50">
          <div className="space-y-4 text-sm">
            {[
              {
                gate: "Gate 1: Armature PMF",
                week: "Week 8",
                criteria: "5+ freelancers use it on a real project unprompted. At least 2 generate a SOW they actually send to a client.",
                ifNo: "Pivot scope: interview users, find the gap between expectation and output. May need to narrow to a single vertical (e.g., web dev agencies only).",
              },
              {
                gate: "Gate 2: Feedback Loop",
                week: "Week 14",
                criteria: "Retro data demonstrably improves estimation accuracy. At least one user says 'the estimate was closer this time.'",
                ifNo: "The estimation model may need more data. Consider seeding with industry benchmarks while organic data accumulates.",
              },
              {
                gate: "Gate 3: Cross-Product Value",
                week: "Week 20",
                criteria: "Users who have 2+ products active show higher retention/engagement than single-product users. The platform story has evidence.",
                ifNo: "Products may be better as standalone. Pause integration work and double down on whichever product has the strongest standalone metrics.",
              },
              {
                gate: "Gate 4: Pipeline Reality",
                week: "Week 26",
                criteria: "The full Signal → Folio pipeline has been used end-to-end by at least one power user. The platform narrative resonates in sales conversations.",
                ifNo: "Full pipeline may be aspirational. Focus on the 2-3 product combinations that users naturally adopt together. Let the platform emerge from usage patterns.",
              },
            ].map((gate, i) => (
              <div key={i} className="rounded-lg p-4 border border-slate-200 bg-white">
                <div className="flex items-center gap-3 mb-2">
                  <h4 className="font-mono text-xs font-semibold text-accent-armature m-0">{gate.gate}</h4>
                  <span className="font-mono text-[10px] text-slate-500 px-2 py-0.5 rounded border border-slate-200 bg-slate-50">
                    {gate.week}
                  </span>
                </div>
                <p className="text-xs text-slate-600 m-0 mb-2">
                  <span className="text-slate-700 font-semibold">Pass:</span> {gate.criteria}
                </p>
                <p className="text-xs text-slate-500 m-0">
                  <span className="text-accent-bench font-semibold">If not:</span> {gate.ifNo}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Priority Stack */}
      <section className="mt-12">
        <h2 className="font-mono text-[11px] uppercase tracking-[0.15em] text-slate-500 mb-6">
          Build Priority Logic
        </h2>
        <div className="rounded-xl p-6 border border-slate-200 text-sm text-slate-600 leading-relaxed bg-slate-50">
          <p className="m-0 mb-3">
            <span className="text-accent-armature font-semibold font-mono">Armature first</span> because it solves the most painful,
            frequent problem (underestimating projects) for the most accessible buyer (freelancers). It&apos;s also the richest
            entity generator — Project, Phase, RoleRequirement, Document — which seeds the database for every other product.
          </p>
          <p className="m-0 mb-3">
            <span className="text-accent-bench font-semibold font-mono">Bench + Retro second</span> because they close the loop.
            Bench makes Armature&apos;s team plans actionable (abstract roles → real people). Retro makes Armature&apos;s future
            estimates smarter (actuals → calibration). Together, they transform Armature from a tool into a system.
          </p>
          <p className="m-0 mb-3">
            <span className="text-accent-relay font-semibold font-mono">Relay + Folio third</span> because they extend the value
            of existing data. Relay needs a SOW to detect drift against (from Armature). Folio needs project history to
            generate case studies (from Retro). They&apos;re high-value but dependent on upstream data.
          </p>
          <p className="m-0">
            <span className="text-accent-signal font-semibold font-mono">Signal + Plinth last</span> because they&apos;re the
            highest-ambiguity products. They have the broadest use cases and the hardest PMF to prove. By the time you build them,
            you&apos;ll have months of user data telling you exactly what &ldquo;market intelligence&rdquo; and
            &ldquo;strategic decisions&rdquo; actually mean to your users.
          </p>
        </div>
      </section>
    </div>
  );
}
