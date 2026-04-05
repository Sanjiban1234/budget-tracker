import React, { useState } from "react";
import { ChevronRight, LogIn } from "lucide-react";
import { AuthScreen } from "./screens/AuthScreen";
import { DashboardScreen } from "./screens/DashboardScreen";
import { AddTransactionScreen } from "./screens/AddTransactionScreen";
import { SavingsGoalsScreen } from "./screens/SavingsGoalsScreen";
import { InsightsScreen } from "./screens/InsightsScreen";
import { CategoriesScreen } from "./screens/CategoriesScreen";
import { SavingsTrackerScreen } from "./screens/SavingsTrackerScreen";
import { NetWorthScreen } from "./screens/NetWorthScreen";
import { SettingsScreen } from "./screens/SettingsScreen";
import { ProjectNotes } from "./screens/ProjectNotes";
import { screens } from "./data/mockData";
import { cn } from "./utils/utils";

export default function App() {
  const [activeScreen, setActiveScreen] = useState("dashboard");

  const renderScreen = () => {
    switch (activeScreen) {
      case "signin":
        return <AuthScreen mode="signin" />;
      case "signup":
        return <AuthScreen mode="signup" />;
      case "dashboard":
        return <DashboardScreen />;
      case "income":
        return <AddTransactionScreen type="income" />;
      case "expense":
        return <AddTransactionScreen type="expense" />;
      case "goals":
        return <SavingsGoalsScreen />;
      case "insights":
        return <InsightsScreen />;
      case "categories":
        return <CategoriesScreen />;
      case "savings":
        return <SavingsTrackerScreen />;
      case "networth":
        return <NetWorthScreen />;
      case "settingsLight":
        return <SettingsScreen dark={false} />;
      case "settingsDark":
        return <SettingsScreen dark />;
      default:
        return <DashboardScreen />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 p-6 text-slate-900">
      <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[340px_1fr]">
        <div className="space-y-4">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-sm">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                <LogIn className="h-5 w-5" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-slate-900">Pocket Worth UI Flow</h2>
                <p className="text-sm text-slate-500">Select screens in uploaded PDF order</p>
              </div>
            </div>

            <div className="space-y-2">
              {screens.map((screen) => (
                <button
                  key={screen.key}
                  onClick={() => setActiveScreen(screen.key)}
                  className={cn(
                    "flex w-full items-center justify-between rounded-2xl px-4 py-3 text-left text-sm font-medium transition",
                    activeScreen === screen.key
                      ? "bg-blue-600 text-white shadow-lg shadow-blue-500/25"
                      : "bg-slate-50 text-slate-700 hover:bg-slate-100"
                  )}
                >
                  <span>{screen.label}</span>
                  <ChevronRight className="h-4 w-4" />
                </button>
              ))}
            </div>
          </div>

          <ProjectNotes />
        </div>

        <div className="flex items-start justify-center">{renderScreen()}</div>
      </div>
    </div>
  );
}
