'use client'

import { Button } from '@/app/ui/button'
import useEmblaCarousel from 'embla-carousel-react'
import { forwardRef, useCallback } from 'react'

interface CarouselProps {
  children: React.ReactNode
  className?: string
}

export const Carousel = ({ children, className = '' }: CarouselProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    loop: false,
    dragFree: true,
  })

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <CarouselContainer>
      <CarouselViewport ref={emblaRef}>
        <CarouselContent>{children}</CarouselContent>
      </CarouselViewport>
      <CarouselPrevButton onClick={scrollPrev} />
      <CarouselNextButton onClick={scrollNext} />
    </CarouselContainer>
  )
}

const CarouselContainer = ({ children }: { children: React.ReactNode }) => {
  return <div className="relative">{children}</div>
}

const CarouselViewport = forwardRef<HTMLDivElement, { children: React.ReactNode; className?: string }>(
  ({ children, className = '' }, ref) => {
    return (
      <div ref={ref} className={`overflow-x-hidden min-w-dvw md:min-w-full ${className}`}>
        {children}
      </div>
    )
  },
)
CarouselViewport.displayName = 'CarouselViewport'

const CarouselContent = forwardRef<HTMLDivElement, { children: React.ReactNode; className?: string }>(
  ({ children, className = '' }, ref) => {
    return (
      <div ref={ref} className={`flex gap-x-5  ${className}`}>
        {children}
      </div>
    )
  },
)
CarouselContent.displayName = 'CarouselContent'

const CarouselPrevButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <Button
      onClick={onClick}
      className="absolute -left-2 md:left-0 rounded-full! top-1/2 w-12! h-12! -translate-y-1/2 -translate-x-4 z-10 md:h-12 md:w-12 flex items-center justify-center bg-primary/10! border border-primary/50 backdrop-blur-sm transition-all duration-300 hover:bg-primary/30! hover:scale-110"
      aria-label="Previous"
    >
      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
      </svg>
    </Button>
  )
}

const CarouselNextButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <Button
      onClick={onClick}
      className="absolute right-0 rounded-full! top-1/2 w-12! h-12! -translate-y-1/2 translate-x-4 z-10 md:h-12 md:w-12 flex items-center justify-center bg-primary/10! border border-primary/50 backdrop-blur-sm transition-all duration-300 hover:bg-primary/30! hover:scale-110"
      aria-label="Next"
    >
      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
    </Button>
  )
}
