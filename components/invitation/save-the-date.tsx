import { CalendarHeart } from 'lucide-react'
import { wedding } from '@/lib/wedding'
import { Countdown } from './countdown'
import { Reveal } from './reveal'
import { ScratchCard } from './scratch-card'
import { SectionHeading } from './section-heading'

export function SaveTheDate() {
  return (
    <section id="save-the-date" className="flex flex-col items-center px-6 py-16 text-center">
      <Reveal className="flex w-full max-w-md flex-col items-center">
        <SectionHeading title="Scratch to Reveal" />
        <p className="mt-4 text-lg italic text-muted-foreground">
          Scratch below to reveal our wedding date
        </p>

        <div className="mt-8 grid w-full grid-cols-3 gap-3">
          <ScratchCard label="Day" value={wedding.day} />
          <ScratchCard label="Month" value={wedding.month} />
          <ScratchCard label="Year" value={wedding.year} />
        </div>

        <p className="mt-10 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-serif text-sm font-semibold tracking-[0.25em] text-primary-foreground shadow-lg">
          <CalendarHeart className="size-4" aria-hidden="true" />
          {'22 • 11 • 2026 | SUNDAY'}
        </p>
      </Reveal>

      <Reveal delay={150} className="mt-20 flex w-full max-w-md flex-col items-center">
        <SectionHeading title="Counting Down to Forever" />
        <div className="mt-8 w-full">
          <Countdown dateISO={wedding.dateISO} />
        </div>
      </Reveal>
    </section>
  )
}
