import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { menuData, menu_ctgs, cart_data } from "../data/menu-data";
import ButtonUI from "../components/shared/Button";
import SectionHeader from "../components/ui/SectionHeader";
import MenuItemCard from "../components/shared/MenuItemCard";
import CartSidebar from "../components/ui/CartSidebar";
import CartItemCard from "../components/shared/CartItemCard";
import { RiArrowLeftLine } from "react-icons/ri";
import InputField from "../components/shared/InputField";

const Bucket = () => {
  const navigate = useNavigate();
  const [selectedCtg, setSelectedCtg] = useState(menu_ctgs[0].id);
  const [cartItems, setCartItems] = useState([]);
  const [phone, setPhone] = useState("");

  const totalItems = cartItems.reduce((s, i) => s + i.quantity, 0);
  const totalPrice = cartItems.reduce((s, i) => s + i.price * i.quantity, 0);
  const deliveryFee = 50;
  const gst = Math.round(totalPrice * 0.16);
  const grandTotal = totalPrice + deliveryFee + gst;

  const handleIncrement = (id) =>
    setCartItems((prev) =>
      prev.map((i) => (i.id === id ? { ...i, quantity: i.quantity + 1 } : i)),
    );

  const handleDecrement = (id) =>
    setCartItems((prev) =>
      prev.map((i) =>
        i.id === id ? { ...i, quantity: Math.max(1, i.quantity - 1) } : i,
      ),
    );

  const handleRemove = (id) =>
    setCartItems((prev) => prev.filter((i) => i.id !== id));
  useEffect(() => {
    setCartItems(cart_data.items.map((ci, idx) => ({ id: idx + 1, ...ci })));
  }, []);
  return (
    <div className="container-content">
      {/* Page Body */}
      <div className=" mt-4 flex gap-6">
        {/* Left Content */}
        <div className="left w-full lg:w-[68%] ">
          {/* cart items */}
          <div className="items-cart p-2 bg-surface rounded-md">
            <div className="cart-header flex gap-2 mx-[2%]">
              <div className="flex items-center">
                <button
                  onClick={() => navigate(-1)}
                  className="flex items-center gap-1 text-foreground hover:text-red-500 transition z-10"
                >
                  <RiArrowLeftLine size={20} />
                </button>
              </div>
              <h5 className="text-foreground font-semibold text-lg my-1">
                Items From Your Cart
              </h5>
            </div>
            <div className="w-full h-[1px] bg-red-500 mt-1"></div>
            <div className="cart-item-body cart-body-scroll h-[300px] overflow-y-auto">
              {cartItems.map((item) => (
                <div className="cart-item-cards m-2">
                  <CartItemCard
                    key={item.id}
                    item={item}
                    onIncrement={() => handleIncrement(item.id)}
                    onDecrement={() => handleDecrement(item.id)}
                    onRemove={() => handleRemove(item.id)}
                  />
                </div>
              ))}
            </div>
          </div>
          {/* mitao bhook */}
          <div className="mitao-bhook mt-4 p-2 bg-surface rounded-md">
            <div className="mb-header flex gap-2 mx-[2%]">
              <div className="flex items-center">
                <button
                  onClick={() => navigate(-1)}
                  className="flex items-center gap-1 text-foreground hover:text-red-500 transition z-10"
                >
                  <RiArrowLeftLine size={20} />
                </button>
              </div>
              <h5 className="text-foreground font-semibold text-lg my-1">
                Mitao Bhook
              </h5>
            </div>
            <div className="w-full h-[1px] bg-red-500 mt-1"></div>
            <div className="flex flex-col md:flex-row items-center gap-4 bg-background rounded-md px-4 py-5 my-2">
              <div className="flex flex-col md:flex-row items-center justify-center gap-3 flex-1">
                <img
                  src="https://www.kfcpakistan.com/static/media/mitao-bhook-light.bb15764ef9a237fa8903.png"
                  alt="Mitao Bhook"
                  className="w-[150px] object-contain"
                />

                <p className="text-lg text-foreground leading-snug">
                  Join the movement to champion deaf inclusion and empower the
                  education of Pakistan's youth.
                </p>
              </div>

              {/* Right Section */}
              <div className="flex flex-col justify-center items-center gap-3">
                {/* Quantity Controls */}
                <div className="flex items-center gap-2">
                  <button className="border border-red-500 text-foreground px-3 py-1 rounded hover:bg-red-500 hover:text-white transition">
                    −
                  </button>

                  <span className="text-foreground font-semibold whitespace-nowrap">
                    Rs. 20
                  </span>

                  <button className="border border-red-500 text-foreground px-3 py-1 rounded hover:bg-red-500 hover:text-white transition">
                    +
                  </button>
                </div>

                {/* Donate Button */}
                <button className="bg-red-600 text-white font-semibold px-3 py-1 rounded hover:bg-red-700 transition">
                  DONATE NOW
                </button>
              </div>
            </div>
          </div>
          {/* you may also like */}
          <div className="mt-4 p-4 bg-surface rounded-md">
            <h5 className="text-foreground font-semibold text-lg mb-3">
              You may also like
            </h5>
            <div className="w-full h-[1px] bg-red-500 mb-4"></div>
            <div className="flex gap-6 overflow-x-auto best-sellers-scroll pb-6">
              {menuData.menu_sections
                .flatMap((s) => s.items)
                .slice(0, 10)
                .map((item) => (
                  <MenuItemCard
                    key={item.id}
                    name={item.name}
                    image={item.image}
                    description={item.description}
                    price={item.price}
                    className="w-[150px] md:w-[175px] lg:w-[195px] flex-shrink-0"
                  />
                ))}
            </div>
          </div>
        </div>

        {/* Right Sidebar Sticky relative to buttons */}
        <div className="right hidden lg:block sticky self-start w-[30%] bg-surface rounded-md">
          <CartSidebar
            title={`${7} products added`}
            cartItems={cartItems}
            totalItems={totalItems}
            totalPrice={totalPrice}
          >
            <div className="cart-body cart-body-scroll px-2 py-2 flex flex-col gap-1 max-h-[375px] overflow-y-auto pb-2"></div>
            {/* <div className="cartsidebar-body"></div> */}
            <div className="instructions-body bg-background mx-2 p-3">
              <h2 className="text-md mb-2"> Special Instructions (Optional)</h2>
              <InputField
                variant="outlined"
                multiline={true}
                placeholder="Add Cooking / Delivery Instructions (Optional)"
                fullWidth={true}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "transparent", // default border
                    },
                    "&:hover fieldset": {
                      borderColor: "transparent", // hover
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "transparent", // focused
                    },
                  },
                }}
              />
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
            </div>
            {/* your order */}
            <div className="mx-2 mt-2 p-3 bg-background rounded-md mb-2">
              <h5 className="text-foreground font-bold text-center text-base mb-3">Your Order</h5>
              <div className="flex flex-col gap-2 text-sm text-foreground">
                <div className="flex justify-between">
                  <span>Sub Total :</span>
                  <span>Rs {totalPrice.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Delivery Fee :</span>
                  <span>Rs {deliveryFee}</span>
                </div>
                <div className="flex justify-between">
                  <span>GST ( 16% ) :</span>
                  <span>Rs {gst.toLocaleString()}</span>
                </div>
                <div className="w-full h-[1px] bg-border-color my-1"></div>
                <div className="flex justify-between font-semibold">
                  <span>Total :</span>
                  <span>Rs {grandTotal.toLocaleString()}</span>
                </div>
              </div>
            </div>
          </CartSidebar>
        </div>
      </div>

      {/* Mobile Bottom Bar — hidden on desktop */}
      {cartItems.length > 0 && (
        <div
          className="block lg:hidden fixed bottom-0 left-0 right-0 text-foreground cursor-pointer z-50 px-6 py-4"
          style={{
            background:
              "linear-gradient(257deg, #e4002b 42%, #ff4065 52%, #e4002b 64%)",
          }}
          onClick={() => navigate("/cart", { state: { cartItems } })}
        >
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2.5">
              <h6 className="font-normal mb-0">
                {totalItems} Item{totalItems !== 1 ? "s" : ""}
              </h6>
              <h5>| Rs {totalPrice.toLocaleString()}</h5>
            </div>
            <div className="flex items-center">
              <h6 className="px-2">View Bucket</h6>
              <i className="ri-arrow-right-s-line"></i>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Bucket;
