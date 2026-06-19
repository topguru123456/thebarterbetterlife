import { siteConfig } from '../config/site'
import { BookIcon, YouTubeIcon } from './Icons'
import { HeroVideo } from './HeroVideo'

export function Hero() {
  const bookComingSoon = siteConfig.amazonBook === '#'

  return (
    <section className="relative min-h-[92vh] overflow-hidden">
      <HeroVideo />

      {/* Warm cinematic overlay — text readable left, sunset video breathes right */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a1522]/90 via-[#1a2d4a]/45 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0f1c2e]/70 via-transparent to-[#1a2d4a]/15" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_80%_35%,rgba(244,162,97,0.22)_0%,transparent_50%)]" />

      <div className="relative mx-auto grid min-h-[92vh] max-w-6xl items-center gap-10 px-6 py-16 lg:grid-cols-2 lg:gap-16 lg:py-20">
        <div className="text-center lg:text-left">
          <div className="animate-fade-up logo-card mx-auto mb-8 inline-block rounded-2xl px-6 py-4 shadow-xl lg:mx-0">
            <img
              src="/images/logo.jpeg"
              alt="The Barter Life"
              className="animate-float h-auto w-32 object-contain sm:w-36"
            />
          </div>

          <p className="animate-fade-up animation-delay-150 mb-2 font-script text-2xl text-sunset-light sm:text-3xl">
            {siteConfig.hookQuote}
          </p>

          <h1 className="animate-fade-up animation-delay-300 mb-4 font-serif text-4xl font-semibold tracking-tight text-white drop-shadow-sm sm:text-5xl">
            {siteConfig.title}
          </h1>

          <p className="animate-fade-up animation-delay-450 mx-auto mb-8 max-w-xl text-balance text-base font-light tracking-wide text-white/90 sm:text-lg lg:mx-0">
            {siteConfig.tagline}
            <span className="mt-2 block text-sm text-white/70">by {siteConfig.author}</span>
          </p>

          <div className="animate-fade-up animation-delay-600 mx-auto flex w-full max-w-md flex-col gap-4 lg:mx-0">
            <div className="relative">
              <span className="btn-youtube-ring" aria-hidden />
              <a
                href={siteConfig.youtubeSubscribe}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-youtube relative z-10 inline-flex w-full items-center justify-center gap-3 rounded-full px-8 py-4 text-base font-semibold text-white shadow-lg shadow-sunset/40"
              >
                <YouTubeIcon className="h-6 w-6 shrink-0" />
                Subscribe to Barter Life TV
              </a>
            </div>

            <a
              href={bookComingSoon ? '#book' : siteConfig.amazonBook}
              target={bookComingSoon ? undefined : '_blank'}
              rel={bookComingSoon ? undefined : 'noopener noreferrer'}
              className="btn-ghost inline-flex items-center justify-center gap-3 rounded-full border-2 border-white/40 bg-white/10 px-8 py-4 text-base font-medium text-white backdrop-blur-sm hover:border-white/60 hover:bg-white/20"
            >
              <BookIcon className="h-5 w-5" />
              {bookComingSoon ? 'Get the Book — Coming Soon' : 'Get the Book on Amazon'}
            </a>
          </div>
        </div>

        <div className="animate-fade-in animation-delay-300 flex justify-center lg:justify-end">
          <div className="portrait-card relative w-full max-w-sm">
            <div className="portrait-glow absolute -inset-6 rounded-3xl" />
            <div className="relative overflow-hidden rounded-2xl border border-white/25 shadow-2xl shadow-black/40">
              <img
                src="/images/mario-portrait.jpg"
                alt="Mario Daniel Romero, author of The Barter Life"
                className="aspect-[4/5] w-full object-cover object-top"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0a1522]/90 to-transparent px-5 py-6">
                <p className="font-serif text-lg text-white">Mario Daniel Romero</p>
                <p className="text-sm text-white/75">Author &amp; Founder</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
