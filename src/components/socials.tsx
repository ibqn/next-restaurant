import { cn } from "@/utils/class-names"
import { ComponentProps } from "react"

type Props = ComponentProps<"div">

export const Socials = ({ className, ...props }: Props) => {
  return (
    <div className={cn("", className)} {...props}>
      Socials
    </div>
  )
}
