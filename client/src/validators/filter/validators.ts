import { z } from "zod";
import { IntlShape } from "react-intl";

const getLocationDataSchema = (intl: IntlShape) =>
  z.object({
    place_id: z.string(),
    licence: z.string(),
    osm_type: z.string(),
    osm_id: z.string(),
    boundingbox: z.array(z.string()),
    lat: z.string(),
    lon: z.string(),
    display_name: z.string().nonempty(
      intl.formatMessage({
        id: "filter.input.location.validation.required.message.error",
      })
    ),
    class: z.string(),
    type: z.string(),
    importance: z.number(),
    icon: z.string().optional(),
  });

export const getIFilterTypeSchema = (intl: IntlShape) =>
  z.object({
    propertyActionType: z.string().nonempty(
      intl.formatMessage({
        id: "filter.select.propertyAction.validation.required.message.error",
      })
    ),
    location: getLocationDataSchema(intl),
    propertyType: z.string().nonempty(
      intl.formatMessage({
        id: "filter.input.propertyType.validation.required.message.error",
      })
    ),
    priceRange: z.object({
      min: z.number().min(0),
      max: z.number().min(0),
    }),
  });

export type IFilterType = z.infer<ReturnType<typeof getIFilterTypeSchema>>;
