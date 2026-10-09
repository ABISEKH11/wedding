import { CeremonySection } from '@/components/invitation/ceremony-section'
import { ClosingSection } from '@/components/invitation/closing-section'
import { HeroSection } from '@/components/invitation/hero-section'
import { Invitation } from '@/components/invitation/invitation'
import { SaveTheDate } from '@/components/invitation/save-the-date'
import { WelcomeSection } from '@/components/invitation/welcome-section'

export default function Page() {
  return (
    <Invitation>
      <HeroSection />
      <div className="relative bg-[url(/images/royal-paper.png)] bg-[length:100%_auto] bg-repeat-y">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-2 right-2 border-x-4 border-double border-primary/25"
        />
        <WelcomeSection />
        <SaveTheDate />
        <CeremonySection />
        <ClosingSection />
      </div>
    </Invitation>
  )
}
