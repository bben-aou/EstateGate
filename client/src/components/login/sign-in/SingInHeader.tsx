import { TSignInHeader } from "@/interfaces/components/login/sign-in/types";
import React from "react";


const SingInHeader = (props: TSignInHeader) => {
  const { greetingMessage, promptMessage } = props;
  return (
    <div className="w-full flex flex-col gap-[15px]">
      <h1 className="text-[36px] font-semibold tracking-wide">
        {greetingMessage}
      </h1>
      <p className="text-[17px] font-light text-left w-full my-[10px]">
        {promptMessage}
      </p>
    </div>
  );
};
export default SingInHeader;
