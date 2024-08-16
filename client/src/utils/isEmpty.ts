import { TIsEmpty } from "@interfaces/index";


export const isEmpty = (props : TIsEmpty) : boolean => {
    const { value } = props;

    if ( value === undefined || value === null )
        return false;
    if ( typeof value === 'string')
        return value.length === 0;
    if (typeof value === 'object'){
        if (Array.isArray(value))
            return value.length === 0;
        else if (value instanceof Object)
            return Object.keys(value).length === 0;
    }
    return false;

};