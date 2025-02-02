import { Request, Response } from "express";
import prisma from "@lib/prisma";
import { PropertyType, OwnershipType, PropertyFeature } from "@prisma/client";

// Initialize property
export const initializeProperty = async (req: Request, res: Response) => {
  try {
    const existingDraftProperty = await prisma.property.findFirst({
      where: {
        ownerId: req.userId!,
        title: "Draft Property",
      },
      include: {
        owner: {
          select: {
            id: true,
            firstName: true,
            lastName: true,
            email: true,
            phoneNumber: true,
          },
        },
      },
    });

    if (existingDraftProperty) {
      return res.status(200).json({
        message: "Draft property already exists",
        property: existingDraftProperty,
      });
    }

    // If no draft exists, create a new one
    const property = await prisma.property.create({
      data: {
        owner: {
          connect: {
            id: req.userId!,
          },
        },
        title: "Draft Property",
        propertyType: PropertyType.HOUSE,
        ownershipType: OwnershipType.OWNER,
        price: 0,
        address: "",
        city: "",
        state: "",
        country: "",
        description: "",
        totalFloors: 0,
        bedrooms: 0,
        bathrooms: 0,
        garages: 0,
        squareMeters: 0,
        features: [],
        reviews: { create: [] },
        averageRating: 1,
      },
      include: {
        owner: {
          select: {
            id: true,
            firstName: true,
            lastName: true,
            email: true,
            phoneNumber: true,
          },
        },
      },
    });

    return res.status(201).json({
      message: "Property draft created successfully",
      property,
    });
  } catch (error) {
    console.error("Error creating property:", error);
    return res.status(500).json({
      message: "Failed to create property",
    });
  }
};
// Upload property photos
export const uploadPropertyPhotos = async (req: Request, res: Response) => {
  try {
    const files = req.files as Express.Multer.File[];
    const { propertyId } = req.params;

    if (!files || files.length === 0) {
      return res.status(400).json({ message: "No files uploaded" });
    }

    // Get current photo count
    const currentPhotos = await prisma.propertyPhoto.count({
      where: { propertyId },
    });

    // Create photo records
    const photos = await Promise.all(
      files.map((file, index) =>
        prisma.propertyPhoto.create({
          data: {
            propertyId,
            fileName: file.filename,
            originalName: file.originalname,
            path: `/uploads/${file.filename}`,
            mimetype: file.mimetype,
            size: file.size,
            isMainPhoto: currentPhotos === 0 && index === 0, // First photo of property is main
          },
        })
      )
    );

    res.status(200).json({
      message: "Photos uploaded successfully",
      photos,
    });
  } catch (error) {
    console.error("Error uploading photos:", error);
    res.status(500).json({ message: "Failed to upload photos" });
  }
};

// Update property

export const updateProperty = async (req: Request, res: Response) => {
  try {
    // Get property ID from params
    const { propertyId } = req.params;
    console.log("Property ID : ", propertyId);

    // Get update data from body
    const updateData = req.body;

    // Check if property exists
    const existingProperty = await prisma.property.findUnique({
      where: { id: propertyId },
    });

    if (!existingProperty) {
      return res.status(404).json({
        message: "Property not found",
        propertyId,
      });
    }

    const features: PropertyFeature[] =
      updateData.features as PropertyFeature[];

    // Update property
    const property = await prisma.property.update({
      where: { id: propertyId },
      data: {
        // Basic info
        title: updateData.title,
        description: updateData.description,
        propertyType: updateData.propertyType as PropertyType,
        ownershipType: updateData.ownershipType as OwnershipType,
        price: parseFloat(updateData.price),

        // Location info
        address: updateData.address,
        city: updateData.city || "",
        state: updateData.state || "",
        zipCode: updateData.zipCode || "",
        country: updateData.country || "",
        latitude: updateData.latitude ? parseFloat(updateData.latitude) : null,
        longitude: updateData.longitude
          ? parseFloat(updateData.longitude)
          : null,

        // Property details
        totalFloors: parseInt(updateData.totalFloors),
        bedrooms: parseInt(updateData.bedrooms),
        bathrooms: parseInt(updateData.bathrooms),
        garages: parseInt(updateData.garages),
        squareMeters: parseFloat(updateData.squareMeters),
        yearBuilt: updateData.yearBuilt ? parseInt(updateData.yearBuilt) : null,

        // Features as array
        features: features,
      },
      include: {
        photos: true,
        owner: {
          select: {
            id: true,
            firstName: true,
            lastName: true,
            email: true,
            phoneNumber: true,
          },
        },
        reviews: {
          include: {
            user: {
              select: {
                id: true,
                firstName: true,
                lastName: true,
                avatar: true,
              },
            },
          },
        },
      },
    });

    // Send success response
    res.status(200).json({
      message: "Property updated successfully",
      property,
    });
  } catch (error) {
    // Log the full error for debugging
    console.error("Error updating property:", error);

    // Send error response
    res.status(500).json({
      message: "Failed to update property",
      error: (error as Error).message,
    });
  }
};
// Get property
export const getProperty = async (req: Request, res: Response) => {
  try {
    const { propertyId } = req.params;

    const property = await prisma.property.findUnique({
      where: { id: propertyId },
      include: {
        photos: true,
        owner: {
          select: {
            id: true,
            firstName: true,
            lastName: true,
            email: true,
            phoneNumber: true,
            avatar: true,
            createdAt: true,
          },
        },
        reviews: {
          include: {
            user: {
              select: {
                id: true,
                firstName: true,
                lastName: true,
                avatar: true,
                createdAt: true,
              },
            },
          },
        },
      },
    });

    if (!property) {
      return res.status(404).json({ message: "Property not found" });
    }

    res.status(200).json({
      property,
    });
  } catch (error) {
    console.error("Error fetching property:", error);
    res.status(500).json({ message: "Failed to fetch property" });
  }
};

