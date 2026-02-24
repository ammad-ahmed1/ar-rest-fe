import { RiAddLine, RiPokerHeartsLine } from "react-icons/ri";
import KfcCardBadge from "../ui/KfcCardBadge";
import ButtonUI from "./Button";

const MenuItemCard = ({
  name,
  image,
  description,
  price,
  showBadge = false,
  className = "",
}) => {
  return (
    <div
      className={`relative bg-[#1C1816] rounded-md flex-shrink-0 w-[calc(50%_-_6px)] md:w-[calc(33.333%_-_8px)] lg:w-auto flex flex-col ${className}`}
    >
      {showBadge && <KfcCardBadge />}
      <div className="icon absolute top-1 right-1">
        <RiPokerHeartsLine size={25} className="text-red-500" />
      </div>
      <img
        src={image}
        alt={name}
        className="w-full h-[100px] md:h-[200px] lg:h-[260px] object-contain"
      />
      <div className="card-body flex flex-col items-start justify-end p-3 flex-grow">
        <h5 className="text-white font-bold text-md">{name}</h5>
        <p className="text-sm line-clamp-2 w-full">{description}</p>
        <span className="text-sm font-extrabold text-white mt-2">
          Rs&nbsp;{price}
        </span>
      </div>
      <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[90%]">
        <ButtonUI variant="primary" startIcon={<RiAddLine />} sx ={{
          
        }}>
          ADD TO BUCKET
        </ButtonUI>
      </div>
    </div>
  );
};

export default MenuItemCard;
