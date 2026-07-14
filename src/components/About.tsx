import { Reveal } from './Reveal'

export function About() {
  return (
    <section className="bg-cream px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-3xl text-center">
        <Reveal>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-sunset">
            About the Book
          </p>
          <h2 className="mb-8 font-serif text-3xl font-semibold text-navy sm:text-4xl">
            Finding the better life
          </h2>
        </Reveal>

        <Reveal delay={120}>
          <div className="space-y-6 text-left text-lg leading-relaxed text-navy/80">
            <p>
              From the dirt roads of Argentina to the streets of Brooklyn, the Texas coast,
              and beyond — Mario Daniel Romero has spent a lifetime trading, hustling, and
              finding a way forward no matter the circumstances.
            </p>
            <p>
              <em>The Barter Life</em> shares real stories and practical wisdom about
              bartering and the opportunities it creates — especially when the future feels
              uncertain. These are tools people may need not just to thrive, but sometimes
              simply to survive in the real world.
            </p>
            <p className="border-l-4 border-sunset pl-6 font-serif text-xl italic text-navy">
              &ldquo;Life changes when you begin to move with positive purpose.&rdquo;
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
