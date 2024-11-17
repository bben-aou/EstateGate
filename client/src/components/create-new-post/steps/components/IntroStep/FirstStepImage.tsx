import Spinner from "@/components/common/Spinner";
import SuspenseImage from "@/components/common/SuspenseImage";
import { TFirstSteepImage } from "@/interfaces/components/createNewPost/types";

const FirstStepImage = (props : TFirstSteepImage) => {
    const { img, alt } = props;
  return (
    <div className="w-[40%] flex items-center">
      <SuspenseImage
        src={img}
        alt={alt ?? "image"}
        Skeleton={
          <Spinner
            containerClassName=" w-full h-full flex items-center justify-center"
            spinnerStyle="fill-light-60"
          />
        }
      />
    </div>
  );
};
export default FirstStepImage;
