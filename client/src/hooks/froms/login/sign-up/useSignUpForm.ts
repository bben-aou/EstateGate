import {
  getSignUpValidators,
  ISignUpType,
} from "@/validators/login/sign-up/validators";
import { useForm } from "react-hook-form";
import { useIntl } from "react-intl";
import { signInDefaultValues } from "@/hooks/froms/login/sign-up/defaultValues";
import { zodResolver } from "@hookform/resolvers/zod";

export const useSignUpForm = () => {
  const intl = useIntl();
  const methods = useForm<ISignUpType>({
    defaultValues: signInDefaultValues,
    resolver: zodResolver(getSignUpValidators(intl)),
  });
  const { control , handleSubmit, formState : {errors}} = methods;

  const onSubmit = (data: ISignUpType) => {
    console.log("sign up submission : ", data);
  };

  return {
    methods,
    errors,
    control,
    handleSubmit,
    onSubmit,
  }
};
