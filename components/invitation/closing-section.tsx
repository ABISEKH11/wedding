import Image from 'next/image'
import { Heart } from 'lucide-react'
import { wedding } from '@/lib/wedding'
import { Reveal } from './reveal'
import { HeartDivider } from './section-heading'

const floatingHearts = [
  { className: '-left-3 top-[18%] size-5', delay: '0s' },
  { className: '-right-4 top-[32%] size-4', delay: '0.8s' },
  { className: '-left-5 bottom-[28%] size-3', delay: '1.6s' },
  { className: '-right-2 bottom-[14%] size-5', delay: '2.4s' },
]

export function ClosingSection() {
  return (
    <section className="flex flex-col items-center px-8 pb-28 pt-16 text-center">
      <Reveal className="flex max-w-md flex-col items-center">
        <HeartDivider />
        <p className="mt-8 text-pretty text-2xl italic leading-relaxed text-primary">
          Come with your smiles, your love and your blessings.
        </p>
        <p className="mt-5 text-pretty text-xl italic leading-relaxed text-foreground/80">
          Your presence will be one of the most beautiful memories we carry with us into our married
          life.
        </p>

        <p className="mt-12 font-display text-3xl text-muted-foreground">With love,</p>
        <p className="mt-2 font-script text-6xl text-primary">
          {wedding.groom} &amp; {wedding.bride}
        </p>
      </Reveal>

      <Reveal delay={200} className="relative mt-10 w-full max-w-[19rem]">
        <div
          aria-hidden="true"
          className="animate-pulse-soft absolute -inset-6 rounded-t-full bg-[radial-gradient(ellipse_at_center,rgba(184,147,58,0.35),transparent_70%)] blur-xl"
        />

        <div className="relative rounded-t-full border border-gold/60 p-2 shadow-[0_20px_50px_-15px_rgba(31,47,77,0.45)]">
          <div className="rounded-t-full border-4 border-double border-gold bg-card p-1.5">
            <div className="group relative aspect-[3/4.4] overflow-hidden rounded-t-full">
              <Image
                src="/images/couple.jpg"
                alt={`${wedding.groom} and ${wedding.bride}`}
                fill
                sizes="(max-width: 640px) 80vw, 304px"
                className="object-cover object-[center_38%] transition-transform duration-[1500ms] ease-out group-hover:scale-105"
              />
            </div>
          </div>
        </div>

        {floatingHearts.map((heart) => (
          <Heart
            key={heart.className}
            aria-hidden="true"
            style={{ animationDelay: heart.delay }}
            className={`animate-gentle-bounce absolute fill-gold/70 text-gold ${heart.className}`}
          />
        ))}

        <span
          aria-hidden="true"
          className="absolute -bottom-5 left-1/2 flex size-10 -translate-x-1/2 items-center justify-center rounded-full border-2 border-gold bg-card shadow-md"
        >
          <Heart className="size-4 fill-primary text-primary" />
        </span>
      </Reveal>

      <div className="mt-14">
        <HeartDivider />
      </div>
    </section>
  )
}
