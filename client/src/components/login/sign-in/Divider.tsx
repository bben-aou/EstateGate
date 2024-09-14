import { TDiver } from "@/interfaces/inputs/types";

const Divider = (props : TDiver) =>{
    const { label } = props;
  return (
    <div className="h-[36px] flex items-center md:mt-[35px] mb-[10px] md:mb-[24px]">
    <div className="w-1/2 h-[0.6px] bg-gray-300" />
    <div className="mx-4">
      {label}
    </div>
    <div className="w-1/2 h-[0.6px] bg-gray-300" />
  </div>
  )
};
export default Divider;
