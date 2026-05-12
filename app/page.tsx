"use client";

export default function Home() {
  const whatsappLink = "https://wa.me/447448315610";

  return (
    <main className="min-h-screen bg-black text-white">
      
      {/* HERO SECTION */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-24 bg-gradient-to-b from-black via-gray-900 to-black">
        <h1 className="text-6xl font-bold mb-6">
          Learn How To Use
          <span className="text-cyan-400"> Automated Forex Bots</span>
        </h1>

        <p className="text-gray-300 text-xl max-w-3xl mb-10">
          We help traders learn how automated trading bots work on MT4 using
          EUR/USD strategies, smart risk management, and live market examples.
        </p>

        <div className="flex gap-6 flex-wrap justify-center">
          <a
            href={whatsappLink}
            target="_blank"
            className="bg-cyan-500 hover:bg-cyan-400 text-black px-8 py-4 rounded-full font-bold text-lg transition"
          >
            Get Started
          </a>

          <a
            href="https://www.metatrader4.com/en/download"
            target="_blank"
            className="border border-cyan-500 hover:bg-cyan-500/10 px-8 py-4 rounded-full font-bold text-lg transition"
          >
            Download MT4
          </a>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-24 px-6 bg-gray-950">
        <h2 className="text-5xl font-bold text-center mb-16">
          What You Will Learn
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">

          <div className="bg-black border border-gray-800 rounded-3xl p-8 hover:border-cyan-400 transition">
            <h3 className="text-2xl font-bold mb-4 text-cyan-400">
              Fully Automated Trading
            </h3>

            <p className="text-gray-400 leading-8">
              Learn how automated MT4 bots open and close trades automatically
              using forex strategies designed for EUR/USD market movements.
            </p>
          </div>

          <div className="bg-black border border-gray-800 rounded-3xl p-8 hover:border-cyan-400 transition">
            <h3 className="text-2xl font-bold mb-4 text-cyan-400">
              Smart Risk Management
            </h3>

            <p className="text-gray-400 leading-8">
              Understand stop loss, lot sizing, drawdown protection, and how
              professional traders manage risk while using automation.
            </p>
          </div>

          <div className="bg-black border border-gray-800 rounded-3xl p-8 hover:border-cyan-400 transition">
            <h3 className="text-2xl font-bold mb-4 text-cyan-400">
              MT4 Setup & Guidance
            </h3>

            <p className="text-gray-400 leading-8">
              Step-by-step help for installing MT4, setting up bots, connecting
              accounts, and learning how everything works together.
            </p>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="py-24 px-6 bg-black">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-10">
            Learn Together
          </h2>

          <p className="text-gray-400 text-xl leading-10">
            This platform is designed for educational purposes to help traders
            understand automated forex trading systems and MT4 bot setups.
            Whether you're a beginner or experienced trader, you'll learn how
            automation works in real market conditions.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-gradient-to-r from-cyan-500/10 to-purple-500/10">
        <div className="max-w-4xl mx-auto text-center border border-cyan-500/20 rounded-3xl p-12 bg-black/40 backdrop-blur-lg">

          <h2 className="text-5xl font-black mb-8">
            Let’s Learn Together
          </h2>

          <p className="text-gray-300 text-xl mb-10 leading-9">
            Start learning automated forex trading on MT4 with guidance,
            examples, and real strategy education.
          </p>

          <a
            href={whatsappLink}
            target="_blank"
            className="inline-block bg-gradient-to-r from-cyan-500 to-purple-600 px-12 py-6 rounded-full font-bold text-xl hover:scale-105 transition"
          >
            Contact On WhatsApp
          </a>
        </div>
      </section>

    </main>
  );
}