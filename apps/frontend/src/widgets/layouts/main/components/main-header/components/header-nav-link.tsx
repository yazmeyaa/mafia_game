import Link from "next/link"
import { FC, ReactNode } from "react"

interface HeaderNavLink {
    to: string
    children: ReactNode
}

export const HeaderNavLink: FC<HeaderNavLink> = ({children, to}) => {
    return (
        <li className="h-full flex items-center">
            <Link className="h-full flex items-center justify-center hover:bg-red-500 px-4 transition-all" href={to}>{children}</Link>
        </li>
    )

}