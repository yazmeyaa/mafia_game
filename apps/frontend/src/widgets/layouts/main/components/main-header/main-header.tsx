import Link from "next/link"
import { HeaderNavLink } from "./components"
import { UserCircle } from "@/widgets/user/user-circle/user-circle"

export const MainHeader = () => {
    return (
        <header className="app_header">
            <div>
                <Link href='/'>
                    <strong >Mafia</strong>
                </Link>
            </div>
            <nav >
                <ul >
                    <HeaderNavLink to="/">
                        Home
                    </HeaderNavLink>
                    <HeaderNavLink to="/about">
                        About
                    </HeaderNavLink>
                </ul>
            </nav>
            <UserCircle />
        </header>
    )
}