import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

type FilterInputItemProps ={
    label : string,
    children : ReactNode;
    containerClassName? : string;
    errorClassName?: string
}

const FilterInputItem = (props : FilterInputItemProps) => {
    const {children, label, containerClassName , errorClassName } = props;

    const combinedContainerClassNames = cn(
        "h-full w-[100px] border-[1px] border-light-30 rounded-[8px] flex-1 py-[5px] px-[10px]",
        containerClassName,
        errorClassName
      );
    const combinedLabelClassNames = cn(
        "text-[14px] text-light-40",
       { "text-error-20": errorClassName}
    );
    return (
        <div className={combinedContainerClassNames}>
        <h1 className={combinedLabelClassNames}>{label}</h1>
        {children}
      </div>
    )

}
export default FilterInputItem;