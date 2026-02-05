"use client";

const STATUS_STYLES = {
  hypothesis: {
    bg: "bg-amber-50",
    border: "border-amber-200",
    text: "text-amber-700",
    label: "Hypothesis",
  },
  response: {
    bg: "bg-teal-50",
    border: "border-teal-200",
    text: "text-teal-700",
    label: "Response",
  },
  uncertain: {
    bg: "bg-slate-100",
    border: "border-slate-300",
    text: "text-slate-600",
    label: "Uncertain",
  },
};

function Challenge({ title, problem, response, status, conversationalLeverage, platformLeverage }) {
  const style = STATUS_STYLES[status];
  return (
    <div className="rounded-xl border border-slate-200 bg-white overflow-hidden">
      <div className="p-5 border-b border-slate-100">
        <div className="flex items-start justify-between gap-3 mb-3">
          <h3 className="font-mono text-sm font-semibold text-slate-800 m-0">{title}</h3>
          <span className={`font-mono text-[10px] px-2 py-0.5 rounded ${style.bg} ${style.border} ${style.text} border whitespace-nowrap`}>
            {style.label}
          </span>
        </div>
        <p className="text-sm text-slate-600 m-0 leading-relaxed">{problem}</p>
      </div>

      {response && (
        <div className="p-5 bg-slate-50">
          <div className="font-mono text-[10px] uppercase tracking-widest text-slate-400 mb-2">
            {status === "response" ? "Our approach" : status === "hypothesis" ? "Working hypothesis" : "Open questions"}
          </div>
          <p className="text-sm text-slate-700 m-0 leading-relaxed">{response}</p>

          {(conversationalLeverage || platformLeverage) && (
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3">
              {conversationalLeverage && (
                <div className="p-3 rounded-lg bg-white border border-teal-200">
                  <div className="font-mono text-[10px] uppercase tracking-widest text-teal-600 mb-1.5">
                    Conversational leverage
                  </div>
                  <p className="text-xs text-slate-600 m-0 leading-relaxed">{conversationalLeverage}</p>
                </div>
              )}
              {platformLeverage && (
                <div className="p-3 rounded-lg bg-white border border-indigo-200">
                  <div className="font-mono text-[10px] uppercase tracking-widest text-indigo-600 mb-1.5">
                    Platform leverage
                  </div>
                  <p className="text-xs text-slate-600 m-0 leading-relaxed">{platformLeverage}</p>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default function ChallengesPage() {
  const challenges = [
    {
      title: "1. Closing the loop",
      problem: "Projects don't end cleanly. They fade out, scope creeps, clients go quiet. How does the system know a project is 'done' enough to trigger learning? Manual button? Inferred from activity? This is where most tools fail. The retro never happens.",
      status: "hypothesis",
      response: "Don't wait for 'done.' Capture continuously and synthesize on-demand. The AI can prompt for lightweight check-ins during the project ('How did that phase go?') rather than waiting for a big-bang retro at the end. When activity stops for N days, nudge for closure, but the learning has already been happening.",
      conversationalLeverage: "Check-ins feel lighter than forms. 'Hey, you wrapped the design phase last week. Quick gut check: how close was the estimate?' gets better response rates than a retro form. The AI infers closure signals from context ('sounds like you're wrapping up') and prompts accordingly.",
      platformLeverage: "Cross-product triggers. Relay sees client activity stop → nudges Retro. The system already has estimated vs actual hours because Blueprint and time data live in the same place. No manual reconciliation needed.",
    },
    {
      title: "2. What counts as 'similar'?",
      problem: "For 'projects like this usually take X' to mean anything, you need to define similarity. Is it industry? Project type? Team size? Client sophistication? Deliverable format? This is a hard taxonomy problem, and if you get it wrong, the recommendations feel random.",
      status: "uncertain",
      response: "Still working through this. Options: (a) let users define their own project types and learn within those buckets, (b) use embedding similarity on project descriptions rather than rigid taxonomy, (c) start with a basic taxonomy and let the AI surface when projects feel miscategorized. Probably some combination.",
      platformLeverage: "Unified schema helps. Every project has the same structure (type, phases, skills, client industry), so comparison is apples-to-apples. Embeddings on project descriptions + conversation history can find similarity without rigid taxonomy.",
    },
    {
      title: "3. Multi-stakeholder handoffs",
      problem: "Sales scopes the project. PM staffs it. Delivery runs it. Finance closes it. Different people touch different phases, but continuity of data is what makes the learning loop work. Multi-stakeholder handoffs are a design challenge.",
      status: "hypothesis",
      response: "The AI is the connective tissue. Each person talks to the same system, which maintains context across handoffs. When the PM picks up a project, the AI already knows what sales discussed. The conversation history *is* the handoff document. No separate 'handoff meeting' or 'transition doc.' Just pick up where the last person left off.",
      conversationalLeverage: "Instead of 'read this doc before taking over,' it's 'ask the AI what you need to know.' The AI summarizes context for a new stakeholder, flags things they should know, and answers questions about decisions made earlier. Natural language is the interface between roles.",
      platformLeverage: "Single source of truth. Sales, PM, delivery all read/write to the same Project entity. No sync problems, no 'which version is current?' The data *is* the handoff. No translation layer needed.",
    },
    {
      title: "4. Trust calibration",
      problem: "When should a user trust the AI estimate vs. their gut? Too confident too early = bad recommendations. Too hedgy = 'why am I using this?' You need to show confidence intervals and build trust over time with calibration feedback.",
      status: "hypothesis",
      response: "Show uncertainty explicitly. 'Based on 3 similar projects, this is 40-60 hours. But you've only closed 3 projects. Take this with a grain of salt.' As more data accumulates, confidence tightens. Also: let users override and track how often their overrides were right. Surfaces when the model is better than gut and vice versa.",
      platformLeverage: "Built-in feedback loop. EstimationModel already tracks confidence_level and sample_size. We can show 'based on N projects' and track override accuracy over time. The learning layer is designed for this from day 1.",
    },
    {
      title: "5. Estimation format variability",
      problem: "Every firm scopes differently. T-shirt sizes. Hours. Story points. Phases. Line items. For learning to work, you need to normalize, but normalization loses nuance. How much structure do you impose?",
      status: "hypothesis",
      response: "Meet them in their format, normalize under the hood. The AI can accept 'this is a medium project, maybe 3 weeks' and internally map that to hour ranges based on their historical 'medium' projects. Over time, surface the translation. 'You said medium. Your mediums average 120 hours. Sound right?' Build shared vocabulary without forcing structure upfront.",
      conversationalLeverage: "Conversational input is inherently flexible. Users don't fill a form with predefined fields. They describe the project naturally. The AI extracts structure from prose. 'It's a redesign, probably 6-8 weeks, need a senior dev and a designer' becomes a structured scope without the user ever seeing a form.",
      platformLeverage: "Normalize internally, flex externally. Internal model uses hours; display layer can show t-shirt sizes or weeks. Per-org EstimationModel learns what YOUR 'medium' means in hours.",
    },
    {
      title: "6. Passive capture signal vs. noise",
      problem: "If you're syncing Slack and calendars, how do you know what's project-related? A standup mention vs. a scope change vs. idle chatter. The AI has to attribute activity to projects accurately or the data is garbage.",
      status: "hypothesis",
      response: "Use conversation to disambiguate. When the AI sees activity it can't confidently attribute, it asks. 'Saw a 2-hour meeting with Acme yesterday. Was that for the website project or something else?' Low-friction confirmation is better than fully automated misattribution. Over time, the AI learns patterns ('meetings with this client are usually this project').",
      conversationalLeverage: "Turns passive capture into active confirmation. Instead of silently ingesting (and misattributing) data, the AI surfaces uncertainty and asks for help. Builds trust. Users know it won't pollute their data with guesses.",
      platformLeverage: "Project as anchor. Everything ties to a Project entity, so attribution has a target. CommunicationLog already has AI summary + scope_drift_flag, designed to extract signal from noise at the schema level.",
    },
    {
      title: "7. Retro depth vs. friction",
      problem: "'Went fine' teaches nothing. But deep retros are time-consuming. How do you get enough signal without making it feel like homework? Prompted questions? AI-generated draft retros from project artifacts?",
      status: "response",
      response: "AI drafts the retro, user confirms or adjusts. The system already knows: estimated hours, actual hours (from time tracking or conversation), scope changes (from Relay), and deliverables. It can say: 'Looks like design took 30% longer than scoped. Was that because the client added rounds, or did we underestimate?' User just confirms, adds color, done.",
      conversationalLeverage: "Instead of 'fill out this retro form,' it's a 3-minute chat: 'Project closed. Quick debrief?' The AI asks pointed questions based on what it already knows. User isn't starting from blank. They're reacting to a draft.",
      platformLeverage: "Data already exists. System knows estimated hours, actual hours, scope changes, deliverables from other products. Retro is synthesis, not data entry. PhasePerformance captures at the right granularity automatically.",
    },
    {
      title: "8. Sensitive data comfort",
      problem: "SOWs contain pricing, margins, client names, sometimes strategy. Firms may be hesitant to put this in a system, especially one that 'learns.' What's the trust architecture?",
      status: "uncertain",
      response: "Need to think through: (a) can we offer on-prem or single-tenant for larger firms? (b) what's the data isolation story for multi-tenant? (c) do we need anonymization options for the learning layer? (d) how do we handle data retention and deletion? This is less about product design and more about infrastructure and policy.",
      platformLeverage: "One security model. Single platform = one tenant isolation policy, not 7 tools with 7 different policies. Organization entity is the top-level boundary from day 1. Easier to reason about than stitched-together tools.",
    },
  ];

  const statusCounts = challenges.reduce((acc, c) => {
    acc[c.status] = (acc[c.status] || 0) + 1;
    return acc;
  }, {});

  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <div className="mb-12">
        <h1 className="text-3xl font-bold text-slate-900 mb-4">
          Design Challenges
        </h1>
        <p className="text-slate-600 leading-relaxed mb-6">
          High-friction product and design problems we need to solve. These are the things
          that will make or break adoption, independent of whether the tech works.
        </p>

        <div className="flex gap-3 flex-wrap">
          {Object.entries(STATUS_STYLES).map(([key, style]) => (
            <div key={key} className={`flex items-center gap-2 px-3 py-1.5 rounded-lg ${style.bg} border ${style.border}`}>
              <span className={`font-mono text-xs font-semibold ${style.text}`}>
                {statusCounts[key] || 0}
              </span>
              <span className={`font-mono text-xs ${style.text}`}>{style.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-12 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-5 rounded-xl border border-teal-200 bg-teal-50">
          <h2 className="font-mono text-sm font-semibold text-teal-800 mb-2 mt-0">
            Conversational leverage
          </h2>
          <p className="text-sm text-teal-700 m-0 leading-relaxed">
            Natural language input is flexible (handles format variability), contextual (knows what
            you're talking about), and low-friction (feels like talking, not data entry). The AI
            can disambiguate, confirm, and prompt, turning passive systems into active collaborators.
          </p>
        </div>
        <div className="p-5 rounded-xl border border-indigo-200 bg-indigo-50">
          <h2 className="font-mono text-sm font-semibold text-indigo-800 mb-2 mt-0">
            Platform leverage
          </h2>
          <p className="text-sm text-indigo-700 m-0 leading-relaxed">
            One unified data model means no sync problems and no translation layers. Cross-product
            triggers automate what would otherwise require manual discipline. Data captured once
            flows everywhere it's needed. The schema is designed for the learning loop.
          </p>
        </div>
      </div>

      <div className="space-y-4">
        {challenges.map((challenge, i) => (
          <Challenge key={i} {...challenge} />
        ))}
      </div>

      <div className="mt-12 p-5 rounded-xl border border-slate-200 bg-slate-50">
        <h2 className="font-mono text-[11px] uppercase tracking-widest text-slate-500 mb-3 mt-0">
          What's not on this list (yet)
        </h2>
        <ul className="text-sm text-slate-600 m-0 p-0 list-none space-y-2">
          <li className="flex items-start gap-2">
            <span className="text-slate-400">→</span>
            <span><strong className="text-slate-700">Pricing model</strong>. Per-seat? per-project? usage-based? Affects adoption friction.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-slate-400">→</span>
            <span><strong className="text-slate-700">Integration depth</strong>. How much do we build vs. sync from existing tools?</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-slate-400">→</span>
            <span><strong className="text-slate-700">Mobile experience</strong>. Is this desktop-first? Do field updates need mobile?</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-slate-400">→</span>
            <span><strong className="text-slate-700">Collaboration model</strong>. Real-time? Async? Who sees what?</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
