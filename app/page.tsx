"use client";

import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black overflow-hidden">

      {/* BACKGROUND */}
      <div className="fixed inset-0 -z-10">

        <div className="absolute inset-0 bg-[linear-gradient(rgba(37,99,235,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(37,99,235,0.05)_1px,transparent_1px)] bg-[size:70px_70px]" />

        <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-blue-500/20 blur-[150px] rounded-full" />

      </div>

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-50 border-b border-blue-100 backdrop-blur-xl bg-white/80">

        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          {/* LOGO */}
          <div className="flex items-center gap-4">

            <Image
              src="/logo.png"
              alt="BOTKET"
              width={55}
              height={55}
              className="rounded-full"
            />

            <div>

              <h1 className="text-2xl font-black text-blue-600 tracking-wide">
                BOTKET
              </h1>

              <p className="text-xs text-gray-500">
                AI Forex Automation
              </p>

            </div>

          </div>

          {/* NAVIGATION */}
          <div className="hidden md:flex gap-6 items-center text-gray-700 font-medium">

            <a href="#features" className="hover:text-blue-600 transition">
              Features
            </a>

            <a href="#pricing" className="hover:text-blue-600 transition">
              Pricing
            </a>

            <a href="#register" className="hover:text-blue-600 transition">
              Register
            </a>

            <a href="#faq" className="hover:text-blue-600 transition">
              FAQ
            </a>

            <a href="#contact" className="hover:text-blue-600 transition">
              Contact
            </a>

            <a
              href="/strategy.pdf"
              target="_blank"
              className="bg-blue-600 text-white px-5 py-2 rounded-full font-bold hover:bg-blue-700 transition"
            >
              Strategy PDF
            </a>

          </div>

          {/* TOP WHATSAPP */}
          <a
            href="https://wa.me/447448315610"
            target="_blank"
            className="bg-blue-600 text-white px-6 py-3 rounded-full font-bold hover:bg-blue-700 transition"
          >
            WhatsApp
          </a>

        </div>

      </nav>

      {/* HERO */}
      <section className="min-h-screen flex items-center px-6 pt-32">

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT */}
          <div>

            <div className="inline-flex items-center gap-2 border border-blue-200 bg-blue-50 px-5 py-2 rounded-full text-blue-600 mb-8 font-semibold">
              ⚡ AI Powered EUR/USD Trading
            </div>

            <h1 className="text-6xl md:text-7xl font-black leading-tight mb-8 text-black">
              Trade Smarter
              <br />
              With
              <span className="text-blue-600">
                {" "}AI Precision
              </span>
            </h1>

            <p className="text-gray-600 text-xl leading-relaxed max-w-xl mb-10">
              BOTKET automates forex trading using advanced AI analysis,
              smart risk management, and real-time execution strategies.
            </p>

            <div className="flex flex-wrap gap-5">

              <a
                href="https://wa.me/447448315610"
                target="_blank"
                className="bg-blue-600 text-white px-8 py-4 rounded-2xl font-bold hover:bg-blue-700 transition"
              >
                Start Trading
              </a>

              <a
                href="#features"
                className="border border-blue-200 bg-white px-8 py-4 rounded-2xl hover:bg-blue-50 transition"
              >
                Learn More
              </a>

            </div>

          </div>

          {/* RIGHT */}
          <div className="relative">

            <div className="absolute inset-0 bg-blue-500/20 blur-[120px] rounded-full" />

            <div className="relative bg-white border border-gray-200 rounded-[40px] p-8 shadow-2xl">

              <div className="flex items-center justify-between mb-8">

                <div>

                  <h2 className="text-2xl font-bold text-black">
                    AI Dashboard
                  </h2>

                  <p className="text-gray-500">
                    Real-time analytics
                  </p>

                </div>

                <div className="bg-blue-600 text-white px-4 py-2 rounded-full font-bold">
                  LIVE
                </div>

              </div>

              {/* CHART */}
              <div className="h-[300px] rounded-3xl bg-blue-50 border border-blue-100 relative overflow-hidden">

                <Image
                  src="/chart.png"
                  alt="Trading Chart"
                  fill
                  className="object-cover rounded-3xl"
                />

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* DEMO VIDEO */}
      <section className="py-32 px-6 bg-blue-50">

        <div className="max-w-6xl mx-auto text-center">

          <div className="inline-flex items-center gap-2 border border-blue-200 bg-white px-5 py-2 rounded-full text-blue-600 mb-8 font-semibold">
            🎥 Live Trading Demo
          </div>

          <h2 className="text-5xl font-black mb-14 text-black">
            Watch BOTKET In Action
          </h2>

          <div className="bg-white border border-gray-200 rounded-[40px] p-6 shadow-2xl overflow-hidden">

            <video
              className="w-full rounded-[30px]"
              controls
            >
              <source src="/demo.mp4" type="video/mp4" />
            </video>

          </div>

        </div>

      </section>

      {/* RESULTS */}
      <section className="py-32 px-6 bg-white">

        <div className="max-w-7xl mx-auto text-center">

          <div className="inline-flex items-center gap-2 border border-blue-200 bg-blue-50 px-5 py-2 rounded-full text-blue-600 mb-8 font-semibold">
            📈 Live Trading Results
          </div>

          <h2 className="text-5xl font-black mb-6 text-black">
            Last Week Results
          </h2>

          <p className="text-gray-500 text-xl max-w-3xl mx-auto mb-16">
            Real MT4 trading performance powered by BOTKET AI automation.
          </p>

          {/* BUTTONS */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

            <a
              href="/results-1.png"
              target="_blank"
              className="bg-blue-600 hover:bg-blue-700 text-white py-6 rounded-2xl text-xl font-black transition shadow-xl"
            >
              Week Result 1
            </a>

            <a
              href="/results-2.png"
              target="_blank"
              className="bg-blue-600 hover:bg-blue-700 text-white py-6 rounded-2xl text-xl font-black transition shadow-xl"
            >
              Week Result 2
            </a>

            <a
              href="/results-3.png"
              target="_blank"
              className="bg-blue-600 hover:bg-blue-700 text-white py-6 rounded-2xl text-xl font-black transition shadow-xl"
            >
              Week Result 3
            </a>

            <a
              href="/results-4.png"
              target="_blank"
              className="bg-blue-600 hover:bg-blue-700 text-white py-6 rounded-2xl text-xl font-black transition shadow-xl"
            >
              Week Result 4
            </a>

          </div>

        </div>

      </section>

      {/* FEATURES */}
      <section id="features" className="py-32 px-6 bg-blue-50">

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-20">

            <h2 className="text-5xl font-black mb-6 text-black">
              Why BOTKET
            </h2>

            <p className="text-gray-500 text-xl">
              Advanced AI trading infrastructure
            </p>

          </div>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-white border border-gray-200 rounded-[30px] p-10 shadow-sm">

              <div className="text-5xl mb-6">
                ⚡
              </div>

              <h3 className="text-2xl font-bold mb-4 text-black">
                AI Trend Detection
              </h3>

              <p className="text-gray-500 leading-relaxed">
                BOTKET analyzes EUR/USD market momentum using AI-driven trend recognition for precise entries.
              </p>

            </div>

            <div className="bg-white border border-gray-200 rounded-[30px] p-10 shadow-sm">

              <div className="text-5xl mb-6">
                🛡
              </div>

              <h3 className="text-2xl font-bold mb-4 text-black">
                Smart Risk Management
              </h3>

              <p className="text-gray-500 leading-relaxed">
                Advanced protection systems manage drawdown, lot sizing, and market volatility automatically.
              </p>

            </div>

            <div className="bg-white border border-gray-200 rounded-[30px] p-10 shadow-sm">

              <div className="text-5xl mb-6">
                🤖
              </div>

              <h3 className="text-2xl font-bold mb-4 text-black">
                24/7 Automation
              </h3>

              <p className="text-gray-500 leading-relaxed">
                BOTKET monitors and executes trades continuously without emotional decision making.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* REGISTER */}
      <section id="register" className="py-32 px-6 bg-white">

        <div className="max-w-5xl mx-auto">

          <div className="text-center mb-20">

            <div className="inline-flex items-center gap-2 border border-blue-200 bg-blue-50 px-5 py-2 rounded-full text-blue-600 mb-8 font-semibold">
              🚀 Start With BOTKET
            </div>

            <h2 className="text-5xl font-black mb-6 text-black">
              Register For BOTKET
            </h2>

            <p className="text-gray-500 text-xl max-w-3xl mx-auto">
              Begin your AI-powered EUR/USD automated trading journey today.
            </p>

          </div>

          <div className="grid lg:grid-cols-2 gap-10 items-center">

            {/* LEFT */}
            <div className="bg-blue-50 border border-blue-100 rounded-[40px] p-10">

              <h3 className="text-4xl font-black mb-8 text-black">
                What You Get
              </h3>

              <div className="space-y-6 text-lg">

                <div>
                  ✔ AI Trading Automation
                </div>

                <div>
                  ✔ Smart Risk Protection
                </div>

                <div>
                  ✔ MT4 Integration
                </div>

                <div>
                  ✔ 7-Day Setup Support
                </div>

              </div>

            </div>

            {/* RIGHT */}
            <div className="bg-white border border-gray-200 rounded-[40px] p-10 shadow-2xl text-center">

              <h3 className="text-4xl font-black mb-4 text-black">
                BOTKET Registration
              </h3>

              <p className="text-gray-500 text-lg mb-10">
                Complete your registration securely using our official form.
              </p>

              <div className="space-y-5">

                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSdOCzECi585dAYgmpHwrvRwTEc0H0nXczxr9IfQWYY-NItFcg/viewform"
                  target="_blank"
                  className="block w-full bg-blue-600 hover:bg-blue-700 text-white py-5 rounded-2xl text-xl font-black transition"
                >
                  Open Registration Form
                </a>

                <a
                  href="https://wa.me/447448315610"
                  target="_blank"
                  className="block w-full border border-blue-600 text-blue-600 hover:bg-blue-50 py-5 rounded-2xl text-xl font-black transition"
                >
                  WhatsApp Support
                </a>

                <a
                  href="https://t.me/botketsupport"
                  target="_blank"
                  className="block w-full border border-blue-600 text-blue-600 hover:bg-blue-50 py-5 rounded-2xl text-xl font-black transition"
                >
                  Telegram Community
                </a>

                <a
                  href="/strategy.pdf"
                  target="_blank"
                  className="block w-full border border-blue-600 text-blue-600 hover:bg-blue-50 py-5 rounded-2xl text-xl font-black transition"
                >
                  View Strategy PDF
                </a>

              </div>

              <div className="mt-10 space-y-3 text-gray-500">

                <p>
                  📧 botketsupport@gmail.com
                </p>

                <p>
                  📲 @botketsupport
                </p>

                <p>
                  ⏱ Support Response: Within 24 Hours
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* FAQ */}
      <section id="faq" className="py-32 px-6 bg-blue-50">

        <div className="max-w-5xl mx-auto">

          <div className="text-center mb-20">

            <h2 className="text-5xl font-black mb-6 text-black">
              Frequently Asked Questions
            </h2>

          </div>

          <div className="space-y-6">

            <div className="bg-white rounded-3xl p-8">
              <h3 className="text-2xl font-bold mb-4">
                Does BOTKET work on MT4?
              </h3>

              <p className="text-gray-600">
                Yes, BOTKET is fully compatible with MetaTrader 4.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8">
              <h3 className="text-2xl font-bold mb-4">
                Is BOTKET fully automated?
              </h3>

              <p className="text-gray-600">
                Yes, BOTKET uses AI automation for trade execution and monitoring.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8">
              <h3 className="text-2xl font-bold mb-4">
                Which pairs does BOTKET trade?
              </h3>

              <p className="text-gray-600">
                BOTKET currently focuses on EUR/USD.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8">
              <h3 className="text-2xl font-bold mb-4">
                Do I need a VPS?
              </h3>

              <p className="text-gray-600">
                A VPS is recommended for stable 24/7 execution.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="py-32 px-6 text-center bg-blue-600 text-white"
      >

        <h2 className="text-5xl font-black mb-8">
          Contact BOTKET
        </h2>

        <p className="text-blue-100 text-xl mb-12">
          Join BOTKET AI Forex Automation
        </p>

        <div className="flex flex-wrap justify-center gap-6 mb-12">

          <a
            href="https://wa.me/447448315610"
            target="_blank"
            className="bg-white text-blue-600 px-10 py-5 rounded-2xl font-black text-xl"
          >
            WhatsApp Support
          </a>

          <a
            href="https://t.me/botketsupport"
            target="_blank"
            className="bg-white text-blue-600 px-10 py-5 rounded-2xl font-black text-xl"
          >
            Telegram
          </a>

        </div>

        <div className="space-y-4 text-lg">

          <p>
            📧 Gmail: botketsupport@gmail.com
          </p>

          <p>
            📲 Telegram: @botketsupport
          </p>

          <p>
            ⏱ Response Time: Within 24 Hours
          </p>

        </div>

      </section>

      {/* FLOATING WHATSAPP */}
      <a
        href="https://wa.me/447448315610"
        target="_blank"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-5 rounded-full shadow-2xl hover:scale-110 transition text-3xl"
      >
        💬
      </a>

      {/* FOOTER */}
      <footer className="border-t border-gray-200 py-10 text-center text-gray-500 bg-white">
        © 2026 BOTKET. All rights reserved.
      </footer>

    </main>
  );
}