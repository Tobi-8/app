export const currentUser = {
  name: "Victor",
  username: "@victor",
  email: "victor@email.com",
  avatar: "https://i.pravatar.cc/150?img=12",
  balance: 1240.5,
  stellarAddress: "GA5Z3IX5VQ3N6FB77T342A27RWRN7CKEZ63M3W7S5VJB3D77J6F2JAFK",
};

export const contacts = [
  { id: "1", name: "Sarah", username: "@sarah", avatar: "https://i.pravatar.cc/150?img=47" },
  { id: "2", name: "Alex", username: "@alex", avatar: "https://i.pravatar.cc/150?img=33" },
  { id: "3", name: "Maya", username: "@maya", avatar: "https://i.pravatar.cc/150?img=45" },
  { id: "4", name: "James", username: "@james", avatar: "https://i.pravatar.cc/150?img=13" },
  { id: "5", name: "Lily", username: "@lily", avatar: "https://i.pravatar.cc/150?img=32" },
  { id: "6", name: "Omar", username: "@omar", avatar: "https://i.pravatar.cc/150?img=52" },
];

export type Transaction = {
  id: string;
  type: "sent" | "received";
  name: string;
  username: string;
  avatar: string;
  amount: number;
  note?: string;
  date: string;
  status: "completed" | "pending";
};

export const transactions: Transaction[] = [
  { id: "t1", type: "received", name: "Sarah", username: "@sarah", avatar: "https://i.pravatar.cc/150?img=47", amount: 50.0, note: "Dinner split", date: "Today, 2:30 PM", status: "completed" },
  { id: "t2", type: "sent", name: "Alex", username: "@alex", avatar: "https://i.pravatar.cc/150?img=33", amount: 25.0, note: "Coffee ☕", date: "Today, 11:15 AM", status: "completed" },
  { id: "t3", type: "received", name: "Maya", username: "@maya", avatar: "https://i.pravatar.cc/150?img=45", amount: 120.0, note: "Freelance project", date: "Yesterday", status: "completed" },
  { id: "t4", type: "sent", name: "James", username: "@james", avatar: "https://i.pravatar.cc/150?img=13", amount: 15.0, date: "Yesterday", status: "pending" },
  { id: "t5", type: "received", name: "Lily", username: "@lily", avatar: "https://i.pravatar.cc/150?img=32", amount: 200.0, note: "Rent contribution", date: "Feb 10", status: "completed" },
  { id: "t6", type: "sent", name: "Omar", username: "@omar", avatar: "https://i.pravatar.cc/150?img=52", amount: 8.5, note: "Snacks", date: "Feb 9", status: "completed" },
];
