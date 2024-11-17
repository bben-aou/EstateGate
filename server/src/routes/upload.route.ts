import express from "express";
import { authenticateToken } from "@middleware/auth";
import { upload } from "@config/multer.config";
import {
  uploadPhotos,
  getPhotos,
  setMainPhoto,
  deletePhoto,
} from "@controllers/upload.controller";
import { isPropertyOwner } from "@middleware/isPropertyOwner";
const router = express.Router();

// Upload photos for a property
router.post(
  "/:propertyId/photos",
  authenticateToken,
  isPropertyOwner,
  upload.array("photos", 10),
  uploadPhotos
);

// Get all photos for a property
router.get("/:propertyId/photos", getPhotos);

// Set main photo
router.put(
  "/:propertyId/photos/:photoId/main",
  authenticateToken,
  isPropertyOwner,
  setMainPhoto
);

// Delete photo
router.delete(
  "/:propertyId/photos/:photoId",
  authenticateToken,
  isPropertyOwner,
  deletePhoto
);

export default router;
