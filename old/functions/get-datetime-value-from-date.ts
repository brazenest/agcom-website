export const getDatetimeValueFromDate = (date: Date): string => date.toISOString().slice(0, 19).replace('T', ' ');
export const getDateObjectFromDatetimeValue = (datetimeValue: string): Date => new Date(datetimeValue);
