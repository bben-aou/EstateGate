// components/create-new-post/steps/PropertyPhotosBody.tsx
import ControlledInput from "@/components/inputs/controlledInputs/ControlledInput";
import { InputType } from "@/interfaces/inputs/types";
import { useFormContext } from "react-hook-form";
import UploadPhotos from "@components/create-new-post/steps/components/propertyPhotos/UploadPhotos";
import {
  DEFAULT_ALLOWED_TYPES,
  DEFAULT_MAX_FILES,
  DEFAULT_MAX_SIZE,
} from "@/constants/global/constants";
import { useParams } from "react-router-dom";

const PropertyPhotosBody = () => {
  const { control  } = useFormContext();
  const { propertyId = '' } = useParams<{ propertyId: string }>();

  return (
    <div className="py-[40px] px-[50px] h-[75%] flex flex-col items-center justify-center">
      <ControlledInput
        name="propertyPhotos"
        control={control}
        rules={{ required: true }}
        component={UploadPhotos}
        inputType={InputType.CUSTOM}
        inputProps={{
          propertyId: propertyId,
          maxFiles: DEFAULT_MAX_FILES,
          maxFileSize: DEFAULT_MAX_SIZE,
          allowedFileTypes: DEFAULT_ALLOWED_TYPES,
        }}
      />
    </div>
  );
};

export default PropertyPhotosBody;
