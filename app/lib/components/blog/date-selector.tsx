import { Dispatch, SetStateAction, useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

export const DateSelector = ({ value, handleChange }: DateSelectorProps) => (
    <DatePicker selected={value} onChange={(date) => handleChange(date as Date)} dateFormat="Pp" />
);

type DateSelectorProps = {
    value?: Date;
    handleChange: Dispatch<SetStateAction<Date>>;
};
