import { Router } from "express";
import { login } from "./login";
import { register } from "./register";

const router = Router()

router.route('/login').post(login)
router.route('/register').post(register)

export { router as authRouter }
