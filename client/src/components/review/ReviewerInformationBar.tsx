import { DEFAULT_AVATAR } from "@/constants/global/constants";
import { formatDistanceToNow } from "date-fns";

type TReviewerInformationBarProps = {
  avatar?: string;
  reviewerName?: string;
  reviewerJoiningDate?: string;
};
const ReviewerInformationBar = (props: TReviewerInformationBarProps) => {
  const { avatar, reviewerName, reviewerJoiningDate } = props;
  const apiUrl = import.meta.env.VITE_API_URL;
  const avatarUrl =  avatar ? apiUrl + "/" + avatar : DEFAULT_AVATAR;
  const parsedDate = 
    reviewerJoiningDate && !isNaN(new Date(reviewerJoiningDate).getTime())
      ? new Date(reviewerJoiningDate)
      : null;

  const formattedDistance = parsedDate
    ? formatDistanceToNow(parsedDate, {
        addSuffix: false,
        includeSeconds: false,
      })
    : '';
 
  return (
    <div className="w-full h-[48px] flex items-center gap-2">
      <img
        src={avatar?.includes('https') ?  avatar : avatarUrl}
        alt="avatar"
        className="w-[48px] h-[48px]  rounded-full"
      />
      <div className="h-full  w-[190px] flex flex-col py-[3px]">
        <h1 className="text-[16px] text-start leading-5 font-medium tracking-[0.01rem]">
          {reviewerName}
        </h1>
        <h2 className="text-[14px] text-start  leading-[18px] font-light text-typography-10 mt-[2px]">
          {`${formattedDistance} on EstateGate`}
        </h2>
      </div>
    </div>
  );
};
export default ReviewerInformationBar;
