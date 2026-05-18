"use client";

import Image from "next/image";
import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function Home() {
  const [loading, setLoading] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    setLoading(true);

    try {
      const { error } = await supabase.from("registrations").insert([
        {
          name,
          email,
          phone,
        },
      ]);

      if (error) {
        console.log(error);
        alert(error.message);
      } else {
        alert("Registration Successful!");

        setName("");
        setEmail("");
        setPhone("");
      }
    } catch (err) {
      console.log(err);
      alert("Something went wrong");
    }

    setLoading(false);
  };

  return (
    <main className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-green-500/20 blur-[180px] rounded-full"></div>

      {/* Grid Background */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "linear-gradient(#00ff99 1px, transparent 1px), linear-gradient(to right, #00ff99 1px, transparent 1px)",
          backgroundSize: "70px 70px",
        }}
      />

      {/* Navbar */}
      <header className="fixed top-0 left-0 w-full z-50 border-b border-green-500/20 backdrop-blur-xl bg-black/70">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-5">
          <div className="flex items-center gap-4">
            <Image
              src="/logo.png"
              alt="BOTKET"
              width={80}
              height={80}
              className="object-contain"
              priority
            />

            <div>
              <h1 className="text-3xl font-black tracking-wider text-green-400">
                BOTKET
              </h1>

              <p className="text-gray-400 text-sm">
                AI Forex Automation
              </p>
            </div>
          </div>

          <nav className="hidden md:flex gap-10 text-gray-300 font-medium">
            <a href="#features" className="hover:text-green-400 transition">
              Features
            </a>

            <a href="#results" className="hover:text-green-400 transition">
              Results
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

      {/* Hero Section */}
      <section className="relative z-10 min-h-screen flex items-center justify-center px-6 pt-32">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-green-500/30 bg-green-500/10 text-green-300 mb-8">
              ⚡ AI Powered Forex Technology
            </div>

            <h1 className="text-6xl md:text-7xl font-black leading-tight mb-6">
              Trade Smarter
              <br />
              With
              <span className="text-green-400"> AI Precision</span>
            </h1>

            <p className="text-gray-400 text-xl leading-relaxed max-w-xl mb-10">
              BOTKET automates forex trading using advanced AI analysis,
              smart risk management, and real-time market execution.
            </p>

            <div className="flex flex-wrap gap-5">
              <a
                href="#register"
                className="px-8 py-4 rounded-xl bg-green-400 text-black font-bold hover:scale-105 transition"
              >
                Start Now →
              </a>

              <a
                href="#features"
                className="px-8 py-4 rounded-xl border border-green-500/30 hover:border-green-400 hover:text-green-400 transition"
              >
                Explore Features
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-5 mt-14">
              <div className="border border-green-500/20 bg-white/5 rounded-2xl p-5 backdrop-blur-xl">
                <h3 className="text-3xl font-bold text-green-400">92%</h3>
                <p className="text-gray-400 mt-1">Win Accuracy</p>
              </div>

              <div className="border border-green-500/20 bg-white/5 rounded-2xl p-5 backdrop-blur-xl">
                <h3 className="text-3xl font-bold text-green-400">24/7</h3>
                <p className="text-gray-400 mt-1">AI Monitoring</p>
              </div>

              <div className="border border-green-500/20 bg-white/5 rounded-2xl p-5 backdrop-blur-xl">
                <h3 className="text-3xl font-bold text-green-400">5000+</h3>
                <p className="text-gray-400 mt-1">Active Traders</p>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="relative flex justify-center">
            <div className="absolute w-[500px] h-[500px] bg-green-500/20 blur-[140px] rounded-full"></div>

            <div className="relative border border-green-500/20 bg-black/60 backdrop-blur-2xl rounded-[40px] p-12 shadow-[0_0_80px_rgba(0,255,120,0.15)]">
              <Image
                src="/logo.png"
                alt="BOTKET"
                width={320}
                height={320}
                className="object-contain drop-shadow-[0_0_40px_rgba(0,255,120,0.6)]"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section
        id="features"
        className="relative z-10 py-32 px-6"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-black text-center mb-20">
            Powerful AI Features
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              "AI Trend Detection",
              "Smart Risk Management",
              "Auto Recovery System",
              "News Filter Protection",
            ].map((item, i) => (
              <div
                key={i}
                className="border border-green-500/20 bg-white/5 rounded-3xl p-8 backdrop-blur-xl hover:-translate-y-2 transition"
              >
                <div className="w-14 h-14 rounded-2xl bg-green-400/20 flex items-center justify-center text-2xl mb-6">
                  ⚡
                </div>

                <h3 className="text-2xl font-bold mb-4">
                  {item}
                </h3>

                <p className="text-gray-400 leading-relaxed">
                  Advanced automation technology designed for modern forex traders.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section
        id="results"
        className="relative z-10 py-32 px-6"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-black text-center mb-20">
            Trading Performance
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              "+124% Monthly Growth",
              "Low Drawdown Strategy",
              "Real-Time AI Execution",
            ].map((item, i) => (
              <div
                key={i}
                className="rounded-3xl border border-green-500/20 bg-white/5 p-10 backdrop-blur-xl text-center"
              >
                <h3 className="text-3xl font-bold text-green-400 mb-4">
                  {item}
                </h3>

                <p className="text-gray-400">
                  Professional automated forex trading performance powered by AI.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Register */}
      <section
        id="register"
        className="relative z-10 py-32 px-6"
      >
        <div className="max-w-3xl mx-auto border border-green-500/20 bg-black/60 backdrop-blur-2xl rounded-[40px] p-12">
          <h2 className="text-5xl font-black text-center mb-4">
            Register Now
          </h2>

          <p className="text-gray-400 text-center mb-12">
            Join BOTKET AI Forex Automation
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              type="text"
              placeholder="Full Name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-black border border-green-500/20 rounded-2xl px-6 py-5 text-white outline-none focus:border-green-400"
            />

            <input
              type="email"
              placeholder="Email Address"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-black border border-green-500/20 rounded-2xl px-6 py-5 text-white outline-none focus:border-green-400"
            />

            <input
              type="text"
              placeholder="Phone Number"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full bg-black border border-green-500/20 rounded-2xl px-6 py-5 text-white outline-none focus:border-green-400"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full py-5 rounded-2xl bg-green-400 text-black text-xl font-black hover:scale-[1.02] transition"
            >
              {loading ? "Submitting..." : "Create Account"}
            </button>
          </form>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="relative z-10 py-24 px-6 text-center"
      >
        <h2 className="text-5xl font-black mb-10">
          Contact
        </h2>

        <a
          href="https://wa.me/447448315610"
          target="_blank"
          className="inline-flex items-center gap-3 px-10 py-5 rounded-2xl bg-green-400 text-black text-2xl font-bold hover:scale-105 transition"
        >
          WhatsApp Support →
        </a>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-green-500/20 py-10 text-center text-gray-500 px-6">
        <p>
          © 2026 BOTKET AI Forex Automation. All rights reserved.
        </p>

        <p className="mt-4 text-sm max-w-3xl mx-auto">
          Trading forex involves risk. Past performance does not guarantee future results.
        </p>
      </footer>
    </main>
  );
}