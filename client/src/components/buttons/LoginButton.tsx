
import { ILoginButton } from "@interfaces/index";
import { Link } from "react-router-dom";


const LoginButton = ( props: ILoginButton) => {
    const { label, redirectionPath } = props;
  return (
    <Link
      aria-label="Login"
      to={redirectionPath}
      className=" px-[30px] border-2 border-dark hover:border-light-50 py-[6px] rounded-full bg-light-60 text-light-5 relative items-center justify-start inline-block overflow-hidden   group"
    >
      <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]" />
      <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-light-70 opacity-100 group-hover:-translate-x-8" />
      <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">
        {label}
      </span>
      <span className="absolute inset-0 rounded-full" />
    </Link>
  );
};
export default LoginButton;
