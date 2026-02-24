import React, { useState } from "react";
import { menuData, menu_ctgs } from "../data/menu-data";
import ButtonUI from "../components/shared/Button";
import SectionHeader from "../components/ui/SectionHeader";
import MenuItemCard from "../components/shared/MenuItemCard";

const Menu = () => {
  const [selectedCtg, setSelectedCtg] = useState(menu_ctgs[0].id);

  return (
    <div className="container-content">
      <div className="menu-btns flex gap-2 justify-center overflow-x-auto py-1">
        {menu_ctgs.map((ctg) => (
          <div key={ctg.id}>
            <ButtonUI
              variant={selectedCtg === ctg.id ? "primary" : "secondary"}
              onClick={() => setSelectedCtg(ctg.id)}
              sx={{ paddingX: "12px", paddingY: "4px" }}
            >
              {ctg.label}
            </ButtonUI>
          </div>
        ))}
      </div>
      <div className="page-body mt-4 flex gap-4">
        <div className="left w-full lg:w-[65%]">
          {menuData.menu_sections.map((section) => (
            <div key={section.id} className="mb-12">
              <SectionHeader title={section.name.toUpperCase()} />
              <div className="flex flex-wrap gap-6">
                {section.items.map((item) => (
                  <MenuItemCard
                    key={item.id}
                    name={item.name}
                    image={item.image}
                    description={item.description}
                    price={item.price}
                    className=""
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="right hidden lg:block w-[35%] h-[500px] bg-red-500"></div>
      </div>
    </div>
  );
};

export default Menu;
