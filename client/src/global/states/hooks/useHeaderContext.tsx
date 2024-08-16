import { useContext } from "react"
import { HeaderContext } from "@global/states/contexts/HeaderContext"
import { useIntl } from "react-intl";

export const useHeaderContext = () => {
    const intl = useIntl()
    const context = useContext(HeaderContext);
    if (!context) {
        throw new Error(intl.formatMessage({ id : "errorHeaderProvider"}));
    }
    return context;
}