import Button from "@mui/material/Button";

// variant: "primary" = red bg | "secondary" = dark paper bg | "transparent" = no bg
const ButtonUI = ({
  children,
  variant = "primary",
  startIcon,
  isActive = false,
  onClick,
  px = 1,
  py = 0.75,
  sx: extraSx,
}) => {
  const styleMap = {
    primary:     { backgroundColor: "primary.main",     color: "#fff" },
    secondary:   { backgroundColor: "background.paper", color: "text.primary" },
    transparent: { backgroundColor: "transparent",      color: "text.primary" },
  };

  return (
    <Button
      variant="contained"
      size="small"
      startIcon={startIcon}
      onClick={onClick}
      sx={{
        minHeight: 28,
        px,
        py,
        borderRadius: "4px",
        backgroundColor: styleMap[variant].backgroundColor,
        color: styleMap[variant].color,
        border: isActive ? "1px solid red" : "none",
        fontWeight: "700",
        fontSize: "12.5px",
        "& .MuiButton-startIcon": {
          marginRight: "0px", // reduce from default 8px
          marginLeft: 0,
        },
        "& .MuiButton-startIcon svg": {
          fontSize: "14px",
        },
        ...extraSx,
      }}
    >
      {children}
    </Button>
  );
};

export default ButtonUI;
