import React from "react";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import FilledInput from "@mui/material/FilledInput";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
interface CustomInputProps {
  id: string;
  name: string;
  label: string;
  value: string;
  variant: "outlined" | "filled" | "standard";
  inputFieldType: string;
  type: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
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
      onChange={onChange}
      type={type}
      fullWidth
    />
  ) : inputFieldType === "passwordField" ? (
    <FormControl variant={variant} fullWidth>
      <InputLabel htmlFor={id}>{label}</InputLabel>
      {variant === "outlined" ? (
        <OutlinedInput
          id={id}
          name={name}
          value={value}
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
          onChange={onChange}
        />
      ) : variant === "filled" ? (
        <FilledInput
          id={id}
          name={name}
          value={value}
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
          onChange={onChange}
        />
      ) : variant === "standard" ? (
        <Input
          id={id}
          name={name}
          value={value}
          onChange={onChange}
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
  ) : null;
};

export default CustomInput;
