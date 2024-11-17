import { Control, FieldValues, Path } from "react-hook-form";
import { IconType } from "react-icons";

export type TStepHeader = {
    headerClassName? : string,
    label: string,
    hasSubtitle?: boolean
    subtitleLabel?: string
}

export type ISteps = {
  title? : string;
  component: React.ReactNode;
}
export type TPropertyCard = {
  Icon: IconType;
  label: string;
  onClick?: () => void;
  isSelected?: boolean;
  isWithinMultiSelect?: boolean
};

export type TNextAndPreviousButtons = {
  nextLabel: string;
  previousLabel: string;
  nextClassName?: string;
  previousClassName?: string;
  nextOnclickHandler?: () => void;
  previousOnclickHandler?: () => void;
  isNextDisable?: boolean;
  isPreviousDisable?: boolean;
};


export type TAuthorityCard = {
  title: string;
  description: string;
  Icon: IconType;
  containerClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  iconClassName?: string;
  onClick?: () => void;
  isSelected?: boolean;
};

export type TPropertyTypes = {
  value: string;
  label: string;
  Icon: IconType;
}
export type TPropertyAuthorityTypes = {
  id: number;
  value: string;
  title: string;
  description: string;
  Icon: IconType;
};


export type TPropertyTypeSelector  = {
  value : string;
  onChange : (value: string) => void;
}
export type TControlButtonCounter = {
  counterInitialValue: number;
  onClick: (value: number) => void;
  maxValue? : number
}

export type UseCounterProps = {
  initialValue: number;
  min?: number;
  max?: number;
  onChange?: (value: number) => void;
}

export interface IPropertyDetailItem<T extends FieldValues> {
  control: Control<T>;
  name: Path<T>;
  label: string;
  unitLabel?: string;
  maxValue?: number;
}

export type TInstructionsStepBody = {
  description : string
}

export type TInstructionsStepHeader = {
  title  : string,
  label : string;
}

export type TInstructionsStep = {
  headerTitle: string;
  headerLabel: string;
  description: string;
  nextButtonLabel: string;
  previousButtonLabel?: string;
  canGoBack?: boolean;
};