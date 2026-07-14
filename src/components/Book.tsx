import { siteConfig } from '../config/site'
import { BookIcon, YouTubeIcon } from './Icons'
import { Reveal } from './Reveal'

export function Book() {
  const bookComingSoon = siteConfig.amazonBook === '#'

  return (
    <section id="book" className="scroll-mt-20 relative overflow-hidden bg-cream px-6 py-20 sm:py-28">
      <div className="pointer-events-none absolute -right-24 top-20 h-72 w-72 rounded-full bg-sunset/10 blur-3xl" />
      <div className="pointer-events-none absolute -left-24 bottom-10 h-64 w-64 rounded-full bg-sky/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl">
        {/* Intro */}
        <Reveal className="mx-auto mb-14 max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-sunset">
            Coming Soon
          </p>
          <h2 className="mb-4 font-serif text-3xl font-semibold text-navy sm:text-5xl">
            The Barter Life:{' '}
            <span className="text-sunset">Better Life</span>
          </h2>
          <p className="text-lg leading-relaxed text-navy/75 sm:text-xl">
            Trading, hustling &amp; living the American Dream — from South America
            to New York to Texas to Galveston.
          </p>
        </Reveal>

        {/* Covers + CTA */}
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
          {/* Front cover — primary visual */}
          <Reveal direction="left" className="flex justify-center lg:col-span-5">
            <div className="portrait-card relative w-full max-w-[280px] sm:max-w-[320px]">
              <div className="portrait-glow absolute -inset-8 rounded-3xl opacity-60" />
              <img
                src="/images/book-cover-front.png"
                alt="The Barter Life: Better Life — front cover"
                className="relative w-full rounded-xl shadow-[0_20px_50px_rgba(26,45,74,0.25)] ring-1 ring-navy/10"
              />
              <p className="mt-4 text-center text-xs font-medium uppercase tracking-[0.18em] text-navy/45">
                E-book &amp; paperback cover
              </p>
            </div>
          </Reveal>

          {/* Copy + formats + CTA */}
          <Reveal direction="right" delay={120} className="lg:col-span-7">
            <div className="rounded-3xl border border-navy/8 bg-white/60 p-7 shadow-sm backdrop-blur-sm sm:p-10">
              <p className="mb-6 text-base leading-relaxed text-navy/80 sm:text-lg">
                Mario Romero&apos;s first book — real stories of barter, resilience,
                and moving with positive purpose. Built for anyone who wants tools to
                thrive when money isn&apos;t the only way to win.
              </p>

              <ul className="mb-8 space-y-3">
                <FormatRow
                  label="E-book"
                  detail="Launch week $0.99 → then $5.99"
                />
                <FormatRow
                  label="Paperback"
                  detail="$14.99 on Amazon"
                />
                <FormatRow
                  label="Audiobook"
                  detail="Coming after launch"
                />
              </ul>

              {bookComingSoon ? (
                <div className="space-y-4">
                  <p className="rounded-2xl border border-sunset/25 bg-sunset/5 px-5 py-4 text-sm leading-relaxed text-navy/80 sm:text-base">
                    Pre-orders open soon. Subscribe to Barter Life TV now — when the
                    Amazon link goes live, you&apos;ll be first to know and first to buy.
                  </p>

                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                    <div className="relative flex-1 sm:flex-none">
                      <span className="btn-youtube-ring" aria-hidden />
                      <a
                        href={siteConfig.youtubeSubscribe}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-youtube relative z-10 inline-flex w-full items-center justify-center gap-3 rounded-full px-7 py-4 text-sm font-semibold text-white sm:w-auto sm:px-8"
                      >
                        <YouTubeIcon className="h-5 w-5 shrink-0" />
                        Notify Me — Subscribe
                      </a>
                    </div>
                    <a
                      href="#watch"
                      className="inline-flex items-center justify-center gap-2 rounded-full border border-navy/15 bg-white px-6 py-3.5 text-sm font-medium text-navy transition hover:border-navy/30 hover:bg-cream"
                    >
                      <BookIcon className="h-4 w-4" />
                      Watch the channel
                    </a>
                  </div>
                </div>
              ) : (
                <a
                  href={siteConfig.amazonBook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-youtube inline-flex items-center justify-center gap-3 rounded-full px-8 py-4 font-semibold text-white"
                >
                  <BookIcon className="h-5 w-5" />
                  Get it on Amazon
                </a>
              )}
            </div>
          </Reveal>
        </div>

        {/* Full wrap cover */}
        <Reveal delay={200} className="mt-16 sm:mt-20">
          <div className="mb-6 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sunset">
              Full paperback cover
            </p>
            <p className="mt-2 text-navy/60">
              Front, spine &amp; back — the complete wrap design
            </p>
          </div>
          <div className="overflow-hidden rounded-2xl border border-navy/8 bg-white/40 p-3 shadow-lg shadow-navy/5 sm:p-5">
            <img
              src="/images/book-cover-full.png"
              alt="The Barter Life: Better Life — full paperback wrap cover"
              className="mx-auto h-auto w-full max-w-5xl rounded-lg"
            />
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function FormatRow({ label, detail }: { label: string; detail: string }) {
  return (
    <li className="flex items-start gap-3 sm:items-center">
      <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-sunset sm:mt-0" />
      <div className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:gap-3">
        <span className="font-semibold text-navy">{label}</span>
        <span className="text-sm text-navy/60 sm:text-base">{detail}</span>
      </div>
    </li>
  )
}
