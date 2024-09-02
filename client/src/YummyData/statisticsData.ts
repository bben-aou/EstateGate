import { IStaticItems } from "@interfaces/components/statistics/types";
import { AiTwotoneLike } from "react-icons/ai";
import { FaRegHeart, FaUsers } from 'react-icons/fa6';
import { GiProgression } from "react-icons/gi";


const statisticsData: IStaticItems[] = [
    {
      title: 'Active Clients',
      value: '25.6K',
      subTitle: '21% more than last month',
      Icon: FaRegHeart,
    },
    {
      title: 'New Followers',
      value: '12.4K',
      valueClassName: "text-random-20",
      subTitle: '18% more than last week',
      Icon: GiProgression,
      iconClassName:"text-random-20"
    },
    {
      title: 'Ready Proprieties',
      value: '4,200',
      valueClassName: "text-statistics-10",
      subTitle: '10% more than last week',
      Icon: FaUsers,
      iconClassName:"text-statistics-10"
    },
    {
      title: 'Happy Client',
      value: '15%',
      valueClassName: "text-statistics-20",
      subTitle: 'Consistent growth rate',
      Icon: AiTwotoneLike,
      iconClassName:"text-statistics-20",
        dividerClassName:"hidden"
    },
  ];
  
  export default statisticsData;