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
    <div className=" relative">
      <div
        className={`relative bg-[#1C1816] rounded-md flex-shrink-0 w-[50%] md:w-[33%] max-w-[325px] lg:w-auto flex flex-col ${className}`}
      >
        {showBadge && <KfcCardBadge />}
        <div className="icon absolute top-1 right-1">
          <RiPokerHeartsLine size={25} className="text-red-500" />
        </div>
        <div className="card-img w-full flex justify-center">
          <img src={image} alt={name} className="w-[92%]" />
        </div>

        <div className="card-body flex flex-col items-start justify-end px-3 mt-3 mb-8 flex-grow">
          <h5 className="text-white font-bold text-md my-1">{name}</h5>
          <p className="text-sm line-clamp-2 w-full my-1">{description}</p>
          <span className="text-sm font-extrabold text-white my-1">
            Rs&nbsp;{price}
          </span>
        </div>
      </div>
      <div className="absolute -bottom-3 left-1/2 -translate-x-1/2">
        <ButtonUI variant="primary" startIcon={<RiAddLine />} sx={{}}>
          ADD TO BUCKET
        </ButtonUI>
      </div>
    </div>
  );
};

export default MenuItemCard;
