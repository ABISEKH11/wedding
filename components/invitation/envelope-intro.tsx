'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'

type Stage = 'closed' | 'opening' | 'gone'

function EnvelopeHalf({ side, open }: { side: 'left' | 'right'; open: boolean }) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        'absolute inset-y-0 w-1/2 overflow-hidden transition-transform duration-[1400ms] ease-[cubic-bezier(0.7,0,0.3,1)]',
        side === 'left' ? 'left-0' : 'right-0',
        open && (side === 'left' ? '-translate-x-full' : 'translate-x-full'),
      )}
    >
      <div
        className={cn('absolute inset-y-0 w-[200%]', side === 'left' ? 'left-0' : 'right-0')}
        style={{
          backgroundImage: 'url(/images/royal-envelope.png)',
          backgroundSize: '132% 156%',
          backgroundPosition: '48% 50%',
        }}
      />
    </div>
  )
}

export function EnvelopeIntro({ onOpen }: { onOpen: () => void }) {
  const [stage, setStage] = useState<Stage>('closed')

  if (stage === 'gone') return null

  const handleOpen = () => {
    if (stage !== 'closed') return
    setStage('opening')
    onOpen()
    window.setTimeout(() => setStage('gone'), 1900)
  }

  const opening = stage === 'opening'

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Wedding invitation envelope"
      className={cn('fixed inset-0 z-50 overflow-hidden', opening && 'pointer-events-none')}
    >
      <EnvelopeHalf side="left" open={opening} />
      <EnvelopeHalf side="right" open={opening} />

      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <button
          type="button"
          onClick={handleOpen}
          aria-label="Tap the wax seal to open the invitation"
          className={cn(
            'relative size-40 cursor-pointer overflow-hidden rounded-full shadow-[0_12px_30px_rgba(30,50,90,0.35)] outline-offset-8 transition-transform hover:scale-105 focus-visible:outline-2 focus-visible:outline-primary md:size-48',
            opening && 'animate-seal-pop',
          )}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/royal-seal.png"
            alt=""
            className="absolute left-1/2 top-1/2 w-[168%] max-w-none -translate-x-1/2 -translate-y-1/2"
          />
        </button>
        <p
          className={cn(
            'mt-8 animate-pulse-soft rounded-full bg-card/70 px-5 py-2 font-serif text-lg tracking-[0.3em] text-primary backdrop-blur-sm transition-opacity',
            opening && 'opacity-0',
          )}
        >
          TAP TO OPEN
        </p>
      </div>
    </div>
  )
}
