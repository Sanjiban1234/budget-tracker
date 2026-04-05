import React from "react";
import { cn } from "../utils/utils";

export function QuickAction({ icon, title, tone = "blue" }) {
  const tones = {
    blue: "bg-blue-50 text-blue-600",
    red: "bg-red-50 text-red-500",
    yellow: "bg-amber-50 text-amber-500",
    slate: "bg-slate-100 text-slate-600",
  };

  return (
    <button className="rounded-[1.75rem] border border-slate-200 bg-white p-5 text-left shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <div className={cn("mb-5 flex h-12 w-12 items-center justify-center rounded-full", tones[tone])}>{icon}</div>
      <div className="text-base font-semibold text-slate-800">{title}</div>
    </button>
  );
}
