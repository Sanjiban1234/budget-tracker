import React from "react";
import { Moon, Sparkles, DollarSign, Calendar, CreditCard, Wallet, ChevronRight, Home, TrendingUp, Settings } from "lucide-react";
import { PhoneShell } from "../components/PhoneShell";
import { Header } from "../components/Header";
import { PieChartIcon } from "../components/BottomNav";
import { cn } from "../utils/utils";

export function SettingsRow({ icon, title, value, trailing, dark = false }) {
  return (
    <div className={cn("flex items-center justify-between rounded-[1.5rem] px-4 py-4", dark ? "bg-white/10" : "bg-white") }>
      <div className="flex items-center gap-3">
        <div className={cn("flex h-11 w-11 items-center justify-center rounded-full", dark ? "bg-black/20 text-slate-200" : "bg-slate-100 text-slate-700")}>{icon}</div>
        <div>
          <p className={cn("font-semibold", dark ? "text-white" : "text-slate-900")}>{title}</p>
          {value ? <p className={cn("text-sm", dark ? "text-slate-400" : "text-slate-500")}>{value}</p> : null}
        </div>
      </div>
      {trailing ?? <ChevronRight className={cn("h-5 w-5", dark ? "text-slate-500" : "text-slate-400")} />}
    </div>
  );
}

export function SettingsScreen({ dark = false }) {
  return (
    <PhoneShell dark={dark}>
      <div className="px-5 pb-6 pt-6">
        <Header title="Settings" onBack={() => {}} dark={dark} />

        <div className="space-y-6">
          <div>
            <h3 className={cn("mb-3 text-2xl font-bold", dark ? "text-slate-200" : "text-slate-800")}>Appearance</h3>
            <SettingsRow
              dark={dark}
              icon={dark ? <Moon className="h-5 w-5" /> : <Sparkles className="h-5 w-5" />}
              title="Dark Mode"
              trailing={
                <button className={cn("relative h-8 w-14 rounded-full transition", dark ? "bg-blue-500" : "bg-slate-200") }>
                  <span className={cn("absolute top-1 h-6 w-6 rounded-full bg-white transition", dark ? "right-1" : "left-1")} />
                </button>
              }
            />
          </div>

          <div>
            <h3 className={cn("mb-3 text-2xl font-bold", dark ? "text-slate-200" : "text-slate-800")}>Preferences</h3>
            <div className="space-y-3">
              <SettingsRow dark={dark} icon={<DollarSign className="h-5 w-5" />} title="Currency" value="USD ($)" />
              <SettingsRow dark={dark} icon={<Calendar className="h-5 w-5" />} title="Date Format" value="MM/DD/YYYY" />
            </div>
          </div>

          <div>
            <h3 className={cn("mb-3 text-2xl font-bold", dark ? "text-slate-200" : "text-slate-800")}>Data</h3>
            <SettingsRow dark={dark} icon={<CreditCard className="h-5 w-5" />} title="Export Data" />
          </div>

          <div className="flex flex-col items-center justify-center py-10 text-center">
            <div className="mb-4 flex h-24 w-24 items-center justify-center rounded-[2rem] bg-gradient-to-br from-blue-500 to-blue-700 shadow-lg shadow-blue-500/30">
              <Wallet className="h-10 w-10 text-white" />
            </div>
            <h4 className={cn("text-3xl font-bold", dark ? "text-white" : "text-slate-900")}>Pocket Worth</h4>
            <p className={cn("mt-2 text-lg", dark ? "text-slate-400" : "text-slate-500")}>Version 1.0.0</p>
            <p className={cn("mt-3 text-base", dark ? "text-slate-500" : "text-slate-500")}>Know where your money goes.</p>
          </div>
        </div>

        <div className={cn("sticky bottom-0 mt-6 grid grid-cols-5 rounded-t-[1.75rem] border-t px-2 py-3 backdrop-blur", dark ? "border-white/10 bg-slate-900/70" : "border-slate-200 bg-white/90") }>
          {[
            { label: "Home", icon: Home },
            { label: "Categories", icon: PieChartIcon },
            { label: "Savings", icon: TrendingUp },
            { label: "Net Worth", icon: Wallet },
            { label: "Settings", icon: Settings },
          ].map((item, index) => {
            const Icon = item.icon;
            const selected = index === 4;
            return (
              <button key={item.label} className="flex flex-col items-center gap-1 px-1 py-2">
                <Icon className={cn("h-5 w-5", selected ? "text-blue-500" : dark ? "text-slate-500" : "text-slate-400")} />
                <span className={cn("text-[11px] font-medium", selected ? "text-blue-500" : dark ? "text-slate-500" : "text-slate-500")}>
                  {item.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </PhoneShell>
  );
}
