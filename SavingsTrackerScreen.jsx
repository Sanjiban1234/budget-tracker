import React from "react";
import { ResponsiveContainer, AreaChart, CartesianGrid, XAxis, YAxis, Tooltip, Area } from "recharts";
import { PhoneShell } from "../components/PhoneShell";
import { Header } from "../components/Header";
import { MetricHero } from "../components/MetricHero";
import { SectionCard } from "../components/SectionCard";
import { BottomNav } from "../components/BottomNav";
import { savingsGrowth } from "../data/mockData";
import { formatMoney } from "../utils/utils";

export function SavingsTrackerScreen() {
  return (
    <PhoneShell>
      <div className="px-5 pb-6 pt-6">
        <Header title="Savings Tracker" onBack={() => {}} />

        <MetricHero title="This Month's Savings" value={formatMoney(3375)} subValue="+53.0% vs avg" />

        <div className="mt-5 space-y-4">
          <SectionCard title="Savings Growth">
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={savingsGrowth}>
                  <CartesianGrid vertical={false} strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip formatter={(value) => formatMoney(value)} />
                  <Area type="monotone" dataKey="value" stroke="#10b981" fill="#10b98122" strokeWidth={3} />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </SectionCard>

          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-[1.75rem] border border-slate-200 bg-white p-4 shadow-sm">
              <p className="text-sm text-slate-500">Total Saved (2025)</p>
              <p className="mt-2 text-3xl font-bold text-slate-900">{formatMoney(26475)}</p>
            </div>
            <div className="rounded-[1.75rem] border border-slate-200 bg-white p-4 shadow-sm">
              <p className="text-sm text-slate-500">Monthly Average</p>
              <p className="mt-2 text-3xl font-bold text-slate-900">$2206</p>
            </div>
          </div>

          <SectionCard title="Motivational Insights">
            <div className="space-y-3 text-sm text-slate-700">
              <div className="rounded-2xl bg-slate-50 px-4 py-3">🎯 You're saving more than your average this month!</div>
              <div className="rounded-2xl bg-slate-50 px-4 py-3">💪 Keep it up! You've saved {formatMoney(26475)} this year.</div>
              <div className="rounded-2xl bg-slate-50 px-4 py-3">📈 At this rate, you'll save {formatMoney(26475)} annually.</div>
            </div>
          </SectionCard>
        </div>

        <BottomNav active="savings" />
      </div>
    </PhoneShell>
  );
}
