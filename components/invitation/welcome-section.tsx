import Image from 'next/image'
import { wedding } from '@/lib/wedding'
import { Reveal } from './reveal'
import { HeartDivider } from './section-heading'

export function WelcomeSection() {
  return (
    <section id="welcome" className="flex flex-col items-center px-8 py-20 text-center">
      <Reveal className="flex max-w-md flex-col items-center">
        <Image
          src="/images/ganesha.png"
          alt="Lord Ganesha"
          width={704}
          height={384}
          className="h-28 w-22 object-cover brightness-[1.08] contrast-125 [mask-image:radial-gradient(ellipse_at_center,black_55%,transparent_72%)]"
        />
        <div className="mt-6">
          <HeartDivider />
        </div>
        <p className="mt-8 text-pretty text-2xl italic leading-relaxed text-primary">
          Some moments in life are meant to be shared with the people who have been a part of our
          journey.
        </p>
        <p className="mt-6 text-pretty text-xl italic leading-relaxed text-foreground/80">
          With grateful hearts and the blessings of our families, we,{' '}
          <span className="font-script text-3xl not-italic text-primary">
            {wedding.groom} &amp; {wedding.bride}
          </span>
          , are stepping into a beautiful new chapter together.
        </p>
        <p className="mt-6 text-pretty text-xl italic leading-relaxed text-foreground/80">
          And we would truly love to have you there to witness, celebrate and bless this beginning
          with us.
        </p>
        <div className="mt-10">
          <HeartDivider />
        </div>
      </Reveal>
    </section>
  )
}
