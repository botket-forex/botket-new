export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500/20 blur-[150px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/20 blur-[150px] rounded-full"></div>

      {/* Navbar */}
      <nav className="relative z-10 flex items-center justify-between px-8 py-6 border-b border-white/10 backdrop-blur-md">
        <h1 className="text-3xl font-extrabold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
          BOTKET FOREX
        </h1>

        <div className="hidden md:flex gap-8 text-gray-300 font-medium">
          <a href="#" className="hover:text-cyan-400 transition">Home</a>
          <a href="#" className="hover:text-cyan-400 transition">Features</a>
          <a href="#" className="hover:text-cyan-400 transition">Pricing</a>
          <a href="#" className="hover:text-cyan-400 transition">Contact</a>
        </div>

        <a
          href="https://wa.me/447448315610"
          target="_blank"
          className="bg-gradient-to-r from-cyan-500 to-purple-600 px-6 py-3 rounded-full font-semibold hover:scale-105 transition"
        >
          WhatsApp
        </a>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-32">

        <div className="mb-6 px-5 py-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 text-cyan-300 text-sm">
          #1 Smart Forex Automation Platform
        </div>

        <h1 className="text-6xl md:text-8xl font-black leading-tight max-w-6xl">
          <span className="bg-gradient-to-r from-white via-cyan-300 to-purple-400 bg-clip-text text-transparent">
            BOTKET FOREX
          </span>
        </h1>

        <p className="text-gray-300 text-xl md:text-2xl max-w-3xl mt-8 leading-9">
          We provide an automatic EURUSD trading bot that works directly on MT4.
          Click below to learn how to use the bot, set it up, and start automated trading.
        </p>

        <div className="flex flex-col md:flex-row gap-6 mt-12">

          <a
            href="https://wa.me/447448315610"
            target="_blank"
            className="bg-gradient-to-r from-cyan-500 to-purple-600 px-10 py-5 rounded-full text-xl font-bold hover:scale-105 transition shadow-2xl shadow-cyan-500/20"
          >
            Get Started
          </a>

          <button className="border border-white/20 px-10 py-5 rounded-full text-xl font-semibold hover:bg-white/10 transition">
            How To Use
          </button>

        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24 w-full max-w-5xl">

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-lg">
            <h2 className="text-4xl font-black text-cyan-400">98%</h2>
            <p className="text-gray-400 mt-2">Win Accuracy</p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-lg">
            <h2 className="text-4xl font-black text-purple-400">24/7</h2>
            <p className="text-gray-400 mt-2">Bot Trading</p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-lg">
            <h2 className="text-4xl font-black text-cyan-400">MT4</h2>
            <p className="text-gray-400 mt-2">Platform Support</p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-lg">
            <h2 className="text-4xl font-black text-purple-400">AI</h2>
            <p className="text-gray-400 mt-2">Powered Strategy</p>
          </div>

        </div>

      </section>

      {/* Features */}
      <section className="relative z-10 px-8 py-24">

        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-black">
            Powerful Features
          </h2>

          <p className="text-gray-400 mt-6 text-xl">
            Everything you need for automated forex trading.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">

          <div className="bg-white/5 border border-white/10 rounded-[30px] p-10 hover:border-cyan-400/40 transition backdrop-blur-lg">
            <div className="text-5xl mb-6">📈</div>

            <h3 className="text-3xl font-bold mb-5">
              Live Signals
            </h3>

            <p className="text-gray-400 text-lg leading-8">
              Receive real-time EURUSD forex signals powered by advanced AI analysis.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-[30px] p-10 hover:border-purple-400/40 transition backdrop-blur-lg">
            <div className="text-5xl mb-6">🤖</div>

            <h3 className="text-3xl font-bold mb-5">
              Automated MT4 Bot
            </h3>

            <p className="text-gray-400 text-lg leading-8">
              Fully automated MT4 trading bot designed for hands-free execution.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-[30px] p-10 hover:border-cyan-400/40 transition backdrop-blur-lg">
            <div className="text-5xl mb-6">🛡️</div>

            <h3 className="text-3xl font-bold mb-5">
              Risk Management
            </h3>

            <p className="text-gray-400 text-lg leading-8">
              Protect your capital with intelligent stop-loss and trade management.
            </p>
          </div>

        </div>

      </section>

      {/* CTA Section */}
      <section className="relative z-10 px-8 pb-32">

        <div className="max-w-6xl mx-auto bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-white/10 rounded-[40px] p-16 text-center backdrop-blur-lg">

          <h2 className="text-5xl md:text-6xl font-black leading-tight">
            Ready To Automate Your Trading?
          </h2>

          <p className="text-gray-300 text-xl mt-8 max-w-3xl mx-auto leading-9">
            Join BOTKET FOREX and start using our automated EURUSD MT4 bot
            to trade smarter, faster, and more efficiently.
          </p>

          <a
            href="https://wa.me/447448315610"
            target="_blank"
            className="inline-block mt-12 bg-gradient-to-r from-cyan-500 to-purple-600 px-12 py-6 rounded-full text-2xl font-bold hover:scale-105 transition shadow-2xl shadow-purple-500/20"
          >
            Contact On WhatsApp
          </a>

        </div>

      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 py-10 text-center text-gray-500 text-lg">
        © 2026 BOTKET FOREX — Built for Modern Traders.
      </footer>

    </main>
  );
}