"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRouter = void 0;
const express_1 = require("express");
const users_1 = require("./users");
const router = (0, express_1.Router)();
exports.authRouter = router;
router.use('/users', users_1.authUsersRouter);
