import { FC, ReactNode } from "react"
import { MainHeader } from "../main-header"

interface MainLayoutProps {
    children: ReactNode
}

export const MainLayout: FC<MainLayoutProps> = ({children}) => {
    return (
        <>
            <MainHeader />
            {children}
        </>
    )
}