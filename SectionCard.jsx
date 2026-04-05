import React from "react";

export function SectionCard({ title, action, children }) {
  return (
    <div className="rounded-[1.75rem] border border-slate-200 bg-white p-4 shadow-sm">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-xl font-bold text-slate-900">{title}</h3>
        {action ? <button className="text-sm font-medium text-blue-600">{action}</button> : null}
      </div>
      {children}
    </div>
  );
}
