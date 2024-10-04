export type TIsEmpty = {
    value : null | undefined | [] | object | string | number
}

export type TFormatMoney = {
    amount: number,
    currencySymbol?: string,
    decimalPlaces? : number,
    decimalSeparator?: string,
    thousandsSeparator?: string

}