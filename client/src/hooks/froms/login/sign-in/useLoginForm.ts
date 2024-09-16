import { useForm } from "react-hook-form";
import { loginDefaultValues } from "./defaultValues";
import { zodResolver } from "@hookform/resolvers/zod";
import { getSignInValidators, ISignInType } from "@/validators/login/sign-in/validators";
import { useIntl } from "react-intl";
import { useAuth } from "@/providers/AuthProvider";

export const useSignInForm = () => {
    const intl = useIntl();
    const methods = useForm<ISignInType>({
        defaultValues : loginDefaultValues,
        resolver: zodResolver(getSignInValidators(intl))
    })

    const { control, watch , handleSubmit , setValue , formState: {errors}, } = methods;
    
    const { user,  login } = useAuth();

    const  onSubmit =  async (data : ISignInType) => {
        console.log('login submission : ' ,data)
        try {
            await login(data);
            console.log('user information : ', user)
          } catch (error) {
            alert('Login failed. Please check your credentials.');
          }
    }

    return {
        methods,
        errors,
        control,
        watch,
        handleSubmit,
        setValue,
        onSubmit,
    }
};