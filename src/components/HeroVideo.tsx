import { useEffect, useRef, useState } from 'react'

type VideoStatus = 'idle' | 'loading' | 'ready' | 'error'

export function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const startedRef = useRef(false)
  const [status, setStatus] = useState<VideoStatus>('idle')

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return

    const container = containerRef.current
    const video = videoRef.current
    if (!container || !video) return

    const startLoad = () => {
      if (startedRef.current) return
      startedRef.current = true
      setStatus('loading')
      video.preload = 'auto'
      video.load()
      video.play().catch(() => setStatus('error'))
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          startLoad()
          observer.disconnect()
        }
      },
      { threshold: 0.05 },
    )

    observer.observe(container)
    return () => observer.disconnect()
  }, [])

  const showVideo = status === 'ready'

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden">
      <div
        className={`absolute inset-0 bg-cover bg-center transition-opacity duration-[1.4s] ease-out ${
          showVideo ? 'opacity-0' : 'opacity-100'
        } ${status === 'idle' ? 'animate-ken-burns' : ''}`}
        style={{ backgroundImage: "url('/images/hero-sunset.jpg')" }}
        aria-hidden
      />

      <video
        ref={videoRef}
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-[1.4s] ease-out ${
          showVideo ? 'opacity-100' : 'opacity-0'
        }`}
        muted
        loop
        playsInline
        preload="none"
        poster="/images/hero-sunset.jpg"
        onCanPlay={() => setStatus('ready')}
        onError={() => setStatus('error')}
        aria-hidden
      >
        <source src="/videos/hero-video.mp4" type="video/mp4" />
      </video>

      {status === 'loading' && (
        <div
          className="absolute bottom-6 right-6 flex items-center gap-2 rounded-full border border-white/20 bg-navy-deep/60 px-4 py-2 text-xs text-white/70 backdrop-blur-sm"
          role="status"
          aria-live="polite"
        >
          <span className="hero-video-spinner" aria-hidden />
          Loading video…
        </div>
      )}
    </div>
  )
}
