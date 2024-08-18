"use client"

import { heroData } from "@/data"
import { Header } from "./header"
import { motion } from "framer-motion"
import { Direction, fadeIn, staggerContainer } from "@/utils/variants"

export const Hero = () => {
  const { pretitle, title, subtitle, btnText } = heroData

  return (
    <section className="flex min-h-[980px] flex-col bg-hero bg-cover bg-right">
      <Header />
      <div className="flex flex-1 bg-gradient-to-b from-black/20">
        <div className="container mx-auto flex flex-1 items-center justify-center">
          <motion.div
            variants={staggerContainer(0.3, 1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center"
          >
            <motion.div
              variants={fadeIn(Direction.up, "tween", 0.2, 1.1)}
              className="mb-1 font-primary text-[24px] italic text-white lg:text-[28px] lg:font-medium"
            >
              {pretitle}
            </motion.div>
            <motion.h1
              variants={fadeIn(Direction.up, "tween", 0.3, 1.1)}
              className="h1 mb-5"
            >
              {title}
            </motion.h1>
            <motion.p
              variants={fadeIn(Direction.up, "tween", 0.4, 1.1)}
              className="mb-8 max-w-[540px] text-white"
            >
              {subtitle}
            </motion.p>
            <motion.div variants={fadeIn(Direction.up, "tween", 0.5, 1.1)}>
              <button className="btn">{btnText}</button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
