import Link from "next/link";
import type { Guest } from "@/data/guests";
import { GuestCard } from "./GuestCard";
import { User } from "./icons/user";
import { Users } from "./icons/users";

interface KanbanColumnProps {
  slug: string;
  title: string;
  individualCount: number;
  groupCount: number;
  guests: Guest[];
}

export function KanbanColumn({ slug, title, individualCount, groupCount, guests }: KanbanColumnProps) {
  return (
    <div className="flex min-w-0 flex-1 flex-col self-start bg-white p-3 pb-10">
      <div className="mb-3 flex items-center justify-between gap-2 border-b border-black/5 pb-3">
        <h2
          className="text-[14px] font-semibold text-[#1D1A17]"
          style={{ fontFamily: "var(--font-nantes)" }}
        >
          {title}
        </h2>
        <div className="flex items-center gap-2.5">
          <span className="flex items-center gap-0 text-[14px] text-black">
            <User />
            {individualCount}
          </span>
          <span className="flex items-center gap-0 text-[14px] text-black">
            <Users />
            {groupCount}
          </span>
          <Link
            href={`/column/${slug}`}
            className="text-[14px] pl-3 font-medium text-[#A52700] hover:opacity-75 transition-opacity"
          >
            View all
          </Link>
        </div>
      </div>

      <div className="flex flex-col">
        {guests.map((guest) => (
          <GuestCard key={guest.id} guest={guest} />
        ))}
      </div>
    </div>
  );
}
