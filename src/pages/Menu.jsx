import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { menuData, menu_ctgs, cart_data } from "../data/menu-data";
import ButtonUI from "../components/shared/Button";
import SectionHeader from "../components/ui/SectionHeader";
import MenuItemCard from "../components/shared/MenuItemCard";
import KfcCardBadge from "../components/ui/KfcCardBadge";
import CartItemCard from "../components/shared/CartItemCard";

const Menu = () => {
  const navigate = useNavigate();
  const [selectedCtg, setSelectedCtg] = useState(menu_ctgs[0].id);
  const [cartItems, setCartItems] = useState([]);

  const totalItems = cartItems.reduce((s, i) => s + i.quantity, 0);
  const totalPrice = cartItems.reduce((s, i) => s + i.price * i.quantity, 0);

  const handleIncrement = (id) =>
    setCartItems((prev) =>
      prev.map((i) => (i.id === id ? { ...i, quantity: i.quantity + 1 } : i))
    );

  const handleDecrement = (id) =>
    setCartItems((prev) =>
      prev.map((i) =>
        i.id === id ? { ...i, quantity: Math.max(1, i.quantity - 1) } : i
      )
    );

  const handleRemove = (id) =>
    setCartItems((prev) => prev.filter((i) => i.id !== id));
  return (
    <div className="container-content">
      {/* Menu Buttons Sticky under Navbar */}
      <div className="menu-btns sticky top-[90px] z-40 bg-background flex gap-2 justify-center overflow-x-auto py-4">
        {menu_ctgs.map((ctg) => (
          <div key={ctg.id}>
            <ButtonUI
              variant={selectedCtg === ctg.id ? "primary" : "secondary"}
              onClick={() => {
                setSelectedCtg(ctg.id);
                document.getElementById(ctg.id)?.scrollIntoView({ behavior: "smooth" });
              }}
              sx={{ paddingX: "12px", paddingY: "4px", whiteSpace: "nowrap", flexShrink: 0 }}
            >
              {ctg.label}
            </ButtonUI>
          </div>
        ))}
      </div>

      {/* Page Body */}
      <div className="page-body mt-4 flex gap-4">
        {/* Left Content */}
        <div className="left w-full lg:w-[65%]">
          {menuData.menu_sections.map((section) => (
            <div key={section.id} id={section.id} className="mb-12" style={{ scrollMarginTop: "170px" }}>
              <SectionHeader title={section.name.toUpperCase()} />
              <div className="flex flex-wrap gap-6">
                {section.items.map((item) => (
                  <MenuItemCard
                    key={item.id}
                    name={item.name}
                    image={item.image}
                    description={item.description}
                    price={item.price}
                    className="!max-w-[250px]"
                    onAdd={() =>
                      setCartItems(
                        cart_data.items.map((ci, idx) => ({ id: idx + 1, ...ci }))
                      )
                    }
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Right Sidebar Sticky relative to buttons */}
        <div className="right hidden lg:block sticky top-[170px] self-start w-[33%] h-[500px] bg-background rounded-md">
          <div className="cart-header flex justify-between mx-[5%]">
            <h5 className="text-foreground font-semibold text-lg my-1">
              Order Details
            </h5>
            <div className="card-badge flex justify-end ">
              <KfcCardBadge />
            </div>
          </div>
          <div className="w-full h-[1px] bg-red-500 mt-1"></div>
          <div className="cart-body cart-body-scroll px-2 py-2 flex flex-col gap-1 max-h-[375px] overflow-y-auto pb-2">
            {cartItems.length === 0 ? (
              <div className="empty-cart h-[200px] flex flex-col justify-center items-center">
                <img
                  src="https://www.kfcpakistan.com/static/media/kfc-meal.afc417f5d19998efd26b.png"
                  alt="empty cart"
                  className="w-[225px]"
                />
                <h5 className="text-foreground font-bold text-lg mt-4">
                  You haven’t added any items in bucket yet
                </h5>
              </div>
            ) : (
              cartItems.map((item) => (
                <CartItemCard
                  key={item.id}
                  item={item}
                  onIncrement={() => handleIncrement(item.id)}
                  onDecrement={() => handleDecrement(item.id)}
                  onRemove={() => handleRemove(item.id)}
                />
              ))
            )}
          </div>
          <div className="cart-footer">
            <div
              className="absolute bottom-6 left-1 text-foreground cursor-pointer z-50 rounded-t-xl px-4 py-4 w-[105%]"
              style={{
                background:
                  "linear-gradient(257deg, #e4002b 42%, #ff4065 52%, #e4002b 64%)",
                marginInline: "-1rem",
                maxWidth: "none",
              }}
            >
              <div className="flex justify-between" onClick={() => navigate("/cart", { state: { cartItems } })}>
                <div className="flex items-center gap-2.5">
                  <h6 className="font-normal mb-0">{totalItems} Item{totalItems !== 1 ? "s" : ""}</h6>
                  <h5>| Rs {totalPrice.toLocaleString()}</h5>
                </div>
                <div className="flex items-center">
                  <h6 className="px-2">View Bucket</h6>
                  <i className="ri-arrow-right-s-line"></i>
                </div>
              </div>
            </div>
          </div>
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
              <h6 className="font-normal mb-0">{totalItems} Item{totalItems !== 1 ? "s" : ""}</h6>
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

export default Menu;
