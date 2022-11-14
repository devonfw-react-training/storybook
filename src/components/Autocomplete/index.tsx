import { useState } from "react";
import TextField from "@mui/material/TextField";
import { Autocomplete as MaterialAutocomplete } from "@mui/material";
import { IStarWars } from "../../interface/starWars";

interface IProps {
  name: string;
  label: string;
  options: IStarWars[];
  onChange?(value: any): void;
  disabled?: boolean;
}

export const Autocomplete = ({
  name,
  label,
  options,
  onChange,
  disabled = false,
}: IProps) => {
  const suggestions = options ? options.map(({ name }) => name) : [];
  const [value, setValue] = useState<string | null>(null);
  const [inputValue, setInputValue] = useState("");

  return (
    <MaterialAutocomplete
      value={value}
      onChange={(event: any, newValue: string | null) => {
        setValue(newValue);
        onChange && onChange(newValue);
      }}
      inputValue={inputValue}
      onInputChange={(event, newInputValue) => {
        setInputValue(newInputValue);
        onChange && onChange(event);
      }}
      id={name}
      options={suggestions}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label={label} />}
      disabled={disabled}
    />
  );
};
