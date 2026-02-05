"use client";

const SCENARIOS = [
  {
    phase: "New lead comes in",
    icon: "📥",
    before: {
      title: "Scramble to respond",
      steps: [
        "Founder gets email, forwards to sales lead",
        "Sales lead asks around: 'Have we done something like this before?'",
        "Someone remembers a similar project from 2 years ago",
        "Dig through Google Drive for the old SOW (can't find it)",
        "Ballpark the estimate based on gut feel",
        "Send proposal, fingers crossed"
      ],
      time: "2-3 days",
      pain: "No institutional memory. Every estimate starts from scratch."
    },
    after: {
      title: "Informed response in hours",
      steps: [
        "Lead captured automatically from email or form",
        "AI surfaces: '3 similar projects found, averaging 320 hours, 12 weeks'",
        "One-click to see what went well/poorly on those projects",
        "Generate SOW draft with realistic phases and estimates",
        "Review, adjust, send"
      ],
      time: "2-3 hours",
      leverage: "Scout + Blueprint + your project history"
    }
  },
  {
    phase: "Scoping a project",
    icon: "📐",
    before: {
      title: "Educated guessing",
      steps: [
        "Open a blank doc or copy an old SOW template",
        "List out phases and deliverables from memory",
        "Estimate hours based on... vibes?",
        "Add 20% buffer (or forget to)",
        "Realize you forgot a phase after the contract is signed",
        "Absorb the overrun"
      ],
      time: "4-8 hours per SOW",
      pain: "Estimates don't improve over time. Same mistakes, different project."
    },
    after: {
      title: "Data-informed scoping",
      steps: [
        "Describe the project in natural language",
        "AI suggests phases based on your historical patterns",
        "See confidence intervals: 'Design phase: 40-60 hrs (based on 8 projects)'",
        "AI flags: 'Projects with this client tend to run 15% over. Adjust?'",
        "Generate SOW with realistic numbers"
      ],
      time: "1-2 hours per SOW",
      leverage: "Blueprint + EstimationModel + Retro data"
    }
  },
  {
    phase: "Staffing a project",
    icon: "👥",
    before: {
      title: "Mental Rolodex",
      steps: [
        "PM asks: 'Who's free in March?'",
        "Ops lead checks spreadsheet (last updated... when?)",
        "Email blast to contractors: 'Anyone available?'",
        "Wait 48 hours for responses",
        "Realize your best React dev is already booked",
        "Compromise on fit or delay the project"
      ],
      time: "3-5 days to staff",
      pain: "No real-time visibility. Staffing is reactive, not proactive."
    },
    after: {
      title: "Smart matching",
      steps: [
        "Project skills auto-extracted from SOW",
        "AI shows: 'Based on skills needed, here are 4 matches'",
        "See availability, rate, and past project performance",
        "One click to hold time on their calendar",
        "Contractor gets a brief: here's what the project is, here's the context"
      ],
      time: "Same day",
      leverage: "Bench + Blueprint integration"
    }
  },
  {
    phase: "Mid-project check-in",
    icon: "📊",
    before: {
      title: "Status meeting theater",
      steps: [
        "Weekly status meeting (30 min, 6 people)",
        "PM manually compiles hours from time tracker",
        "Compare to... what was the original estimate again?",
        "Client asks 'Are we on track?' You're not sure.",
        "Scope creep happens but nobody documents it",
        "Find out you're over budget when it's too late"
      ],
      time: "2+ hours/week in meetings",
      pain: "No early warning system. Problems surface at the end."
    },
    after: {
      title: "Continuous awareness",
      steps: [
        "Dashboard shows: estimated vs actual in real-time",
        "AI flags: 'Design phase at 80% of budget with 60% complete'",
        "Scope drift detected: 'Client requested X, not in the original SOW'",
        "Auto-generated status update ready for client review",
        "Course-correct while there's still time"
      ],
      time: "15 min/week async",
      leverage: "Relay + time tracking integration"
    }
  },
  {
    phase: "Project closes",
    icon: "✅",
    before: {
      title: "On to the next one",
      steps: [
        "Project ends (or fades out)",
        "Retro scheduled but keeps getting pushed",
        "If it happens: vague notes, quickly forgotten",
        "Lessons learned doc goes to Google Drive graveyard",
        "Next similar project: repeat all the same mistakes"
      ],
      time: "Retro skipped 80% of the time",
      pain: "Learning never compounds. Year 5 isn't smarter than year 1."
    },
    after: {
      title: "Learning captured automatically",
      steps: [
        "AI drafts retro from project data: 'Design ran 20% over. Extra revision rounds.'",
        "Quick conversation: 'Was that a client issue or scoping miss?'",
        "Insights feed back to estimation model",
        "Next similar project gets better defaults",
        "Case study draft generated for sales"
      ],
      time: "15-minute conversation",
      leverage: "Retro + Proof + learning loop"
    }
  },
  {
    phase: "Sales needs a case study",
    icon: "📝",
    before: {
      title: "Start from scratch",
      steps: [
        "Sales: 'Do we have a case study for fintech projects?'",
        "Marketing: 'I think we did one in 2019...'",
        "Find the old PDF. It's outdated and generic.",
        "Ask the PM to write something new (they're busy)",
        "Cobble together a deck the night before the pitch"
      ],
      time: "1-2 weeks (or rushed overnight)",
      pain: "Sales collateral is always stale. Good work never gets packaged."
    },
    after: {
      title: "Case studies on demand",
      steps: [
        "Ask: 'Generate case study for fintech projects'",
        "AI pulls: project details, outcomes, metrics, testimonials",
        "Draft tailored to the prospect's industry and concerns",
        "Review, approve, send",
        "Prospect gets relevant proof, not generic marketing"
      ],
      time: "30 minutes",
      leverage: "Proof + project history + Retro outcomes"
    }
  }
];

