"use client";

function Section({ title, children }) {
  return (
    <section className="mb-12">
      <h2 className="font-mono text-lg font-semibold text-slate-800 mb-4 mt-0">{title}</h2>
      {children}
    </section>
  );
}

function CodeBlock({ children, title }) {
  return (
    <div className="rounded-xl border border-slate-200 overflow-hidden mb-4">
      {title && (
        <div className="px-4 py-2 bg-slate-100 border-b border-slate-200">
          <span className="font-mono text-xs text-slate-500">{title}</span>
        </div>
      )}
      <pre className="p-4 bg-slate-50 overflow-x-auto text-xs font-mono text-slate-700 m-0">
        {children}
      </pre>
    </div>
  );
}

function ConversationExample({ messages }) {
  return (
    <div className="rounded-xl border border-slate-200 overflow-hidden mb-4">
      {messages.map((msg, i) => (
        <div
          key={i}
          className={`px-4 py-3 ${i > 0 ? "border-t border-slate-100" : ""} ${
            msg.role === "ai" ? "bg-teal-50" : "bg-white"
          }`}
        >
          <span className={`font-mono text-[10px] uppercase tracking-widest ${
            msg.role === "ai" ? "text-teal-600" : "text-slate-400"
          }`}>
            {msg.role === "ai" ? "AI" : "User"}
          </span>
          <p className="text-sm text-slate-700 mt-1 mb-0 leading-relaxed whitespace-pre-line">
            {msg.content}
          </p>
          {msg.action && (
            <div className="mt-2 px-3 py-2 rounded bg-slate-100 border border-slate-200">
              <span className="font-mono text-[10px] text-slate-500">{msg.action}</span>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

function ToolTable() {
  const tools = [
    { name: "site_audit", purpose: "Run Lighthouse, detect tech stack, estimate fix vs. rebuild", products: "Blueprint, Scout" },
    { name: "search_talent", purpose: "Query the talent pool by skill, availability, rate", products: "Bench" },
    { name: "compare_to_sow", purpose: "Check if a message implies scope drift vs. original SOW", products: "Relay" },
    { name: "find_similar_projects", purpose: "Find past projects with similar characteristics", products: "Blueprint, Retro" },
    { name: "generate_document", purpose: "Render a document from structured data + template", products: "All products" },
    { name: "check_availability", purpose: "Query calendar/capacity for a person", products: "Bench" },
    { name: "summarize_thread", purpose: "Condense a Slack/email thread into key points", products: "Relay" },
  ];

  return (
    <div className="rounded-xl border border-slate-200 overflow-hidden mb-4">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-slate-50 border-b border-slate-200">
            <th className="text-left px-4 py-3 font-mono text-xs font-semibold text-slate-600">Tool</th>
            <th className="text-left px-4 py-3 font-mono text-xs font-semibold text-slate-600">Purpose</th>
            <th className="text-left px-4 py-3 font-mono text-xs font-semibold text-slate-600">Used By</th>
          </tr>
        </thead>
        <tbody>
          {tools.map((tool, i) => (
            <tr key={tool.name} className={i > 0 ? "border-t border-slate-100" : ""}>
              <td className="px-4 py-3 font-mono text-xs text-teal-700">{tool.name}</td>
              <td className="px-4 py-3 text-slate-600 text-xs">{tool.purpose}</td>
              <td className="px-4 py-3 text-slate-500 text-xs">{tool.products}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function LeverageTable() {
  const items = [
    { challenge: "Closing the loop", leverage: "Lightweight check-ins feel natural. 'How'd that phase go?' beats a form." },
    { challenge: "Multi-stakeholder handoffs", leverage: "'Catch me up on this project' works for any role. AI summarizes context." },
    { challenge: "Format variability", leverage: "Users describe projects naturally. AI extracts structure from prose." },
    { challenge: "Signal vs. noise", leverage: "AI asks for confirmation when uncertain. 'Was that meeting for Project X?'" },
    { challenge: "Retro depth", leverage: "AI drafts the retro from known data. User reacts, doesn't create from scratch." },
  ];

  return (
    <div className="rounded-xl border border-slate-200 overflow-hidden mb-4">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-slate-50 border-b border-slate-200">
            <th className="text-left px-4 py-3 font-mono text-xs font-semibold text-slate-600">Challenge</th>
            <th className="text-left px-4 py-3 font-mono text-xs font-semibold text-slate-600">How Conversation Helps</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, i) => (
            <tr key={item.challenge} className={i > 0 ? "border-t border-slate-100" : ""}>
              <td className="px-4 py-3 font-medium text-slate-700 text-xs">{item.challenge}</td>
              <td className="px-4 py-3 text-slate-600 text-xs">{item.leverage}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function ConversationalAIPage() {
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
          Conversational AI System
        </h1>
        <p className="text-slate-600 leading-relaxed">
          How the AI layer works across all Guildry products. Users don't fill forms. They talk to the system.
          The AI extracts structure from natural language, asks clarifying questions, and writes to the unified data model.
        </p>
      </div>

      {/* Core Concept */}
      <div className="mb-12 p-6 rounded-xl border border-teal-200 bg-teal-50">
        <h2 className="font-mono text-sm font-semibold text-teal-800 mb-2 mt-0">
          Core Concept
        </h2>
        <p className="text-sm text-teal-700 m-0 leading-relaxed">
          Every product in Guildry shares the same conversational engine. The conversation <em>is</em> the interface.
          This isn't a chatbot bolted onto a CRUD app. It's a fundamentally different interaction model where
          natural language is the primary input and structured data is the output.
        </p>
      </div>

      {/* Conversation Entity */}
      <Section title="The Conversation Entity">
        <p className="text-sm text-slate-600 mb-4 leading-relaxed">
          Same structure, different schema targets. Blueprint conversations fill Project + Phase + RoleRequirement.
          Retro conversations fill Retrospective + PhasePerformance. The intake engine is product-agnostic.
        </p>
        <CodeBlock title="Conversation schema">
{`Conversation
├── id (uuid)
├── user_id → User
├── product (scout | compass | blueprint | bench | relay | retro | proof)
├── intent (what the user is trying to accomplish)
├── schema_target (which entity is being filled)
├── status (active | complete | abandoned)
├── messages (jsonb[])
├── extracted_data (jsonb)
├── created_entities ({ entity_type: id } pairs)
├── started_at
└── completed_at`}
        </CodeBlock>
      </Section>

      {/* How It Works */}
      <Section title="How It Works">
        <div className="space-y-8">
          {/* Step 1 */}
          <div>
            <h3 className="font-mono text-sm font-semibold text-slate-700 mb-2 mt-0">1. Intent Detection</h3>
            <p className="text-sm text-slate-600 mb-3 leading-relaxed">
              User says something. The AI determines the product context, intent, and which entities need to be created or updated.
            </p>
            <div className="p-4 rounded-lg bg-slate-50 border border-slate-200">
              <p className="text-sm text-slate-600 m-0 mb-2 italic">
                "I've got a new project with Acme Corp. It's a website redesign, probably 8-10 weeks."
              </p>
              <div className="flex gap-4 text-xs text-slate-500 font-mono">
                <span>Intent: <span className="text-teal-600">Create project scope</span></span>
                <span>Target: <span className="text-teal-600">Project, Phase[], RoleRequirement[]</span></span>
                <span>Product: <span className="text-teal-600">Blueprint</span></span>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div>
            <h3 className="font-mono text-sm font-semibold text-slate-700 mb-2 mt-0">2. Guided Extraction</h3>
            <p className="text-sm text-slate-600 mb-3 leading-relaxed">
              The AI knows the target schema and asks questions to fill it. Not a rigid form, but a conversation that
              adapts based on what's already known.
            </p>
            <ConversationExample
              messages={[
                { role: "ai", content: "Got it. Website redesign for Acme Corp. What's driving the redesign? Performance issues, rebrand, or something else?" },
                { role: "user", content: "Their site is slow and they just rebranded. Need to update the look and fix the tech debt." },
                { role: "ai", content: "Makes sense. So we're looking at both visual refresh and performance work. What's their current stack? Or I can check their site if you give me the URL." },
                { role: "user", content: "acmecorp.com" },
                { role: "ai", content: "Found it. They're on WordPress with a heavy theme. Lighthouse perf score is 34. Accessibility has some issues too. Given the rebrand + tech debt, are you thinking fix-in-place or full rebuild?", action: "[runs site_audit tool]" },
              ]}
            />
          </div>

          {/* Step 3 */}
          <div>
            <h3 className="font-mono text-sm font-semibold text-slate-700 mb-2 mt-0">3. Tool Orchestration</h3>
            <p className="text-sm text-slate-600 mb-3 leading-relaxed">
              The AI has access to tools that extend what it can do. Tools are called mid-conversation when needed.
            </p>
            <ToolTable />
          </div>

          {/* Step 4 */}
          <div>
            <h3 className="font-mono text-sm font-semibold text-slate-700 mb-2 mt-0">4. Progressive Disclosure</h3>
            <p className="text-sm text-slate-600 mb-3 leading-relaxed">
              The AI doesn't ask for everything upfront. It gathers enough to be useful, then offers to go deeper.
              User controls depth. Quick estimate or full scope, same conversation, different exit points.
            </p>
            <ConversationExample
              messages={[
                { role: "ai", content: "Based on similar projects, I'd estimate 320-400 hours total. Want me to break that down by phase, or is a ballpark enough for now?" },
                { role: "user", content: "Break it down." },
                { role: "ai", content: `Here's what I'm thinking:
• Discovery: 40 hrs
• Design: 80 hrs
• Development: 160 hrs
• QA + Launch: 60 hrs

These are based on 4 similar redesigns you've done. The dev estimate assumes a React rebuild. If you're staying on WordPress, knock off about 30%.` },
              ]}
            />
          </div>

          {/* Step 5 */}
          <div>
            <h3 className="font-mono text-sm font-semibold text-slate-700 mb-2 mt-0">5. Entity Creation</h3>
            <p className="text-sm text-slate-600 mb-3 leading-relaxed">
              When the conversation reaches a natural endpoint, the AI confirms and creates entities.
              The conversation created structured data without the user ever seeing a form.
            </p>
            <ConversationExample
              messages={[
                { role: "ai", content: `Ready to save this scope?

Project: Acme Corp Website Redesign
Type: Rebuild
Estimated hours: 340 (±15%)
Phases: Discovery → Design → Development → QA/Launch

I can also draft an SOW from this if you want.` },
                { role: "user", content: "Save it and draft the SOW." },
                { role: "ai", content: "Done. Here's the draft SOW. Let me know if you want to adjust anything before sending.", action: "[creates Project, Phase[], RoleRequirement[] entities]\n[calls generate_document tool with SOW template]" },
              ]}
            />
          </div>
        </div>
      </Section>

      {/* Cross-Product Context */}
      <Section title="Cross-Product Context">
        <p className="text-sm text-slate-600 mb-4 leading-relaxed">
          Because all products share the same data model, the AI has context across the lifecycle:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            {
              product: "Blueprint",
              example: '"Scope this like the Acme project from last quarter."',
              context: "AI pulls the Acme project structure, phases, and team composition as a starting template.",
            },
            {
              product: "Relay",
              example: '"The client just asked for an extra feature."',
              context: "AI compares the request against the SOW (from Blueprint) and flags potential scope drift.",
            },
            {
              product: "Retro",
              example: '"How\'d we do on the Acme project?"',
              context: "AI knows estimated vs. actual hours, sees communication log (from Relay), and asks targeted questions.",
            },
          ].map((item) => (
            <div key={item.product} className="p-4 rounded-xl border border-slate-200 bg-slate-50">
              <span className="font-mono text-xs font-semibold text-teal-700">{item.product}</span>
              <p className="text-xs text-slate-700 italic my-2">{item.example}</p>
              <p className="text-xs text-slate-500 m-0">{item.context}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Leverage by Challenge */}
      <Section title="Conversational Leverage by Challenge">
        <LeverageTable />
      </Section>

      {/* What This Enables */}
      <Section title="What This Enables">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {[
            { title: "Lower friction", desc: "Talking is faster than form-filling for most people." },
            { title: "Flexibility", desc: "No rigid field order. User leads, AI follows." },
            { title: "Intelligence", desc: "AI can suggest, compare, and surface insights mid-flow." },
            { title: "Continuity", desc: "Same conversation engine across all products = consistent UX." },
            { title: "Learning", desc: "Conversation history is data. Can improve prompts, spot confusion patterns." },
            { title: "Resumability", desc: "Pause and pick up tomorrow. AI remembers where you left off." },
          ].map((item) => (
            <div key={item.title} className="p-4 rounded-lg border border-slate-200 bg-white">
              <h4 className="font-mono text-xs font-semibold text-slate-700 m-0 mb-1">{item.title}</h4>
              <p className="text-xs text-slate-500 m-0">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Open Questions */}
      <Section title="Open Questions">
        <div className="p-5 rounded-xl border border-slate-200 bg-slate-50">
          <ul className="text-sm text-slate-600 m-0 p-0 list-none space-y-2">
            {[
              { q: "Voice input", detail: "Should this support voice? Many agency folks are on the go." },
              { q: "Multi-turn memory", detail: "How much conversation history to keep in context?" },
              { q: "Correction handling", detail: "When user says 'actually, change that.' How to handle gracefully?" },
              { q: "Collaborative conversations", detail: "Can multiple people be in the same conversation?" },
            ].map((item) => (
              <li key={item.q} className="flex items-start gap-2">
                <span className="text-slate-400">→</span>
                <span><strong className="text-slate-700">{item.q}</strong>:{item.detail}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>
    </div>
  );
}
