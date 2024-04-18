import express, { Router } from "express"
import { loginUser, logoutUser, signUpUser } from "../controllers/auth.controller.js"

const router=express.Router()

router.get("/login",loginUser)
router.get("/signup",signUpUser)
router.get("/logout",logoutUser)


export default router