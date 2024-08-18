"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Socials } from "@/components/socials"
import { Nav } from "@/components/nav"
import { cn } from "@/utils/class-names"
import Image from "next/image"
import Link from "next/link"

const headerVariants = {
  hidden: {
    padding: "84px 0 84px 0",
    background: "transparent",
  },
  visible: {
    padding: "14px 0 14px 0",
    background: "rgba(0, 0, 0, 0.92)",
    transition: {
      type: "spring",
      duration: 0.5,
    },
  },
}

const navVariants = {
  hidden: {
    clipPath: "circle(5.8% at 50% 0)",
    opacity: 0,
    transition: {
      type: "spring",
      delay: 0.2,
      stiffness: 300,
      damping: 140,
    },
  },
  visible: {
    clipPath: "circle(130% at 50% 0)",
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 80,
    },
  },
}

export const Header = () => {
  const [isActive, setIsActive] = useState(false)
  const [navOpen, setNavOpen] = useState(false)

  const toggleNav = () => setNavOpen((prev) => !prev)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsActive(true)
      } else {
        setIsActive(false)
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <motion.header
      variants={headerVariants}
      initial="hidden"
      animate={isActive ? "visible" : "hidden"}
      className="fixed z-50 w-full max-w-[1800px] py-4"
    >
      <div className="container mx-auto">
        <div className="relative flex items-center justify-between px-4 text-white lg:px-0">
          <motion.div
            className={cn(
              navOpen ? "gap-y-0" : "gap-y-2",
              "order-2 flex size-12 cursor-pointer flex-col items-center justify-center rounded-full border-2 p-3 lg:order-none"
            )}
            onClick={toggleNav}
          >
            <motion.div
              initial={{ rotate: 0 }}
              animate={
                navOpen
                  ? { rotate: -45, translateY: 2 }
                  : { rotate: 0, translateY: 0 }
              }
              className="h-0.5 w-full bg-white"
            ></motion.div>
            <motion.div
              initial={{ rotate: 0 }}
              animate={navOpen ? { rotate: 45 } : { rotate: 0 }}
              className="h-0.5 w-full bg-white"
            ></motion.div>
          </motion.div>
          <Link href="/">
            <Image
              className={cn(isActive ? "size-[90px]" : "size-[107px]")}
              src="/img/header/logo-white.png"
              width={107}
              height={107}
              alt="logo"
            />
          </Link>
          <Socials className="hidden lg:flex" />
          <motion.div
            variants={navVariants}
            initial="hidden"
            animate={navOpen ? "visible" : "hidden"}
            className="absolute bottom-0 right-0 top-[120px] z-50 h-[50vh] w-[310px] rounded-lg bg-accent shadow-xl lg:left-0"
          >
            <Nav />
          </motion.div>
        </div>
      </div>
    </motion.header>
  )
}
