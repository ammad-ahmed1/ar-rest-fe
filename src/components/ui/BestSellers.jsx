import React, { useState } from "react";
import { best_sellers, deal_details } from "../../data/homepage-data";
import SectionHeader from "./SectionHeader";
import KfcCardBadge from "./KfcCardBadge";
import ModalUI from "../shared/Modal";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Typography from "@mui/material/Typography";

const BestSellers = () => {
  const [openModal, setOpenModal] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => { setOpenModal(false); setQuantity(1); };
  return (
    <div className="container-content mt-10">
      {/* Header */}
      <SectionHeader title="BEST SELLERS" />

      <div className="flex gap-4 overflow-x-auto best-sellers-scroll">
        {best_sellers?.map((item) => (
          <div
            key={item.id}
            className="w-[190px] md:w-[205px] lg:w-[265px] 2xl:w-[300px] relative flex-shrink-0 bg-surface overflow-hidden rounded-sm shadow-lg pointer"
            onClick={() => {
              handleOpenModal();
            }}
          >
            <KfcCardBadge />
            <div className="product-name absolute top-[12%] left-[4%]">
              <h3 className="text-lg font-bold text-foreground">{item.title}</h3>
            </div>

            <span
              className=" absolute right-0 top-[80px] 
                 w-[80px] h-[28px] 
                 px-[15px] py-[2px] 
                 text-white font-extrabold 
                 leading-[24px] whitespace-nowrap bg-[#ea002a]
                 text-center"
            >
              <span className="flex items-end justify-center h-full ">
                Rs&nbsp;{item?.price}
              </span>

              {/* Triangle */}
              <span
                className="absolute top-0 left-[-8px]
             w-0 h-0
             border-t-[14px] border-b-[14px]
             border-r-[8px]
             border-t-transparent
             border-b-transparent
             border-r-[#ea002a]"
              ></span>
            </span>
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-[290px] object-contain mt-[50px]"
            />
          </div>
        ))}
      </div>
      <ModalUI open={openModal} handleClose={handleCloseModal} width={760}>
        <div className="modal-body flex gap-4">
          <div className="left flex-1 overflow-y-auto max-h-[70vh]">
            {Object.entries(deal_details?.modifiers ?? {}).map(
              ([title, items]) => (
                <div key={title} className="my-3">
                  <Accordion
                    sx={{
                      bgcolor: "#E4002B",
                      color: "white",
                      borderRadius: "8px 8px 0 0 !important",
                      "&:first-of-type": { borderRadius: "8px 8px 0 0 !important" },
                      "&:last-of-type": { borderRadius: "8px 8px 0 0 !important" },
                      "&:before": { display: "none" },
                      overflow: "hidden",
                    }}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
                      sx={{ minHeight: "48px !important" }}
                    >
                      <Typography fontWeight={700}>{title}</Typography>
                    </AccordionSummary>

                    <AccordionDetails
                      sx={{
                        bgcolor: "background.default",
                        p: 0,
                        borderBottomLeftRadius: 0,
                        borderBottomRightRadius: 0,
                      }}
                    >
                      <div className="flex flex-col">
                        {items?.map((item, idx) => (
                          <div
                            key={item.modifier_id}
                            className={`flex items-center justify-between px-3 py-3 ${
                              idx !== items.length - 1
                                ? "border-b border-gray-800"
                                : ""
                            }`}
                          >
                            {/* Left Section */}
                            <div className="flex items-center gap-3">
                              <img
                                src={`https://www.kfcpakistan.com/images/${item.image_url}`}
                                alt={item.modifier_name}
                                className="w-10 h-16 object-contain"
                              />
                              <div>
                                <p className="font-bold text-white text-sm">
                                  {item.modifier_name}
                                </p>
                                <p className="text-xs text-gray-400">
                                  (+Rs {item.modifier_sale_price || 180})
                                </p>
                              </div>
                            </div>

                            {/* Right Section */}
                            <button
                              className="bg-red-600 text-white px-4 py-1.5 text-xs font-extrabold uppercase rounded hover:bg-red-700 transition"
                              onClick={() => console.log("Added:", item)}
                            >
                              ADD
                            </button>
                          </div>
                        ))}
                      </div>
                    </AccordionDetails>
                  </Accordion>
                </div>
              ),
            )}
          </div>
          {/* Right: Product Card */}
          <div className="right w-[290px] flex-shrink-0 flex flex-col overflow-hidden">
            {/* Image */}
            <div className="flex justify-center px-4 pt-6 pb-2">
              <img
                src={`https://www.kfcpakistan.com/images/${deal_details.images[0].image_url}`}
                alt={deal_details.combo_name}
                className="w-full max-h-[200px] object-contain"
              />
            </div>

            {/* Name & Description */}
            <div className="text-center px-4 mt-2">
              <h3 className="text-white font-bold text-lg">{deal_details.combo_name}</h3>
              <p className="text-gray-400 text-sm mt-1 leading-relaxed">{deal_details.combo_description}</p>
            </div>

            {/* Quantity Selector */}
            <div className="flex justify-center items-center gap-5 mt-6">
              <button
                className="w-9 h-9 border border-gray-600 rounded-sm text-white flex items-center justify-center text-base hover:bg-gray-800 transition"
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              >
                —
              </button>
              <span className="text-white font-bold text-lg w-6 text-center">{quantity}</span>
              <button
                className="w-9 h-9 border border-gray-600 rounded-sm text-white flex items-center justify-center text-base hover:bg-gray-800 transition"
                onClick={() => setQuantity((q) => q + 1)}
              >
                +
              </button>
            </div>

            {/* Add to Bucket */}
            <div className="mt-4">
              <div
                className="flex justify-between items-center px-4 py-3 cursor-pointer rounded-sm"
                style={{ background: "linear-gradient(257deg, #e4002b 42%, #ff4065 52%, #e4002b 64%)" }}
              >
                <span className="text-white font-extrabold text-sm">
                  RS {deal_details.combo_mrp_price * quantity}
                </span>
                <span className="text-white font-extrabold text-sm tracking-wide">
                  ADD TO BUCKET
                </span>
                <i className="ri-arrow-right-s-line text-white text-lg"></i>
              </div>
            </div>
          </div>
        </div>
      </ModalUI>
    </div>
  );
};

export default BestSellers;
