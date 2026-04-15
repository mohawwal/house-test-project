export function SeatBox({
  label,
  isAdd = false,
  highlightAdd = false,
  isSelected = false,
}: {
  label?: number;
  isAdd?: boolean;
  highlightAdd?: boolean;
  isSelected?: boolean;
}) {
  return (
    <button
      type="button"
      className={`flex h-10.5 w-10.5 items-center justify-center rounded-[4.38px] border-[0.9px] border-[#E5E5E5] text-[12px] font-medium text-[#1D1A17] transition-colors hover:border-black/20 sm:h-16 sm:w-16 sm:text-[13px] lg:h-17.5 lg:w-17.5 lg:text-[14px] ${isSelected ? "bg-[#E5E5E5]" : "bg-white"}`}
    >
      {isAdd ? (
        <span className={`text-xl leading-none ${highlightAdd ? "text-[#A52700]" : "text-[#1D1A17]/40"}`}>
          +
        </span>
      ) : (
        label
      )}
    </button>
  );
}
