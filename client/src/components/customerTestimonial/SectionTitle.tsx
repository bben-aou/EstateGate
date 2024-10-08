import { cn } from '@/lib/utils';

type TSectionTitle = {
  titleLabel : string,
  titleClassName ?: string;
}
const SectionTitle = (props : TSectionTitle) => {
  const { titleLabel, titleClassName } = props;
  return (
    <div className={cn('w-full flex items-center justify-center py-[20px] md:h-[100px] font-medium tracking-[0.2px] text-[40px] text-light-0 md:mt-[20px]',titleClassName)}>
        <h1>{titleLabel}</h1>
    </div>
  )
}
export default SectionTitle;
