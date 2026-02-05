# Platform Docs

Internal architecture documentation for the product platform. Built with Next.js 14, Tailwind CSS, deployed to Vercel.

## Pages

- **/** — Overview: platform vision, product pipeline, key bets
- **/data-model** — Interactive entity relationship map (17 entities, 7 layers)
- **/products** — Individual product briefs with problem/solution/tech stack
- **/architecture** — Repo structure, design principles, technology decisions
- **/roadmap** — 26-week phased implementation plan with validation gates

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
| Signal | `#E8A838` | Notice |
| Plinth | `#7B8CDE` | Decide |
| Armature | `#4ECDC4` | Scope |
| Bench | `#FF6B6B` | Staff |
| Relay | `#A78BFA` | Manage |
| Retro | `#F472B6` | Learn |
| Folio | `#34D399` | Sell |
