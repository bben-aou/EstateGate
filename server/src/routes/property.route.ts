import express from "express";
import { initializeProperty } from "@controllers/property.controller";
import { authenticateToken } from "@middleware/auth";

const router = express.Router();

router.post("/initialize", authenticateToken, initializeProperty);

export default router;
