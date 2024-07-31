export type TNavItems = {
    id : number ;
    messageId : string;
    defaultMessage : string;
    path : string;
}


export const navItems : TNavItems[] = [
    {id : 1, messageId : "menuItemsHome" , defaultMessage: "Home", path : "/"},
    {id : 2, messageId : "menuItemsAbout" , defaultMessage: "About", path : "/about"},
    {id : 3, messageId : "menuItemsContact" , defaultMessage: "Contact", path : "/contact"},
    {id : 3, messageId : "menuItemsAgents" , defaultMessage: "Agents", path : "/agents"},
]