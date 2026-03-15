import { useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";

const CartItemCard = ({ item, onIncrement, onDecrement, onRemove }) => {
  const [detailsOpen, setDetailsOpen] = useState(false);

  const { name, image, price, quantity, addons = [] } = item;

  return (
    <div className="bg-background rounded-sm py-1">
      {/* Main Row */}
      <div className="flex items-center gap-2 px-2 py-2">
        {/* Image */}
        <img
          src={image}
          alt={name}
          className="w-[70px] object-contain flex-shrink-0"
        />

        {/* Name + Qty Controls */}
        <div className="flex flex-col flex-grow min-w-0">
          <span className="text-foreground font-bold text-sm leading-tight truncate">
            {name}
          </span>
          <div className="flex items-center gap-2 mt-1">
            {quantity === 1 ? (
              <button
                onClick={onRemove}
                className="text-foreground bg-surface rounded px-1.5 py-0.5 hover:bg-red-700 hover:text-white transition-colors"
              >
                <RiDeleteBin6Line size={14} />
              </button>
            ) : (
              <button
                onClick={onDecrement}
                className="text-foreground font-bold bg-surface rounded px-2 py-0.5 hover:bg-border-color transition-colors leading-none"
              >
                −
              </button>
            )}
            <span className="text-foreground font-semibold text-sm w-4 text-center">
              {quantity}
            </span>
            <button
              onClick={onIncrement}
              className="text-foreground font-bold bg-surface rounded px-2 py-0.5 hover:bg-border-color transition-colors leading-none"
            >
              +
            </button>
          </div>
        </div>

        {/* Price + Details Button */}
        <div className="flex flex-col items-end gap-1 flex-shrink-0">
          <span className="text-foreground font-bold text-sm whitespace-nowrap">
            Rs {price.toLocaleString()}
          </span>
          {addons.length > 0 && (
            <button
              onClick={() => setDetailsOpen((prev) => !prev)}
              className="flex items-center gap-1 text-white text-xs font-bold px-2 py-1 rounded"
              style={{
                background:
                  "linear-gradient(257deg, #e4002b 42%, #ff4065 52%, #e4002b 64%)",
              }}
            >
              DETAILS
              <span className="text-xs">{detailsOpen ? "▲" : "▼"}</span>
            </button>
          )}
        </div>
      </div>

      {/* Addons List */}
      {detailsOpen && addons.length > 0 && (
        <ul className="px-4 pb-2 text-foreground text-sm list-disc list-inside">
          {addons.map((addon, idx) => (
            <li key={idx} className="leading-6">
              {addon}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CartItemCard;
