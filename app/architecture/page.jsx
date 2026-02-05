"use client";
import { PRODUCTS, ARCHITECTURE_PRINCIPLES, REPO_STRUCTURE } from "../../lib/data";

function RepoTree() {
  return (
    <div className="font-mono text-xs">
      {/* Root */}
      <div className="text-slate-700 mb-3">
        <span className="text-accent-armature font-semibold">/</span>
        <span className="text-slate-500 ml-2">monorepo root (Turborepo + pnpm)</span>
      </div>

      {/* Shared */}
      <div className="mb-5 pl-4 border-l-2 border-slate-200">
        <div className="text-accent-armature font-semibold mb-2">/shared</div>
        {REPO_STRUCTURE.shared.map((item, i) => (
          <div key={i} className="flex items-start gap-3 py-1 pl-4">
            <span className="text-slate-500 shrink-0">{item.path}</span>
            <span className="text-slate-400">—</span>
            <span className="text-slate-600">{item.desc}</span>
          </div>
        ))}
      </div>

      {/* Products */}
      <div className="pl-4 border-l-2 border-slate-200">
        <div className="text-accent-plinth font-semibold mb-2">/products</div>
        {REPO_STRUCTURE.products.map((prod) => {
          const color = PRODUCTS[prod.key]?.color;
          return (
            <div key={prod.key} className="mb-3 pl-4">
              <div className="font-semibold mb-1" style={{ color }}>
                /{prod.key}
                <span className="text-slate-500 font-normal ml-2">({prod.name})</span>
              </div>
              {prod.paths.map((p, i) => (
                <div key={i} className="flex items-start gap-3 py-0.5 pl-4 text-slate-500">
                  <span className="shrink-0">{p.path}</span>
                  <span className="text-slate-400">—</span>
                  <span className="text-slate-600">{p.desc}</span>
                </div>
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
}

function TechDecision({ title, chosen, alternatives, reasoning }) {
  return (
    <div className="rounded-lg p-4 border border-slate-200 bg-white">
      <h4 className="font-mono text-xs font-semibold text-slate-800 m-0 mb-2">{title}</h4>
      <div className="flex items-center gap-2 mb-2">
        <span className="font-mono text-[11px] px-2 py-0.5 rounded text-accent-armature bg-teal-50 border border-teal-200">
          {chosen}
        </span>
        {alternatives.map((alt, i) => (
          <span key={i} className="font-mono text-[10px] text-slate-400 line-through">{alt}</span>
        ))}
      </div>
      <p className="text-[11px] text-slate-600 leading-relaxed m-0">{reasoning}</p>
    </div>
  );
}

export default function ArchitecturePage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      {/* Header */}
      <div className="mb-10">
        <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent-bench">
          Technical Architecture
        </span>
        <h1 className="text-3xl font-bold tracking-tight mt-2 mb-2 text-gradient">
          Architecture & Principles
        </h1>
        <p className="text-sm text-slate-600 max-w-xl">
          Monorepo structure, shared services, and the design decisions that let seven products
          share infrastructure without coupling.
        </p>
      </div>

      {/* Principles */}
      <section className="mb-16">
        <h2 className="font-mono text-[11px] uppercase tracking-[0.15em] text-slate-500 mb-6">
          Design Principles
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {ARCHITECTURE_PRINCIPLES.map((p, i) => (
            <div key={i} className="rounded-xl p-5 border border-slate-200 bg-slate-50">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-accent-armature text-sm">{p.icon}</span>
                <h3 className="font-mono text-xs font-semibold text-accent-secondary m-0">{p.title}</h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed m-0">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Repo Structure */}
      <section className="mb-16">
        <h2 className="font-mono text-[11px] uppercase tracking-[0.15em] text-slate-500 mb-6">
          Repository Structure
        </h2>
        <div className="rounded-xl p-6 border border-slate-200 overflow-x-auto bg-slate-50">
          <RepoTree />
        </div>
      </section>

      {/* Tech Decisions */}
      <section className="mb-16">
        <h2 className="font-mono text-[11px] uppercase tracking-[0.15em] text-slate-500 mb-6">
          Technology Decisions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <TechDecision
            title="Monorepo Tool"
            chosen="Turborepo + pnpm"
            alternatives={["Nx", "Lerna"]}
            reasoning="Simpler config than Nx with sufficient caching. pnpm workspace protocol handles internal package linking cleanly. Vercel deploys natively with Turborepo."
          />
          <TechDecision
            title="Framework"
            chosen="Next.js 14 (App Router)"
            alternatives={["Remix", "SvelteKit"]}
            reasoning="Best Vercel integration, RSC for data-heavy pages, established patterns for API routes that serve as the backend layer. Each product is its own Next.js app in the monorepo."
          />
          <TechDecision
            title="Database"
            chosen="Postgres + Prisma"
            alternatives={["Supabase", "PlanetScale"]}
            reasoning="JSONB support critical for evolving schemas. Prisma gives type-safe queries and migration management. Row-level security by org_id for multi-tenancy. Can layer Supabase on top later for realtime."
          />
          <TechDecision
            title="AI Integration"
            chosen="Claude API (function calling)"
            alternatives={["OpenAI", "Multi-provider"]}
            reasoning="Function calling for the conversational intake engine. Tool definitions per product — same orchestration code, different tool sets. Can abstract to multi-provider later if needed."
          />
          <TechDecision
            title="Auth"
            chosen="Clerk"
            alternatives={["NextAuth", "Auth0"]}
            reasoning="Fastest to production with org/team support built in. Handles the multi-tenancy pattern (user → org membership) natively. Easy migration to custom auth later if scale demands it."
          />
          <TechDecision
            title="Document Generation"
            chosen="Custom pipeline (docxtemplater + pdf-lib)"
            alternatives={["Pandoc", "WeasyPrint"]}
            reasoning="Full control over template design. docxtemplater for Word/DOCX, pdf-lib for PDF manipulation. Templates live in each product's /templates directory. Shared doc-gen service renders them."
          />
          <TechDecision
            title="Deployment"
            chosen="Vercel (per-product)"
            alternatives={["AWS", "Railway"]}
            reasoning="Native Turborepo support means each product deploys independently from the monorepo. Preview deployments per PR. Edge functions for API routes. Zero-config from git push to production."
          />
          <TechDecision
            title="Styling"
            chosen="Tailwind CSS"
            alternatives={["CSS Modules", "styled-components"]}
            reasoning="Shared design tokens via tailwind.config.js across all products. No runtime CSS-in-JS overhead. Consistent utility classes in the shared UI primitives package."
          />
        </div>
      </section>

      {/* Data Flow Diagram */}
      <section className="mb-16">
        <h2 className="font-mono text-[11px] uppercase tracking-[0.15em] text-slate-500 mb-6">
          Shared Service Architecture
        </h2>
        <div className="rounded-xl p-6 border border-slate-200 bg-slate-50">
          <div className="font-mono text-xs space-y-4">
            <div className="text-slate-600 mb-4">
              Every product follows the same request flow:
            </div>

            <div className="flex flex-col gap-3">
              {[
                { step: "1", label: "User Input", desc: "Natural language or structured form data enters through the product's UI", color: "#334155" },
                { step: "2", label: "Intake Engine", desc: "Shared conversational module determines which schema fields need filling, generates follow-up questions", color: "#0d9488" },
                { step: "3", label: "LLM Client", desc: "Claude API call with product-specific tool definitions. Function calling extracts structured data.", color: "#4f46e5" },
                { step: "4", label: "Domain Logic", desc: "Product-specific business rules: estimation calculations, scoring algorithms, matching logic", color: "#dc2626" },
                { step: "5", label: "Data Layer", desc: "Prisma writes to Postgres. Shared entities updated. Cross-product references populated.", color: "#7c3aed" },
                { step: "6", label: "Doc Gen", desc: "Templates rendered to PDF/DOCX. Output stored in Document entity. Returned to user.", color: "#059669" },
              ].map((item) => (
                <div key={item.step} className="flex items-start gap-4 py-2 px-3 rounded-lg bg-white border border-slate-200">
                  <span className="font-bold text-sm w-6 text-center shrink-0" style={{ color: item.color }}>{item.step}</span>
                  <div>
                    <span className="font-semibold" style={{ color: item.color }}>{item.label}</span>
                    <span className="text-slate-600 ml-2">{item.desc}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-slate-500 mt-4 text-[11px] pl-3 border-l-2 border-slate-300">
              Steps 2, 3, 5, and 6 are shared code. Only steps 1 and 4 are product-specific.
              Adding a new product means: new UI (1), new tool definitions (3), new domain logic (4), new templates (6).
              The infrastructure doesn&apos;t change.
            </div>
          </div>
        </div>
      </section>

      {/* Multi-tenancy */}
      <section>
        <h2 className="font-mono text-[11px] uppercase tracking-[0.15em] text-slate-500 mb-6">
          Multi-Tenancy Model
        </h2>
        <div className="rounded-xl p-6 border border-slate-200 bg-slate-50">
          <div className="font-mono text-xs text-slate-600 leading-relaxed space-y-3">
            <p className="m-0">
              <span className="text-accent-armature font-semibold">org_id</span> is the partition key on every entity.
              All queries are scoped by org. Prisma middleware enforces this — no query can execute without an org context.
            </p>
            <p className="m-0">
              <span className="text-accent-plinth font-semibold">Row-level security</span> in Postgres as a second layer.
              Even if the application layer has a bug, the database won&apos;t return cross-tenant data.
            </p>
            <p className="m-0">
              <span className="text-accent-bench font-semibold">Clerk organizations</span> map 1:1 to the Organization entity.
              User → Org membership with roles (owner, admin, member) handled by Clerk, mirrored in our User entity.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
