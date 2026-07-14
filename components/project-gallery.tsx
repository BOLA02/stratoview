'use client'

import { useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight, Images, Maximize2, X } from 'lucide-react'

interface ProjectGalleryProps {
  images: string[]
  status: string
  title: string
}

export function ProjectGallery({ images, status, title }: ProjectGalleryProps) {
  const galleryImages = images.length > 0 ? images : ['/images/hero-poster.png']
  const [activeIndex, setActiveIndex] = useState(0)
  const [isOpen, setIsOpen] = useState(false)

  const showPrevious = () => {
    setActiveIndex((current) => (current === 0 ? galleryImages.length - 1 : current - 1))
  }

  const showNext = () => {
    setActiveIndex((current) => (current === galleryImages.length - 1 ? 0 : current + 1))
  }

  useEffect(() => {
    if (!isOpen) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsOpen(false)
      if (event.key === 'ArrowLeft') showPrevious()
      if (event.key === 'ArrowRight') showNext()
    }

    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = originalOverflow
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [isOpen, galleryImages.length])

  return (
    <>
      <div className="md:col-span-1 h-64 md:h-auto min-h-[18rem] bg-primary/5 relative overflow-hidden">
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="group absolute inset-0 text-left"
          aria-label={`Expand ${title} image gallery`}
        >
          <img
            src={galleryImages[activeIndex]}
            alt={`${title} project image ${activeIndex + 1}`}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-primary/70 via-primary/15 to-transparent" />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <span className="inline-flex items-center gap-2 rounded-lg bg-white/90 px-4 py-2 text-sm font-semibold text-primary shadow-lg backdrop-blur">
              <Maximize2 className="h-4 w-4" />
              View Gallery
            </span>
          </div>
        </button>

        <span className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur text-primary rounded-full text-xs font-semibold">
          {status}
        </span>

        {galleryImages.length > 1 && (
          <span className="absolute top-4 right-4 inline-flex items-center gap-1.5 px-3 py-1 bg-primary/80 text-white rounded-full text-xs font-semibold backdrop-blur">
            <Images className="h-3.5 w-3.5" />
            {galleryImages.length}
          </span>
        )}

        {galleryImages.length > 1 && (
          <div className="absolute bottom-3 left-3 right-3 flex gap-2">
            {galleryImages.slice(0, 4).map((image, idx) => (
              <button
                key={image}
                type="button"
                onClick={() => setActiveIndex(idx)}
                className={`h-14 flex-1 overflow-hidden rounded-md border-2 transition ${
                  activeIndex === idx
                    ? 'border-accent shadow-lg'
                    : 'border-white/70 opacity-80 hover:opacity-100'
                }`}
                aria-label={`Show ${title} image ${idx + 1}`}
              >
                <img
                  src={image}
                  alt=""
                  className="h-full w-full object-cover"
                />
              </button>
            ))}
          </div>
        )}
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 px-4 py-5 sm:px-8 sm:py-8"
          role="dialog"
          aria-modal="true"
          aria-label={`${title} image gallery`}
        >
          <div className="mx-auto flex h-full max-w-6xl flex-col">
            <div className="mb-4 flex items-center justify-between gap-4 text-white">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/60">
                  Project Gallery
                </p>
                <h2 className="text-xl font-bold sm:text-2xl">{title}</h2>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="rounded-lg bg-white/10 p-2 text-white transition hover:bg-white/20"
                aria-label="Close gallery"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <div className="relative min-h-0 flex-1">
              <img
                src={galleryImages[activeIndex]}
                alt={`${title} expanded image ${activeIndex + 1}`}
                className="h-full w-full rounded-lg object-contain"
              />

              {galleryImages.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={showPrevious}
                    className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/45 p-3 text-white transition hover:bg-black/70 sm:left-4"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </button>
                  <button
                    type="button"
                    onClick={showNext}
                    className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/45 p-3 text-white transition hover:bg-black/70 sm:right-4"
                    aria-label="Next image"
                  >
                    <ChevronRight className="h-6 w-6" />
                  </button>
                </>
              )}
            </div>

            {galleryImages.length > 1 && (
              <div className="mt-4 flex gap-2 overflow-x-auto pb-1">
                {galleryImages.map((image, idx) => (
                  <button
                    key={image}
                    type="button"
                    onClick={() => setActiveIndex(idx)}
                    className={`h-16 w-24 shrink-0 overflow-hidden rounded-md border-2 transition sm:h-20 sm:w-32 ${
                      activeIndex === idx
                        ? 'border-accent'
                        : 'border-white/20 opacity-70 hover:opacity-100'
                    }`}
                    aria-label={`Open ${title} image ${idx + 1}`}
                  >
                    <img src={image} alt="" className="h-full w-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  )
}
