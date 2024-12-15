export type OwnershipType = {
  SALE: "SALE";
  RENT: "RENT";
  BUY: "BUY";
};

export enum EPropertyAuthority {
  OWNER = "OWNER",
  TENANT = "TENANT",
  AGENT = "AGENT",
  OTHER = "OTHER",
}
export type TPropertyAuthority = {
  OWNER: "OWNER";
  TENANT: "TENANT";
  AGENT: "AGENT";
  OTHER: "OTHER";
};
