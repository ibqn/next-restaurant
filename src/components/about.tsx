"use client"

import { aboutData } from "@/data"
import Image from "next/image"
import { motion } from "framer-motion"
import {
  Direction,
  fadeIn,
  plateVariants,
  staggerContainer,
} from "@/utils/variants"

export const About = () => {
  const { pretitle, title, subtitle, btnText, image } = aboutData

  return (
    <section className="flex min-h-[620px]">
      <div className="container mx-auto flex flex-1">
        <motion.div
          variants={staggerContainer(0.3, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-1 flex-col items-center lg:flex-row"
        >
          <motion.div
            variants={fadeIn(Direction.right, "tween", 0.2, 1.8)}
            className="flex-1 text-center lg:text-left"
          >
            <div className="pretitle">{pretitle}</div>
            <h2 className="h2 capitalize">{title}</h2>
            <p className="mb-8 max-w-[560px]">{subtitle}</p>
            <button className="btn mx-auto capitalize lg:mx-0">
              {btnText}
            </button>
          </motion.div>
          <motion.div
            variants={plateVariants}
            className="z-10 -mb-[300px] -mr-[186px]"
          >
            <Image width={800} height={800} src={image} alt="about" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
