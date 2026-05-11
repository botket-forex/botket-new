export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      
      {/* HERO SECTION */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-32">
        
        <h1 className="text-6xl md:text-8xl font-bold mb-6">
          BOTKET FOREX
        </h1>

        <p className="text-gray-400 text-lg md:text-2xl max-w-2xl mb-8">
          Smart Forex Signals, Trading Insights, and Automated Strategies.
        </p>

        <button className="bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-gray-200 transition">
          Get Started
        </button>

      </section>

      {/* FEATURES */}
      <section className="grid md:grid-cols-3 gap-8 px-8 pb-24">

        <div className="border border-gray-800 p-8 rounded-2xl">
          <h2 className="text-2xl font-bold mb-4">
            Live Signals
          </h2>

          <p className="text-gray-400">
            Real-time forex signals powered by smart analysis.
          </p>
        </div>

        <div className="border border-gray-800 p-8 rounded-2xl">
          <h2 className="text-2xl font-bold mb-4">
            AI Strategy
          </h2>

          <p className="text-gray-400">
            Automated trading strategies for modern traders.
          </p>
        </div>

        <div className="border border-gray-800 p-8 rounded-2xl">
          <h2 className="text-2xl font-bold mb-4">
            Risk Management
          </h2>

          <p className="text-gray-400">
            Protect capital with intelligent risk control systems.
          </p>
        </div>

      </section>

    </main>
  );
}