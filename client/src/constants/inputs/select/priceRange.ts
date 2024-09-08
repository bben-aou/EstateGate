import { PriceRangeOption } from "@/interfaces/inputs/types";
import { formatCurrency } from "@/utils/formatCurrency";
//  * TODO : refactor the logic to display Label depends on the chosen Language 
export const priceRangeOptions: PriceRangeOption[] = [
    { label: 'any', value: { min: 0, max: 0 } },
    { label: `Under  ${formatCurrency(500000)}`, value: { min: 0, max: 500000 } },
    { label: `${formatCurrency(1000000)} - ${formatCurrency(1500000)}`, value: { min: 1000000, max: 1500000 } },
    { label: `${formatCurrency(1500000)} - ${formatCurrency(2000000)}`, value: { min: 1500000, max: 2000000 } },
    { label: `${formatCurrency(2000000)} - ${formatCurrency(2500000)}`, value: { min: 2000000, max: 2500000 } },
    { label: `${formatCurrency(2500000)} - ${formatCurrency(3000000 )}`, value: { min: 2500000, max: 3000000 } },
    { label: `Above ${formatCurrency(3000000 )}`, value: { min: 3000000, max: 0 } },
  ]