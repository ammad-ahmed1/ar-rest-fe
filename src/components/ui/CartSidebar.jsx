import { useNavigate } from "react-router-dom";
import KfcCardBadge from "./KfcCardBadge";

const CartSidebar = ({ title, cartItems, totalItems, totalPrice, children }) => {
  const navigate = useNavigate();
  console.log('title')
  return (
    <div className="flex flex-col">
      <div className="cart-header flex justify-between mx-[5%]">
        <h5 className="text-foreground font-semibold text-lg my-1">
          {title}
        </h5>
        <div className="card-badge flex justify-end">
          <KfcCardBadge />
        </div>
      </div>
      <div className="w-full h-[1px] bg-red-500 mt-1"></div>

      {children}

      <div
        className="text-foreground cursor-pointer rounded-b-md px-4 py-4 my-4"
        style={{
          background:
            "linear-gradient(257deg, #e4002b 42%, #ff4065 52%, #e4002b 64%)",
        }}
        onClick={() => navigate("/cart", { state: { cartItems } })}
      >
        <div className="flex justify-between">
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
    </div>
  );
};

export default CartSidebar;
