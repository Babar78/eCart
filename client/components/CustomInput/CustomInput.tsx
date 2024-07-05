import React from "react";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import FilledInput from "@mui/material/FilledInput";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import Autocomplete from "@mui/material/Autocomplete";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

import { countries } from "../../constants/countries";

interface CustomInputProps {
  id: string;
  name: string;
  label: string;
  value?: string;
  variant: "outlined" | "filled" | "standard";
  inputFieldType: string;
  type?: string;
  onChange: (e: string) => void;
  required?: boolean;
}

const CustomInput = ({
  id,
  name,
  label,
  value,
  variant,
  type,
  inputFieldType,
  onChange,
  required,
}: CustomInputProps) => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return inputFieldType === "textField" ? (
    <TextField
      id={id}
      name={name}
      label={label}
      variant={variant}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      type={type}
      fullWidth
      required={required}
    />
  ) : inputFieldType === "passwordField" ? (
    <FormControl variant={variant} fullWidth>
      <InputLabel htmlFor={id}>{label}</InputLabel>
      {variant === "outlined" ? (
        <OutlinedInput
          id={id}
          name={name}
          value={value}
          required={required}
          type={showPassword ? "text" : "password"}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
          label={label}
          onChange={(e) => onChange(e.target.value)}
        />
      ) : variant === "filled" ? (
        <FilledInput
          id={id}
          name={name}
          value={value}
          required={required}
          type={showPassword ? "text" : "password"}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
          onChange={(e) => onChange(e.target.value)}
        />
      ) : variant === "standard" ? (
        <Input
          id={id}
          name={name}
          value={value}
          required={required}
          onChange={(e) => onChange(e.target.value)}
          type={showPassword ? "text" : "password"}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
        />
      ) : null}
    </FormControl>
  ) : inputFieldType === "selectCountry" ? (
    <Autocomplete
      id={id}
      fullWidth
      onChange={(e, selectedOption) => {
        onChange(selectedOption?.label!);
      }}
      options={countries}
      autoHighlight
      getOptionLabel={(option) => option.label}
      renderOption={(props, option) => {
        const { key, ...optionProps } = props;
        return (
          <Box
            key={key}
            component="li"
            sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
            {...optionProps}
          >
            <img
              loading="lazy"
              width="20"
              srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
              src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
              alt=""
            />
            {option.label} ({option.code}) +{option.phone}
          </Box>
        );
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          variant={variant}
          label={label}
          required={required}
          inputProps={{
            ...params.inputProps,
            autoComplete: "new-password", // disable autocomplete and autofill
          }}
        />
      )}
    />
  ) : null;
};

export default CustomInput;