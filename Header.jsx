import React from "react";
import { ArrowLeft } from "lucide-react";
import { cn } from "../utils/utils";

export function Header({ title, subtitle, onBack, dark = false }) {
  return (
    <div className="mb-5 flex items-start gap-3">
      {onBack ? (
        <button
          onClick={onBack}
          className={cn(
            "mt-1 flex h-10 w-10 items-center justify-center rounded-full",
            dark ? "bg-white/10 text-slate-100" : "bg-white text-slate-700 shadow-sm"
          )}
        >
          <ArrowLeft className="h-5 w-5" />
        </button>
      ) : null}
      <div>
        {subtitle ? <p className={cn("text-sm", dark ? "text-slate-400" : "text-slate-500")}>{subtitle}</p> : null}
        <h2 className={cn("text-4xl font-bold tracking-tight", dark ? "text-white" : "text-slate-900")}>{title}</h2>
      </div>
    </div>
  );
}
