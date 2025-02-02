import { TTruncatedTextProps } from "@/interfaces";
import { cn } from "@/lib/utils";

const TruncatedText = (props : TTruncatedTextProps) => {
    const {maxLength = 200, style, text = ""} = props;
  const truncatedText =
    text?.length > maxLength ? `${text.slice(0, maxLength)}...` : text ?? "";

  return <div className={cn("font-light text-base leading-7" , style)}>{truncatedText}</div>;
};

export default TruncatedText;
