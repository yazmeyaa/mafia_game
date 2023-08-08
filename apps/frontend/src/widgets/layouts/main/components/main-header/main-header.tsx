import Link from "next/link"
import { HeaderNavLink } from "./components"

export const MainHeader = () => {
    return (
        <header className=" flex items-center px-8 h-12 gap-8 bg-red-900 text-stone-200">
            <div>
                <Link href='/'>
                    <strong className=" text-lg">Mafia</strong>
                </Link>
            </div>
                <nav className="flex h-full items-center">
                    <ul className="flex items-center h-full gap-1">
                        <HeaderNavLink to="/">
                            Home
                        </HeaderNavLink>
                        <HeaderNavLink to="/about">
                            About
                        </HeaderNavLink>
                    </ul>
                </nav>
        </header>
    )
}