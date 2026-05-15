"use client";

import Image from "next/image";
import {
  Bot,
  TrendingUp,
  ShieldCheck,
  BarChart3,
  Zap,
  ChevronRight,
  Star,
  CheckCircle2,
} from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">

      {/* Animated Background */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(rgba(0,255,120,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,120,0.08)_1px,transparent_1px)] bg-[size:60px_60px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-green-500/10 via-transparent to-transparent" />
      </div>

      {/* Navbar */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-black/50 border-b border-green-500/20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          <div className="flex items-center gap-4">

            <Image
              src="/logo.png"
              alt="BOTKET"
              width={70}
              height={70}
              className="drop-shadow-[0_0_25px_rgba(34,197,94,0.8)]"
            />

            <div>
              <h1 className="text-2xl font-bold tracking-wide text-green-400">
                BOTKET
              </h1>
              <p className="text-xs text-gray-400">
                AI Forex Automation
              </p>
            </div>
          </div>

          <nav className="hidden md:flex gap-8 text-sm text-gray-300">
            <a href="#features" className="hover:text-green-400 transition">
              Features
            </a>
            <a href="#how" className="hover:text-green-400 transition">
              How It Works
            </a>
            <a href="#results" className="hover:text-green-400 transition">
              Results
            </a>
            <a href="#contact" className="hover:text-green-400 transition">
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 px-6 pt-24 pb-28">

        <div className="max-w-7xl mx-auto text-center">

          {/* BIG LOGO */}
          <div className="flex justify-center mb-10">
            <div className="relative">

              <div className="absolute inset-0 bg-green-500/40 blur-3xl rounded-full animate-pulse scale-150"></div>

              <div className="relative bg-black/50 border border-green-500/30 rounded-full p-6 backdrop-blur-xl shadow-[0_0_70px_rgba(34,197,94,0.4)]">

                <Image
                  src="/logo.png"
                  alt="BOTKET"
                  width={220}
                  height={220}
                  className="drop-shadow-[0_0_45px_rgba(34,197,94,0.9)]"
                  priority
                />

              </div>
            </div>
          </div>

          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-green-500/30 bg-green-500/10 text-green-400 text-sm mb-8">
            <Zap size={16} />
            AI Powered Trading Technology
          </div>

          <h1 className="text-5xl md:text-7xl font-black leading-tight max-w-5xl mx-auto">
            Trade Smarter With
            <span className="text-green-400 drop-shadow-[0_0_30px_rgba(34,197,94,0.9)]">
              {" "}
              AI Precision
            </span>
          </h1>

          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto mt-8 leading-relaxed">
            BOTKET automatically detects market trends, manages trades,
            recovers drawdowns using dynamic lot sizing, and averages positions
            intelligently to target profitable exits.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-5 justify-center mt-12">

            <a
              href="https://wa.me/447448315610"
              target="_blank"
              className="group px-8 py-4 bg-green-500 hover:bg-green-400 rounded-2xl text-black font-bold text-lg transition-all duration-300 shadow-[0_0_40px_rgba(34,197,94,0.5)] hover:scale-105"
            >
              Buy Now
              <ChevronRight className="inline ml-2 group-hover:translate-x-1 transition" />
            </a>

            <a
              href="#how"
              className="px-8 py-4 border border-green-500/40 hover:border-green-400 rounded-2xl font-semibold text-lg transition-all duration-300 hover:bg-green-500/10"
            >
              How It Works
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">

            {[
              ["5000+", "Active Traders"],
              ["24/7", "AI Monitoring"],
              ["92%", "Win Accuracy"],
              ["MT4/MT5", "Supported"],
            ].map(([value, label]) => (
              <div
                key={label}
                className="bg-white/5 border border-green-500/10 rounded-2xl p-6 backdrop-blur-xl"
              >
                <h3 className="text-3xl font-black text-green-400">
                  {value}
                </h3>
                <p className="text-gray-400 mt-2">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section
        id="features"
        className="relative z-10 max-w-7xl mx-auto px-6 py-24"
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black">
            Powerful AI Features
          </h2>
          <p className="text-gray-400 mt-4 text-lg">
            Designed for automated precision trading.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {[
            {
              icon: <TrendingUp size={34} />,
              title: "AI Trend Detection",
              desc: "Automatically scans the market and detects trading opportunities in real time.",
            },
            {
              icon: <BarChart3 size={34} />,
              title: "Dynamic Lot Sizing",
              desc: "Increases lot size strategically during recovery phases to average trades effectively.",
            },
            {
              icon: <ShieldCheck size={34} />,
              title: "Smart Recovery System",
              desc: "Maintains trades open and adjusts take profit levels to target profitable exits.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-white/5 border border-green-500/10 rounded-3xl p-8 backdrop-blur-xl hover:border-green-400/40 transition"
            >
              <div className="text-green-400 mb-5">{item.icon}</div>
              <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
              <p className="text-gray-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section
        id="how"
        className="relative z-10 bg-white/5 border-y border-green-500/10 py-24 px-6"
      >
        <div className="max-w-6xl mx-auto">

          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black">
              How BOTKET Works
            </h2>
          </div>

          <div className="space-y-10">

            {[
              "BOTKET automatically detects market trends and starts trades using AI analysis.",
              "If the market moves into temporary loss, the bot keeps the original trade open.",
              "The system automatically increases lot size strategically and averages entries.",
              "All active trades share the same dynamic take profit target for coordinated exits.",
              "Once price retraces, the system closes all trades together in overall profit.",
            ].map((step, i) => (
              <div
                key={i}
                className="flex gap-5 items-start bg-black/40 border border-green-500/10 rounded-2xl p-6"
              >
                <div className="min-w-[50px] h-[50px] rounded-full bg-green-500 text-black flex items-center justify-center font-black text-xl">
                  {i + 1}
                </div>

                <p className="text-gray-300 text-lg leading-relaxed">
                  {step}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section
        id="results"
        className="relative z-10 max-w-7xl mx-auto px-6 py-24"
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black">
            Why Traders Choose BOTKET
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {[
            "Fully Automated AI Trading",
            "Compatible With MT4 & MT5",
            "Advanced Recovery Logic",
            "24/7 Monitoring",
            "Professional Risk Management",
            "Fast Trade Execution",
          ].map((item) => (
            <div
              key={item}
              className="flex items-center gap-4 bg-white/5 border border-green-500/10 rounded-2xl p-6"
            >
              <CheckCircle2 className="text-green-400" />
              <p className="text-lg">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer
        id="contact"
        className="border-t border-green-500/10 bg-black/70 py-14 px-6"
      >
        <div className="max-w-7xl mx-auto text-center">

          <div className="flex justify-center mb-6">
            <Image
              src="/logo.png"
              alt="BOTKET"
              width={100}
              height={100}
              className="drop-shadow-[0_0_30px_rgba(34,197,94,0.8)]"
            />
          </div>

          <h3 className="text-3xl font-black text-green-400">
            BOTKET
          </h3>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            AI-powered forex automation designed for smart market execution,
            intelligent recovery systems, and automated precision trading.
          </p>

          <div className="flex justify-center gap-6 mt-8">

            <a
              href="https://wa.me/447448315610"
              target="_blank"
              className="px-6 py-3 bg-green-500 text-black rounded-xl font-bold hover:bg-green-400 transition"
            >
              WhatsApp
            </a>

          </div>

          <p className="text-gray-500 text-sm mt-10">
            © 2026 BOTKET. All Rights Reserved.
          </p>

          <p className="text-gray-600 text-xs mt-4 max-w-3xl mx-auto">
            Risk Disclaimer: Trading forex involves significant risk and may not
            be suitable for all investors. Past performance does not guarantee
            future results.
          </p>
        </div>
      </footer>
    </main>
  );
}