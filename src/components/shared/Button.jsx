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
  const bgMap = {
    primary: "background.primary",
    secondary: "background.paper",
    transparent: "transparent",
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
        backgroundColor: bgMap[variant],
        border: isActive ? "1px solid red" : "none",
        fontWeight: "700",
        fontSize: "12.5px",
        ...extraSx,
      }}
    >
      {children}
    </Button>
  );
};

export default ButtonUI;
