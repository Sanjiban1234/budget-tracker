import React from "react";

export function InputField({
  label,
  placeholder,
  icon,
  type = "text",
  right,
}) {
  return (
    <div className="space-y-2">
      <label className="text-sm font-medium text-slate-600">{label}</label>
      <div className="flex items-center rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm shadow-slate-200/40">
        {icon ? <div className="mr-3 text-slate-400">{icon}</div> : null}
        <input
          type={type}
          placeholder={placeholder}
          className="w-full bg-transparent text-sm outline-none placeholder:text-slate-400"
        />
        {right}
      </div>
    </div>
  );
}
