import {
  getSignUpValidators,
  ISignUpType,
} from "@/validators/login/sign-up/validators";
import { useForm } from "react-hook-form";
import { useIntl } from "react-intl";
import { signInDefaultValues } from "@/hooks/froms/login/sign-up/defaultValues";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuth } from "@/providers/AuthProvider";

export const useSignUpForm = () => {
  const intl = useIntl();
  const methods = useForm<ISignUpType>({
    defaultValues: signInDefaultValues,
    resolver: zodResolver(getSignUpValidators(intl)),
  });
  const { control , handleSubmit, formState : {errors}} = methods;

  const { register } = useAuth();

  const onSubmit = (data: ISignUpType) => {
    console.log("sign up submission : ", data);
    try{
      register(data);
    }catch(error){
      console.log('user registration failed : ', error);
    }
  };

  return {
    methods,
    errors,
    control,
    handleSubmit,
    onSubmit,
  }
};
