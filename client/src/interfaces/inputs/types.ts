import { Control, FieldValues, RegisterOptions } from "react-hook-form";
import { Path } from "react-hook-form";

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