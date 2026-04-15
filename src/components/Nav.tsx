import { ArrowLeft, Bell, ChevronDown } from "lucide-react";
import { Selector } from "./Selector";

export function Nav() {
  return (
    <header className="bg-[#f4f2f1]">
      <nav className="hidden sm:flex h-15 w-full items-center justify-between px-6">
        <div className="flex items-center gap-3">
          <button
            type="button"
            className="flex items-center gap-1.5 text-[14px] font-semibold text-[#A52700] hover:opacity-80 transition-opacity"
          >
            <ArrowLeft size={15} strokeWidth={2.2} />
            List View
          </button>
          <span className="h-4 w-0.5 bg-[#A52700]" />
          <p className="hidden lg:block text-[12px] text-[#1D1A17]">
            Expected Diners: <span className="font-bold"> 57</span>
          </p>
        </div>

        <div className="flex items-center gap-2 overflow-x-auto">
          <Selector label="Monday, 12th Feb" width="w-[160px] lg:w-[180px]" />
          <Selector label="Lunch" width="w-[120px] lg:w-[180px]" />
          <Selector label="12 - 3pm" width="w-[120px] lg:w-[180px]" />
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            aria-label="Notifications"
            className="relative grid h-8 w-8 place-items-center rounded-full text-[#221d1a] hover:bg-black/5 transition-colors"
          >
            <Bell size={16} strokeWidth={1.8} />
            <span className="absolute top-1.5 right-1.5 h-1.5 w-1.5 rounded-full bg-[#A52700]" />
          </button>
          <button
            type="button"
            className="flex items-center gap-1.5 hover:opacity-80 transition-opacity"
          >
            <span className="grid h-10 w-10 place-items-center rounded-full bg-white text-[18px] font-extrabold text-[#F66435] [font-family:var(--font-urbanist)]">
              SA
            </span>
            <ChevronDown size={15} strokeWidth={2} className="text-[#1B1414]" />
          </button>
        </div>
      </nav>

      <div className="sm:hidden">
        <div className="flex h-12 items-center justify-between px-3">
          <button
            type="button"
            aria-label="List View"
            className="flex items-center text-[#A52700]"
          >
            <ArrowLeft size={18} strokeWidth={2.2} />
          </button>
          <p className="text-[12px] text-[#1D1A17]">
            Expected Diners: <span className="font-bold">57</span>
          </p>
          <div className="flex items-center gap-2">
            <button
              type="button"
              aria-label="Notifications"
              className="relative grid h-8 w-8 place-items-center rounded-full text-[#221d1a] hover:bg-black/5 transition-colors"
            >
              <Bell size={16} strokeWidth={1.8} />
              <span className="absolute top-1.5 right-1.5 h-1.5 w-1.5 rounded-full bg-[#A52700]" />
            </button>
            <button
              type="button"
              className="flex items-center gap-1 hover:opacity-80 transition-opacity"
            >
              <span className="grid h-8 w-8 place-items-center rounded-full bg-white text-[14px] font-extrabold text-[#F66435] [font-family:var(--font-urbanist)]">
                SA
              </span>
              <ChevronDown size={13} strokeWidth={2} className="text-[#1B1414]" />
            </button>
          </div>
        </div>

        <div className="flex items-center gap-2 overflow-x-auto px-3 pb-3">
          <Selector label="Monday, 12th Feb" width="w-[160px] shrink-0" />
          <Selector label="Lunch" width="w-[110px] shrink-0" />
          <Selector label="12 - 3pm" width="w-[110px] shrink-0" />
        </div>
      </div>
    </header>
  );
}
