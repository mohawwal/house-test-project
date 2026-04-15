import Link from "next/link";
import { Nav } from "@/components/Nav";
import { TimeSlotGroup } from "@/components/TimeSlotGroup";
import { User } from "@/components/icons/user";
import { Users } from "@/components/icons/users";
import type { ColumnDetailData } from "@/data/columnDetails";

export default function ColumnDetail({ data }: { data: ColumnDetailData }) {
  const { title, individualCount, groupCount, leftSlots, centerSlots, rightSlots } = data;

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Nav />

      <main className="flex flex-1 flex-col p-4">
        <div className="mb-4 flex items-center justify-between border-b border-black/5 pb-3">
          <h1
            className="text-[14px] font-semibold text-[#1D1A17]"
            style={{ fontFamily: "var(--font-nantes)" }}
          >
            {title}
          </h1>
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-0 text-[14px] text-black">
              <User />
              {individualCount}
            </span>
            <span className="flex items-center gap-0 text-[14px] text-black">
              <Users />
              {groupCount}
            </span>
            <Link
              href="/"
              className="pl-3 text-[14px] font-medium text-[#A52700] hover:opacity-75 transition-opacity"
            >
              Collapse
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            {leftSlots.map((slot) => (
              <TimeSlotGroup key={slot.id} time={slot.time} guests={slot.guests} />
            ))}
          </div>
          <div>
            {centerSlots.map((slot) => (
              <TimeSlotGroup key={slot.id} time={slot.time} guests={slot.guests} />
            ))}
          </div>
          <div>
            {rightSlots.map((slot) => (
              <TimeSlotGroup key={slot.id} time={slot.time} guests={slot.guests} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
