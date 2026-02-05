# Platform Docs

Internal architecture documentation for the product platform. Built with Next.js 14, Tailwind CSS, deployed to Vercel.

## Pages

- **/** — Overview: platform vision, product pipeline, learning loop diagram, key bets
- **/story** — Before & after narrative: week at an agency with/without Guildry
- **/products** — Individual product briefs with problem/solution/tech stack
- **/system/ai** — Conversational AI system architecture
- **/system/security** — Data security, privacy, and compliance planning
- **/architecture** — Repo structure, design principles, technology decisions
- **/data-model** — Interactive entity relationship map (17 entities, 7 layers)
- **/roadmap** — 26-week phased implementation plan with validation gates
- **/challenges** — Design challenges and how we're solving them

## Quick Start

```bash
# Install dependencies
npm install

# Run dev server
npm run dev

# Build for production
npm run build
```

## Deploy to Vercel

### Option 1: Vercel CLI
```bash
npm i -g vercel
vercel
```

### Option 2: Git Push
1. Push this repo to GitHub
2. Import at [vercel.com/new](https://vercel.com/new)
3. Vercel auto-detects Next.js — zero config needed

## Adding Pages

1. Create a new directory under `app/` (e.g., `app/api-design/page.jsx`)
2. Add the nav link in `components/Nav.jsx`
3. Add any shared data to `lib/data.js`

## Design System

Colors and tokens are defined in `tailwind.config.js`. Product colors:

| Product | Color | Phase |
|---------|-------|-------|
| Scout | `#b45309` | Notice |
| Compass | `#4f46e5` | Decide |
| Blueprint | `#0d9488` | Scope |
| Bench | `#dc2626` | Staff |
| Relay | `#7c3aed` | Manage |
| Retro | `#db2777` | Learn |
| Proof | `#059669` | Sell |
