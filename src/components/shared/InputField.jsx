import React from "react";
import TextField from "@mui/material/TextField";

const InputField = ({
  label,
  placeholder,
  variant = "outlined",
  value,
  onChange,
  type = "text",
  multiline = false,
  minRows,
  maxRows,
  fullWidth = false,
  InputProps,
  sx = {},
  ...rest
}) => {
  return (
    <TextField
      label={label}
      placeholder={placeholder}
      variant={variant}
      value={value}
      onChange={onChange}
      type={type}
      fullWidth={fullWidth}
      multiline={multiline}
      minRows={minRows}
      maxRows={maxRows}
      InputProps={InputProps}
      sx={{
        backgroundColor: "var(--color-surface)",
        borderRadius: "8px",

        "& .MuiOutlinedInput-root": {
          borderRadius: "8px",
        },

        ...sx, // allow full override
      }}
      {...rest}
    />
  );
};

export default InputField;
