import { Request, Response } from 'express';
import prisma from "@lib/prisma";
import { PropertyType, OwnershipType } from '@prisma/client';

// Initialize property
export const initializeProperty = async (req: Request, res: Response) => {
  try {
    const property = await prisma.property.create({
      data: {
        ownerId: req.userId!,
        title: "Draft Property",
        propertyType: "HOUSE",
        ownershipType: "SALE",
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
        squareMeters: 0
      }
    });

    res.status(201).json({
      message: 'Property draft created successfully',
      property
    });
  } catch (error) {
    console.error('Error creating property:', error);
    res.status(500).json({ message: 'Failed to create property' });
  }
};

// Upload property photos
export const uploadPropertyPhotos = async (req: Request, res: Response) => {
  try {
    const files = req.files as Express.Multer.File[];
    const { propertyId } = req.params;

    if (!files || files.length === 0) {
      return res.status(400).json({ message: 'No files uploaded' });
    }

    // Get current photo count
    const currentPhotos = await prisma.propertyPhoto.count({
      where: { propertyId }
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
            isMainPhoto: currentPhotos === 0 && index === 0 // First photo of property is main
          }
        })
      )
    );

    res.status(200).json({
      message: 'Photos uploaded successfully',
      photos
    });
  } catch (error) {
    console.error('Error uploading photos:', error);
    res.status(500).json({ message: 'Failed to upload photos' });
  }
};

// Update property
export const updateProperty = async (req: Request, res: Response) => {
  try {
    const { propertyId } = req.params;
    const updateData = req.body;

    const property = await prisma.property.update({
      where: { id: propertyId },
      data: {
        title: updateData.title,
        description: updateData.description,
        propertyType: updateData.propertyType as PropertyType,
        ownershipType: updateData.ownershipType as OwnershipType,
        price: parseFloat(updateData.price),
        address: updateData.address,
        city: updateData.city,
        state: updateData.state,
        zipCode: updateData.zipCode,
        country: updateData.country,
        latitude: updateData.latitude ? parseFloat(updateData.latitude) : null,
        longitude: updateData.longitude ? parseFloat(updateData.longitude) : null,
        totalFloors: parseInt(updateData.totalFloors),
        bedrooms: parseInt(updateData.bedrooms),
        bathrooms: parseInt(updateData.bathrooms),
        garages: parseInt(updateData.garages),
        squareMeters: parseFloat(updateData.squareMeters),
        yearBuilt: updateData.yearBuilt ? parseInt(updateData.yearBuilt) : null,
        hasPool: updateData.hasPool || false,
        hasGarden: updateData.hasGarden || false,
        hasSecurity: updateData.hasSecurity || false,
        hasAirConditioning: updateData.hasAirConditioning || false,
        hasCentralHeating: updateData.hasCentralHeating || false,
        hasInternet: updateData.hasInternet || false,
        isFurnished: updateData.isFurnished || false,
      },
      include: {
        photos: true,
        owner: {
          select: {
            id: true,
            firstName: true,
            lastName: true,
            email: true,
            phoneNumber: true
          }
        }
      }
    });

    res.status(200).json({
      message: 'Property updated successfully',
      property
    });
  } catch (error) {
    console.error('Error updating property:', error);
    res.status(500).json({ message: 'Failed to update property' });
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
            phoneNumber: true
          }
        }
      }
    });

    if (!property) {
      return res.status(404).json({ message: 'Property not found' });
    }

    res.status(200).json({
      property
    });
  } catch (error) {
    console.error('Error fetching property:', error);
    res.status(500).json({ message: 'Failed to fetch property' });
  }
};

// Delete photo
export const deletePropertyPhoto = async (req: Request, res: Response) => {
  try {
    const { photoId } = req.params;

    const deletedPhoto = await prisma.propertyPhoto.delete({
      where: { id: photoId }
    });

    res.status(200).json({
      message: 'Photo deleted successfully',
      deletedPhoto
    });
  } catch (error) {
    console.error('Error deleting photo:', error);
    res.status(500).json({ message: 'Failed to delete photo' });
  }
};

// Update main photo
export const updateMainPhoto = async (req: Request, res: Response) => {
  try {
    const { propertyId, photoId } = req.params;

    // First, remove main photo status from all photos
    await prisma.propertyPhoto.updateMany({
      where: { propertyId },
      data: { isMainPhoto: false }
    });

    // Set new main photo
    const updatedPhoto = await prisma.propertyPhoto.update({
      where: { id: photoId },
      data: { isMainPhoto: true }
    });

    res.status(200).json({
      message: 'Main photo updated successfully',
      photo: updatedPhoto
    });
  } catch (error) {
    console.error('Error updating main photo:', error);
    res.status(500).json({ message: 'Failed to update main photo' });
  }
};