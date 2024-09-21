import {
  getSignUpValidators,
  ISignUpType,
} from "@/validators/login/sign-up/validators";
import { useForm } from "react-hook-form";
import { useIntl } from "react-intl";
import { signInDefaultValues } from "@/hooks/froms/login/sign-up/defaultValues";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuth } from "@/providers/AuthProvider";
import { useToast } from "@/hooks/use-toast";
import { FaCheckCircle } from "react-icons/fa";
import { cn } from "@/lib/utils";

export const useSignUpForm = () => {
  const intl = useIntl();

  const methods = useForm<ISignUpType>({
    defaultValues: signInDefaultValues,
    resolver: zodResolver(getSignUpValidators(intl)),
  });
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = methods;
  const { register } = useAuth();
  const { toast } = useToast();

  const onSubmit = async (data: ISignUpType) => {

    console.log("sign up submission : ", data);
    try {
      await register(data);
      toast({
        title: `Hi ${data.firstName}, `,
        variant: "default",
        description: 'you have successfully registered!',
        duration: 3000,
        action: <FaCheckCircle />,
        className: cn(
          "top-0 right-0 flex fixed md:max-w-[420px] md:top-4 md:right-4 bg-[#66bb6a] text-light-0"
        ),
      });
    } catch (error) {
      console.log("user registration failed : ", error);
    }
  };

  return {
    methods,
    errors,
    control,
    handleSubmit,
    onSubmit,
  };
};
