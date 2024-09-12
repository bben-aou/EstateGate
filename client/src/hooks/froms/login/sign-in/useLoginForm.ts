import { useForm } from "react-hook-form";
import { loginDefaultValues } from "./defaultValues";
import { zodResolver } from "@hookform/resolvers/zod";
import { getSignInValidators, ISignInType } from "@/validators/login/sign-in/validators";
import { useIntl } from "react-intl";

export const useSignInForm = () => {
    const intl = useIntl();
    const methods = useForm<ISignInType>({
        defaultValues : loginDefaultValues,
        resolver: zodResolver(getSignInValidators(intl))
    })

    const { control, watch , handleSubmit , setValue , formState: {errors}, } = methods;

    const  onSubmit =  (data : ISignInType) => {
        console.log('login submission : ' ,data)
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