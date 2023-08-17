import { ButtonPrimary } from "@/shared/components/button/primary/button-primary"
import { InputPrimary } from "@/shared/components/input/primary/button-primary"
import { Link } from "@/shared/components/link/link"

export const LoginForm = () => {
    return (
        <main className=" w-full min-h-[calc(100vh-3rem)] flex justify-center items-center">
            <div className=" min-w-[36rem] px-4 py-8 bg-slate-300 flex flex-col gap-6 rounded-md">
                <h1 className=" text-3xl">Login</h1>
                <h2>Login via username and password</h2>
                <form className="flex flex-col gap-4 mx-8">
                    <InputPrimary labelText="Username" />
                    <InputPrimary type="password" labelText="Password" />
                    <ButtonPrimary>Login</ButtonPrimary>
                </form>
                <div>
                    <span>Dont have an account?</span>
                    <Link href={"/auth/register"}>
                        Create one!
                    </Link>
                </div>

            </div>
        </main>
    )
}