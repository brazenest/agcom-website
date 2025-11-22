import { SelectDropdownOption } from "@/types/ui";
import { useState } from "react";
import Select, { SingleValue } from "react-select";

const options: SelectDropdownOption[] = [
	{ value: "chocolate", label: "Chocolate" },
	{ value: "strawberry", label: "Strawberry" },
	{ value: "vanilla", label: "Vanilla" },
];

export const SelectDropdown = () => {
	const [selectedOption, setSelectedOption] = useState<SelectDropdownOption | null>(null);

	const handleChange = (newValue: SingleValue<SelectDropdownOption>) => {
		setSelectedOption(newValue);
	};

	return (
		
	);
};