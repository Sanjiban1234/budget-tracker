import React from "react";
import { Calendar, TrendingUp, DollarSign, TrendingDown } from "lucide-react";
import { PhoneShell } from "../components/PhoneShell";
import { Header } from "../components/Header";
import { SectionCard } from "../components/SectionCard";
import { budgets } from "../data/mockData";
import { formatMoney, cn } from "../utils/utils";

export function InsightsScreen() {
  const currentMonthSpending = 1825;
  const previousMonthSpending = 2700;
  const saved = previousMonthSpending - currentMonthSpending;

  return (
    <PhoneShell>
      <div className="px-5 pb-6 pt-6">
        <Header title="Insights & Analytics" subtitle="Smart insights about your spending habits" onBack={() => {}} />

        <div className="grid grid-cols-2 gap-4">
          <div className="rounded-[1.75rem] border border-slate-200 bg-white p-4 shadow-sm">
            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-700">
              <Calendar className="h-5 w-5" />
            </div>
            <p className="text-sm text-slate-500">Daily Average</p>
            <p className="mt-1 text-3xl font-bold text-slate-900">$73</p>
          </div>
          <div className="rounded-[1.75rem] border border-slate-200 bg-white p-4 shadow-sm">
            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-amber-100 text-amber-600">
              <TrendingUp className="h-5 w-5" />
            </div>
            <p className="text-sm text-slate-500">Recurring Bills</p>
            <p className="mt-1 text-3xl font-bold text-slate-900">$129</p>
          </div>
        </div>

        <SectionCard title="Smart Insights">
          <div className="space-y-3">
            {[
              {
                title: "Great Savings Rate!",
                text: "You're saving 65% of your income this month. Keep it up!",
                icon: <TrendingUp className="h-5 w-5" />,
                bg: "bg-blue-50",
                iconBg: "bg-blue-100 text-blue-600",
              },
              {
                title: "Top Spending Category",
                text: "Housing is your highest expense at $1200 this month.",
                icon: <DollarSign className="h-5 w-5" />,
                bg: "bg-amber-50",
                iconBg: "bg-amber-100 text-amber-600",
              },
              {
                title: "Spending Trend",
                text: "Your expenses are 18% lower compared to last month.",
                icon: <TrendingDown className="h-5 w-5" />,
                bg: "bg-slate-50",
                iconBg: "bg-slate-200 text-slate-700",
              },
            ].map((item) => (
              <div key={item.title} className={cn("rounded-[1.5rem] p-4", item.bg)}>
                <div className="flex gap-3">
                  <div className={cn("flex h-10 w-10 shrink-0 items-center justify-center rounded-full", item.iconBg)}>{item.icon}</div>
                  <div>
                    <p className="font-semibold text-slate-900">{item.title}</p>
                    <p className="mt-1 text-sm text-slate-600">{item.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </SectionCard>

        <div className="mt-4 space-y-4">
          <SectionCard title="Month-to-Month Comparison">
            <div className="space-y-4">
              <div>
                <div className="mb-1 flex items-center justify-between text-sm font-medium text-slate-600">
                  <span>November</span>
                  <span>{formatMoney(previousMonthSpending)}</span>
                </div>
                <div className="h-3 rounded-full bg-slate-100">
                  <div className="h-full w-full rounded-full bg-slate-500" />
                </div>
              </div>
              <div>
                <div className="mb-1 flex items-center justify-between text-sm font-medium text-slate-600">
                  <span>December (Current)</span>
                  <span>{formatMoney(currentMonthSpending)}</span>
                </div>
                <div className="h-3 rounded-full bg-slate-100">
                  <div className="h-full w-2/3 rounded-full bg-blue-500" />
                </div>
              </div>
              <div className="rounded-2xl bg-blue-50 px-4 py-3 text-sm font-medium text-blue-700">
                💰 You're spending {formatMoney(saved)} less than last month!
              </div>
            </div>
          </SectionCard>

          <SectionCard title="Category Performance">
            <div className="space-y-4">
              {budgets.slice(0, 4).map((category) => {
                const percent = Math.round((category.spent / category.budget) * 100);
                return (
                  <div key={category.name}>
                    <div className="mb-1 flex items-center justify-between text-sm font-medium text-slate-700">
                      <div className="flex items-center gap-2">
                        <span className="h-3 w-3 rounded-full" style={{ backgroundColor: category.color }} />
                        {category.name}
                      </div>
                      <span>{percent}%</span>
                    </div>
                    <div className="h-2.5 rounded-full bg-slate-100">
                      <div className="h-full rounded-full" style={{ width: `${percent}%`, backgroundColor: category.color }} />
                    </div>
                  </div>
                );
              })}
            </div>
          </SectionCard>
        </div>
      </div>
    </PhoneShell>
  );
}
