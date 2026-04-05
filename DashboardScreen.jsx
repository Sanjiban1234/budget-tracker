import React from "react";
import { TrendingUp, TrendingDown, Plus, Sparkles } from "lucide-react";
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip, BarChart, CartesianGrid, XAxis, YAxis, Bar } from "recharts";
import { PhoneShell } from "../components/PhoneShell";
import { Header } from "../components/Header";
import { MetricHero } from "../components/MetricHero";
import { QuickAction } from "../components/QuickAction";
import { SectionCard } from "../components/SectionCard";
import { BottomNav } from "../components/BottomNav";
import { incomeExpenseData, spendingData, savingsGoals } from "../data/mockData";
import { formatMoney } from "../utils/utils";

export function DashboardScreen() {
  const totalIncome = incomeExpenseData[incomeExpenseData.length - 1].income;
  const totalExpenses = incomeExpenseData[incomeExpenseData.length - 1].expenses;

  return (
    <PhoneShell>
      <div className="px-5 pb-6 pt-6">
        <Header title="Dashboard" subtitle="Welcome back" />

        <MetricHero
          title="Current Balance"
          value={formatMoney(3375)}
          footer={
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div className="rounded-2xl bg-white/10 p-3">
                <p className="text-blue-100">Income</p>
                <p className="mt-1 text-lg font-semibold">{formatMoney(totalIncome)}</p>
              </div>
              <div className="rounded-2xl bg-white/10 p-3">
                <p className="text-blue-100">Expenses</p>
                <p className="mt-1 text-lg font-semibold">{formatMoney(totalExpenses)}</p>
              </div>
            </div>
          }
        />

        <div className="mt-4 rounded-[1.75rem] border border-slate-200 bg-white p-4 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-500">Net Worth</p>
              <p className="mt-1 text-3xl font-bold text-slate-900">{formatMoney(38000)}</p>
              <button className="mt-1 text-sm font-medium text-blue-600">View Details →</button>
            </div>
            <div className="rounded-full bg-blue-50 px-3 py-1 text-sm font-semibold text-blue-600">+12.5%</div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="mb-3 text-2xl font-bold text-slate-900">Quick Actions</h3>
          <div className="grid grid-cols-2 gap-4">
            <QuickAction icon={<TrendingUp className="h-6 w-6" />} title="Add Income" tone="blue" />
            <QuickAction icon={<TrendingDown className="h-6 w-6" />} title="Add Expense" tone="red" />
            <QuickAction icon={<Plus className="h-6 w-6" />} title="Set Goal" tone="yellow" />
            <QuickAction icon={<Sparkles className="h-6 w-6" />} title="View Insights" tone="slate" />
          </div>
        </div>

        <div className="mt-5 space-y-4">
          <SectionCard title="Spending by Category" action="View All →">
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={spendingData} dataKey="value" innerRadius={55} outerRadius={95} paddingAngle={4}>
                    {spendingData.map((entry) => (
                      <Cell key={entry.name} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => formatMoney(value)} />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {spendingData.slice(0, 4).map((item) => (
                <div key={item.name} className="rounded-2xl bg-slate-50 p-3">
                  <div className="mb-1 flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full" style={{ backgroundColor: item.color }} />
                    <span className="text-sm font-medium text-slate-700">{item.name}</span>
                  </div>
                  <p className="text-lg font-semibold text-slate-900">{formatMoney(item.value)}</p>
                </div>
              ))}
            </div>
          </SectionCard>

          <SectionCard title="Income vs Expenses">
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={incomeExpenseData}>
                  <CartesianGrid vertical={false} strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip formatter={(value) => formatMoney(value)} />
                  <Bar dataKey="income" radius={[8, 8, 0, 0]} fill="#10b981" />
                  <Bar dataKey="expenses" radius={[8, 8, 0, 0]} fill="#ef4444" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </SectionCard>

          <SectionCard title="Savings Goals" action="View All →">
            <div className="space-y-4">
              {savingsGoals.slice(0, 2).map((goal) => {
                const progress = Math.round((goal.current / goal.target) * 100);
                return (
                  <div key={goal.name}>
                    <div className="mb-2 flex items-center justify-between gap-3">
                      <div>
                        <p className="font-semibold text-slate-800">{goal.name}</p>
                        <p className="text-sm text-slate-500">
                          {formatMoney(goal.current)} / {formatMoney(goal.target)}
                        </p>
                      </div>
                      <span className="text-sm font-semibold text-slate-700">{progress}%</span>
                    </div>
                    <div className="h-2.5 overflow-hidden rounded-full bg-slate-100">
                      <div className="h-full rounded-full" style={{ width: `${progress}%`, backgroundColor: goal.color }} />
                    </div>
                  </div>
                );
              })}
            </div>
          </SectionCard>
        </div>

        <BottomNav active="home" />
      </div>
    </PhoneShell>
  );
}
