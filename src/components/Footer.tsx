import type { ReactNode } from 'react'
import { siteConfig } from '../config/site'
import { YouTubeIcon } from './Icons'
import { Reveal } from './Reveal'

function SocialLink({
  href,
  label,
  children,
}: {
  href: string
  label: string
  children: ReactNode
}) {
  const isPlaceholder = href === '#'

  return (
    <a
      href={href}
      target={isPlaceholder ? undefined : '_blank'}
      rel={isPlaceholder ? undefined : 'noopener noreferrer'}
      aria-label={label}
      className="social-btn flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white/80 hover:border-sunset hover:bg-sunset/20 hover:text-white"
    >
      {children}
    </a>
  )
}

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-navy-deep px-6 py-16 text-white">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sunset/40 to-transparent" />

      <div className="relative mx-auto max-w-5xl">
        <div className="mb-12 grid gap-10 sm:grid-cols-2 md:grid-cols-3">
          <Reveal>
            <div className="logo-card inline-block rounded-2xl px-5 py-4 shadow-lg">
              <img
                src="/images/logo.jpeg"
                alt="The Barter Life"
                className="h-auto w-28 object-contain"
              />
            </div>
            <p className="mt-4 text-sm leading-relaxed text-white/60">
              Barter Life Publishing
              <br />
              &copy; {new Date().getFullYear()} {siteConfig.author}
            </p>
          </Reveal>

          <Reveal delay={100}>
            <h3 className="mb-4 font-serif text-lg font-semibold">Mario&apos;s Roofing</h3>
            <p className="mb-2 text-sm text-white/70">Roofing &amp; Construction</p>
            <a
              href={`tel:${siteConfig.roofingPhone.replace(/-/g, '')}`}
              className="block text-lg font-medium text-sunset-light transition hover:text-sunset"
            >
              {siteConfig.roofingPhone}
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className="mt-2 block text-sm text-white/70 transition hover:text-sunset-light"
            >
              {siteConfig.email}
            </a>
            <a
              href={siteConfig.roofingWebsite}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-white/70 transition hover:text-sunset-light"
            >
              mariosroofingandconstruction.com
              <span aria-hidden>↗</span>
            </a>
            {siteConfig.googleMaps !== '#' && (
              <a
                href={siteConfig.googleMaps}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-block text-sm text-white/60 underline-offset-4 hover:text-white hover:underline"
              >
                Find us on Google Maps
              </a>
            )}
          </Reveal>

          <Reveal delay={200}>
            <h3 className="mb-4 font-serif text-lg font-semibold">Connect</h3>
            <div className="flex gap-3">
              <SocialLink href={siteConfig.youtubeChannel} label="YouTube">
                <YouTubeIcon className="h-5 w-5" />
              </SocialLink>
              <SocialLink href={siteConfig.facebook} label="Facebook">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </SocialLink>
              <SocialLink href={siteConfig.instagram} label="Instagram">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </SocialLink>
            </div>
          </Reveal>
        </div>
      </div>
    </footer>
  )
}
