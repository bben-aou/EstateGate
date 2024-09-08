import { IFilterType } from "@/validators/filter/validators";
import { FieldErrors } from "react-hook-form";

  // Helper function to find the first error message in form's errors object
export const findFirstErrorMessage = (errors: FieldErrors<IFilterType>): string | null => {
    for (const key in errors) {
      const error = errors[key as keyof typeof errors];
      if (error) {
        if (
          typeof error === "object" &&
          "message" in error &&
          typeof error.message === "string"
        ) {
          return error.message;
        } else if (typeof error === "object") {
          for (const subKey in error) {
            const subError = error[subKey as keyof typeof error];
            if (
              subError &&
              typeof subError === "object" &&
              "message" in subError &&
              typeof subError.message === "string"
            ) {
              return subError.message;
            }
          }
        }
      }
    }
    return null;
  };