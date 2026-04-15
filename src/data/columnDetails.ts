import type { Guest } from "./guests";

export interface DetailTimeSlot {
  id: string;
  time: string;
  guests: Guest[];
}

export interface ColumnDetailData {
  id: string;
  title: string;
  individualCount: number;
  groupCount: number;
  leftSlots: DetailTimeSlot[];
  centerSlots: DetailTimeSlot[];
  rightSlots: DetailTimeSlot[];
}

// Guests used only in the detail views
const detailGuests: Record<string, Guest> = {
  titus:    { id: "d-w1", partySize: 4, name: "Titus Angelos",   bookedTime: "8:00 am",  status: "waitlist"  },
  paul:     { id: "d-w2", partySize: 8, name: "Paul Bright",     bookedTime: "8:00 am",  status: "waitlist"  },
  kosi:     { id: "d-s1", partySize: 2, name: "Kosi Usman",      bookedTime: "11:30am",  secondaryTime: "1h 15m", tableNumber: 15, status: "seated" },
  yousuf:   { id: "d-r1", partySize: 1, name: "Yousuf Adamu",    bookedTime: "01:00 pm", secondaryTime: "12:45pm", tableNumber: 3, status: "reservation", icon: "dining" },
  katherine:{ id: "d-r2", partySize: 3, name: "Katherine Umar",  bookedTime: "01:15 pm", secondaryTime: "01:00pm", tableNumber: 7, status: "reservation", icon: "dining" },
  kazeem:   { id: "d-f1", partySize: 2, name: "Kazeem Ibahim",   bookedTime: "02:00 pm", secondaryTime: "02:00pm", tableNumber: 15, status: "finished" },
};

export const columnDetails: Record<string, ColumnDetailData> = {
  waitlist: {
    id: "waitlist",
    title: "Waitlist",
    individualCount: 2,
    groupCount: 0,
    leftSlots: [
      { id: "l1", time: "12:00 PM", guests: [detailGuests.titus, detailGuests.paul] },
      { id: "l2", time: "12:15 PM", guests: [] },
      { id: "l3", time: "12:30 PM", guests: [] },
      { id: "l4", time: "12:45 PM", guests: [] },
    ],
    centerSlots: [
      { id: "c1", time: "01:00 PM", guests: [] },
      { id: "c2", time: "01:15 PM", guests: [] },
      { id: "c3", time: "01:30 PM", guests: [] },
      { id: "c4", time: "01:45 PM", guests: [] },
    ],
    rightSlots: [
      { id: "r1", time: "02:00 PM", guests: [] },
      { id: "r2", time: "02:15 PM", guests: [] },
      { id: "r3", time: "02:30 PM", guests: [] },
      { id: "r4", time: "02:45 PM", guests: [] },
    ],
  },

  reservations: {
    id: "reservations",
    title: "Reservations",
    individualCount: 8,
    groupCount: 15,
    leftSlots: [
      { id: "l1", time: "12:00 PM", guests: [detailGuests.titus, detailGuests.paul] },
      { id: "l2", time: "12:15 PM", guests: [] },
      { id: "l3", time: "12:30 PM", guests: [detailGuests.kosi] },
      { id: "l4", time: "12:45 PM", guests: [] },
    ],
    centerSlots: [
      { id: "c1", time: "01:00 PM", guests: [detailGuests.yousuf] },
      { id: "c2", time: "01:15 PM", guests: [detailGuests.katherine] },
      { id: "c3", time: "01:30 PM", guests: [] },
      { id: "c4", time: "01:45 PM", guests: [] },
    ],
    rightSlots: [
      { id: "r1", time: "02:00 PM", guests: [] },
      { id: "r2", time: "02:15 PM", guests: [] },
      { id: "r3", time: "02:30 PM", guests: [] },
      { id: "r4", time: "02:45 PM", guests: [] },
    ],
  },

  seated: {
    id: "seated",
    title: "Seated",
    individualCount: 8,
    groupCount: 15,
    leftSlots: [
      { id: "l1", time: "12:00 PM", guests: [detailGuests.kosi] },
      { id: "l2", time: "12:15 PM", guests: [] },
      { id: "l3", time: "12:30 PM", guests: [] },
      { id: "l4", time: "12:45 PM", guests: [] },
    ],
    centerSlots: [
      { id: "c1", time: "01:00 PM", guests: [] },
      { id: "c2", time: "01:15 PM", guests: [] },
      { id: "c3", time: "01:30 PM", guests: [] },
      { id: "c4", time: "01:45 PM", guests: [] },
    ],
    rightSlots: [
      { id: "r1", time: "02:00 PM", guests: [] },
      { id: "r2", time: "02:15 PM", guests: [] },
      { id: "r3", time: "02:30 PM", guests: [] },
      { id: "r4", time: "02:45 PM", guests: [] },
    ],
  },

  finished: {
    id: "finished",
    title: "Finished",
    individualCount: 2,
    groupCount: 8,
    leftSlots: [
      { id: "l1", time: "12:00 PM", guests: [detailGuests.kazeem] },
      { id: "l2", time: "12:15 PM", guests: [] },
      { id: "l3", time: "12:30 PM", guests: [] },
      { id: "l4", time: "12:45 PM", guests: [] },
    ],
    centerSlots: [
      { id: "c1", time: "01:00 PM", guests: [] },
      { id: "c2", time: "01:15 PM", guests: [] },
      { id: "c3", time: "01:30 PM", guests: [] },
      { id: "c4", time: "01:45 PM", guests: [] },
    ],
    rightSlots: [
      { id: "r1", time: "02:00 PM", guests: [] },
      { id: "r2", time: "02:15 PM", guests: [] },
      { id: "r3", time: "02:30 PM", guests: [] },
      { id: "r4", time: "02:45 PM", guests: [] },
    ],
  },
};
