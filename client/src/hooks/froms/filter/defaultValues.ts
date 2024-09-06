import { PropertyType } from "@/constants/propertyFilter/constants";

export const filterDefaultValues = {
  propertyActionType: PropertyType.BUY,
    location: {
      place_id: "",
      licence: "",
      osm_type: "",
      osm_id: "",
      boundingbox: [],
      lat: "",
      lon: "",
      display_name: "",
      class: "",
      type: "",
      importance: 0
    },
    propertyType : '',
    priceRange: {
      min: 0,
      max: 0,
    }
  }