import {
  RiStoreLine,
  RiTruckLine,
  RiRestaurantLine,
  RiInformationLine,
  RiFileTextLine,
  RiShieldLine,
  RiPhoneLine,
  RiHeartLine,
  RiAwardLine,
  RiBriefcaseLine,
} from "react-icons/ri";

export const primaryNavLinks = [
  {
    name: "Store Locator",
    url: "/store-locator",
    icon: RiStoreLine,
  },
  {
    name: "Track Order",
    url: "/track-order",
    icon: RiTruckLine,
  },
  {
    name: "Explore Menu",
    url: "/menu",
    icon: RiRestaurantLine,
  },
];

export const secondaryNavLinks = [
  {
    name: "About Us",
    url: "/about",
    icon: RiInformationLine,
  },
  {
    name: "Terms & Conditions",
    url: "/terms",
    icon: RiFileTextLine,
  },
  {
    name: "Privacy Policy",
    url: "/privacy",
    icon: RiShieldLine,
  },
  {
    name: "Contact Us",
    url: "/contact",
    icon: RiPhoneLine,
  },
  {
    name: "Mitao Bhook",
    url: "/mitao-bhook",
    icon: RiHeartLine,
  },
  {
    name: "Mitao Bhook - Scholarship",
    url: "/mitao-bhook-scholarship",
    icon: RiAwardLine,
  },
  {
    name: "Careers",
    url: "/careers",
    icon: RiBriefcaseLine,
  },
];
