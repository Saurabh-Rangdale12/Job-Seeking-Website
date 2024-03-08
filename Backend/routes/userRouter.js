import express from "express";
import { login, register, logout } from "../controller/userController.js";
import { isAuthorized } from "../middleware/auth.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/logout", isAuthorized, logout);

export default router;