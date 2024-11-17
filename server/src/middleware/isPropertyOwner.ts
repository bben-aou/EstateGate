import { Request, Response, NextFunction } from "express";
import prisma from "@lib/prisma";

export const validatePropertyId = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { propertyId } = req.params;

    if (!propertyId) {
      return res.status(400).json({
        message: "Property ID is required",
      });
    }

    // Check if propertyId is a valid MongoDB ObjectId
    if (!/^[0-9a-fA-F]{24}$/.test(propertyId)) {
      return res.status(400).json({
        message: "Invalid property ID format",
      });
    }

    next();
  } catch (error) {
    res.status(500).json({
      message: "Error validating property ID",
    });
  }
};

export const isPropertyOwner = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { propertyId } = req.params;
    const userId = req.userId;

    const property = await prisma.property.findUnique({
      where: {
        id: propertyId,
      },
      select: {
        ownerId: true,
      },
    });

    if (!property) {
      return res.status(404).json({
        message: "Property not found",
      });
    }

    if (property.ownerId !== userId) {
      return res.status(403).json({
        message: "Not authorized - you don't own this property",
      });
    }

    // Attach property to request for later use if needed
    req.property = property;
    next();
  } catch (error) {
    console.error("Property ownership check error:", error);
    res.status(500).json({
      message: "Error checking property ownership",
    });
  }
};

// Optional: Middleware to validate photo limits
export const validatePhotoLimits = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { propertyId } = req.params;
    const files = req.files as Express.Multer.File[];

    // Check current number of photos
    const currentPhotoCount = await prisma.propertyPhoto.count({
      where: {
        propertyId,
      },
    });

    const MAX_PHOTOS = 10;
    if (currentPhotoCount + files.length > MAX_PHOTOS) {
      return res.status(400).json({
        message: `Cannot upload more photos. Maximum ${MAX_PHOTOS} photos allowed per property`,
      });
    }

    next();
  } catch (error) {
    console.error("Photo limit check error:", error);
    res.status(500).json({
      message: "Error checking photo limits",
    });
  }
};

// Extend Express Request type to include property
declare global {
  namespace Express {
    interface Request {
      property?: {
        ownerId: string;
        [key: string]: any;
      };
    }
  }
}
