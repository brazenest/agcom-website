import { getDateObjectFromDatetimeValue } from "./get-datetime-value-from-date";

export const displayDate = (datetimeValue: string) => getDateObjectFromDatetimeValue(datetimeValue).toLocaleString();
