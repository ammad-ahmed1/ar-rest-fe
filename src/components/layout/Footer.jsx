import { FaYoutube, FaInstagram, FaFacebookF, FaApple } from "react-icons/fa";
import { IoLogoGooglePlaystore } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="w-full bg-[#1C1816] pt-10 pb-6 px-4 md:px-12 lg:px-24">

      {/* Top: KFC Logo + Social Icons */}
      <div className="flex justify-center items-center gap-5 mb-10">
        <span className="text-[#ea002a] text-4xl font-black italic tracking-tight">KFC</span>
        <div className="flex gap-3">
          {[FaYoutube, FaInstagram, FaFacebookF].map((Icon, i) => (
            <a
              key={i}
              href="#"
              className="w-10 h-10 rounded-full border border-white flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors duration-200"
            >
              <Icon size={16} />
            </a>
          ))}
        </div>
      </div>

      {/* Middle: Nav Links + App Buttons */}
      <div className="flex flex-col gap-6 md:flex-row md:justify-between md:items-start mb-10">

        {/* Column 1 */}
        <div className="flex flex-col gap-3">
          {["About Us", "Mitao Bhook", "Mitao Bhook - Scholarship", "Privacy Policy", "Careers"].map((link) => (
            <a key={link} href="#" className="text-white text-sm hover:text-[#ea002a] transition-colors duration-200">
              {link}
            </a>
          ))}
        </div>

        {/* Column 2 */}
        <div className="flex flex-col gap-3">
          {["Contact Us", "Store Locator", "Track Order"].map((link) => (
            <a key={link} href="#" className="text-white text-sm hover:text-[#ea002a] transition-colors duration-200">
              {link}
            </a>
          ))}
        </div>

        {/* Column 3 */}
        <div className="flex flex-col gap-3">
          <a href="#" className="text-white text-sm hover:text-[#ea002a] transition-colors duration-200">
            Terms & Conditions
          </a>
        </div>

        {/* App Store Buttons */}
        <div className="flex flex-row flex-wrap gap-3">
          <a href="#" className="flex items-center gap-2 bg-black border border-gray-600 rounded-xl px-4 py-2 text-white hover:border-gray-400 transition-colors duration-200">
            <FaApple size={26} />
            <div className="flex flex-col leading-tight">
              <span className="text-[10px] text-gray-400">Download on the</span>
              <span className="text-sm font-semibold">App Store</span>
            </div>
          </a>
          <a href="#" className="flex items-center gap-2 bg-black border border-gray-600 rounded-xl px-4 py-2 text-white hover:border-gray-400 transition-colors duration-200">
            <IoLogoGooglePlaystore size={26} />
            <div className="flex flex-col leading-tight">
              <span className="text-[10px] text-gray-400">GET IT ON</span>
              <span className="text-sm font-semibold">Google Play</span>
            </div>
          </a>
        </div>

      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 pt-6 flex flex-col gap-3 md:flex-row md:justify-between md:items-center">
        <p className="text-white text-sm font-bold">2026 KFC. All rights reserved</p>
        <div className="text-right">
          <p className="text-[#ea002a] text-xs font-bold">Powered by</p>
          <p className="text-white text-sm">SimpleX Technology Solutions</p>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
