import { top_deals } from "../../data/homepage-data";
import SectionHeader from "./SectionHeader";
import MenuItemCard from "../shared/MenuItemCard";

const TopDeals = () => {
  return (
    <div className="container-content py-10">
      {/* Header */}
      <SectionHeader title="TOP DEALS" />

      <div className="flex overflow-x-auto overflow-y-hidden gap-3 pb-8 lg:grid lg:grid-cols-4 lg:gap-6">
        {top_deals?.map((item) => (
          <MenuItemCard
            key={item.id}
            name={item.title}
            image={item.image}
            description={item.description}
            price={item.price}
            showBadge
          />
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
