import type { Guest } from "@/data/guests";
import { FnckIcon } from "./icons/fnck-icon";
import { PlaceIcon } from "./icons/place";
import { ScanIcon } from "./icons/scan";
import { HallIon } from "./icons/hall";

const iconMap = {
  dining:   { Icon: FnckIcon,  bg: "bg-[#7880BD]" },
  location: { Icon: PlaceIcon, bg: "bg-[#FFC28D]" },
  message:  { Icon: ScanIcon,  bg: "bg-[#FFFF8D]" },
};

export function GuestCard({ guest }: { guest: Guest }) {
  const { partySize, name, bookedTime, secondaryTime, tableNumber, status, icon } = guest;
  const hasIcon = status === "reservation" && icon;

  return (
    <div className="flex items-start gap-2 py-2">

      {hasIcon && (
        <span className={`mt-0.5 flex h-12 w-10 shrink-0 items-center justify-center rounded-xs ${iconMap[icon].bg}`}>
          {(() => { const { Icon } = iconMap[icon]; return <Icon />; })()}
        </span>
      )}

      <span className="flex h-12.5 w-4 shrink-0 items-start justify-center pt-1 text-[14px] font-bold text-[#1D1A17]">
        {partySize}
      </span>

      <div className="min-w-0 flex-1 pt-0.5">
        <p className="truncate text-[14px] font-bold">{name}</p>
        <p className="mt-0.5 text-[11px] text-[#6B6460]">
          {bookedTime}
          {secondaryTime && (
            <>
              {" • "}
              <span className={status === "finished" ? "text-[#1D1A17] text-[10px] font-normal" : "text-[#7880BD] text-[10px] font-bold"}>
                {secondaryTime}
              </span>
            </>
          )}
        </p>
      </div>

      <div className={`flex shrink-0 flex-col items-center justify-around h-12 w-10 rounded-xs py-1 ${
        status === "seated"   ? "bg-[#7880BD]" :
        status === "finished" ? "bg-[#FFC28D]" :
        "bg-[#F3F3F3]"
      }`}>
        {tableNumber !== undefined && (
          <span className={`text-[11px] font-semibold leading-none ${status === "seated" ? "text-white" : "text-[#1D1A17]"}`}>
            {tableNumber}
          </span>
        )}
        <button type="button" aria-label="Seat guest" className="flex items-center justify-center">
          <HallIon color={status === "seated" ? "#ffffff" : "#000000"} />
        </button>
      </div>

    </div>
  );
}
