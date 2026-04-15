import { ChevronLeft, ChevronRight } from "lucide-react";

export function Selector({ label, width }: { label: string; width: string }) {
  return (
    <button
      type="button"
      className={`${width} flex h-9 items-center justify-between rounded-lg border border-[#E5E5E5] bg-white px-3 text-[12px] font-medium text-[#2d2926] hover:border-black/20 transition-colors`}
    >
      <ChevronLeft size={14} strokeWidth={2} className="text-[#1D1A17] shrink-0" />
      <span>{label}</span>
      <ChevronRight size={14} strokeWidth={2} className="text-[#1D1A17] shrink-0" />
    </button>
  );
}
