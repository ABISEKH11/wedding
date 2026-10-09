'use client'

import { useEffect, useState } from 'react'

function getRemaining(target: number) {
  const diff = Math.max(0, target - Date.now())
  return {
    days: Math.floor(diff / 86_400_000),
    hours: Math.floor((diff / 3_600_000) % 24),
    mins: Math.floor((diff / 60_000) % 60),
    secs: Math.floor((diff / 1000) % 60),
  }
}

export function Countdown({ dateISO }: { dateISO: string }) {
  const [remaining, setRemaining] = useState<ReturnType<typeof getRemaining> | null>(null)

  useEffect(() => {
    const target = new Date(dateISO).getTime()
    setRemaining(getRemaining(target))
    const id = window.setInterval(() => setRemaining(getRemaining(target)), 1000)
    return () => window.clearInterval(id)
  }, [dateISO])

  const units: [string, number | undefined][] = [
    ['Days', remaining?.days],
    ['Hours', remaining?.hours],
    ['Minutes', remaining?.mins],
    ['Seconds', remaining?.secs],
  ]

  return (
    <div aria-label="Countdown to the wedding" className="flex w-full justify-center gap-2">
      {units.map(([label, value]) => (
        <div key={label} className="flex flex-1 flex-col items-center gap-2">
          <strong className="flex aspect-square w-full max-w-16 items-center justify-center rounded-lg border border-border bg-secondary/80 font-serif text-2xl font-semibold tabular-nums text-foreground shadow-sm">
            {value === undefined ? '--' : String(value).padStart(2, '0')}
          </strong>
          <span className="font-serif text-[10px] tracking-[0.15em] text-muted-foreground">
            {label.toUpperCase()}
          </span>
        </div>
      ))}
    </div>
  )
}
