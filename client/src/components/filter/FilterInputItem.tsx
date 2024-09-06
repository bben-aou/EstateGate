// import { InputType } from "@/interfaces/inputs/types";
// import React from "react";

import { ReactNode } from "react";

// export interface FilterInputItemProps<
//   TComponentProps extends JSX.IntrinsicAttributes
// > {
//   component: React.ComponentType<TComponentProps>;
//   inputProps: TComponentProps;
//   inputType?: InputType;
//   label: string;
// }

// function FilterInputItem<TComponentProps extends JSX.IntrinsicAttributes>({
//   component: InputComponent,
//   inputProps,
//   label
// }: Readonly<FilterInputItemProps<TComponentProps>>) {
//   return (
//     <div className="h-full w-[100px] border-[1px] border-light-30 rounded-[8px] flex-1 py-[5px] px-[10px]">
//       <h1 className="text-[14px] text-light-40">{label}</h1>
//       <InputComponent {...inputProps} />
//     </div>
//   );
// }

// export default FilterInputItem;


type FilterInputItemProps ={
    label : string,
    children : ReactNode;
}

const FilterInputItem = (props : FilterInputItemProps) => {
    const {children, label} = props;
    return (
        <div className="h-full w-[100px] border-[1px] border-light-30 rounded-[8px] flex-1 py-[5px] px-[10px]">
        <h1 className="text-[14px] text-light-40">{label}</h1>
        {children}
      </div>
    )

}
export default FilterInputItem;