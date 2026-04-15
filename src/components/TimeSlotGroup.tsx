import type { Guest } from "@/data/guests";
import { GuestCard } from "./GuestCard";
import { SeatBox } from "./SeatBox";

const SEATS = [1, 2, 3, 4, 5];

export function TimeSlotGroup({
  time,
  guests = [],
}: {
  time: string;
  guests?: Guest[];
}) {
  const hasGuests = guests.length > 0;

  return (
    <div className="mb-3">
      <div className="mb-2 flex h-7.5 items-center justify-center rounded-sm bg-[#F3F3F3] px-3 text-[14px] text-[#1D1A17]">
        {time}
      </div>

      <div className="flex flex-wrap gap-1.5">
        {SEATS.map((n) => (
          <SeatBox key={n} label={n} />
        ))}
        <SeatBox isAdd highlightAdd={hasGuests} />
      </div>

      {hasGuests && (
        <div className="mt-1">
          {guests.map((g) => (
            <GuestCard key={g.id} guest={g} />
          ))}
        </div>
      )}
    </div>
  );
}
