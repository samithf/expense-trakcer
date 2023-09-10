import { Timestamp } from "firebase/firestore";

export type ItemType = {
  id: string;
  name: string;
  amount: number;
  date: Timestamp;
};
