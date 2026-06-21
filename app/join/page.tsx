import Image from "next/image";

export default function JoinPage() {
  return (
    <main className="min-h-screen bg-white text-black">

      {/* HERO */}
      <section className="py-24 px-6">

        <div className="max-w-5xl mx-auto text-center">

          <Image
            src="/logo.png"
            alt="BOTKET"
            width={140}
            height={140}
            className="mx-auto mb-8"
          />

          <div className="inline-block px-5 py-2 rounded-full bg-blue-100 text-blue-600 font-bold mb-6">
            AI Forex Automation
          </div>

          <h1 className="text-5xl md:text-7xl font-black mb-8">
            Join BOTKET
            <span className="text-blue-600"> Telegram</span>
          </h1>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
            Get forex updates, trading results, AI automation insights,
            and exclusive BOTKET community access.
          </p>

          <a
            href="https://t.me/+VJY9pRj8AlQ3ODc1"
            href=""
            target="_blank"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 rounded-2xl text-xl font-black"
          >
            Join Free telegram channel
          </a>

        </div>

      </section>

      {/* DEMO VIDEO */}
      <section className="py-20 px-6 bg-blue-50">

        <div className="max-w-6xl mx-auto text-center">

          <h2 className="text-4xl font-black mb-10">
            Watch BOTKET In Action
          </h2>

          <video
            controls
            className="w-full rounded-3xl shadow-xl"
          >
            <source src="/demo.mp4" type="video/mp4" />
          </video>

        </div>

      </section>

      {/* RESULTS */}
      <section className="py-20 px-6">

        <div className="max-w-7xl mx-auto text-center">

          <h2 className="text-5xl font-black mb-6">
            Last Week Results
          </h2>

          <p className="text-gray-500 mb-16 text-xl">
            Real trading performance from BOTKET.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

            <Image
              src="/results-1.png"
              alt="Result 1"
              width={500}
              height={500}
              className="rounded-3xl shadow-xl"
            />

            <Image
              src="/results-2.png"
              alt="Result 2"
              width={500}
              height={500}
              className="rounded-3xl shadow-xl"
            />

            <Image
              src="/results-3.png"
              alt="Result 3"
              width={500}
              height={500}
              className="rounded-3xl shadow-xl"
            />

            <Image
              src="/results-4.png"
              alt="Result 4"
              width={500}
              height={500}
              className="rounded-3xl shadow-xl"
            />

          </div>

        </div>

      </section>

      {/* FEATURES */}
      <section className="py-20 px-6 bg-blue-50">

        <div className="max-w-6xl mx-auto">

          <h2 className="text-center text-5xl font-black mb-16">
            Why BOTKET
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-white p-8 rounded-3xl shadow-lg">

              <h3 className="text-2xl font-black mb-4">
                AI Trend Detection
              </h3>

              <p className="text-gray-600">
                Advanced market analysis for EUR/USD entries.
              </p>

            </div>

            <div className="bg-white p-8 rounded-3xl shadow-lg">

              <h3 className="text-2xl font-black mb-4">
                Smart Risk Management
              </h3>

              <p className="text-gray-600">
                Automated protection against excessive drawdowns.
              </p>

            </div>

            <div className="bg-white p-8 rounded-3xl shadow-lg">

              <h3 className="text-2xl font-black mb-4">
                24/7 Automation
              </h3>

              <p className="text-gray-600">
                BOTKET monitors markets continuously.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 px-6">

        <div className="max-w-6xl mx-auto">

          <h2 className="text-center text-5xl font-black mb-16">
            Trader Reviews
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-blue-50 p-8 rounded-3xl">
              <p className="mb-6">
                ⭐⭐⭐⭐⭐
              </p>

              <p className="text-gray-700">
                Very smooth MT4 integration and setup.
              </p>
            </div>

            <div className="bg-blue-50 p-8 rounded-3xl">
              <p className="mb-6">
                ⭐⭐⭐⭐⭐
              </p>

              <p className="text-gray-700">
                Great AI trading automation experience.
              </p>
            </div>

            <div className="bg-blue-50 p-8 rounded-3xl">
              <p className="mb-6">
                ⭐⭐⭐⭐⭐
              </p>

              <p className="text-gray-700">
                Excellent risk management and execution.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* FINAL CTA */}
      <section className="py-24 px-6 bg-blue-600 text-white">

        <div className="max-w-4xl mx-auto text-center">

          <h2 className="text-5xl font-black mb-8">
            Ready To Join BOTKET?
          </h2>

          <p className="text-xl mb-10">
            Join our Telegram community and see BOTKET in action.
          </p>

          <a
            href="https://t.me/+VJY9pRj8AlQ3ODc1"
            target="_blank"
            className="inline-block bg-white text-blue-600 px-10 py-5 rounded-2xl text-xl font-black"
          >
            Join Telegram Now
          </a>

        </div>

      </section>

      {/* DISCLAIMER */}
      <section className="py-10 px-6 text-center text-gray-500 text-sm">

        Forex trading involves risk. Past performance does not guarantee future results.

      </section>

    </main>
  );
}