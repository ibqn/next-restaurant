import { About } from "@/components/about"
import { Footer } from "@/components/footer"
import { Hero } from "@/components/hero"
import { Menu } from "@/components/menu"
import { Reservation } from "@/components/reservation"
import { Team } from "@/components/team"
import { Testimonial } from "@/components/testimonial"

export default function Home() {
  return (
    <div className="mx-auto min-h-screen max-w-[1800px] overflow-hidden bg-pattern bg-repeat">
      <Hero />
      <About />
      <Menu />
      <Team />
      <Testimonial />
      <Reservation />
      <Footer />
    </div>
  )
}
