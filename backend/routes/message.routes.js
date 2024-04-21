import express from "express";
//import { getMessages, sendMessage } from "../controllers/message.controller.js";
import protectRoute from "../middleware/protectRoute.js";
import { sendMessage } from "../controllers/message.controller.js";

const router = express.Router();

router.get("/:id", protectRoute, (req,res)=>{
res.send("get chat")
});
router.post("/send/:id", protectRoute, sendMessage);

export default router;