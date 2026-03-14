import Drawer from "@mui/material/Drawer";
import logo from "../../assets/images/logo.png";
import { useNavigate } from "react-router-dom";
import ButtonUI from "../shared/Button";
import { useThemeMode } from "../../context/ThemeContext";
import { primaryNavLinks, secondaryNavLinks } from "../../data/nav-links";

const Sidebar = ({ open, onClose }) => {
  const { mode, setThemeMode } = useThemeMode();
  const navigate = useNavigate();

  const handleNav = (path) => {
    navigate(path);
    onClose();
  };

  return (
    <Drawer
      anchor="left"
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          width: 270,
          bgcolor: "background.paper",
          backgroundImage: "none",
          color: "text.primary",
          display: "flex",
          flexDirection: "column",
          boxShadow: "none",
        },
      }}
      BackdropProps={{
        sx: {
          backgroundColor: "transparent", // removes overlay effect
        },
      }}
    >
      {/* Header */}
      <div className="flex flex-col p-4">
        <div className="left w-[20%]">
          <ButtonUI variant="primary" onClick={console.log("Login")}>
            LOGIN
          </ButtonUI>
        </div>
        <div className="right flex justify-end">
          <div className="radio-btn flex rounded-lg cursor-pointer bg-background">
            <div
              className={`off py-2 px-3 ${mode === "light" ? "bg-red-500 rounded-lg" : ""}`}
              onClick={() => setThemeMode("light")}
            >
             <span className="text-sm font-semibold">Day</span> 
            </div>
            <div
              className={`on py-2 px-3 ${mode === "dark" ? "bg-red-500 rounded-lg" : ""}`}
              onClick={() => setThemeMode("dark")}
            >
              <span className="text-sm font-semibold">Night</span> 
            </div>
          </div>
        </div>
      </div>

      {/* Nav Links */}
      <nav className="flex flex-col mt-4 flex-1">
        {primaryNavLinks.map(({ name, url, icon: Icon }) => (
          <button
            key={name}
            onClick={() => handleNav(url)}
            className="flex items-center gap-4 px-6 py-4 text-sm font-bold uppercase tracking-wide hover:bg-surface hover:text-red-500 transition text-left"
          >
            <span className="text-red-500"><Icon size={20} /></span>
            {name}
          </button>
        ))}

        <div className="border-t border-border-color my-2" />

        {secondaryNavLinks.map(({ name, url, icon: Icon }) => (
          <button
            key={name}
            onClick={() => handleNav(url)}
            className="flex items-center gap-4 px-6 py-4 text-sm font-bold uppercase tracking-wide hover:bg-surface hover:text-red-500 transition text-left"
          >
            <span className="text-red-500"><Icon size={20} /></span>
            {name}
          </button>
        ))}
      </nav>

      {/* Footer branding */}
      <div className="px-6 py-4 text-xs text-muted border-t border-border-color">
        © {new Date().getFullYear()} AR Restaurant Menu
      </div>
    </Drawer>
  );
};

export default Sidebar;
