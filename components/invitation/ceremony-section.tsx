import Image from 'next/image'
import { Clock, MapPin } from 'lucide-react'
import { wedding } from '@/lib/wedding'
import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'

export function CeremonySection() {
  return (
    <section className="flex flex-col items-center px-6 py-16 text-center">
      <Reveal className="flex w-full max-w-md flex-col items-center">
        <SectionHeading title="Program Timeline" icon={Clock} />

        <div className="mt-8 flex w-full items-center gap-3">
          <span className="h-px flex-1 bg-primary/30" aria-hidden="true" />
          <p className="font-serif text-base font-semibold tracking-[0.2em] text-primary">
            SUNDAY, NOV 22, 2026
          </p>
          <span className="h-px flex-1 bg-primary/30" aria-hidden="true" />
        </div>

        <div className="mt-6 flex w-full items-stretch gap-3 text-left">
          <p className="w-[4.5rem] shrink-0 pt-1 text-right font-serif text-base font-semibold text-primary">
            5:30 AM
          </p>
          <div className="border-l-2 border-primary/40 pb-2 pl-3">
            <h3 className="font-serif text-2xl font-semibold text-primary">Muhurtham</h3>
            <p className="mt-1 text-lg leading-snug text-muted-foreground">
              {wedding.muhurtham}
              <br />
              Your gracious presence and blessings are requested.
            </p>
          </div>
        </div>
      </Reveal>

      <Reveal delay={150} className="mt-20 flex w-full max-w-md flex-col items-center">
        <SectionHeading title="Venue" icon={MapPin} />
        <h3 className="mt-8 font-serif text-3xl font-semibold text-foreground">{wedding.venue}</h3>

        <div className="mt-10 flex flex-col items-center">
          <p className="font-display text-2xl text-primary">Scan for Directions</p>
          <div className="relative mt-4 rounded-2xl border border-gold/60 p-1.5 shadow-[0_15px_40px_-15px_rgba(31,47,77,0.45)]">
            <div className="rounded-xl border-4 border-double border-gold bg-white p-2">
              <Image
                src="/images/map-qr.png"
                alt={`QR code with directions to ${wedding.venue}`}
                width={1600}
                height={1600}
                sizes="176px"
                className="size-44"
              />
            </div>
            <span
              aria-hidden="true"
              className="absolute -bottom-4 left-1/2 flex size-8 -translate-x-1/2 items-center justify-center rounded-full border-2 border-gold bg-card shadow-md"
            >
              <MapPin className="size-4 text-primary" />
            </span>
          </div>
          <p className="mt-8 text-base italic text-muted-foreground">
            Point your phone camera at the code
          </p>
        </div>
      </Reveal>
    </section>
  )
}
