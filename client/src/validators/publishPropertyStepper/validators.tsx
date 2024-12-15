import { EPropertyAuthority } from "@/enums/ownership";
import { EPropertyType } from "@/enums/propertyType";
import { z } from "zod";

export const propertyFormSchema = z.object({
  propertyType: z.nativeEnum(EPropertyType),
  propertyAuthority: z.nativeEnum(EPropertyAuthority),

  propertyLocation: z.object({
    boundingbox: z.array(z.string()),
    lat: z.string().min(1, "Location is required, please select a location"),
    lon: z.string().min(1, "Location is required, please select a location"),
    display_name: z.string().min(1, "Location is required, please select a location"),
  }),

  propertyDetails: z.object({
    floors: z.number().min(1),
    bedrooms: z.number().min(1),
    bathrooms: z.number().min(1),
    garages: z.number().min(1),
    area: z.number().min(1),
  }),

  propertyFeatures: z.array(z.string()).min(1, "At least one feature is required"),
  propertyPhotos: z.array(
    z.object({
      file: z.any(),
      preview: z.string(),
      id: z.string(),
    })
  ).min(1, "At least one Photo is required"),

  propertyTitle: z.string().min(1, "Property title is required"),
  propertyDescription: z.string().min(1, "Property description is required"),
  price: z.string().min(3, "Property price must be greater than 100"),
});

export type PropertyFormSchema = z.infer<typeof propertyFormSchema>;
