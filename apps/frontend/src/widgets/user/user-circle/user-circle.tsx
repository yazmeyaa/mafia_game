import Image from "next/image"

export const UserCircle = () => {
    return (
            <Image
                width={45}
                height={45}
                alt="Profile avatar"
                src="https://static.wikia.nocookie.net/avatar/images/5/53/Miyuki.png"
                className=" rounded-full aspect-square"
            />
        )
}