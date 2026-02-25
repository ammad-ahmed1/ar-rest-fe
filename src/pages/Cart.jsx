import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { RiArrowLeftLine } from "react-icons/ri";
import { cart_data } from "../data/menu-data";
import CartItemCard from "../components/shared/CartItemCard";

const Cart = () => {
  const navigate = useNavigate();
  const { state } = useLocation();

  const [cartItems, setCartItems] = useState(
    state?.cartItems ?? cart_data.items.map((ci, idx) => ({ id: idx + 1, ...ci }))
  );

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

  const totalItems = cartItems.reduce((s, i) => s + i.quantity, 0);
  const totalPrice = cartItems.reduce((s, i) => s + i.price * i.quantity, 0);

  return (
    <div className="container-content py-4 pb-24">
      {/* Header */}
      <div className="flex items-center gap-3 mb-4">
        <button onClick={() => navigate("/menu")} className="text-white">
          <RiArrowLeftLine size={22} />
        </button>
        <h5 className="text-white font-bold text-lg mb-0">Your Order</h5>
      </div>

      {/* Cart Items */}
      <div className="flex flex-col gap-2 max-w-[600px]">
        {cartItems.length === 0 ? (
          <div className="flex flex-col items-center py-16">
            <img
              src="https://www.kfcpakistan.com/static/media/kfc-meal.afc417f5d19998efd26b.png"
              alt="empty cart"
              className="w-[200px]"
            />
            <h5 className="text-white font-bold mt-4">Your cart is empty</h5>
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

      {/* Fixed Bottom Bar */}
      {cartItems.length > 0 && (
        <div
          className="fixed bottom-0 left-0 right-0 text-white cursor-pointer z-50 px-6 py-4"
          style={{
            background:
              "linear-gradient(257deg, #e4002b 42%, #ff4065 52%, #e4002b 64%)",
          }}
        >
          <div className="flex justify-between items-center max-w-[600px] mx-auto">
            <div className="flex items-center gap-2.5">
              <h6 className="font-normal mb-0">{totalItems} Item{totalItems !== 1 ? "s" : ""}</h6>
              <h5>| Rs {totalPrice.toLocaleString()}</h5>
            </div>
            <div className="flex items-center">
              <h6 className="px-2">Place Order</h6>
              <i className="ri-arrow-right-s-line"></i>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
