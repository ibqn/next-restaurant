"use client"

import { testimonialData } from "@/data"
import { TestimonialCarousel } from "@/components/testimonial-carousel"
import Image from "next/image"
import { motion } from "framer-motion"
import { Direction, fadeIn, staggerContainer } from "@/utils/variants"

export const Testimonial = () => {
  const { title, subtitle, modelImg, slider } = testimonialData

  return (
    <section className="relative z-10 -mt-14 min-h-[800px] bg-testimonial bg-no-repeat pt-36">
      <div className="container mx-auto">
        <motion.div
          variants={staggerContainer(0.3, 1.6)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-col"
        >
          <motion.div
            variants={fadeIn(Direction.up, "tween", 0.2, 1.6)}
            className="flex flex-col items-center text-center capitalize"
          >
            <h2 className="h2 text-white">{title}</h2>
            <p className="mb-8 capitalize text-white/70">{subtitle}</p>
            <div className="mb-12">
              <Image src={modelImg} alt="model" width={150} height={150} />
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn(Direction.up, "tween", 0.6, 1.6)}
            className="flex items-center justify-center"
          >
            <TestimonialCarousel slider={slider} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
