import { PriceType } from "./priceType.enum";

export interface Trip {
  tripId: number;
  title: string;
  imageUrl: string;
  price: number;
  priceType: PriceType;
  summary: string;
}
