import { Router } from "express";
import { login } from "./login";
import { register } from "./register";
import { checkAuth } from "./checkAuth";
import { refreshAuth } from "./refreshAuth";

const router = Router()

router.route('/login').post(login)
router.route('/register').post(register)
router.route('/check_auth').post(checkAuth)
router.route('/refresh_auth').get(refreshAuth)

export { router as authUsersRouter }
