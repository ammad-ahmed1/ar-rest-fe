import React from "react";
import Drawer from "@mui/material/Drawer";
import logo from "../../assets/images/logo.png";
import { useNavigate } from "react-router-dom";
import { RiCloseLine, RiHomeLine, RiMenuLine, RiShoppingBagLine, RiInformationLine, RiPhoneLine } from "react-icons/ri";

const navLinks = [
  { label: "Home", icon: <RiHomeLine size={20} />, path: "/" },
  { label: "Menu", icon: <RiMenuLine size={20} />, path: "/menu" },
  { label: "Deals", icon: <RiShoppingBagLine size={20} />, path: "/" },
  { label: "About", icon: <RiInformationLine size={20} />, path: "/" },
  { label: "Contact", icon: <RiPhoneLine size={20} />, path: "/" },
];

const Sidebar = ({ open, onClose }) => {
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
          bgcolor: "#111",
          color: "white",
          display: "flex",
          flexDirection: "column",
        },
      }}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-4 border-b border-gray-800">
        <img
          src={logo}
          alt="Logo"
          style={{ height: "36px", cursor: "pointer" }}
          onClick={() => handleNav("/")}
        />
        <button
          onClick={onClose}
          className="text-white hover:text-red-500 transition"
        >
          <RiCloseLine size={24} />
        </button>
      </div>

      {/* Nav Links */}
      <nav className="flex flex-col mt-4 flex-1">
        {navLinks.map((link) => (
          <button
            key={link.label}
            onClick={() => handleNav(link.path)}
            className="flex items-center gap-4 px-6 py-4 text-sm font-bold uppercase tracking-wide hover:bg-[#1C1816] hover:text-red-500 transition text-left border-b border-gray-800"
          >
            <span className="text-red-500">{link.icon}</span>
            {link.label}
          </button>
        ))}
      </nav>

      {/* Footer branding */}
      <div className="px-6 py-4 text-xs text-gray-500 border-t border-gray-800">
        © {new Date().getFullYear()} AR Restaurant Menu
      </div>
    </Drawer>
  );
};

export default Sidebar;
