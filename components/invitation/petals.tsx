const PETALS = [
  { left: 6, size: 14, duration: 11, delay: 0 },
  { left: 18, size: 10, duration: 14, delay: 3 },
  { left: 30, size: 16, duration: 12, delay: 6 },
  { left: 44, size: 11, duration: 15, delay: 1.5 },
  { left: 56, size: 18, duration: 13, delay: 4.5 },
  { left: 68, size: 12, duration: 10, delay: 7 },
  { left: 80, size: 15, duration: 14, delay: 2 },
  { left: 92, size: 10, duration: 12, delay: 5 },
  { left: 38, size: 13, duration: 16, delay: 8.5 },
  { left: 74, size: 9, duration: 11, delay: 9.5 },
]

export function Petals() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      {PETALS.map((petal, i) => (
        <span
          key={i}
          className="animate-petal absolute -top-6 rounded-[60%_0_60%_0] bg-gradient-to-br from-[#9fb8dc] to-[#5d7fb5] opacity-0 shadow-sm"
          style={{
            left: `${petal.left}%`,
            width: petal.size,
            height: petal.size * 0.75,
            animationDuration: `${petal.duration}s`,
            animationDelay: `${petal.delay}s`,
          }}
        />
      ))}
    </div>
  )
}
