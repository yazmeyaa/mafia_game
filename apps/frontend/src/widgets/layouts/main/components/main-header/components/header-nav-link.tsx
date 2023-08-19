import Link from "next/link"
import { FC, ReactNode } from "react"

interface HeaderNavLink {
    to: string
    children: ReactNode
}

export const HeaderNavLink: FC<HeaderNavLink> = ({children, to}) => {
    return (
        <li>
            <Link  href={to}>{children}</Link>
        </li>
    )

}