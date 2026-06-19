import { siteConfig } from '../config/site'
import { YouTubeIcon } from './Icons'
import { Reveal } from './Reveal'

export function Book() {
  const bookComingSoon = siteConfig.amazonBook === '#'

  return (
    <section id="book" className="scroll-mt-20 bg-cream px-6 py-20 sm:py-28">
      <div className="mx-auto grid max-w-5xl items-center gap-12 md:grid-cols-2">
        <Reveal direction="left" className="order-2 md:order-1">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-sunset">
            The Book
          </p>
          <h2 className="mb-6 font-serif text-3xl font-semibold text-navy sm:text-4xl">
            E-book, paperback &amp; audiobook
          </h2>
          <p className="mb-6 text-lg leading-relaxed text-navy/80">
            A bilingual journey from South America to New York to Texas and Galveston.
            Seventeen chapters of real trades, hurricanes, fishing docks, and the lessons
            that only life can teach.
          </p>
          <p className="mb-8 text-sm text-navy/60">
            South America &rarr; New York &rarr; Texas &rarr; Galveston
          </p>

          {bookComingSoon ? (
            <div className="space-y-4">
              <p className="rounded-xl border border-sunset/30 bg-sunset/5 px-5 py-4 text-navy/80">
                The book is launching soon. Subscribe to Barter Life TV to be the first
                to know when it&apos;s available on Amazon.
              </p>
              <a
                href={siteConfig.youtubeSubscribe}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-youtube inline-flex items-center justify-center gap-3 rounded-full px-8 py-4 font-semibold text-white"
              >
                <YouTubeIcon className="h-6 w-6 shrink-0" />
                Notify Me — Subscribe
              </a>
            </div>
          ) : (
            <a
              href={siteConfig.amazonBook}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-youtube inline-flex items-center justify-center rounded-full px-8 py-4 font-semibold text-white"
            >
              Buy on Amazon
            </a>
          )}
        </Reveal>

        <Reveal direction="right" delay={150} className="order-1 flex justify-center md:order-2">
          <div className="portrait-card relative max-w-xl">
            <div className="portrait-glow absolute -inset-4 rounded-3xl opacity-50" />
            <img
              src="/images/book-cover.png"
              alt="The Barter Life — full book cover"
              className="relative w-full rounded-2xl shadow-2xl shadow-navy/15 ring-1 ring-navy/10"
            />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
