import { navData } from "@/data"
import Link from "next/link"

export const Nav = () => {
  return (
    <nav className="flex flex-1">
      <ul className="flex flex-1 flex-col items-center justify-center gap-y-6">
        {navData.map((item, index) => {
          return (
            <li key={index}>
              <Link
                className="font-primary text-xl capitalize italic transition-all duration-300 hover:text-dark"
                href={item.href}
              >
                {item.name}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
