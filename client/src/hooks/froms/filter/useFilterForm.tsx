import { FieldErrors, useForm } from "react-hook-form";
import { filterDefaultValues } from "./defaultValues";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  getIFilterTypeSchema,
  IFilterType,
} from "@/validators/filter/validators";
import { useIntl } from "react-intl";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import { BiSolidError } from "react-icons/bi";
import { findFirstErrorMessage } from "@/utils/findFirstErrorMessage";

const useFilterForm = () => {
  const intl = useIntl();
  const { toast } = useToast();

  const methods = useForm<IFilterType>({
    defaultValues: filterDefaultValues,
    resolver: zodResolver(getIFilterTypeSchema(intl)),
  });
  const {
    handleSubmit,
    watch,
    setValue,
    control,
    formState: { errors },
  } = methods;
  const onSubmit = (data: IFilterType) => {
    console.log("debug submission data ", data);
  };

  const onError = (errors: FieldErrors<IFilterType>) => {
    const errorMessage = findFirstErrorMessage(errors);
    if (errorMessage) {
      toast({
        title: intl.formatMessage({ id: "filter.toast.form.error.header" }),
        variant: "destructive",
        description: errorMessage,
        duration: 3000,
        action: <BiSolidError />,
        className: cn(
          "top-0 right-0 flex fixed md:max-w-[420px] md:top-4 md:right-4 "
        ),
      });
    }
  };

  return {
    methods,
    errors,
    handleSubmit,
    watch,
    setValue,
    control,
    onSubmit,
    onError,
  };
};
export default useFilterForm;
