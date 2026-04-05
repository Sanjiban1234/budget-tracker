import React from "react";
import { PhoneShell } from "../components/PhoneShell";
import { Header } from "../components/Header";
import { BottomNav } from "../components/BottomNav";
import { budgets } from "../data/mockData";
import { formatMoney } from "../utils/utils";

export function CategoriesScreen() {
  const totalSpent = budgets.reduce((sum, item) => sum + item.spent, 0);
  const totalBudget = budgets.reduce((sum, item) => sum + item.budget, 0);

  return (
    <PhoneShell>
      <div className="px-5 pb-6 pt-6">
        <Header title="Categories & Budget" onBack={() => {}} />

        <div className="mb-5 rounded-[1.75rem] border border-slate-200 bg-white p-4 shadow-sm">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <p className="text-sm text-slate-500">Total Spent</p>
              <p className="mt-1 text-3xl font-bold text-slate-900">{formatMoney(totalSpent)}</p>
            </div>
            <div>
              <p className="text-sm text-slate-500">Total Budget</p>
              <p className="mt-1 text-3xl font-bold text-slate-900">{formatMoney(totalBudget)}</p>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          {budgets.map((item) => {
            const percent = Math.round((item.spent / item.budget) * 100);
            return (
              <div key={item.name} className="rounded-[1.75rem] border border-slate-200 bg-white p-4 shadow-sm">
                <div className="mb-3 flex items-start justify-between gap-3">
                  <div className="flex items-start gap-3">
                    <div className="h-10 w-10 rounded-full" style={{ backgroundColor: item.color }} />
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">{item.name}</h3>
                      <p className="text-sm text-slate-500">
                        {formatMoney(item.spent)} of {formatMoney(item.budget)}
                      </p>
                    </div>
                  </div>
                  <div className="text-right text-sm font-semibold text-blue-600">{percent}%</div>
                </div>
                <div className="h-3 rounded-full bg-slate-100">
                  <div className="h-full rounded-full" style={{ width: `${percent}%`, backgroundColor: item.color }} />
                </div>
              </div>
            );
          })}
        </div>

        <BottomNav active="categories" />
      </div>
    </PhoneShell>
  );
}
