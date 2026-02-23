import { top_deals } from "../../data/homepage-data";
import SectionHeader from "./SectionHeader";
import KfcCardBadge from "./KfcCardBadge";
import { RiPokerHeartsLine } from "react-icons/ri";
import { RiAddLine } from "react-icons/ri";
import ButtonUI from "../shared/Button";

const TopDeals = () => {
  return (
    <div className="container-content py-10">
      {/* Header */}
      <SectionHeader title="TOP DEALS" />

      <div className="flex overflow-x-auto overflow-y-hidden gap-3 pb-8 lg:grid lg:grid-cols-4 lg:gap-6 lg:pb-0">
        {top_deals?.map((item) => (
          <div key={item.id} className="relative bg-[#1C1816] rounded-md flex-shrink-0 w-[calc(50%_-_6px)] md:w-[calc(33.333%_-_8px)] lg:w-auto flex flex-col">
            <KfcCardBadge />
            <div className="icon absolute top-1 right-1">
              <RiPokerHeartsLine size={25} className="text-red-500" />
            </div>
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-[100px] md:h-[200px] lg:h-[260px] object-contain"
            />

            <div className="card-body flex flex-col items-start justify-end p-3 flex-grow">
              <h5 className="text-white font-bold text-md">{item.title}</h5>
              <p className="text-sm line-clamp-2 w-full">{item.description}</p>
              <span className="text-sm font-extrabold text-white mt-2">
                Rs&nbsp;{item?.price}
              </span>
            </div>
            <div className="flex absolute bottom-[-20px] justify-center w-full">
              <ButtonUI variant="primary" startIcon={<RiAddLine />}>
                ADD TO BUCKET
              </ButtonUI>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-col md:flex-row gap-2 mt-8 md:mt-16">
        <img
          src="https://www.kfcpakistan.com/static/media/pickup.a1ba2c21d4d480d9de3a.jpg"
          //   alt={item.title}
          className="w-full md:w-1/2 rounded-md"
        />
        <img
          src="https://www.kfcpakistan.com/static/media/mitaoBhook.22dd9e0f28c298811242.jpg"
          //   alt={item.title}
          className="w-full md:w-1/2 rounded-md"
        />
      </div>
    </div>
  );
};

export default TopDeals;
