import StatisticItem from './StatisticItem';
import { useIntl } from 'react-intl';
import statisticsData from '@/DummyData/statisticsData';
import { IStaticItems } from '@interfaces/components/statistics/types';

const Statistics = () => {
    const intl = useIntl();
    const  statisticsItems = statisticsData.map((staticItem: IStaticItems)=>{
        return (
            <StatisticItem
                key={staticItem.title}
                title={staticItem.title}
                value={staticItem.value}
                valueClassName={staticItem.valueClassName}
                subTitle={staticItem.subTitle}
                Icon={staticItem.Icon}
                iconClassName={staticItem.iconClassName ?? undefined}
                dividerClassName={staticItem.dividerClassName ?? undefined}
              />
        )
    })
  return (
    <div className="hidden md:flex flex-col justify-center gap-[20px]">
        <h1 className="font-extrabold text-[35px] self-center text-dark-10 tracking-[.3px]">
          {intl.formatMessage({ id: "home.statistics.section.title" })}
        </h1>
        <div className="h-[150px] flex items-center justify-center gap-[16px]  rounded-[8px] bg-banner-10">
          {statisticsItems}
        </div>
      </div>
  )
};
export default Statistics;
