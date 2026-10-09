import { Heart } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export function HeartDivider() {
  return (
    <div className="flex items-center justify-center gap-3 text-primary/60" aria-hidden="true">
      <span className="h-px w-16 bg-primary/30" />
      <Heart className="size-3 fill-current" />
      <span className="h-px w-16 bg-primary/30" />
    </div>
  )
}

export function SectionHeading({ title, icon: Icon }: { title: string; icon?: LucideIcon }) {
  return (
    <div className="flex flex-col items-center">
      {Icon && <Icon className="mb-2 size-7 text-primary" aria-hidden="true" />}
      <h2 className="text-balance font-display text-5xl text-primary">{title}</h2>
      <div className="mt-4">
        <HeartDivider />
      </div>
    </div>
  )
}
