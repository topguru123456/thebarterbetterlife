import { Logo } from './Logo'
import { Reveal } from './Reveal'

export function BrandPhilosophy() {
  return (
    <section className="relative overflow-hidden bg-navy px-6 py-20 text-white sm:py-28">
      <div className="pointer-events-none absolute -left-32 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-sunset/5 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-sky/5 blur-3xl" />

      <div className="relative mx-auto grid max-w-5xl items-center gap-12 md:grid-cols-2">
        <Reveal direction="left" className="flex justify-center">
          <div className="logo-card animate-float rounded-3xl p-8 shadow-2xl shadow-black/30">
            <img
              src="/images/logo.jpeg"
              alt="The Barter Life manta ray symbol"
              className="h-auto w-full max-w-[220px] object-contain"
            />
          </div>
        </Reveal>

        <Reveal direction="right" delay={150}>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-sunset-light">
            The Philosophy
          </p>
          <h2 className="mb-6 font-serif text-3xl font-semibold leading-tight sm:text-4xl">
            Moving with positive purpose
          </h2>
          <div className="space-y-5 text-base leading-relaxed text-white/80 sm:text-lg">
            <p>
              The manta ray is one of the largest fish in the ocean, yet it swims with
              elegance — using all its energy to move with purpose. It does not attack
              other fish. It feeds while in motion, opening its mouth and consuming
              nutrients from the seawater.
            </p>
            <p>
              That is why the manta ray is our symbol. Today, we try to live and move
              with positive purpose — flowing through life with intention, not chasing
              what we cannot catch.
            </p>
          </div>

          <div className="mt-8 flex items-center gap-4">
            <Logo variant="light" className="h-16 w-16 opacity-60" />
            <p className="font-script text-2xl text-sunset-light">
              Flowing with positive purpose
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
