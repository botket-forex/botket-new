```tsx
export default function Home() {

  const whatsappLink = "https://wa.me/447448315610";
  const mt4Download = "https://www.metatrader4.com/en/download";

  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">

      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500/20 blur-[150px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/20 blur-[150px] rounded-full"></div>

      <nav className="relative z-10 flex items-center justify-between px-8 py-6 border-b border-white/10 backdrop-blur-md">

        <h1 className="text-3xl font-extrabold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
          BOTKET FOREX
        </h1>

        <div className="hidden md:flex gap-8 text-gray-300 font-medium">
          <a href="#" className="hover:text-cyan-400 transition">Home</a>
          <a href="#features" className="hover:text-cyan-400 transition">Features</a>
          <a href="#pricing" className="hover:text-cyan-400 transition">Pricing</a>
          <a href="#contact" className="hover:text-cyan-400 transition">Contact</a>
        </div>

        <a
          href={whatsappLink}
          target="_blank"
          className="bg-gradient-to-r from-cyan-500 to-purple-600 px-6 py-3 rounded-full font-semibold hover:scale-105 transition"
        >
          WhatsApp
        </a>

      </nav>

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
          We provide a fully automated EURUSD trading bot that works directly on MT4.
          Our AI system helps traders automate entries, exits, and risk management.
        </p>

        <div className="flex flex-col md:flex-row gap-6 mt-12">

          <a
            href={whatsappLink}
            target="_blank"
            className="bg-gradient-to-r from-cyan-500 to-purple-600 px-10 py-5 rounded-full text-xl font-bold hover:scale-105 transition shadow-2xl shadow-cyan-500/20"
          >
            Get Started
          </a>

          <a
            href={mt4Download}
            target="_blank"
            className="border border-white/20 px-10 py-5 rounded-full text-xl font-semibold hover:bg-white/10 transition"
          >
            Download MT4
          </a>

        </div>

      </section>

      <section id="features" className="relative z-10 px-8 py-24">

        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-black">
            Powerful Features
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-10">

          <a
            href="/features"
            className="bg-white/5 border border-white/10 rounded-[30px] p-10 hover:border-cyan-400/40 transition backdrop-blur-lg"
          >
            <div className="text-5xl mb-6">📈</div>

            <h3 className="text-3xl font-bold mb-5">
              Live Signals
            </h3>

            <p className="text-gray-400 text-lg leading-8">
              Receive real-time EURUSD forex signals powered by advanced AI analysis.
            </p>
          </a>

          <a
            href="/features"
            className="bg-white/5 border border-white/10 rounded-[30px] p-10 hover:border-purple-400/40 transition backdrop-blur-lg"
          >
            <div className="text-5xl mb-6">🤖</div>

            <h3 className="text-3xl font-bold mb-5">
              Automated MT4 Bot
            </h3>

            <p className="text-gray-400 text-lg leading-8">
              Fully automated MT4 trading bot designed for hands-free execution.
            </p>
          </a>

          <a
            href="/features"
            className="bg-white/5 border border-white/10 rounded-[30px] p-10 hover:border-cyan-400/40 transition backdrop-blur-lg"
          >
            <div className="text-5xl mb-6">🛡️</div>

            <h3 className="text-3xl font-bold mb-5">
              Risk Management
            </h3>

            <p className="text-gray-400 text-lg leading-8">
              Protect your capital with intelligent stop-loss and trade management.
            </p>
          </a>

        </div>

      </section>

      <section id="pricing" className="relative z-10 px-8 pb-32">

        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-black">
            Pricing
          </h2>
        </div>

        <div className="max-w-3xl mx-auto bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-white/10 rounded-[40px] p-16 text-center backdrop-blur-lg">

          <h2 className="text-6xl font-black mb-6">
            $100
          </h2>

          <p className="text-2xl text-gray-300 mb-10">
            One-Time Lifetime Access
          </p>

          <div className="space-y-5 text-gray-300 text-lg mb-12">
            <p>✔ Fully Automated EURUSD Bot</p>
            <p>✔ MT4 Setup Support</p>
            <p>✔ AI Risk Management</p>
            <p>✔ 24/7 Trading Automation</p>
            <p>✔ Live Forex Strategy</p>
            <p>✔ Direct WhatsApp Support</p>
          </div>

          <a
            href={whatsappLink}
            target="_blank"
            className="inline-block bg-gradient-to-r from-cyan-500 to-purple-600 px-12 py-6 rounded-full text-2xl font-bold hover:scale-105 transition shadow-2xl shadow-purple-500/20"
          >
            Buy Now On WhatsApp
          </a>

        </div>

      </section>

      <footer id="contact" className="relative z-10 border-t border-white/10 py-10 text-center text-gray-500 text-lg">
        <p>© 2026 BOTKET FOREX — Built for Modern Traders.</p>

        <a
          href={whatsappLink}
          target="_blank"
          className="inline-block mt-6 text-cyan-400 hover:text-cyan-300"
        >
          Contact Us On WhatsApp
        </a>
      </footer>

    </main>
  );
}
```
```tsx
export default function FeaturesPage() {

  const whatsappLink = "https://wa.me/447448315610";

  return (
    <main className="min-h-screen bg-black text-white px-8 py-24">

      <div className="max-w-6xl mx-auto">

        <h1 className="text-6xl md:text-7xl font-black mb-10 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
          BOTKET Features
        </h1>

        <p className="text-2xl text-gray-300 leading-10 max-w-5xl mb-16">
          BOTKET is a fully automated EURUSD MT4 trading bot built for traders who want hands-free automation,
          intelligent AI strategies, and powerful risk management tools.
        </p>

        <div className="grid md:grid-cols-2 gap-10 mb-20">

          <div className="bg-white/5 border border-white/10 rounded-3xl p-10">
            <h2 className="text-4xl font-bold mb-6 text-cyan-400">
              Fully Automated Trading
            </h2>

            <p className="text-gray-300 text-lg leading-8">
              BOTKET automatically enters and exits EURUSD trades without manual work.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-10">
            <h2 className="text-4xl font-bold mb-6 text-purple-400">
              Advanced AI Analysis
            </h2>

            <p className="text-gray-300 text-lg leading-8">
              Our AI engine scans trends and volatility to improve trade quality.
            </p>
          </div>

        </div>

        <div className="text-center bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-white/10 rounded-[40px] p-16">

          <h2 className="text-5xl font-black mb-8">
            Lifetime Access — Only $100
          </h2>

          <a
            href={whatsappLink}
            target="_blank"
            className="inline-block bg-gradient-to-r from-cyan-500 to-purple-600 px-12 py-6 rounded-full text-2xl font-bold hover:scale-105 transition"
          >
            Contact On WhatsApp
          </a>

        </div>

      </div>

    </main>
  );
}
```
