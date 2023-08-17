import Link, { LinkProps } from "next/link"
import { ReactNode } from "react"


const CustomLink = (props: LinkProps & { children: ReactNode }) => {
    return (
        <Link className="mx-1 underline text-blue-800" {...props}>
            {props.children}
        </Link>
    )
}

export { CustomLink as Link }