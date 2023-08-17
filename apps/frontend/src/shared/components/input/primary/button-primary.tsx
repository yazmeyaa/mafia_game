import { ComponentProps, ComponentPropsWithoutRef, InputHTMLAttributes } from "react"


interface InputProps extends ComponentPropsWithoutRef<"input"> {
    labelText?: string
}

export const InputPrimary = ({ labelText, ...rest }: InputProps) => {
    return (
        <label className="flex flex-col gap-1" >
            {labelText && <span>{labelText}</span>}
            <input className=" px-4 py-2 rounded-lg focus:border-red-400 focus:border-1 focus:border-solid" {...rest} />
        </label>
    )
}