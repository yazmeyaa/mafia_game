import { ComponentPropsWithoutRef } from "react"

interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
}


export const ButtonPrimary = ({ ...rest }: ButtonProps) => {
    return (
        <button className="px-4 py-2 bg-red-400 text-slate-900 rounded-md hover:bg-red-800 transition-all hover:text-slate-100"  {...rest}>
            {rest.children}
        </button>
    )
}