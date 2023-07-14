import { Router } from "express";
import { authUsersRouter } from "./users";

const router = Router()

router.use('/users', authUsersRouter)

export { router as authRouter }
