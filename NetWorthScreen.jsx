import React from "react";
import { Wallet, CreditCard } from "lucide-react";
import { LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Line, ResponsiveContainer } from "recharts";
import { PhoneShell } from "../components/PhoneShell";
import { Header } from "../components/Header";
import { MetricHero } from "../components/MetricHero";
import { SectionCard } from "../components/SectionCard";
import { BottomNav } from "../components/BottomNav";
import { netWorthHistory, assetBreakdown } from "../data/mockData";
import { formatMoney } from "../utils/utils";

export function NetWorthScreen() {
  return (
    <PhoneShell>
      <div className="px-5 pb-6 pt-6">
        <Header title="Net Worth" onBack={() => {}} />

        <MetricHero title="Total Net Worth" value={formatMoney(38000)} subValue="+$2,000 (5.6%) this month" />

        <div className="mt-4 grid grid-cols-2 gap-4">
          <div className="rounded-[1.75rem] border border-slate-200 bg-white p-4 shadow-sm">
            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 text-blue-600">
              <Wallet className="h-5 w-5" />
            </div>
            <p className="text-sm text-slate-500">Assets</p>
            <p className="mt-1 text-3xl font-bold text-slate-900">{formatMoney(43800)}</p>
          </div>
          <div className="rounded-[1.75rem] border border-slate-200 bg-white p-4 shadow-sm">
            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-red-50 text-red-500">
              <CreditCard className="h-5 w-5" />
            </div>
            <p className="text-sm text-slate-500">Liabilities</p>
            <p className="mt-1 text-3xl font-bold text-slate-900">{formatMoney(5800)}</p>
          </div>
        </div>

        <div className="mt-4 space-y-4">
          <SectionCard title="Net Worth History">
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={netWorthHistory}>
                  <CartesianGrid vertical={false} strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip formatter={(value) => formatMoney(value)} />
                  <Line type="monotone" dataKey="value" stroke="#10b981" strokeWidth={3} dot={false} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </SectionCard>

          <SectionCard title="Asset Breakdown">
            <div className="space-y-3">
              {assetBreakdown.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.name} className="flex items-center justify-between rounded-2xl bg-slate-50 p-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-semibold text-slate-900">{item.name}</p>
                        <p className="text-sm text-slate-500">{item.subtitle}</p>
                      </div>
                    </div>
                    <p className="text-lg font-semibold text-slate-900">{formatMoney(item.value)}</p>
                  </div>
                );
              })}
            </div>
          </SectionCard>

          <div className="rounded-[1.75rem] border border-blue-100 bg-blue-50 p-4 text-blue-900 shadow-sm">
            <div className="flex gap-3">
              <div className="text-2xl">🎉</div>
              <div>
                <p className="text-lg font-bold">Keep Growing!</p>
                <p className="mt-1 text-sm text-blue-800">
                  Your net worth has grown by $2,000 this month. You're on track to reach your financial goals!
                </p>
              </div>
            </div>
          </div>
        </div>

        <BottomNav active="networth" />
      </div>
    </PhoneShell>
  );
}
