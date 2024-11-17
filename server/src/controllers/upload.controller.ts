import { Request, Response } from "express";
import prisma from "@lib/prisma";

export const uploadPhotos = async (req: Request, res: Response) => {
  try {
    const files = req.files as Express.Multer.File[];
    const { propertyId } = req.params; // Get propertyId from URL params instead of body

    if (!files || files.length === 0) {
      return res.status(400).json({ message: "No files uploaded" });
    }

    // Verify if property exists
    const property = await prisma.property.findUnique({
      where: { id: propertyId }
    });

    if (!property) {
      return res.status(404).json({ message: "Property not found" });
    }

    // Get current photos count to determine main photo
    const currentPhotos = await prisma.propertyPhoto.count({
      where: { propertyId }
    });

    // Create database records for each uploaded file
    const uploadedPhotos = await Promise.all(
      files.map(async (file, index) => {
        return await prisma.propertyPhoto.create({
          data: {
            fileName: file.filename,
            originalName: file.originalname,
            path: `/uploads/${file.filename}`,
            mimetype: file.mimetype,
            size: file.size,
            isMainPhoto: currentPhotos === 0 && index === 0,
            property: {
              connect: {
                id: propertyId
              }
            }
          }
        });
      })
    );

    res.status(200).json({
      message: "Files uploaded and saved to database successfully",
      photos: uploadedPhotos
    });
  } catch (error) {
    console.error("Upload error:", error);
    res.status(500).json({ message: "Error uploading files" });
  }
};

export const getPhotos = async (req: Request, res: Response) => {
  try {
    const { propertyId } = req.params;

    const photos = await prisma.propertyPhoto.findMany({
      where: {
        propertyId
      },
      orderBy: {
        uploadedAt: "desc"
      }
    });

    res.status(200).json(photos);
  } catch (error) {
    console.error("Error fetching photos:", error);
    res.status(500).json({ message: "Error fetching photos" });
  }
};

// Add a method to handle main photo
export const setMainPhoto = async (req: Request, res: Response) => {
  try {
    const { propertyId, photoId } = req.params;

    // First, unset any existing main photo
    await prisma.propertyPhoto.updateMany({
      where: {
        propertyId,
        isMainPhoto: true
      },
      data: {
        isMainPhoto: false
      }
    });

    // Set the new main photo
    const mainPhoto = await prisma.propertyPhoto.update({
      where: {
        id: photoId
      },
      data: {
        isMainPhoto: true
      }
    });

    res.status(200).json({
      message: "Main photo updated successfully",
      photo: mainPhoto
    });
  } catch (error) {
    console.error("Error setting main photo:", error);
    res.status(500).json({ message: "Error setting main photo" });
  }
};

// Delete photo
export const deletePhoto = async (req: Request, res: Response) => {
  try {
    const { photoId } = req.params;

    const deletedPhoto = await prisma.propertyPhoto.delete({
      where: {
        id: photoId
      }
    });

    res.status(200).json({
      message: "Photo deleted successfully",
      photo: deletedPhoto
    });
  } catch (error) {
    console.error("Error deleting photo:", error);
    res.status(500).json({ message: "Error deleting photo" });
  }
};