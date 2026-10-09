'use client'

import { useRef, useState, type ReactNode } from 'react'
import { cn } from '@/lib/utils'
import { wedding } from '@/lib/wedding'
import { EnvelopeIntro } from './envelope-intro'
import { MusicToggle } from './music-toggle'

export function Invitation({ children }: { children: ReactNode }) {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [opened, setOpened] = useState(false)
  const [playing, setPlaying] = useState(false)
  const [musicAvailable, setMusicAvailable] = useState(false)

  const playMusic = () => {
    audioRef.current
      ?.play()
      .then(() => setPlaying(true))
      .catch(() => setPlaying(false))
  }

  const toggleMusic = () => {
    const audio = audioRef.current
    if (!audio) return
    if (audio.paused) {
      playMusic()
    } else {
      audio.pause()
      setPlaying(false)
    }
  }

  const handleOpen = () => {
    setOpened(true)
    playMusic()
  }

  return (
    <>
      <audio
        ref={audioRef}
        src={wedding.musicSrc}
        loop
        preload="auto"
        onLoadedData={() => setMusicAvailable(true)}
        onError={() => setMusicAvailable(false)}
      />
      {musicAvailable && <MusicToggle playing={playing} onToggle={toggleMusic} />}
      <EnvelopeIntro onOpen={handleOpen} />
      <main
        aria-hidden={!opened}
        className={cn(
          'transition-opacity duration-1000',
          opened ? 'opacity-100' : 'h-svh overflow-hidden opacity-0',
        )}
      >
        {children}
      </main>
    </>
  )
}
