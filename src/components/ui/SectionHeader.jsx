const SectionHeader = ({ title }) => {
  return (
    <div className="flex flex-col mb-8">
      <h2 className="text-2xl font-black leading-none text-white">{title}</h2>
      <div className="w-[60px] h-[2px] bg-red-500 mt-1"></div>
    </div>
  );
};

export default SectionHeader;