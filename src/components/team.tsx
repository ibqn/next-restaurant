"use client"

import { teamData } from "@/data"
import Image from "next/image"
import { motion } from "framer-motion"
import { Direction, fadeIn, staggerContainer } from "@/utils/variants"

export const Team = () => {
  const {
    title,
    pretitle,
    sub1,
    sub2,
    name,
    occupation,
    signatureImg,
    chefImg,
  } = teamData

  return (
    <section className="mt-14 min-h-[720px] lg:mt-28">
      <div className="container mx-auto">
        <motion.div
          variants={staggerContainer(0.3, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-col items-center lg:flex-row lg:items-start lg:gap-x-[120px]"
        >
          <motion.div
            variants={fadeIn(Direction.down, "tween", 0.6, 1.6)}
            className="flex-1 text-center lg:pt-[16px] lg:text-left"
          >
            <div className="pretitle">{pretitle}</div>
            <h2 className="h2 capitalize">{title}</h2>
            <p className="mb-[60px]">{sub1}</p>
            <p>{sub2}</p>
            <div className="my-[26px]">
              <div className="text-2xl font-semibold capitalize text-accent">
                {name}
              </div>
              <div className="text-[15px] font-semibold capitalize text-grey/70">
                {occupation}
              </div>
            </div>
            <div className="mb-8 flex justify-center lg:mb-0 lg:justify-start">
              <Image
                width={150}
                height={150}
                src={signatureImg}
                alt="signature"
              />
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn(Direction.up, "tween", 0.7, 1.6)}
            className="flex-1"
          >
            <Image width={440} height={440} src={chefImg} alt="Chef" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
