'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils'

const REVEAL_THRESHOLD = 0.45

export function ScratchCard({
  label,
  value,
  onReveal,
}: {
  label: string
  value: string
  onReveal?: () => void
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const drawing = useRef(false)
  const [revealed, setRevealed] = useState(false)

  const reveal = useCallback(() => {
    setRevealed((prev) => {
      if (!prev) onReveal?.()
      return true
    })
  }, [onReveal])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    const { width, height } = canvas.getBoundingClientRect()
    const dpr = window.devicePixelRatio || 1
    canvas.width = width * dpr
    canvas.height = height * dpr
    ctx.scale(dpr, dpr)

    const gradient = ctx.createLinearGradient(0, 0, width, height)
    gradient.addColorStop(0, '#dbe5f2')
    gradient.addColorStop(0.5, '#a9bcd8')
    gradient.addColorStop(1, '#8aa3c8')
    ctx.fillStyle = gradient
    ctx.fillRect(0, 0, width, height)

    for (let i = 0; i < 260; i++) {
      ctx.fillStyle = `rgba(255,255,255,${Math.random() * 0.6})`
      ctx.fillRect(Math.random() * width, Math.random() * height, 1.5, 1.5)
    }

    ctx.fillStyle = 'rgba(31, 47, 77, 0.8)'
    ctx.textAlign = 'center'
    ctx.font = 'italic 18px Georgia, serif'
    ctx.fillText(label, width / 2, height / 2 - 6)
    ctx.font = '600 10px sans-serif'
    ctx.fillText('↑ SCRATCH', width / 2, height / 2 + 16)
  }, [label])

  const scratchAt = (clientX: number, clientY: number) => {
    const canvas = canvasRef.current
    const ctx = canvas?.getContext('2d')
    if (!canvas || !ctx) return
    const rect = canvas.getBoundingClientRect()
    ctx.globalCompositeOperation = 'destination-out'
    ctx.beginPath()
    ctx.arc(clientX - rect.left, clientY - rect.top, 20, 0, Math.PI * 2)
    ctx.fill()
  }

  const checkProgress = () => {
    const canvas = canvasRef.current
    const ctx = canvas?.getContext('2d')
    if (!canvas || !ctx) return
    const { data } = ctx.getImageData(0, 0, canvas.width, canvas.height)
    let cleared = 0
    for (let i = 3; i < data.length; i += 64) if (data[i] === 0) cleared++
    if (cleared / (data.length / 64) > REVEAL_THRESHOLD) reveal()
  }

  return (
    <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-accent bg-card shadow-sm">
      <div className="flex h-full flex-col items-center justify-center gap-1">
        <span className="font-sans text-[10px] tracking-[0.25em] text-muted-foreground">
          {label.toUpperCase()}
        </span>
        <strong
          className={cn(
            'font-serif font-medium text-primary',
            value.length > 4 ? 'text-xl md:text-2xl' : 'text-4xl md:text-5xl',
          )}
        >
          {value}
        </strong>
      </div>
      <canvas
        ref={canvasRef}
        role="button"
        tabIndex={revealed ? -1 : 0}
        aria-label={`Scratch to reveal ${label.toLowerCase()}`}
        aria-hidden={revealed}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault()
            reveal()
          }
        }}
        onPointerDown={(e) => {
          drawing.current = true
          e.currentTarget.setPointerCapture(e.pointerId)
          scratchAt(e.clientX, e.clientY)
        }}
        onPointerMove={(e) => {
          if (drawing.current) scratchAt(e.clientX, e.clientY)
        }}
        onPointerUp={() => {
          drawing.current = false
          checkProgress()
        }}
        onPointerCancel={() => {
          drawing.current = false
        }}
        className={cn(
          'absolute inset-0 size-full cursor-pointer touch-none transition-opacity duration-700',
          revealed && 'pointer-events-none opacity-0',
        )}
      />
    </div>
  )
}
