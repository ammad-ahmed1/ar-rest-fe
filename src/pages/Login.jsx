import TextField from "@mui/material/TextField";
import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import ButtonUI from "../components/shared/Button";

const Login = () => {
  const [phone, setPhone] = useState(null);
  return (
    <div className="h-[75vh] flex items-center justify-center px-4">
      <div className="bg-red-500 flex flex-col md:flex-row items-center md:items-start justify-center gap-8 md:gap-16 w-full max-w-5xl p-4 rounded-lg">
        {/* Left: Animation */}
        <div className="left md:w-1/2 flex justify-center">
          <img
            className="login-animation w-64 md:w-full object-contain"
            src="https://www.kfcpakistan.com/static/media/login-animation.857cb4f842a7a27eed63.gif"
            alt="login animation"
          />
        </div>

        {/* Right: Login Form */}
        <div className="right md:w-1/2 flex justify-center">
          <div className="flex flex-col items-center justify-center bg-black p-6 rounded-lg w-full max-w-sm">
            <h1 className="text-white text-3xl font-bold mb-6">Welcome!</h1>

            {/* Phone Input */}
            <TextField
              variant="outlined"
              type="tel"
              placeholder="Phone Number (3XXXXXXXXX)"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              InputProps={{
                startAdornment: <span className="text-white ml-2">+92</span>,
                style: { color: "white" },
              }}
              sx={{
                input: { color: "white" },
                "& .MuiOutlinedInput-root": {
                  backgroundColor: "#1e1e1e",
                  borderRadius: "4px",
                },
                width: "100%",
                mb: 4,
              }}
            />

            {/* Login Buttons */}
            <ButtonUI
              variant="primary"
              onClick={() => console.log("Phone login:", phone)}
              sx={{ width: "100%", mb: 2 }}
            >
              LOGIN
            </ButtonUI>

            <ButtonUI
              variant="primary"
              startIcon={<FcGoogle />}
              onClick={() => console.log("Google login")}
              sx={{ width: "100%" }}
            >
              LOGIN WITH GOOGLE
            </ButtonUI>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
