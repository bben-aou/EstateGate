import { useForm } from "react-hook-form";
import ControlledInput from "@components/inputs/controlledInputs/ControlledInput";
import RatingInput from "@components/inputs/rating/RatingInput";
import { InputType } from "@/interfaces/inputs/types";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { FormattedMessage, useIntl } from "react-intl";
import { useAddPropertyReviewMutation } from "@/hooks/property/addPropertyReview/useAddPropertyReviewMutation";
import { useAuth } from "@/providers/AuthProvider";
import { queryClient } from "@/providers/queryClient";
import { GET_PROPERTY_KEY } from "@/hooks/property/getPropertyQuery/useGetPropertyQuery";
import { TRatingForm } from "@/interfaces/responses/property";
import PropertyAddReviewSkeleton from "@components/loadingUi/propertyProfile/PropertyAddReviewSkelton";
import { toast } from "@/hooks/use-toast";
import { FaCheckCircle, FaExclamationCircle } from "react-icons/fa";
import { cn } from "@/lib/utils";
import { AxiosError } from "axios";

const PropertyAddReview = ({
  propertyId,
  isLoading = false,
}: {
  propertyId: string;
  isLoading?: boolean;
}) => {
  const { control, handleSubmit, reset } = useForm<TRatingForm>({
    defaultValues: {
      rating: 1,
      description: "",
    },
  });
  const intl = useIntl();

  const { addPropertyReview } = useAddPropertyReviewMutation({
    propertyId: propertyId,
    config: {
      onSuccess: () => {
        reset();
        queryClient.invalidateQueries({ queryKey: [GET_PROPERTY_KEY] });
        toast({
          title: intl.formatMessage({ id: "toast.addPropertyReview.title" }),
          variant: "default",
          description: intl.formatMessage({
            id: "toast.addPropertyReview.description",
          }),
          duration: 1500,
          action: <FaCheckCircle />,
          className: cn(
            "top-0 right-0  border-none flex fixed md:max-w-[420px] md:top-4 md:right-4 bg-typography-10 text-light-0"
          ),
        });
      },
      onError: (error) => {
        let errorMessage = intl.formatMessage({
          id: "toast.addPropertyReviewError.defaultMessage",
        });

        if (error instanceof AxiosError && error.response?.data?.message) {
          errorMessage = error.response.data.message;
        } else {
          errorMessage = error.message;
        }
        console.log(error);
        toast({
          title: intl.formatMessage({
            id: "toast.addPropertyReviewError.title",
          }),
          variant: "destructive",
          description: errorMessage,
          duration: 1700,
          action: <FaExclamationCircle />,
          className: cn(
            "top-0 right-0 border-none flex fixed md:max-w-[420px] md:top-4 md:right-4 bg-error-30 text-light-0"
          ),
        });
      },
    },
  });
  const { user } = useAuth();
  const handleAddPropertyReview = (data: TRatingForm) => {
    addPropertyReview({
      description: data.description,
      rating: data.rating,
      reviewOwnerId: user?.id ?? "",
    });
  };
  if (isLoading) {
    return <PropertyAddReviewSkeleton />;
  }
  return (
    <div className="px-[16px] py-[24px] ">
      <h1 className="text-[18px] text-typography-10 font-medium ">
        <FormattedMessage id="propertyReview.title" />
      </h1>
      <form onSubmit={handleSubmit(handleAddPropertyReview)}>
        <div className="flex flex-col justify-center">
          <div className="text-[16px] font-light text-typography-10 pt-[24px]">
            <FormattedMessage id="propertyReview.description" />
          </div>
          <div className="flex items-center  my-[25px]  gap-3">
            <h1 className="text-typography-10">
              <FormattedMessage id="propertyReview.overAllReviewTitle" />
            </h1>
            <ControlledInput
              name="rating"
              control={control}
              component={RatingInput}
              inputType={InputType.CUSTOM}
              rules={{ required: true }}
              inputProps={{
                onChange: () => {},
                onBlur: () => {},
              }}
            />
          </div>
          <h1 className="text-typography-10 mb-[10px]">
            <FormattedMessage id="propertyReview.subTitle" />
          </h1>
          <ControlledInput
            name="description"
            control={control}
            component={Textarea}
            inputType={InputType.TEXT}
            rules={{ required: true }}
            inputProps={{
              onChange: () => {},
              onBlur: () => {},
              maxLength: 500,
              className:
                "h-[200px] text-[16px] font-light text-typography-10 focus-visible:ring-topography-10 border-typography-10",
              placeholder: intl.formatMessage({
                id: "propertyReview.descriptionLabel",
              }),
            }}
          />
        </div>
        <Button className="bg-typography-10 text-white h-[40px] font-light w-[140px] mt-[15px] text-[15px] leading-5">
          <FormattedMessage id="propertyReview.saveReviewButtonLabel" />
        </Button>
      </form>
    </div>
  );
};
export default PropertyAddReview;
