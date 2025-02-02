import express from "express";
import { initializeProperty , getProperty , updateProperty, addPropertyReview} from "@controllers/property.controller";
import { authenticateToken } from "@middleware/auth";

const router = express.Router();

router.post("/initialize", authenticateToken, initializeProperty);
router.get("/:propertyId/getProperty", authenticateToken, getProperty);
router.put("/:propertyId/updateProperty", authenticateToken, updateProperty);
router.put('/:propertyId/addPropertyReview', authenticateToken, addPropertyReview)

export default router;
