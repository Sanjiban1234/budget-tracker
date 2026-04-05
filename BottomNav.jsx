import React from "react";
import { Home, BarChart3, TrendingUp, Wallet, Settings } from "lucide-react";
import { cn } from "../utils/utils";

export function PieChartIcon(props) {
  return <BarChart3 {...props} />;
}

export function BottomNav({ active }) {
  const items = [
    { key: "home", label: "Home", icon: Home },
    { key: "categories", label: "Categories", icon: PieChartIcon },
    { key: "savings", label: "Savings", icon: TrendingUp },
    { key: "networth", label: "Net Worth", icon: Wallet },
    { key: "settings", label: "Settings", icon: Settings },
  ];

  return (
    <div className="sticky bottom-0 mt-6 grid grid-cols-5 rounded-t-[1.75rem] border-t border-slate-200 bg-white/90 px-2 py-3 backdrop-blur">
      {items.map((item) => {
        const Icon = item.icon;
        const selected = active === item.key;
        return (
          <button key={item.key} className="flex flex-col items-center gap-1 px-1 py-2">
            <Icon className={cn("h-5 w-5", selected ? "text-blue-600" : "text-slate-400")} />
            <span className={cn("text-[11px] font-medium", selected ? "text-blue-600" : "text-slate-500")}>
              {item.label}
            </span>
          </button>
        );
      })}
    </div>
  );
}