function ScenarioCard({ scenario }) {
  return (
    <div className="mb-16">
      {/* Phase header */}
      <div className="flex items-center gap-3 mb-6">
        <span className="text-2xl">{scenario.icon}</span>
        <h2 className="text-xl font-bold text-slate-800 m-0">{scenario.phase}</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Before */}
        <div className="rounded-xl border border-red-200 bg-red-50/50 overflow-hidden">
          <div className="p-4 border-b border-red-200 bg-red-100/50">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs font-semibold text-red-700">WITHOUT GUILDRY</span>
              <span className="font-mono text-[10px] text-red-600 px-2 py-0.5 rounded bg-red-100 border border-red-200">
                {scenario.before.time}
              </span>
            </div>
            <h3 className="text-sm font-semibold text-red-800 mt-2 m-0">{scenario.before.title}</h3>
          </div>
          <div className="p-4">
            <ol className="m-0 p-0 list-none space-y-2">
              {scenario.before.steps.map((step, i) => (
                <li key={i} className="flex items-start gap-2 text-xs text-slate-600">
                  <span className="font-mono text-red-400 text-[10px] mt-0.5">{i + 1}.</span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
            <div className="mt-4 p-3 rounded-lg bg-red-100/70 border border-red-200">
              <p className="text-xs text-red-800 m-0 font-medium">{scenario.before.pain}</p>
            </div>
          </div>
        </div>

        {/* After */}
        <div className="rounded-xl border border-teal-200 bg-teal-50/50 overflow-hidden">
          <div className="p-4 border-b border-teal-200 bg-teal-100/50">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs font-semibold text-teal-700">WITH GUILDRY</span>
              <span className="font-mono text-[10px] text-teal-600 px-2 py-0.5 rounded bg-teal-100 border border-teal-200">
                {scenario.after.time}
              </span>
            </div>
            <h3 className="text-sm font-semibold text-teal-800 mt-2 m-0">{scenario.after.title}</h3>
          </div>
          <div className="p-4">
            <ol className="m-0 p-0 list-none space-y-2">
              {scenario.after.steps.map((step, i) => (
                <li key={i} className="flex items-start gap-2 text-xs text-slate-600">
                  <span className="font-mono text-teal-500 text-[10px] mt-0.5">{i + 1}.</span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
            <div className="mt-4 p-3 rounded-lg bg-teal-100/70 border border-teal-200">
              <p className="text-xs text-teal-800 m-0">
                <span className="font-semibold">Powered by:</span> {scenario.after.leverage}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function StoryPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      {/* Header */}
      <div className="mb-12">
        <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent-retro">
          The Transformation
        </span>
        <h1 className="text-3xl font-bold tracking-tight mt-2 mb-4 text-gradient">
          Before & After
        </h1>
        <p className="text-slate-600 max-w-2xl leading-relaxed">
          What changes when your project management system actually learns from your work?
          Here's the same week at a 75-person agency, with and without Guildry.
        </p>
      </div>

      {/* Summary stats */}
      <div className="mb-12 grid grid-cols-2 md:grid-cols-4 gap-3">
        {[
          { label: "Time to estimate", before: "2-3 days", after: "2-3 hours", color: "#0d9488" },
          { label: "Estimate accuracy", before: "±30%", after: "±15%", color: "#4f46e5" },
          { label: "Retro completion", before: "20%", after: "80%", color: "#db2777" },
          { label: "Case study turnaround", before: "1-2 weeks", after: "30 min", color: "#b45309" },
        ].map((stat, i) => (
          <div key={i} className="rounded-xl p-4 border border-slate-200 bg-white text-center">
            <div className="font-mono text-[10px] text-slate-500 uppercase tracking-wider mb-2">{stat.label}</div>
            <div className="flex items-center justify-center gap-2 mb-1">
              <span className="text-xs text-slate-400 line-through">{stat.before}</span>
              <span className="text-slate-300">→</span>
              <span className="text-sm font-bold" style={{ color: stat.color }}>{stat.after}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Scenarios */}
      {SCENARIOS.map((scenario, i) => (
        <ScenarioCard key={i} scenario={scenario} />
      ))}

      {/* The Learning Loop */}
      <div className="mt-16 rounded-xl border border-slate-200 p-8 bg-slate-50">
        <h2 className="font-mono text-[11px] uppercase tracking-[0.15em] text-slate-500 mb-4 mt-0">
          The Compound Effect
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-3xl mb-2">📊</div>
            <h3 className="font-mono text-sm font-semibold text-slate-800 mb-2">Project 1</h3>
            <p className="text-xs text-slate-600 m-0">
              System uses industry defaults. Estimates are reasonable but generic.
              After delivery, first retro feeds the model.
            </p>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-2">📈</div>
            <h3 className="font-mono text-sm font-semibold text-slate-800 mb-2">Project 10</h3>
            <p className="text-xs text-slate-600 m-0">
              Model knows your patterns. "Your design phases tend to run 15% over" becomes
              actionable. Estimates improve.
            </p>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-2">🎯</div>
            <h3 className="font-mono text-sm font-semibold text-slate-800 mb-2">Project 50</h3>
            <p className="text-xs text-slate-600 m-0">
              Competitors can't replicate your estimation accuracy. Your data is your moat.
              New hires onboard faster with institutional knowledge.
            </p>
          </div>
        </div>
        <div className="mt-6 pt-6 border-t border-slate-200 text-center">
          <p className="text-sm text-slate-700 m-0">
            <strong>This is the learning loop.</strong> Every project makes the next one easier.
            The system gets smarter whether you're paying attention or not.
          </p>
        </div>
      </div>
    </div>
  );
}
