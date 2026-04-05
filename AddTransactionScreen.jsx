import React from "react";
import { Calendar } from "lucide-react";
import { PhoneShell } from "../components/PhoneShell";
import { Header } from "../components/Header";
import { SegmentedControl } from "../components/SegmentedControl";
import { cn } from "../utils/utils";

export function AddTransactionScreen({ type }) {
  const isIncome = type === "income";
  const categories = isIncome
    ? ["Salary", "Freelance", "Investment", "Gift", "Other"]
    : ["Housing", "Food", "Transportation", "Entertainment", "Shopping", "Utilities", "Healthcare"];

  return (
    <PhoneShell>
      <div className="px-5 pb-6 pt-6">
        <Header title="Add Transaction" onBack={() => {}} />

        <SegmentedControl
          value={type}
          onChange={() => {}}
          options={[
            { label: "Income", value: "income" },
            { label: "Expense", value: "expense" },
          ]}
          activeClassName={isIncome ? "bg-blue-600 text-white" : "bg-red-500 text-white"}
        />

        <div className="mt-5 space-y-4">
          <div className="rounded-[1.75rem] border border-slate-200 bg-white p-4 shadow-sm">
            <p className="text-sm font-medium text-slate-500">Amount</p>
            <div className="mt-3 flex items-center gap-3">
              <div className="text-5xl font-bold text-slate-900">$</div>
              <input className="w-full bg-transparent text-4xl font-semibold outline-none placeholder:text-slate-300" placeholder="0.00" />
            </div>
          </div>

          <div className="rounded-[1.75rem] border border-slate-200 bg-white p-4 shadow-sm">
            <label className="mb-2 block text-sm font-medium text-slate-600">Category</label>
            <select className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none">
              <option>Select a category</option>
              {categories.map((category) => (
                <option key={category}>{category}</option>
              ))}
            </select>
          </div>

          <div className="rounded-[1.75rem] border border-slate-200 bg-white p-4 shadow-sm">
            <label className="mb-2 flex items-center gap-2 text-sm font-medium text-slate-600">
              <Calendar className="h-4 w-4" /> Date
            </label>
            <input type="date" className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none" />
          </div>

          <div className="rounded-[1.75rem] border border-slate-200 bg-white p-4 shadow-sm">
            <label className="mb-2 block text-sm font-medium text-slate-600">Notes (Optional)</label>
            <textarea rows={4} className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none" placeholder="Add a note..." />
          </div>

          <div className="rounded-[1.75rem] border border-slate-200 bg-white p-4 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-semibold text-slate-900">Recurring Transaction</p>
                <p className="text-sm text-slate-500">Repeats monthly</p>
              </div>
              <button className={cn("relative h-7 w-12 rounded-full transition", isIncome ? "bg-blue-600" : "bg-red-500")}>
                <span className="absolute right-1 top-1 h-5 w-5 rounded-full bg-white" />
              </button>
            </div>
          </div>

          <button className={cn(
            "w-full rounded-2xl px-4 py-3 text-sm font-semibold text-white shadow-lg",
            isIncome ? "bg-blue-600 shadow-blue-500/25" : "bg-red-500 shadow-red-500/25"
          )}>
            Add Transaction
          </button>
        </div>
      </div>
    </PhoneShell>
  );
}
