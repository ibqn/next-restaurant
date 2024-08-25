"use client"

import { menuData } from "@/data"
import { cn } from "@/utils/class-names"
import Image from "next/image"
import { motion } from "framer-motion"
import { Direction, fadeIn, staggerContainer } from "@/utils/variants"

const galleryVariants = {
  hidden: {
    opacity: 0,
    y: 150,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "tween",
      delay: 0.2,
      duration: 1.6,
      ease: "easeOut",
    },
  },
}

export const Menu = () => {
  const { title, subtitle, modelImg, menuItems, btnText } = menuData
  return (
    <section className="flex min-h-[780px] flex-col">
      <motion.div
        variants={staggerContainer(0.1, 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="z-10 mt-72 flex-1 lg:mt-52"
      >
        <div className="container mx-auto flex flex-col items-center text-center">
          <motion.h2
            variants={fadeIn(Direction.down, "tween", 0.2, 1.6)}
            className="h2 max-w-[400px] capitalize text-white"
          >
            {title}
          </motion.h2>
          <motion.p
            variants={fadeIn(Direction.down, "tween", 0.4, 1.6)}
            className="mb-8 capitalize text-white/70"
          >
            {subtitle}
          </motion.p>
          <motion.div variants={fadeIn(Direction.down, "tween", 0.6, 1.6)}>
            <Image width={150} height={150} src={modelImg} alt="model" />
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="show"
        variants={galleryVariants}
        viewport={{ once: true }}
        className="z-10 mt-14 flex-1 lg:mt-20"
      >
        <div className="container mx-auto">
          <div className="z-30 mb-8 min-h-[590px] shadow-xl">
            <div className="grid min-h-[590px] grid-cols-1 lg:grid-cols-4">
              {menuItems.map((item, index) => {
                const { name, image, price, description } = item

                return (
                  <div key={index}>
                    <div className="flex h-full flex-row lg:flex-col">
                      <div
                        className={cn(
                          "w-[45%] md:w-auto",
                          index % 2 !== 0 ? "lg:order-1" : "order-none"
                        )}
                      >
                        <Image
                          width={300}
                          height={300}
                          src={image}
                          alt={name}
                        />
                      </div>

                      <div className="flex flex-1 flex-col justify-center bg-[#fff3e4] px-6 lg:max-h-[250px] lg:p-12 xl:max-h-max">
                        <div className="flex flex-col text-center">
                          <div className="text-xl font-semibold text-dark xl:text-2xl">
                            {name}
                          </div>
                          <div className="my-1 text-[20px] font-semibold text-accent lg:my-6 lg:text-[40px]">
                            {price}
                          </div>
                          <div>{description}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
          <button className="btn mx-auto capitalize">{btnText}</button>
        </div>
      </motion.div>

      <div className="absolute z-0 h-[780px] w-full max-w-[1800px] bg-menu"></div>
    </section>
  )
}
