import { usePropertyAuthorityStep } from '@/hooks/stepper/steps/usePropertyAuthorityStep';
import { TPropertyAuthorityTypes } from '@/interfaces/components/stepper/types';
import AuthorityCard from '@components/create-new-post/steps/components/propertyAuthority/AuthorityCard';

type TPropertyAuthoritySelector= {
    value: string;
    onChange: (value: string) => void;
}

export default function PropertyAuthoritySelector(props : TPropertyAuthoritySelector) {
    const {value , onChange} = props;
  const { PropertyAuthorityTypes } = usePropertyAuthorityStep();

  return  PropertyAuthorityTypes.map(
        (property: TPropertyAuthorityTypes) => (
          <AuthorityCard
            key={property.id}
            title={property.title}
            description={property.description}
            Icon={property.Icon}
            onClick={() => onChange(property.value)}
            isSelected={value === property.value}
          />
        )
      );

}
