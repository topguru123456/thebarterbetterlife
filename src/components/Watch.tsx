import { siteConfig } from '../config/site'
import { YouTubeIcon } from './Icons'
import { Reveal } from './Reveal'

export function Watch() {
  return (
    <section id="watch" className="scroll-mt-24 bg-cream-dark px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-4xl text-center">
        <Reveal>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-sunset">
            Barter Life TV
          </p>
          <h2 className="mb-6 font-serif text-3xl font-semibold text-navy sm:text-4xl">
            Watch, learn, and grow with us
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-navy/75">
            Short videos, long-form stories, bathroom remodels, roof repairs, fishing
            adventures, and conversations about the barter life — new content every week
            on YouTube, Facebook, and Instagram.
          </p>
        </Reveal>

        <Reveal delay={150} direction="scale">
          <div className="mb-10 overflow-hidden rounded-2xl shadow-xl shadow-navy/10 ring-1 ring-navy/5 transition hover:shadow-2xl hover:shadow-navy/15">
            <div className="relative aspect-video w-full bg-navy">
              <iframe
                className="absolute inset-0 h-full w-full"
                src="https://www.youtube.com/embed/videoseries?list=UUI4kq7V9Yyy72zKxRUWE_rg"
                title="Barter Life TV on YouTube"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </Reveal>

        <Reveal delay={250}>
          <div className="relative inline-block">
            <span className="btn-youtube-ring" aria-hidden />
            <a
              href={siteConfig.youtubeSubscribe}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-youtube relative z-10 inline-flex items-center justify-center gap-3 rounded-full px-10 py-4 text-base font-semibold text-white shadow-lg shadow-sunset/30"
            >
              <YouTubeIcon className="h-6 w-6" />
              Subscribe on YouTube
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
