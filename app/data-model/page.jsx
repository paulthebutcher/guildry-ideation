"use client";
import { useState } from "react";
import { PRODUCTS, LAYERS, RELATIONSHIPS } from "../../lib/data";

function ProductFilter({ active, onToggle }) {
  return (
    <div className="flex gap-1.5 flex-wrap">
      {Object.entries(PRODUCTS).map(([key, prod]) => {
        const isActive = active.includes(key);
        return (
          <button
            key={key}
            onClick={() => onToggle(key)}
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-md border cursor-pointer font-mono text-[10px] transition-all"
            style={{
              borderColor: isActive ? `${prod.color}60` : "#e2e8f0",
              background: isActive ? `${prod.color}12` : "white",
              color: isActive ? prod.color : "#64748b",
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: isActive ? prod.color : "#cbd5e1" }} />
            {prod.name}
          </button>
        );
      })}
    </div>
  );
}

function EntityCard({ entity, isSelected, onClick }) {
  return (
    <div
      onClick={onClick}
      className="rounded-lg p-3.5 cursor-pointer transition-all duration-150 relative overflow-hidden border"
      style={{
        background: isSelected ? "#f1f5f9" : "white",
        borderColor: isSelected ? "#0d9488" : "#e2e8f0",
      }}
    >
      {isSelected && (
        <div className="absolute top-0 left-0 right-0 h-0.5"
          style={{ background: "linear-gradient(90deg, #0d9488, #4f46e5, #dc2626)" }} />
      )}
      <div className="flex justify-between items-start mb-1.5">
        <h4 className="m-0 font-mono text-[13px] font-semibold"
          style={{ color: isSelected ? "#0d9488" : "#0f172a" }}>
          {entity.name}
        </h4>
        <span className="font-mono text-[9px] text-slate-500 bg-slate-100 px-1.5 py-0.5 rounded border border-slate-200">
          {entity.fields.length}f
        </span>
      </div>
      <p className="m-0 text-[11px] text-slate-600 leading-relaxed mb-2">{entity.desc}</p>
      <div className="flex gap-1 flex-wrap">
        {entity.usedBy.map((p) => (
          <span key={p} className="font-mono text-[8px] uppercase tracking-wider px-1.5 py-0.5 rounded"
            style={{ color: PRODUCTS[p]?.color, background: `${PRODUCTS[p]?.color}12` }}>
            {PRODUCTS[p]?.name}
          </span>
        ))}
      </div>
    </div>
  );
}

