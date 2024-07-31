import { ISignUpButton } from "@interfaces/index";
import { Link } from "react-router-dom";


const SignUpButton = (props: ISignUpButton) => {
  const { label, redirectionPath } = props;
  return (
    <Link
      to={redirectionPath}
      aria-label="sign Up"
      className="px-[30px] py-[6px] border-2 hover:border-gray-800 rounded-full bg-light-30 text-light-40 "
    >
      {label}
    </Link>
  );
};
export default SignUpButton;
