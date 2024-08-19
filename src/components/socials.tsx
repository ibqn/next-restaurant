import { socialData } from "@/data"
import { cn } from "@/utils/class-names"
import { ComponentProps } from "react"

type Props = ComponentProps<"div">

export const Socials = ({ className, ...props }: Props) => {
  return (
    <div className={cn("flex gap-x-[10px]", className)} {...props}>
      {socialData.map((item, index) => {
        return (
          <a
            className="flex size-[35px] items-center justify-center rounded-full border border-white/20 text-sm transition-all hover:border-accent hover:text-accent"
            key={index}
            href={item.href}
          >
            {item.icon}
          </a>
        )
      })}
    </div>
  )
}
