import React, { useState } from "react";
import { User, Shield, Eye, EyeOff, ArrowRight } from "lucide-react";
import { PhoneShell } from "../components/PhoneShell";
import { AppLogo } from "../components/AppLogo";
import { SegmentedControl } from "../components/SegmentedControl";
import { InputField } from "../components/InputField";
import { FeaturePill } from "../components/FeaturePill";

export function AuthScreen({ mode }) {
  const [tab, setTab] = useState(mode);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <PhoneShell>
      <div className="flex min-h-[860px] flex-col px-6 pb-8 pt-14">
        <div className="mb-10 flex justify-center">
          <AppLogo />
        </div>

        <div className="rounded-[2rem] border border-slate-200/70 bg-white/70 p-4 shadow-xl shadow-slate-200/40 backdrop-blur">
          <SegmentedControl
            value={tab}
            onChange={(value) => setTab(value)}
            options={[
              { label: "Sign In", value: "signin" },
              { label: "Sign Up", value: "signup" },
            ]}
          />

          <div className="mt-5 space-y-4">
            {tab === "signup" && (
              <InputField label="Full Name" placeholder="John Doe" icon={<User className="h-5 w-5" />} />
            )}

            <InputField
              label="Email Address"
              placeholder="you@example.com"
              type="email"
              icon={<span className="text-base">✉</span>}
            />

            <InputField
              label="Password"
              placeholder="••••••••"
              type={showPassword ? "text" : "password"}
              icon={<Shield className="h-5 w-5" />}
              right={
                <button onClick={() => setShowPassword((prev) => !prev)} className="text-slate-400">
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              }
            />

            {tab === "signin" ? (
              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2 text-slate-500">
                  <input type="checkbox" className="rounded border-slate-300" />
                  Remember me
                </label>
                <button className="font-medium text-blue-600">Forgot password?</button>
              </div>
            ) : (
              <p className="text-center text-sm leading-6 text-slate-500">
                By signing up, you agree to our <span className="font-medium text-blue-600">Terms</span> and <span className="font-medium text-blue-600">Privacy Policy</span>
              </p>
            )}

            <button className="flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-500 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/30 transition hover:translate-y-[-1px]">
              {tab === "signin" ? "Sign In" : "Create Account"}
              <ArrowRight className="h-4 w-4" />
            </button>

            <div className="relative py-1 text-center text-sm text-slate-400">
              <span className="relative z-10 bg-white/70 px-2">or</span>
              <div className="absolute left-0 right-0 top-1/2 h-px -translate-y-1/2 bg-slate-200" />
            </div>

            <button className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700 shadow-sm">
              Continue as Guest
            </button>
          </div>
        </div>

        <div className="mt-5 grid grid-cols-2 gap-4">
          <FeaturePill icon={<Shield className="h-5 w-5" />} title="Secure" />
          <FeaturePill icon={<TrendingUp className="h-5 w-5" />} title="Insights" />
        </div>
      </div>
    </PhoneShell>
  );
}
