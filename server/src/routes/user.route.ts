import express from "express";
import { authenticateToken } from "@middleware/auth";
import { getUser } from "@controllers/user.controller";

const router = express.Router();

router.get("/:userId/getUser", authenticateToken, getUser);

export default router;