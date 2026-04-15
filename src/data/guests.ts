export type GuestStatus = "waitlist" | "reservation" | "seated" | "finished";
export type ReservationIcon = "dining" | "location" | "message";

export interface Guest {
  id: string;
  partySize: number;
  name: string;
  bookedTime: string;
  secondaryTime?: string;   // shown highlighted (blue/orange)
  tableNumber?: number;     // badge on right
  status: GuestStatus;
  icon?: ReservationIcon;   // coloured square icon for reservations
}

export const waitlistGuests: Guest[] = [
  { id: "w1", partySize: 2, name: "Titus Angelos",   bookedTime: "5m of 40m",    status: "waitlist" },
  { id: "w2", partySize: 2, name: "Paul Bright",     bookedTime: "5m of 1h 30m", status: "waitlist" },
  { id: "w3", partySize: 4, name: "Laila Mensah",    bookedTime: "2m of 20m",    status: "waitlist" },
];

export const reservationGuests: Guest[] = [
  { id: "r1", partySize: 1, name: "Yousuf Adamu",    bookedTime: "10:30am", secondaryTime: "10:15am", tableNumber: 15, status: "reservation", icon: "dining"   },
  { id: "r2", partySize: 3, name: "Katherine Umar",  bookedTime: "11:30am", secondaryTime: "11:15am", tableNumber: 17, status: "reservation", icon: "dining"   },
  { id: "r3", partySize: 4, name: "Michael Scofield",bookedTime: "11:30am",                           status: "reservation", icon: "location" },
  { id: "r4", partySize: 3, name: "Katherine Umar",  bookedTime: "11:30am", secondaryTime: "11:15am", tableNumber: 17, status: "reservation", icon: "dining"   },
  { id: "r5", partySize: 4, name: "Michael Scofield",bookedTime: "11:30am",                           status: "reservation", icon: "message"  },
];

export const seatedGuests: Guest[] = [
  { id: "s1", partySize: 3, name: "Kosi Usman",   bookedTime: "11:30am", secondaryTime: "1h 15m",  tableNumber: 15, status: "seated" },
  { id: "s2", partySize: 2, name: "Moses Elisha", bookedTime: "10:30am", secondaryTime: "11:15am", tableNumber: 10, status: "seated" },
  { id: "s3", partySize: 5, name: "Amara Diallo", bookedTime: "12:00pm", secondaryTime: "45m",     tableNumber: 8,  status: "seated" },
];

export const finishedGuests: Guest[] = [
  { id: "f1", partySize: 2, name: "Kazeem Ibahim",        bookedTime: "11:30am", secondaryTime: "11:30am", tableNumber: 15, status: "finished" },
  { id: "f2", partySize: 2, name: "Tayo Usman Dan fodio", bookedTime: "10:30am", secondaryTime: "10:30am", tableNumber: 17, status: "finished" },
  { id: "f3", partySize: 1, name: "Abayomi Amos",         bookedTime: "10:30am", secondaryTime: "10:30am", tableNumber: 22, status: "finished" },
  { id: "f4", partySize: 3, name: "Ngozi Okonkwo",        bookedTime: "09:30am", secondaryTime: "09:30am", tableNumber: 11, status: "finished" },
];
