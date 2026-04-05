import React from "react";
import { cn } from "../utils/utils";

export function PhoneShell({ children, dark = false }) {
  return (
    <div className="mx-auto w-full max-w-[430px] overflow-hidden rounded-[2.25rem] border border-slate-200 bg-white shadow-2xl shadow-slate-300/50">
      <div
        className={cn(
          "min-h-[860px] w-full",
          dark ? "bg-app-dark text-slate-100" : "bg-app-light text-slate-900"
        )}
      >
        {children}
      </div>
    </div>
  );
}
