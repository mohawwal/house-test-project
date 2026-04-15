import { KanbanColumn } from "@/components/KanbanColumn";
import { waitlistGuests, reservationGuests, seatedGuests, finishedGuests } from "@/data/guests";

export default function Home() {
  return (
    <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-3 w-full">
      <KanbanColumn slug="waitlist"     title="Waitlist"      individualCount={2} groupCount={0}  guests={waitlistGuests}     />
      <KanbanColumn slug="reservations" title="Reservations"  individualCount={8} groupCount={15} guests={reservationGuests}   />
      <KanbanColumn slug="seated"       title="Seated"        individualCount={8} groupCount={15} guests={seatedGuests}        />
      <KanbanColumn slug="finished"     title="Finished"      individualCount={2} groupCount={8}  guests={finishedGuests}      />
    </main>
  );
}