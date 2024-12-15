import { ISignInType } from "@/validators/login/sign-in/validators";
import { ISignUpType } from "@/validators/login/sign-up/validators";
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
  AMOUNT = "amount",
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
  PHONE = "phone",
  Button = "button",
  multiSelect = "multiSelect",
  Upload = "upload",
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

export interface ISignInInput {
  control: Control<ISignInType>;
  errors: FieldErrors<ISignInType>;
  intl: IntlShape;
}
export interface ISignUpInput {
  control: Control<ISignUpType>;
  errors: FieldErrors<ISignUpType>;
  intl: IntlShape;
  isLoading?: boolean
}

export interface IEmailInput<T extends FieldValues> {
  control: Control<T>;
  errors: FieldErrors<T>;
  name: Path<T>;
  intl: IntlShape;
}
export interface IPasswordInput<T extends FieldValues> {
  control: Control<T>;
  errors: FieldErrors<T>;
  name: Path<T>;
  intl: IntlShape;
  label? : string;
}

// export interface TEmailInput extends ISignInInput  {}
export interface TPasswordInput extends ISignInInput {}
export interface TPhoneInput extends ISignUpInput {}
export interface TUserName extends ISignUpInput {}

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

export type THandleSubmitSignUp = (
  onValid: SubmitHandler<ISignUpType>,
  onInvalid?: SubmitErrorHandler<ISignUpType>
) => (e?: React.BaseSyntheticEvent) => Promise<void>;

export type TSubmitHandler = SubmitHandler<ISignInType>;
export type TSubmitHandlerSignUp = SubmitHandler<ISignUpType>;

export interface TSingInForm extends ISignInInput {
  handleSubmit: THandleSubmit;
  onSubmit: TSubmitHandler;
}
export interface TSingUpForm extends ISignUpInput {
  handleSubmit: THandleSubmitSignUp;
  onSubmit: TSubmitHandlerSignUp;
}

export type TSignUpPrompt = {
  label: string;
  onClickHandler: () => void;
};


export type TSignUpButton = {
  label: string;
  containerClassName?: string;
};
