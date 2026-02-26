import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

import KfcCardBadge from "../ui/KfcCardBadge";
import ButtonUI from "./Button";

const ModalUI = ({ open, handleClose, children, width = 400 }) => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width,
    bgcolor: "background.paper",
    border: "",
    borderRadius: "12px",
    boxShadow: 24,
    maxHeight: "91vh",
  };
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <>
          <Box sx={style}>
            <div className="header px-3">
              <KfcCardBadge />
              <div className="close-cls flex justify-end">
                <ButtonUI
                  variant="primary"
                  sx={{ width: "40px" }}
                  onClick={handleClose}
                >
                  <span className="text-xs font-extrabold">X</span>
                </ButtonUI>
              </div>
            </div>
            <div className="body p-4">{children}</div>
          </Box>
        </>
      </Modal>
    </div>
  );
};

export default ModalUI;
