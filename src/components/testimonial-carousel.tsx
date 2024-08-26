"use client"

import Image from "next/image"
import { Slider } from "@/types"
import { Navigation } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/navigation"
import { cn } from "@/utils/class-names"

type Props = {
  slider: Slider[]
}

export const TestimonialCarousel = ({ slider }: Props) => {
  return (
    <Swiper
      spaceBetween={20}
      modules={[Navigation]}
      slidesPerView={1}
      navigation
      className={cn("flex w-full max-w-[840px] items-center justify-center")}
    >
      {slider.map((item, index) => {
        const { name, image, message, occupation } = item

        return (
          <SwiperSlide
            key={index}
            className="mx-auto flex max-w-[840px] flex-col px-24 text-center text-white"
          >
            <div className="mb-9 text-lg leading-snug lg:text-2xl">
              {message}
            </div>
            <div className="mx-auto mb-3 max-w-[70px] lg:max-w-[100px]">
              <Image src={image} alt={name} width={100} height={100} />
            </div>
            <div className="text-[22px] font-bold text-accent">{name}</div>
            <div className="font-medium italic">{occupation}</div>
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
}
