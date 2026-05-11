# Replace your entire `app/page.tsx` with this professional colorful version

```tsx
export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-600 rounded-full blur-[180px] opacity-30" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500 rounded-full blur-[180px] opacity-30" />

      {/* Navbar */}
      <nav className="relative z-10 flex items-center justify-between px-8 md:px-16 py-6 border-b border-white/10 backdrop-blur-lg">

        <h1 className="text-3xl font-extrabold bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text">
          BOTKET
        </h1>

        <div className="hidden md:flex gap-8 text-lg text-gray-300">
          <a href="#" className="hover:text-cyan-400 transition">
            Home
          </a>

          <a href="#" className="hover:text-cyan-400 transition">
            Features
          </a>

          <a href="#" className="hover:text-cyan-400 transition">
            Pricing
          </a>

          <a href="#" className="hover:text-cyan-400 transition">
            Contact
          </a>
        </div>

        <button className="bg-gradient-to-r from-cyan-500 to-purple-600 px-6 py-3 rounded-full font-semibold hover:scale-105 transition">
          Login
        </button>

      </nav>

      {/* Hero */}
      <section className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-32 md:py-40">

        <div className="mb-6 px-5 py-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 text-cyan-300 text-sm tracking-wide">
          AI Powered Forex Trading Platform
        </div>

        <h1 className="text-6xl md:text-8xl font-black leading-tight max-w-6xl">
          Trade Smarter with
          <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 text-transparent bg-clip-text">
            BOTKET FOREX
          </span>
        </h1>

        <p className="text-gray-300 text-xl md:text-2xl max-w-3xl mt-8 leading-9">
          Advanced AI trading signals, live forex insights, automated strategies,
          and intelligent risk management tools built for modern traders.
        </p>

        <div className="flex flex-col md:flex-row gap-6 mt-12">

          <button className="bg-gradient-to-r from-cyan-500 to-purple-600 px-10 py-5 rounded-full text-xl font-bold hover:scale-105 transition duration-300 shadow-2xl shadow-cyan-500/30">
            Start Trading
          </button>

          <button className="border border-white/20 bg-white/5 backdrop-blur-lg px-10 py-5 rounded-full text-xl hover:bg-white/10 transition">
            Watch Demo
          </button>

        </div>

      </section>

      {/* Features */}
      <section className="relative z-10 px-8 md:px-16 py-24 grid md:grid-cols-3 gap-8">

        <div className="bg-white/5 border border-white/10 rounded-3xl p-10 backdrop-blur-xl hover:-translate-y-2 transition duration-300">
          <div className="text-5xl mb-6">📈</div>

          <h2 className="text-3xl font-bold mb-4">
            Live Signals
          </h2>

          <p className="text-gray-400 text-lg leading-8">
            Get real-time forex signals powered by advanced AI market prediction systems.
          </p>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-3xl p-10 backdrop-blur-xl hover:-translate-y-2 transition duration-300">
          <div className="text-5xl mb-6">🤖</div>

          <h2 className="text-3xl font-bold mb-4">
            AI Automation
          </h2>

          <p className="text-gray-400 text-lg leading-8">
            Automate trading strategies with machine-learning powered execution tools.
          </p>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-3xl p-10 backdrop-blur-xl hover:-translate-y-2 transition duration-300">
          <div className="text-5xl mb-6">🛡️</div>

          <h2 className="text-3xl font-bold mb-4">
            Risk Protection
          </h2>

          <p className="text-gray-400 text-lg leading-8">
            Intelligent stop-loss systems and portfolio protection for safer trading.
          </p>
        </div>

      </section>

      {/* Stats */}
      <section className="relative z-10 px-8 md:px-16 py-20 grid md:grid-cols-4 gap-8 text-center">

        <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/10 border border-cyan-500/20 rounded-3xl p-10">
          <h3 className="text-6xl font-black text-cyan-400 mb-4">
            99%
          </h3>

          <p className="text-gray-300 text-lg">
            Accuracy Rate
          </p>
        </div>

        <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/10 border border-purple-500/20 rounded-3xl p-10">
          <h3 className="text-6xl font-black text-purple-400 mb-4">
            24/7
          </h3>

          <p className="text-gray-300 text-lg">
            AI Monitoring
          </p>
        </div>

        <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/10 border border-green-500/20 rounded-3xl p-10">
          <h3 className="text-6xl font-black text-green-400 mb-4">
            10K+
          </h3>

          <p className="text-gray-300 text-lg">
            Active Traders
          </p>
        </div>

        <div className="bg-gradient-to-br from-orange-500/20 to-red-500/10 border border-orange-500/20 rounded-3xl p-10">
          <h3 className="text-6xl font-black text-orange-400 mb-4">
            $5M+
          </h3>

          <p className="text-gray-300 text-lg">
            Daily Volume
          </p>
        </div>

      </section>

      {/* CTA */}
      <section className="relative z-10 px-8 md:px-16 py-32 text-center">

        <div className="max-w-5xl mx-auto bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-white/10 rounded-[40px] p-16 backdrop-blur-2xl">

          <h2 className="text-5xl md:text-7xl font-black leading-tight mb-8">
            Ready to Level Up
            <span className="block bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text">
              Your Trading?
            </span>
          </h2>

          <p className="text-gray-300 text-xl md:text-2xl leading-9 max-w-3xl mx-auto mb-12">
            Join thousands of traders using BOTKET to analyze markets,
            automate trades, and maximize profits.
          </p>

          <button className="bg-gradient-to-r from-cyan-500 to-purple-600 px-12 py-6 rounded-full text-2xl font-bold hover:scale-105 transition duration-300 shadow-2xl shadow-purple-500/30">
            Join BOTKET Now
          </button>

        </div>

      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 py-10 text-center text-gray-500 text-lg">
        © 2026 BOTKET FOREX — Built for Modern Traders.
      </footer>

    </main>
  );
}
```

After replacing the code:

```bash
git add .
git commit -m "professional colorful homepage"
git push
```

Then refresh your website after 20–30 seconds.
