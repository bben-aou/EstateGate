import { IoSearchSharp } from "react-icons/io5";
import { Input } from "@/components/ui/input";

const SearchBar = () => {
  return (
    <div className=" hidden relative lg:flex items-center w-[352px] ">
    <Input placeholder="Search ..." className=" h-[60px] pl-[45px] text-[16px] border-[1px] focus-visible:ring-none focus-visible:ring-0" />
    <IoSearchSharp className=" w-[24px] h-[24px] text-random-80 absolute left-[16px]"/>
  </div>
  )
}
export default SearchBar;
