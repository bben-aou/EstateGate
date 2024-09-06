import { useForm } from "react-hook-form";
import { filterDefaultValues } from "./defaultValues";
import { IFilterType } from "@/interfaces/filter/types";

const useFilterForm = () => {
  const methods = useForm<IFilterType>({
    defaultValues: filterDefaultValues,
  });
  const { handleSubmit, watch, setValue, control } = methods;
  const onSubmit = (data: IFilterType) => {
    console.log("debug submission data ", data);
  };
  return {
    methods,
    handleSubmit,
    watch,
    setValue,
    control,
    onSubmit,
  };
};
export default useFilterForm;
