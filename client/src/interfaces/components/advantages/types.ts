export interface CardData {
  image?: string;
  title: string;
  description: string;
}

export type Cards = CardData[];
export type TAdvantagesCards = {
  cards: Cards;
};

export type TAdvantageCard = {
  image?: string;
  title: string;
  description: string;
};

export type TAdvantagesSection = {
  containerClassName?: string;
};
