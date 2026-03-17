import TextField from "@mui/material/TextField";
import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { RiArrowLeftLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import ButtonUI from "../components/shared/Button";
import InputField from "../components/shared/InputField";

const Login = () => {
  const [phone, setPhone] = useState(null);
  const navigate = useNavigate();
  return (
    <div className="h-screen relative">
      <div className="absolute w-[90%] md:w-[75%] lg:w-[75%] xl:w-[72%] top-[50%] md:top-[45%] lg:top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 bg-surface relative">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="absolute top-3 left-3 flex items-center gap-1 text-foreground hover:text-red-500 transition z-10"
        >
          <RiArrowLeftLine size={20} />
        </button>

        {/* Left */}
        <div className="parent-wrapper flex flex-col lg:flex-row w-full">
          <div className="w-full lg:w-1/2 flex justify-center">
            <img
              className="h-[200px] md:h-[375px] lg:h-[325px] max-h-[375px]"
              src="https://www.kfcpakistan.com/static/media/login-animation.857cb4f842a7a27eed63.gif"
              alt="login animation"
            />
          </div>

          {/* Right */}
          <div className="w-full lg:w-1/2 flex justify-center p-2">
            <div className="flex flex-col justify-center bg-surface rounded-lg w-full max-w-sm">
              <h1 className="text-foreground text-3xl font-bold ">Welcome!</h1>
              <div className="text-field-wrapper bg-[#5a595930] border-b  flex flex-col gap-1 w-full px-2 pt-1 my-4 rounded-tl-md rounded-tr-md">
                <span className="text-xs">Phone Number (3XXXXXXXXX)</span>
                <InputField
                  variant="standard"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  InputProps={{
                    disableUnderline: true,
                    startAdornment: (
                      <span className="text-foreground pr-2 bg-[#5a595930]">
                        +92
                      </span>
                    ),
                  }}
                  sx={{
                    width: "100%",
                    height: "100%",
                    input: {
                      color: "black",
                      padding: 0,
                      height: "100%",
                      display: "flex",
                      alignItems: "center",
                      background: "#5a595930",
                    },
                  }}
                />
              </div>

              <ButtonUI variant="primary" sx={{ width: "100%", mb: 1 }}>
                LOGIN
              </ButtonUI>

              <ButtonUI
                variant="primary"
                startIcon={<FcGoogle />}
                sx={{ width: "100%" }}
              >
                LOGIN WITH GOOGLE
              </ButtonUI>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
