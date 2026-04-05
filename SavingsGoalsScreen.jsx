import React from "react";
import { Target } from "lucide-react";
import { PhoneShell } from "../components/PhoneShell";
import { Header } from "../components/Header";
import { MetricHero } from "../components/MetricHero";
import { BottomNav } from "../components/BottomNav";
import { savingsGoals } from "../data/mockData";
import { formatMoney } from "../utils/utils";

export function SavingsGoalsScreen() {
  const overallCurrent = savingsGoals.reduce((sum, goal) => sum + goal.current, 0);
  const overallTarget = savingsGoals.reduce((sum, goal) => sum + goal.target, 0);
  const overallProgress = Math.round((overallCurrent / overallTarget) * 1000) / 10;

  return (
    <PhoneShell>
      <div className="px-5 pb-6 pt-6">
        <Header title="Savings Goals" onBack={() => {}} />

        <MetricHero title="Overall Progress" value={formatMoney(overallCurrent)} subValue={`${overallProgress}% Complete`} footer={<p className="text-sm text-blue-100">Target {formatMoney(overallTarget)}</p>} />

        <div className="mt-5 space-y-4">
          {savingsGoals.map((goal) => {
            const progress = Math.round((goal.current / goal.target) * 100);
            return (
              <div key={goal.name} className="rounded-[1.75rem] border border-slate-200 bg-white p-4 shadow-sm">
                <div className="mb-3 flex items-start justify-between gap-3">
                  <div className="flex items-start gap-3">
                    <div className="mt-1 h-10 w-10 rounded-full" style={{ backgroundColor: goal.color }} />
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">{goal.name}</h3>
                      <p className="text-sm text-slate-500">{formatMoney(goal.remaining)} remaining</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-slate-900">{progress}%</p>
                  </div>
                </div>

                <div className="mb-4 h-3 overflow-hidden rounded-full bg-slate-100">
                  <div className="h-full rounded-full" style={{ width: `${progress}%`, backgroundColor: goal.color }} />
                </div>

                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="rounded-2xl bg-slate-50 p-3">
                    <p className="text-slate-500">Current</p>
                    <p className="mt-1 text-xl font-semibold text-slate-900">{formatMoney(goal.current)}</p>
                  </div>
                  <div className="rounded-2xl bg-slate-50 p-3">
                    <p className="text-slate-500">Target</p>
                    <p className="mt-1 text-xl font-semibold text-slate-900">{formatMoney(goal.target)}</p>
                  </div>
                </div>

                <p className="mt-3 text-sm text-slate-500">{goal.monthsLeft} months until deadline</p>
              </div>
            );
          })}

          <button className="flex w-full items-center justify-center gap-2 rounded-[1.75rem] border border-dashed border-slate-300 bg-white/70 px-4 py-4 font-semibold text-slate-700">
            <Target className="h-5 w-5" />
            Add New Goal
          </button>
        </div>

        <BottomNav active="savings" />
      </div>
    </PhoneShell>
  );
}
