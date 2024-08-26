import { testimonialData } from "@/data"
import { TestimonialCarousel } from "@/components/testimonial-carousel"
import Image from "next/image"

export const Testimonial = () => {
  const { title, subtitle, modelImg, slider } = testimonialData

  return (
    <section className="relative z-10 -mt-14 min-h-[800px] bg-testimonial bg-no-repeat pt-36">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center capitalize">
          <h2 className="h2 text-white">{title}</h2>
          <p className="mb-8 capitalize text-white/70">{subtitle}</p>
          <div className="mb-12">
            <Image src={modelImg} alt="model" width={150} height={150} />
          </div>
        </div>

        <div className="flex items-center justify-center">
          <TestimonialCarousel slider={slider} />
        </div>
      </div>
    </section>
  )
}