// Delete photo
export const deletePropertyPhoto = async (req: Request, res: Response) => {
  try {
    const { photoId } = req.params;

    const deletedPhoto = await prisma.propertyPhoto.delete({
      where: { id: photoId },
    });

    res.status(200).json({
      message: "Photo deleted successfully",
      deletedPhoto,
    });
  } catch (error) {
    console.error("Error deleting photo:", error);
    res.status(500).json({ message: "Failed to delete photo" });
  }
};

// Update main photo
export const updateMainPhoto = async (req: Request, res: Response) => {
  try {
    const { propertyId, photoId } = req.params;

    // First, remove main photo status from all photos
    await prisma.propertyPhoto.updateMany({
      where: { propertyId },
      data: { isMainPhoto: false },
    });

    // Set new main photo
    const updatedPhoto = await prisma.propertyPhoto.update({
      where: { id: photoId },
      data: { isMainPhoto: true },
    });

    res.status(200).json({
      message: "Main photo updated successfully",
      photo: updatedPhoto,
    });
  } catch (error) {
    console.error("Error updating main photo:", error);
    res.status(500).json({ message: "Failed to update main photo" });
  }
};

export const addPropertyReview = async (req: Request, res: Response) => {
  try {
    const { propertyId } = req.params;
    const { rating, description, reviewOwnerId } = req.body;
    const userId = reviewOwnerId;
    // Input validation
    if (!rating || !description) {
      return res.status(400).json({
        success: false,
        message: "Rating and description are required",
      });
    }

    if (rating < 1 || rating > 5) {
      return res.status(400).json({
        success: false,
        message: "Rating must be between 1 and 5",
      });
    }

    if (description.length > 500) {
      return res.status(400).json({
        success: false,
        message: "Description must not exceed 500 characters",
      });
    }

    // Check if property exists
    const property = await prisma.property.findUnique({
      where: { id: propertyId },
    });

    if (!property) {
      return res.status(404).json({
        success: false,
        message: "Property not found",
      });
    }

    // Don't allow property owner to review their own property
    if (property.ownerId === userId) {
      return res.status(400).json({
        success: false,
        message: "You cannot review your own property",
      });
    }

    // Use transaction to create review and update average rating
    const result = await prisma.$transaction(async (tx) => {
      // Create the review
      const newReview = await tx.review.create({
        data: {
          rating,
          description,
          property: { connect: { id: propertyId } },
          user: { connect: { id: userId } },
        },
        include: {
          user: {
            select: {
              id: true,
              firstName: true,
              lastName: true,
              avatar: true,
              createdAt: true,
            },
          },
        },
      });

      // Calculate new average rating
      const allReviews = await tx.review.findMany({
        where: { propertyId },
      });

      const averageRating =
        allReviews.reduce((sum, review) => sum + review.rating, 0) /
        allReviews.length;

      // Update property with new average rating
      await tx.property.update({
        where: { id: propertyId },
        data: { averageRating },
      });

      return { newReview, averageRating };
    });

    return res.status(200).json({
      success: true,
      message: "Review added successfully",
      data: {
        review: result.newReview,
        propertyAverageRating: result.averageRating,
      },
    });
  } catch (error) {
    // Handle unique constraint violation (user already reviewed)
    if (
      error instanceof Error &&
      typeof (error as any).code === "string" &&
      (error as any).code === "P2002"
    ) {
      return res.status(400).json({
        success: false,
        message: "You have already reviewed this property",
      });
    }

    console.error("Error adding property review:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};
