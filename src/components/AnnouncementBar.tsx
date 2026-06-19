import { useEffect, useState } from 'react'
import { siteConfig } from '../config/site'
import { YouTubeIcon } from './Icons'

export function AnnouncementBar() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 0.5)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`announce-bar fixed inset-x-0 top-0 z-50 transition-transform duration-500 ease-out ${
        visible ? 'translate-y-0' : '-translate-y-full'
      }`}
      role="banner"
      aria-label="Quick contact and subscribe"
      aria-hidden={!visible}
    >
      <div className="border-b border-sunset/30 bg-navy-deep/97 shadow-lg shadow-black/20 backdrop-blur-lg">
        <div className="mx-auto flex h-14 max-w-6xl items-center gap-3 px-4 sm:h-[3.25rem] sm:gap-6 sm:px-6">
          {/* Contact — icon-only on mobile, full on desktop */}
          <div className="flex min-w-0 flex-1 items-center gap-2 sm:gap-5">
            <a
              href={`tel:${siteConfig.roofingPhone.replace(/-/g, '')}`}
              className="announce-bar-link group flex items-center gap-2 rounded-lg px-2 py-1.5 transition hover:bg-white/5"
              aria-label={`Call ${siteConfig.roofingPhone}`}
            >
              <PhoneIcon />
              <span className="hidden truncate text-sm text-white/85 sm:inline">
                {siteConfig.roofingPhone}
              </span>
            </a>

            <span className="h-4 w-px bg-white/15" aria-hidden />

            <a
              href={`mailto:${siteConfig.email}`}
              className="announce-bar-link group flex min-w-0 items-center gap-2 rounded-lg px-2 py-1.5 transition hover:bg-white/5"
              aria-label={`Email ${siteConfig.email}`}
            >
              <MailIcon />
              <span className="hidden truncate text-sm text-white/85 md:inline">
                {siteConfig.email}
              </span>
            </a>
          </div>

          {/* Subscribe CTA */}
          <a
            href={siteConfig.youtubeSubscribe}
            target="_blank"
            rel="noopener noreferrer"
            className="announce-bar-cta flex shrink-0 items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold text-white sm:px-5 sm:text-sm"
          >
            <YouTubeIcon className="h-4 w-4 sm:h-5 sm:w-5" />
            <span className="sm:hidden">Subscribe</span>
            <span className="hidden sm:inline">Subscribe on YouTube</span>
          </a>
        </div>
      </div>
    </header>
  )
}

function PhoneIcon() {
  return (
    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/8 text-sunset-light transition group-hover:bg-sunset/20 group-hover:text-white">
      <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
        <path strokeLinecap="round" d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    </span>
  )
}

function MailIcon() {
  return (
    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/8 text-sunset-light transition group-hover:bg-sunset/20 group-hover:text-white">
      <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path strokeLinecap="round" d="M2 7l10 7 10-7" />
      </svg>
    </span>
  )
}
