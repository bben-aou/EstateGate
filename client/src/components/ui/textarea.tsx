import * as React from "react";

import { cn } from "@/lib/utils";
import ConditionalRendering from "../common/ConditionalRendering";

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.ComponentProps<"textarea">
>(({ className, ...props }, ref) => {
  const [charCounter, setCharCounter] = React.useState(0);
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    props.onChange && props.onChange(e);
    setCharCounter(e.target.value.length);
  };
  return (
    <div className="relative">
      <textarea
        className={cn(
          "flex items-center min-h-[60px] w-full rounded-md border border-light-60 bg-transparent px-3 py-4 text-base shadow-sm placeholder:text-zinc-500  focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-light-60 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm dark:border-light-60 dark:placeholder:text-zinc-400 dark:focus-visible:ring-zinc-300",
          className
        )}
        ref={ref}
        {...props}
        onChange={(e) => {
          handleChange(e);
        }}
      />
      <ConditionalRendering condition={!!props.maxLength}>
        <h1
          className={cn("absolute bottom-[5px] right-[15px] text-gray-500", {
            "text-red-500":
              props?.maxLength && charCounter + 1 > props?.maxLength,
          })}
        >
          {charCounter}/{props.maxLength}
        </h1>
      </ConditionalRendering>
    </div>
  );
});
Textarea.displayName = "Textarea";

export { Textarea };
