import { ISignInType } from "@/validators/login/sign-in/validators";
import {
  Control,
  FieldErrors,
  FieldValues,
  RegisterOptions,
  Path,
  SubmitHandler,
  SubmitErrorHandler,
} from "react-hook-form";
import { IntlShape } from "react-intl";

export enum InputType {
  TEXT = "text",
  NUMBER = "number",
  DATE = "date",
  SELECT = "select",
  CHECKBOX = "checkbox",
  RADIO = "radio",
  FILE = "file",
  PASSWORD = "password",
  HIDDEN = "hidden",
  EMAIL = "email",
  URL = "url",
  TEL = "tel",
  COLOR = "color",
  TIME = "time",
  DATETIME = "datetime",
  MONTH = "month",
  WEEK = "week",
  YEAR = "year",
  MONTHDAY = "monthday",
  TIMEZONE = "timezone",
  RANGE = "range",
  DURATION = "duration",
  WEEKDAY = "weekday",
  MONTHDAYOFWEEK = "monthdayofweek",
  QUARTER = "quarterter",
  SEASON = "season",
  CUSTOM = "custom",
}

export interface ControlledInputProps<
  TFieldValues extends FieldValues,
  TComponentProps
> {
  name: Path<TFieldValues>;
  control: Control<TFieldValues>;
  component: React.ComponentType<TComponentProps>;
  rules?: Omit<
    RegisterOptions<TFieldValues, Path<TFieldValues>>,
    "disabled" | "setValueAs" | "valueAsNumber" | "valueAsDate"
  >;
  shouldUnregister?: boolean;
  inputProps: TComponentProps;
  inputType?: InputType;
}

export type PropertyTypeOption = {
  label: string;
  value: string;
};

export type PriceRangeValue = {
  min: number;
  max: number;
};

export type PriceRangeOption = {
  label: string;
  value: PriceRangeValue;
};

export interface IInput {
  control: Control<ISignInType>;
  errors: FieldErrors<ISignInType>;
  intl: IntlShape;
}

export interface TEmailInput extends IInput {}
export interface TPasswordInput extends IInput {}

export type TForgotPassword = {
  label: string;
  onClickHandler: () => void;
  containerClassName?: string;
};

export type TSignInButton = {
  label: string;
  containerClassName?: string;
};

export type TDiver = {
  label: string;
};

export type THandleSubmit = (
  onValid: SubmitHandler<ISignInType>,
  onInvalid?: SubmitErrorHandler<ISignInType>
) => (e?: React.BaseSyntheticEvent) => Promise<void>;

export type TSubmitHandler = SubmitHandler<ISignInType>

export interface TSingInForm extends IInput {
  handleSubmit:THandleSubmit;
  onSubmit: TSubmitHandler
}

export type TSignUpPrompt = {
  label: string;
  onClickHandler: () => void;
};