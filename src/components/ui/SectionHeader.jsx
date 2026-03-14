const SectionHeader = ({ title, actionText, onActionClick }) => {
  return (
    <div className="flex items-start justify-between mb-8">
      <div className="flex flex-col">
        <h2 className="text-xl sm:text-2xl font-black leading-none text-foreground">{title}</h2>
        <div className="w-[60px] h-[2px] bg-red-500 mt-1"></div>
      </div>
      {actionText && (
        <span
          onClick={onActionClick}
          className="text-xs sm:text-sm font-black text-foreground uppercase cursor-pointer hover:text-red-500 transition-colors mt-1"
        >
          {actionText}
        </span>
      )}
    </div>
  );
};

export default SectionHeader;