function FieldTable({ entity }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse font-mono text-xs">
        <thead>
          <tr className="border-b border-slate-200">
            {["Field", "Type", "Key", "Notes"].map((h) => (
              <th key={h} className="text-left px-3 py-2 text-slate-500 font-medium text-[10px] uppercase tracking-wider bg-slate-50">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {entity.fields.map((f, i) => (
            <tr key={i} className="border-b border-slate-100">
              <td className="px-3 py-1.5" style={{
                color: f.key === "pk" ? "#0d9488" : f.key === "fk" ? "#4f46e5" : "#334155"
              }}>
                {f.name}
              </td>
              <td className="px-3 py-1.5 text-slate-600">
                {f.type}
                {f.values && <span className="block text-[10px] text-slate-500 mt-0.5">{f.values}</span>}
              </td>
              <td className="px-3 py-1.5">
                {f.key === "pk" && (
                  <span className="text-[10px] px-1.5 py-0.5 rounded text-teal-700 bg-teal-50 border border-teal-200">PK</span>
                )}
                {f.key === "fk" && (
                  <span className="text-[10px] px-1.5 py-0.5 rounded text-indigo-700 bg-indigo-50 border border-indigo-200">
                    FK → {f.ref}
                  </span>
                )}
              </td>
              <td className="px-3 py-1.5 text-slate-500 text-[11px]">{f.note || ""}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function RelationshipList({ entity }) {
  const allEntities = LAYERS.flatMap((l) => l.entities);
  const rels = RELATIONSHIPS.filter((r) => r.from === entity.id || r.to === entity.id);
  if (rels.length === 0) return null;

  return (
    <div className="mt-5">
      <h4 className="font-mono text-[10px] text-slate-500 uppercase tracking-wider m-0 mb-2">Relationships</h4>
      <div className="flex flex-col gap-1">
        {rels.map((r, i) => {
          const other = r.from === entity.id ? r.to : r.from;
          const otherEntity = allEntities.find((e) => e.id === other);
          return (
            <div key={i} className="flex items-center gap-2 text-[11px]">
              <span className="text-accent-blueprint font-mono">{entity.name}</span>
              <span className="text-slate-400">—</span>
              <span className="text-slate-500 italic text-[10px]">{r.label}</span>
              <span className="text-slate-400">→</span>
              <span className="text-accent-compass font-mono">{otherEntity?.name || other}</span>
              <span className="text-slate-400 text-[9px] font-mono">({r.type})</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function DataModelPage() {
  const [selectedEntity, setSelectedEntity] = useState(null);
  const [activeProducts, setActiveProducts] = useState(Object.keys(PRODUCTS));

  const allEntities = LAYERS.flatMap((l) => l.entities);
  const selected = allEntities.find((e) => e.id === selectedEntity);

  const toggleProduct = (key) => {
    setActiveProducts((prev) =>
      prev.includes(key) ? prev.filter((p) => p !== key) : [...prev, key]
    );
  };

  const filteredLayers = LAYERS.map((layer) => ({
    ...layer,
    entities: layer.entities.filter((e) =>
      e.usedBy.some((p) => activeProducts.includes(p))
    ),
  })).filter((l) => l.entities.length > 0);

  const allFields = allEntities.flatMap((e) => e.fields);

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      {/* Header */}
      <div className="mb-10">
        <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent-blueprint">
          Platform Architecture
        </span>
        <h1 className="text-3xl font-bold tracking-tight mt-2 mb-2 text-gradient">
          Entity Relationship Map
        </h1>
        <p className="text-sm text-slate-600 max-w-xl">
          Every entity is owned by one product but referenced by many — so they validate independently
          but combine without migration.
        </p>

        {/* Stats */}
        <div className="flex gap-8 mt-6">
          {[
            { label: "Entities", value: allEntities.length },
            { label: "Fields", value: allFields.length },
            { label: "Foreign Keys", value: allFields.filter((f) => f.key === "fk").length },
            { label: "Relationships", value: RELATIONSHIPS.length },
            { label: "Layers", value: LAYERS.length },
          ].map((s) => (
            <div key={s.label} className="flex flex-col">
              <span className="font-mono text-xl font-bold text-accent-blueprint">{s.value}</span>
              <span className="text-[10px] text-slate-500 uppercase tracking-wider">{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Filter */}
      <div className="mb-8">
        <div className="font-mono text-[10px] text-slate-500 uppercase tracking-wider mb-2">Filter by product</div>
        <ProductFilter active={activeProducts} onToggle={toggleProduct} />
      </div>

      {/* Main Grid */}
      <div className="grid gap-6" style={{ gridTemplateColumns: selected ? "1fr 1fr" : "1fr" }}>
        <div>
          {filteredLayers.map((layer) => (
            <div key={layer.id} className="mb-8">
              <div className="mb-3">
                <div className="flex items-center gap-2">
                  <h3 className="text-sm font-semibold text-slate-800 m-0">{layer.name}</h3>
                  <span className="font-mono text-[10px] text-slate-500 bg-slate-100 px-1.5 py-0.5 rounded border border-slate-200">
                    {layer.entities.length}
                  </span>
                </div>
                <p className="text-[11px] text-slate-500 mt-1 m-0">{layer.description}</p>
              </div>
              <div className="grid gap-2" style={{ gridTemplateColumns: selected ? "1fr" : "1fr 1fr" }}>
                {layer.entities.map((entity) => (
                  <EntityCard
                    key={entity.id}
                    entity={entity}
                    isSelected={selectedEntity === entity.id}
                    onClick={() => setSelectedEntity(selectedEntity === entity.id ? null : entity.id)}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Detail Panel */}
        {selected && (
          <div className="sticky top-20 self-start rounded-xl p-5 border border-slate-200 max-h-[calc(100vh-6rem)] overflow-y-auto bg-white shadow-sm">
            <div className="flex justify-between items-start mb-1">
              <h3 className="m-0 font-mono text-lg font-bold text-accent-blueprint">{selected.name}</h3>
              <button
                onClick={() => setSelectedEntity(null)}
                className="bg-white border border-slate-200 rounded px-2 py-0.5 text-slate-500 cursor-pointer font-mono text-xs hover:text-slate-800 hover:border-slate-300"
              >
                ✕
              </button>
            </div>
            <p className="text-sm text-slate-600 mb-4 mt-0">{selected.desc}</p>
            <div className="flex gap-1 flex-wrap mb-5">
              {selected.usedBy.map((p) => (
                <span key={p} className="font-mono text-[10px] px-2 py-0.5 rounded"
                  style={{ color: PRODUCTS[p]?.color, background: `${PRODUCTS[p]?.color}12` }}>
                  {PRODUCTS[p]?.name} ({PRODUCTS[p]?.phase})
                </span>
              ))}
            </div>
            <h4 className="font-mono text-[10px] text-slate-500 uppercase tracking-wider m-0 mb-2">Schema</h4>
            <FieldTable entity={selected} />
            <RelationshipList entity={selected} />
          </div>
        )}
      </div>
    </div>
  );
}
