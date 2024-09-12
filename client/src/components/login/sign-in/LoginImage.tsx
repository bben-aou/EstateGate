import { TLoginImage } from "@/interfaces/components/login/sign-in/types";
import { cn } from "@/lib/utils";


const LoginImage = (props: TLoginImage) => {
  const { imgSrc, imgAlt, wrapperClassName, containerClassName, imgClassName } =
    props;
  return (
    <div className={cn("w-[50%] h-full p-[20px]", wrapperClassName)}>
      <div className={cn("relative w-full h-full", containerClassName)}>
        <img
          src={imgSrc}
          alt={imgAlt}
          className={cn(
            "absolute inset-0 w-full h-full object-cover rounded-xl",
            imgClassName
          )}
        />
      </div>
    </div>
  );
};
export default LoginImage;
