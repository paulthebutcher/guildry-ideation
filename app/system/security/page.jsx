"use client";

function Section({ title, children }) {
  return (
    <section className="mb-12">
      <h2 className="font-mono text-lg font-semibold text-slate-800 mb-4 mt-0">{title}</h2>
      {children}
    </section>
  );
}

function DecisionCard({ title, status, options, recommendation, tradeoffs, decided }) {
  const statusColors = {
    decided: { bg: "bg-teal-50", border: "border-teal-200", text: "text-teal-700" },
    leaning: { bg: "bg-amber-50", border: "border-amber-200", text: "text-amber-700" },
    open: { bg: "bg-slate-100", border: "border-slate-300", text: "text-slate-600" },
  };
  const style = statusColors[status];

  return (
    <div className="rounded-xl border border-slate-200 bg-white overflow-hidden">
      <div className="p-5 border-b border-slate-100">
        <div className="flex items-start justify-between gap-3 mb-2">
          <h3 className="font-mono text-sm font-semibold text-slate-800 m-0">{title}</h3>
          <span className={`font-mono text-[10px] px-2 py-0.5 rounded ${style.bg} ${style.border} ${style.text} border whitespace-nowrap`}>
            {status === "decided" ? "Decided" : status === "leaning" ? "Leaning" : "Open"}
          </span>
        </div>
      </div>
      <div className="p-5 bg-slate-50">
        {options && (
          <div className="mb-4">
            <div className="font-mono text-[10px] uppercase tracking-widest text-slate-400 mb-2">Options</div>
            <div className="flex flex-wrap gap-2">
              {options.map((opt, i) => (
                <span
                  key={i}
                  className={`font-mono text-xs px-2 py-1 rounded border ${
                    decided === opt || recommendation === opt
                      ? "bg-teal-50 border-teal-200 text-teal-700"
                      : "bg-white border-slate-200 text-slate-600"
                  }`}
                >
                  {opt}
                </span>
              ))}
            </div>
          </div>
        )}
        {(recommendation || decided) && (
          <div className="mb-4">
            <div className="font-mono text-[10px] uppercase tracking-widest text-slate-400 mb-1">
              {decided ? "Decision" : "Recommendation"}
            </div>
            <p className="text-sm text-slate-700 m-0">{decided || recommendation}</p>
          </div>
        )}
        {tradeoffs && (
          <div>
            <div className="font-mono text-[10px] uppercase tracking-widest text-slate-400 mb-1">Tradeoffs</div>
            <p className="text-xs text-slate-600 m-0 leading-relaxed">{tradeoffs}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default function SecurityPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      {/* Header */}
      <div className="mb-12">
        <div className="flex items-center gap-2 mb-4">
          <span className="font-mono text-[11px] px-2 py-1 rounded bg-indigo-50 text-indigo-700 border border-indigo-200">
            System
          </span>
        </div>
        <h1 className="text-3xl font-bold text-slate-900 mb-4">
          Data Security & Privacy
        </h1>
        <p className="text-slate-600 leading-relaxed">
          Services firms handle sensitive data: pricing, margins, client names, strategy.
          This page documents our security architecture and the decisions we need to make upfront.
        </p>
      </div>

      {/* What's at stake */}
      <div className="mb-12 p-6 rounded-xl border border-red-200 bg-red-50">
        <h2 className="font-mono text-sm font-semibold text-red-800 mb-3 mt-0">
          What's at stake
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-red-700">
          <div>
            <strong className="text-red-800">Data Guildry sees:</strong>
            <ul className="mt-1 ml-4 space-y-1 list-disc">
              <li>SOWs with pricing, margins, terms</li>
              <li>Client names and project details</li>
              <li>Internal rates and team compensation</li>
              <li>Strategic decisions and rationale</li>
              <li>Communication logs with clients</li>
              <li>Historical project performance</li>
            </ul>
          </div>
          <div>
            <strong className="text-red-800">Who cares:</strong>
            <ul className="mt-1 ml-4 space-y-1 list-disc">
              <li>Firm owners worried about competitive exposure</li>
              <li>Clients with NDAs and data requirements</li>
              <li>Enterprise clients asking "where does our data go?"</li>
              <li>Legal/compliance reviewing new vendors</li>
              <li>Insurers assessing liability</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Architecture decisions */}
      <Section title="Architecture Decisions">
        <p className="text-sm text-slate-600 mb-6">
          Security isn't a feature we bolt on later — it's baked into the architecture from day one.
          These decisions affect everything downstream.
        </p>
        <div className="space-y-4">
          <DecisionCard
            title="Multi-tenant vs. Single-tenant"
            status="leaning"
            options={["Multi-tenant (shared infra)", "Single-tenant (dedicated)", "Hybrid"]}
            recommendation="Hybrid: Multi-tenant default, single-tenant option for enterprise"
            tradeoffs="Multi-tenant is cheaper and faster to ship. Single-tenant is required for some enterprise sales. Building both from day one is expensive — but retrofitting single-tenant later is harder. Start with strong multi-tenant isolation, add single-tenant when enterprise demand justifies it."
          />

          <DecisionCard
            title="Data residency"
            status="open"
            options={["US-only", "US + EU", "Customer choice"]}
            recommendation="Start US-only, add EU when needed"
            tradeoffs="GDPR requires EU data to stay in EU for some customers. Multi-region adds complexity and cost. Most early customers will be US-based. Plan the architecture for multi-region but don't build it until there's demand."
          />

          <DecisionCard
            title="Encryption approach"
            status="decided"
            options={["At-rest only", "At-rest + in-transit", "At-rest + in-transit + app-layer"]}
            decided="At-rest + in-transit + app-layer for sensitive fields"
            tradeoffs="Standard TLS + database encryption is table stakes. App-layer encryption for fields like pricing and margins means even DB admins can't see raw values. Adds complexity but provides defense in depth."
          />

          <DecisionCard
            title="AI data handling"
            status="leaning"
            options={["Send all data to Claude", "Anonymize before sending", "On-device processing"]}
            recommendation="Send data to Claude with Anthropic's data retention policies"
            tradeoffs="Anthropic's API doesn't train on customer data. For extra-sensitive customers, we could anonymize (replace 'Acme Corp' with 'Client A') before sending to Claude, then re-hydrate in the response. Adds latency and complexity but may be necessary for some deals."
          />

          <DecisionCard
            title="Tenant isolation"
            status="decided"
            options={["Shared tables + RLS", "Schema-per-tenant", "Database-per-tenant"]}
            decided="Shared tables with row-level security (RLS)"
            tradeoffs="RLS in Postgres is battle-tested and performant. Schema-per-tenant makes some queries easier but complicates migrations. Database-per-tenant is overkill for most customers but could be an enterprise option. RLS is the right default."
          />
        </div>
      </Section>

      {/* Compliance roadmap */}
      <Section title="Compliance Roadmap">
        <p className="text-sm text-slate-600 mb-6">
          Different certifications matter to different buyers. Here's what we need and when.
        </p>
        <div className="rounded-xl border border-slate-200 overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200">
                <th className="text-left px-4 py-3 font-mono text-xs font-semibold text-slate-600">Certification</th>
                <th className="text-left px-4 py-3 font-mono text-xs font-semibold text-slate-600">Who asks for it</th>
                <th className="text-left px-4 py-3 font-mono text-xs font-semibold text-slate-600">When needed</th>
                <th className="text-left px-4 py-3 font-mono text-xs font-semibold text-slate-600">Effort</th>
              </tr>
            </thead>
            <tbody>
              {[
                { cert: "SOC 2 Type I", who: "Mid-market, enterprise", when: "Before enterprise sales", effort: "3-6 months, $30-50K" },
                { cert: "SOC 2 Type II", who: "Enterprise, regulated", when: "6-12 months after Type I", effort: "Ongoing audit" },
                { cert: "GDPR compliance", who: "EU customers", when: "Before EU expansion", effort: "Policies + DPA" },
                { cert: "HIPAA", who: "Healthcare services firms", when: "If targeting healthcare", effort: "Significant ($$$)" },
                { cert: "ISO 27001", who: "Enterprise, international", when: "Later stage", effort: "12+ months" },
              ].map((row, i) => (
                <tr key={i} className={i > 0 ? "border-t border-slate-100" : ""}>
                  <td className="px-4 py-3 font-mono text-xs text-teal-700">{row.cert}</td>
                  <td className="px-4 py-3 text-slate-600 text-xs">{row.who}</td>
                  <td className="px-4 py-3 text-slate-600 text-xs">{row.when}</td>
                  <td className="px-4 py-3 text-slate-500 text-xs">{row.effort}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-slate-500 mt-4">
          <strong>Recommendation:</strong> Start SOC 2 Type I process around month 4-5. It takes longer than you think,
          and enterprise buyers will ask before signing. Build with SOC 2 controls in mind from day one.
        </p>
      </Section>

      {/* Day-one requirements */}
      <Section title="Day-One Requirements">
        <p className="text-sm text-slate-600 mb-4">
          Things we must have before any customer data touches the system:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {[
            { item: "TLS everywhere", desc: "HTTPS for all endpoints, TLS for database connections" },
            { item: "Encryption at rest", desc: "AES-256 for database, S3 bucket encryption for documents" },
            { item: "org_id on every table", desc: "No query can run without tenant context" },
            { item: "Row-level security", desc: "Postgres RLS as a second layer of tenant isolation" },
            { item: "Audit logging", desc: "Who accessed what, when, from where" },
            { item: "Secure auth", desc: "Clerk or similar — no rolling our own auth" },
            { item: "Secrets management", desc: "No credentials in code — use environment variables or Vault" },
            { item: "Backup & recovery", desc: "Daily backups, tested restore procedure" },
          ].map((item, i) => (
            <div key={i} className="p-4 rounded-lg border border-slate-200 bg-white">
              <div className="font-mono text-xs font-semibold text-slate-800 mb-1">{item.item}</div>
              <p className="text-xs text-slate-600 m-0">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* What to tell customers */}
      <Section title="Customer-Facing Story">
        <p className="text-sm text-slate-600 mb-4">
          What we need to be able to say when a prospect asks "is my data safe?"
        </p>
        <div className="rounded-xl border border-slate-200 p-6 bg-slate-50 space-y-4">
          <div>
            <div className="font-mono text-xs font-semibold text-slate-800 mb-1">The short answer</div>
            <p className="text-sm text-slate-700 m-0">
              "Your data is encrypted at rest and in transit, isolated from other customers at the database level,
              and never used to train AI models. We're on track for SOC 2 certification."
            </p>
          </div>
          <div>
            <div className="font-mono text-xs font-semibold text-slate-800 mb-1">For the security questionnaire</div>
            <ul className="text-xs text-slate-600 m-0 space-y-1 list-disc ml-4">
              <li>Data encrypted with AES-256 at rest, TLS 1.3 in transit</li>
              <li>Row-level security ensures tenant isolation</li>
              <li>SOC 2 Type I in progress (or certified, once we are)</li>
              <li>Anthropic API used for AI — no training on customer data</li>
              <li>Data stored in US (AWS us-east-1)</li>
              <li>Annual penetration testing (once we do it)</li>
              <li>Incident response plan documented</li>
            </ul>
          </div>
          <div>
            <div className="font-mono text-xs font-semibold text-slate-800 mb-1">For the "we need more" customer</div>
            <p className="text-sm text-slate-700 m-0">
              "We can discuss single-tenant deployment, dedicated infrastructure, or custom data handling
              requirements. Let's understand your needs."
            </p>
          </div>
        </div>
      </Section>

      {/* Open questions */}
      <Section title="Open Questions">
        <div className="p-5 rounded-xl border border-slate-200 bg-slate-50">
          <ul className="text-sm text-slate-600 m-0 p-0 list-none space-y-3">
            {[
              {
                q: "Do we need a DPA template?",
                detail: "Data Processing Agreement — some customers will require it before signing. Should have a standard template ready."
              },
              {
                q: "What's our data retention policy?",
                detail: "How long do we keep project data? What happens when a customer churns? Need clear policies."
              },
              {
                q: "How do we handle customer data deletion requests?",
                detail: "GDPR right to erasure, customer offboarding. Need a clear process and tooling."
              },
              {
                q: "Do we need cyber insurance?",
                detail: "E&O and cyber liability insurance may be required for enterprise deals. Cost vs. risk tradeoff."
              },
              {
                q: "What's our incident response plan?",
                detail: "If there's a breach, what do we do? Who do we notify? Need a documented plan."
              },
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-slate-400">→</span>
                <div>
                  <strong className="text-slate-700">{item.q}</strong>
                  <p className="text-xs text-slate-500 m-0 mt-1">{item.detail}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* Decision timeline */}
      <Section title="Decision Timeline">
        <div className="rounded-xl border border-slate-200 p-6 bg-white">
          <div className="space-y-4">
            {[
              { when: "Now (before any code)", items: ["Encryption approach", "Tenant isolation model", "Auth provider choice"] },
              { when: "Before alpha users", items: ["Audit logging", "Backup/recovery tested", "Basic security policies documented"] },
              { when: "Before paid customers", items: ["DPA template ready", "Data retention policy", "Incident response plan"] },
              { when: "Before enterprise sales", items: ["SOC 2 Type I started", "Pen test completed", "Security questionnaire answers ready"] },
            ].map((phase, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="w-32 shrink-0">
                  <div className="font-mono text-xs font-semibold text-teal-700">{phase.when}</div>
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap gap-2">
                    {phase.items.map((item, j) => (
                      <span key={j} className="text-xs px-2 py-1 rounded bg-slate-100 text-slate-700 border border-slate-200">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
}
