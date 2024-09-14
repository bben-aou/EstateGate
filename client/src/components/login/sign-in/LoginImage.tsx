import { TLoginImage } from "@/interfaces/components/login/sign-in/types";
import { cn } from "@/lib/utils";
import { Skeleton } from "@/components/ui/skeleton";
import { useState } from "react";
import ConditionalRendering from "@/components/common/ConditionalRendering";

const LoginImage = (props: TLoginImage) => {
  const { imgSrc, imgAlt, wrapperClassName, containerClassName, imgClassName } =
    props;
  const [isLoading, setIsLoading] = useState(false);
  return (
    <div className={cn("w-[50%] h-full p-[20px] ", wrapperClassName)}>
      <div className={cn("relative w-full h-full", containerClassName)}>
        <ConditionalRendering condition={isLoading}>
          <Skeleton className=" w-full h-full rounded-xl" />
        </ConditionalRendering>

        <img
          src={imgSrc}
          onLoad={() => setIsLoading(true)}
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
