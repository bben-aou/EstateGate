import AvatarCircles from "@/components/ui/avatar-circles";
import { avatarUrls } from "@/DummyData/customersAvatarsUrls";


   
  const CustomersAvatars = () => {
    return <AvatarCircles numPeople={99} avatarUrls={avatarUrls} className="pb-[20px] md:pb-0" />;
  }
  export default CustomersAvatars;