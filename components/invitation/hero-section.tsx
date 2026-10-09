import Image from 'next/image'
import { ChevronDown, Heart } from 'lucide-react'
import { wedding } from '@/lib/wedding'
import { Petals } from './petals'
import { Reveal } from './reveal'
import { HeartDivider } from './section-heading'

export function HeroSection() {
  return (
    <section className="relative isolate flex min-h-svh flex-col items-center justify-center overflow-hidden px-6 pb-32 pt-16 text-center">
      <Image
        src="/images/royal-hero.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="animate-hero-zoom -z-10 object-cover object-top"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(246,244,238,0.85)_15%,rgba(246,244,238,0.35)_55%,transparent_80%)]"
      />
      <Petals />

      <Reveal className="flex flex-col items-center">
        <Heart className="size-7 fill-primary text-primary" aria-hidden="true" />
        <p className="mt-4 max-w-xs text-balance font-display text-2xl leading-snug text-primary">
          A New Chapter Begins…
        </p>
        <blockquote
          lang="ta"
          className="mt-5 w-fit whitespace-nowrap text-left font-tamil text-[12px] leading-[2.1] text-primary/90 min-[380px]:text-[13px] sm:text-sm"
        >
          <p>அன்பும் அறனும் உடைத்தாயின் இல்வாழ்க்கை</p>
          <p>பண்பும் பயனும் அது.</p>
          <footer className="mt-1 text-right font-sans text-[10px] tracking-[0.3em] text-gold">
            — திருக்குறள் 45
          </footer>
        </blockquote>
        <div className="mt-6">
          <HeartDivider />
        </div>
      </Reveal>

      <Reveal delay={300} className="mt-4 flex flex-col items-center">
        <h1 className="font-script text-7xl leading-tight text-primary md:text-8xl">
          {wedding.groom}
        </h1>
        <span className="font-script text-4xl text-gold">&</span>
        <p className="font-script text-7xl leading-tight text-primary md:text-8xl">
          {wedding.bride}
        </p>
      </Reveal>

      <a
        href="#welcome"
        className="absolute bottom-10 flex flex-col items-center gap-1 rounded-full bg-card/60 px-4 py-2 font-sans text-[10px] tracking-[0.3em] text-primary backdrop-blur-sm"
      >
        SCROLL
        <ChevronDown className="size-4 animate-gentle-bounce" aria-hidden="true" />
      </a>
    </section>
  )
}
