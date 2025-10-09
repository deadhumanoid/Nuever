import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Neuver | Redefining Fashion</title>
        <meta name="description" content="Neuver: Your personalized journey into future fashion." />
        <link rel="icon" href="/favicon.ico" /> {/* Update with your own favicon */}
      </Head>

      <main className="flex min-h-screen flex-col items-center justify-center p-8 text-center bg-neuver-bg-dark text-neuver-text-light">
        <h1 className="text-6xl font-display font-bold mb-4 text-neuver-accent-blue animate-text-glow">
          Welcome to Neuver
        </h1>
        <p className="text-xl max-w-2xl mb-8 font-sans">
          Redefining fashion through innovation, personalization, and mindful style.
          Explore a future where your wardrobe adapts to you.
        </p>

        <div className="flex space-x-4">
          <button className="bg-neuver-accent-purple hover:bg-neuver-accent-pink text-white font-bold py-3 px-8 rounded-lg interactive-element shadow-lg">
            Explore Collections
          </button>
          <button className="bg-transparent border-2 border-neuver-accent-blue hover:border-neuver-accent-green text-neuver-accent-blue hover:text-neuver-accent-green font-bold py-3 px-8 rounded-lg interactive-element shadow-lg">
            Discover Your Style
          </button>
        </div>

        {/* Placeholder for future dynamic elements */}
        <section className="mt-20 w-full max-w-5xl p-8 border border-neuver-silver-dark rounded-xl shadow-inner shadow-neuver-accent-blue/20">
          <h2 className="text-4xl font-display font-semibold mb-6 text-neuver-accent-green animate-text-glitch">
            A Glimpse into the Future
          </h2>
          <p className="text-lg font-sans">
            Imagine an AI stylist curating outfits tailored to your unique identity,
            and a wardrobe that empowers conscious choices. This is Neuver.
          </p>
          {/* Placeholder for interactive elements like a small animated sphere or a data visualization */}
        </section>
      </main>
    </>
  );
}
