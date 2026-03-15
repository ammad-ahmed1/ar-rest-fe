import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { menuData, menu_ctgs, cart_data } from "../data/menu-data";
import ButtonUI from "../components/shared/Button";
import SectionHeader from "../components/ui/SectionHeader";
import MenuItemCard from "../components/shared/MenuItemCard";
import CartSidebar from "../components/ui/CartSidebar";
import CartItemCard from "../components/shared/CartItemCard";
import { RiArrowLeftLine } from "react-icons/ri";

const Bucket = () => {
  const navigate = useNavigate();
  const [selectedCtg, setSelectedCtg] = useState(menu_ctgs[0].id);
  const [cartItems, setCartItems] = useState([]);

  const totalItems = cartItems.reduce((s, i) => s + i.quantity, 0);
  const totalPrice = cartItems.reduce((s, i) => s + i.price * i.quantity, 0);

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
      <div className=" mt-4 flex gap-4">
        {/* Left Content */}
        <div className="left w-full lg:w-[68%] ">
            {/* cart items */}
          <div className="items-cart p-2 bg-surface">
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
                Order Details
              </h5>
            </div>
            <div className="w-full h-[1px] bg-red-500 mt-1"></div>
            <div className="cart-item-body h-[300px] overflow-y-auto">
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
          <div className="items-cart mt-4 p-2 bg-surface">
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
                Order Details
              </h5>
            </div>
            <div className="w-full h-[1px] bg-red-500 mt-1"></div>
            <div className="flex items-center justify-between bg-gray-200 rounded-md px-4 py-3 my-2">
              {/* Left Section */}
              <div className="flex items-center gap-3">
                <img
                  src="https://www.kfcpakistan.com/static/media/mitao-bhook-light.bb15764ef9a237fa8903.png"
                  alt="Mitao Bhook"
                  className="w-20 object-contain"
                />

                <p className="text-sm text-black max-w-[420px] leading-snug">
                  Join the movement to champion deaf inclusion and empower the
                  education of Pakistan's youth.
                </p>
              </div>

              {/* Right Section */}
              <div className="flex items-center gap-3">
                {/* Quantity Controls */}
                <div className="flex items-center gap-2">
                  <button className="border border-red-500 text-black px-3 py-1 rounded hover:bg-red-500 hover:text-white">
                    −
                  </button>

                  <span className="font-semibold whitespace-nowrap">
                    Rs. 20
                  </span>

                  <button className="border border-red-500 text-black px-3 py-1 rounded hover:bg-red-500 hover:text-white">
                    +
                  </button>
                </div>

                {/* Donate Button */}
                <button className="bg-red-600 text-white font-semibold px-6 py-2 rounded hover:bg-red-700 transition">
                  DONATE NOW
                </button>
              </div>
            </div>
          </div>
          {/* you may also like */}
          <div className="mt-4 p-4 bg-surface">
            <h5 className="text-foreground font-semibold text-lg mb-3">You may also like</h5>
            <div className="w-full h-[1px] bg-red-500 mb-4"></div>
            <div className="flex gap-6 overflow-x-auto pb-6">
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
        <div className="right hidden lg:block sticky self-start w-[30%] h-[500px] bg-surface rounded-md">
          <CartSidebar
            cartItems={cartItems}
            totalItems={totalItems}
            totalPrice={totalPrice}
          >
            <div className="cart-body cart-body-scroll px-2 py-2 flex flex-col gap-1 max-h-[375px] overflow-y-auto pb-2"></div>
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
