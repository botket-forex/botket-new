"use client";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">

      {/* BACKGROUND */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_top,rgba(0,255,120,0.15),transparent_40%)]"></div>

      <div className="fixed inset-0 opacity-10 bg-[linear-gradient(rgba(0,255,120,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,120,0.15)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      {/* NAVBAR */}
      <header className="sticky top-0 z-50 backdrop-blur-xl border-b border-green-500/10 bg-black/60">

        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          {/* LOGO */}
          <div className="flex items-center gap-4">

            <img
              src="/logo.png"
              alt="BOTKET"
              className="w-20 h-20 object-contain drop-shadow-[0_0_25px_rgba(0,255,120,0.9)]"
            />

            <div>
              <h1 className="text-3xl font-black tracking-widest text-green-400">
                BOTKET
              </h1>

              <p className="text-gray-400 text-sm">
                AI Forex Automation
              </p>
            </div>

          </div>

          {/* MENU */}
          <nav className="hidden md:flex gap-8 text-sm font-semibold">

            <a href="#features" className="hover:text-green-400 transition">
              Features
            </a>

            <a href="#works" className="hover:text-green-400 transition">
              How It Works
            </a>

            <a href="#strategy" className="hover:text-green-400 transition">
              Strategy
            </a>

            <a href="#register" className="hover:text-green-400 transition">
              Register
            </a>

            <a href="#contact" className="hover:text-green-400 transition">
              Contact
            </a>

          </nav>

        </div>

      </header>

      {/* HERO */}
      <section className="relative max-w-7xl mx-auto px-6 py-32 grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT */}
        <div>

          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 mb-8">
            AI Powered Forex Trading
          </div>

          <h1 className="text-6xl md:text-7xl font-black leading-tight mb-8">

            Trade Smarter
            <br />

            <span className="text-green-400 drop-shadow-[0_0_25px_rgba(0,255,120,0.9)]">
              With AI Precision
            </span>

          </h1>

          <p className="text-gray-400 text-xl leading-relaxed mb-10 max-w-2xl">

            BOTKET automatically detects market trends,
            opens smart trades, manages recovery positions,
            averages take profits, and helps traders automate
            forex trading with AI-powered precision.

          </p>

          {/* BUTTONS */}
          <div className="flex flex-wrap gap-5">

            <a
              href="#register"
              className="px-10 py-5 rounded-2xl bg-green-400 text-black font-bold text-lg hover:scale-105 transition-all duration-300 shadow-[0_0_40px_rgba(0,255,120,0.6)]"
            >
              Start Trading
            </a>

            <a
              href="#works"
              className="px-10 py-5 rounded-2xl border border-green-500/30 hover:border-green-400 hover:bg-green-500/10 transition-all duration-300"
            >
              How It Works
            </a>

          </div>

          {/* STATS */}
          <div className="grid grid-cols-3 gap-5 mt-16">

            <div className="bg-white/5 border border-green-500/10 rounded-3xl p-6 backdrop-blur-xl">
              <h3 className="text-4xl font-black text-green-400">
                92%
              </h3>

              <p className="text-gray-400 mt-2">
                Win Accuracy
              </p>
            </div>

            <div className="bg-white/5 border border-green-500/10 rounded-3xl p-6 backdrop-blur-xl">
              <h3 className="text-4xl font-black text-green-400">
                24/7
              </h3>

              <p className="text-gray-400 mt-2">
                AI Monitoring
              </p>
            </div>

            <div className="bg-white/5 border border-green-500/10 rounded-3xl p-6 backdrop-blur-xl">
              <h3 className="text-4xl font-black text-green-400">
                5000+
              </h3>

              <p className="text-gray-400 mt-2">
                Active Traders
              </p>
            </div>

          </div>

        </div>

        {/* RIGHT */}
        <div className="relative flex justify-center">

          <div className="absolute w-[500px] h-[500px] bg-green-400/20 rounded-full blur-[120px]"></div>

          <div className="relative bg-gradient-to-b from-[#001f12] to-black border border-green-500/20 rounded-[40px] p-12 shadow-[0_0_80px_rgba(0,255,120,0.2)]">

            <img
              src="/logo.png"
              alt="BOTKET"
              className="w-[420px] h-[420px] object-contain drop-shadow-[0_0_40px_rgba(0,255,120,1)]"
            />

          </div>

        </div>

      </section>

      {/* FEATURES */}
      <section
        id="features"
        className="py-28 px-6 border-t border-green-500/10"
      >

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-20">

            <h2 className="text-5xl font-black mb-6">
              Powerful AI Features
            </h2>

            <p className="text-gray-400 text-xl max-w-3xl mx-auto">
              Built for modern forex traders using smart automation,
              AI detection, and recovery systems.
            </p>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {[
              "AI Trend Detection",
              "Dynamic Lot Sizing",
              "Smart Risk Management",
              "24/7 Automated Trading",
              "Shared Take Profit System",
              "Fast MT4 Execution"
            ].map((feature, i) => (

              <div
                key={i}
                className="bg-white/5 border border-green-500/10 rounded-3xl p-8 hover:border-green-400/40 hover:-translate-y-2 transition-all duration-300"
              >

                <div className="w-14 h-14 rounded-2xl bg-green-500/10 border border-green-500/20 flex items-center justify-center text-green-400 text-2xl mb-6">
                  ✓
                </div>

                <h3 className="text-2xl font-bold mb-4">
                  {feature}
                </h3>

                <p className="text-gray-400 leading-relaxed">
                  Advanced AI-powered forex automation designed for professional trading performance.
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* HOW IT WORKS */}
      <section
        id="works"
        className="py-28 px-6 border-t border-green-500/10"
      >

        <div className="max-w-6xl mx-auto text-center">

          <h2 className="text-5xl font-black mb-16">
            How BOTKET Works
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-white/5 border border-green-500/10 rounded-3xl p-10">
              <div className="w-16 h-16 rounded-full bg-green-400 text-black text-2xl font-black flex items-center justify-center mx-auto mb-6">
                1
              </div>

              <h3 className="text-2xl font-bold mb-4">
                Market Detection
              </h3>

              <p className="text-gray-400 leading-relaxed">
                BOTKET automatically scans the forex market and detects trend opportunities using AI analysis.
              </p>
            </div>

            <div className="bg-white/5 border border-green-500/10 rounded-3xl p-10">
              <div className="w-16 h-16 rounded-full bg-green-400 text-black text-2xl font-black flex items-center justify-center mx-auto mb-6">
                2
              </div>

              <h3 className="text-2xl font-bold mb-4">
                Recovery Strategy
              </h3>

              <p className="text-gray-400 leading-relaxed">
                If price moves against a trade, BOTKET increases lot sizing strategically and averages positions.
              </p>
            </div>

            <div className="bg-white/5 border border-green-500/10 rounded-3xl p-10">
              <div className="w-16 h-16 rounded-full bg-green-400 text-black text-2xl font-black flex items-center justify-center mx-auto mb-6">
                3
              </div>

              <h3 className="text-2xl font-bold mb-4">
                Shared Take Profit
              </h3>

              <p className="text-gray-400 leading-relaxed">
                All recovery trades align to one averaged take profit for optimized exits and better recovery.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* STRATEGY */}
      <section
        id="strategy"
        className="py-28 px-6 border-t border-green-500/10"
      >

        <div className="max-w-7xl mx-auto text-center">

          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 mb-6">
            VERIFIED STRATEGY
          </div>

          <h2 className="text-5xl md:text-6xl font-black mb-8">
            BOTKET EUR/USD
            <br />
            <span className="text-green-400">
              Automation Strategy
            </span>
          </h2>

          <p className="text-gray-400 text-xl leading-relaxed max-w-4xl mx-auto mb-16">
            BOTKET is a fully automated MetaTrader 4 trading system
            designed exclusively for the EUR/USD currency pair.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {[
              "Trend Detection",
              "Automated Recovery",
              "Shared Take Profit",
              "Live Tested",
              "Verified Performance",
              "Fully Automated"
            ].map((item, i) => (

              <div
                key={i}
                className="bg-white/5 border border-green-500/10 rounded-3xl p-8 hover:border-green-400/40 transition-all duration-300"
              >

                <h3 className="text-2xl font-bold mb-4 text-green-400">
                  {item}
                </h3>

                <p className="text-gray-400 leading-relaxed">
                  Professional AI forex automation system designed for MT4 execution and smart market management.
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* REGISTER */}
      <section
        id="register"
        className="py-28 px-6 border-t border-green-500/10"
      >

        <div className="max-w-5xl mx-auto">

          <div className="relative overflow-hidden rounded-[40px] border border-green-500/10 bg-white/5 backdrop-blur-2xl p-12 md:p-16 shadow-[0_0_60px_rgba(0,255,120,0.08)]">

            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-green-500/10 blur-[140px] rounded-full"></div>

            <div className="relative z-10">

              <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 mb-8">
                JOIN BOTKET
              </div>

              <h2 className="text-5xl md:text-6xl font-black leading-tight mb-6">

                Create Your
                <br />

                <span className="text-green-400">
                  Trading Account
                </span>

              </h2>

              <p className="text-gray-400 text-xl leading-relaxed max-w-3xl mb-14">

                Register now to access BOTKET AI Forex Automation,
                trading support, future dashboard access,
                and premium trading tools.

              </p>

              <form className="grid md:grid-cols-2 gap-6">

                <input
                  type="text"
                  placeholder="Full Name"
                  className="bg-black/40 border border-green-500/10 rounded-2xl px-6 py-5 text-white outline-none focus:border-green-400 transition-all"
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  className="bg-black/40 border border-green-500/10 rounded-2xl px-6 py-5 text-white outline-none focus:border-green-400 transition-all"
                />

                <input
                  type="text"
                  placeholder="Phone Number"
                  className="bg-black/40 border border-green-500/10 rounded-2xl px-6 py-5 text-white outline-none focus:border-green-400 transition-all"
                />

                <input
                  type="text"
                  placeholder="Country"
                  className="bg-black/40 border border-green-500/10 rounded-2xl px-6 py-5 text-white outline-none focus:border-green-400 transition-all"
                />

                <input
                  type="text"
                  placeholder="Broker Name"
                  className="md:col-span-2 bg-black/40 border border-green-500/10 rounded-2xl px-6 py-5 text-white outline-none focus:border-green-400 transition-all"
                />

                <button
                  type="submit"
                  className="md:col-span-2 mt-4 px-10 py-6 rounded-2xl bg-green-400 text-black text-2xl font-black hover:scale-[1.02] transition-all duration-300 shadow-[0_0_50px_rgba(0,255,120,0.5)]"
                >
                  Register Now
                </button>

              </form>

            </div>

          </div>

        </div>

      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="py-28 px-6 border-t border-green-500/10 bg-black"
      >

        <div className="relative max-w-5xl mx-auto">

          <div className="relative overflow-hidden rounded-[40px] border border-green-500/10 bg-white/5 backdrop-blur-2xl p-14 text-center shadow-[0_0_60px_rgba(0,255,120,0.08)]">

            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-semibold mb-8">
              PREMIUM SUPPORT
            </div>

            <h2 className="text-5xl md:text-6xl font-black leading-tight mb-6">

              Start Trading
              <br />

              <span className="text-green-400">
                With BOTKET AI
              </span>

            </h2>

            <p className="text-gray-400 text-xl leading-relaxed max-w-3xl mx-auto mb-14">

              Get instant access to BOTKET AI Forex Automation.
              Setup support and assistance available directly through WhatsApp.

            </p>

            <a
              href="https://wa.me/447448315610"
              target="_blank"
              className="inline-flex items-center gap-4 px-14 py-6 rounded-2xl bg-green-400 text-black text-2xl font-black hover:scale-105 transition-all duration-300 shadow-[0_0_50px_rgba(0,255,120,0.6)]"
            >
              Contact on WhatsApp
            </a>

          </div>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="border-t border-green-500/10 py-10 text-center text-gray-500 px-6">

        <p>
          © 2026 BOTKET — AI Forex Trading Automation
        </p>

        <p className="mt-4 max-w-3xl mx-auto leading-relaxed">
          Risk Disclaimer: Trading forex involves significant risk.
          Past performance does not guarantee future results.
        </p>

      </footer>

    </main>
  );
}