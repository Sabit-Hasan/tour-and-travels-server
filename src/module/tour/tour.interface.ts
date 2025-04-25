// import { Model } from 'mongoose';

export type TTour = {
  name: string;
  duration: number;
  availableSeats: number;
  averageRating: number;
  price: number;
  coverImage: string;
  images: string[];
  startDates: Date[];
  startLocation: string;
  slug: string;
};

// export interface ITourMethods {
//     getNextNearestStartDateAndEndDate(): {
//         nearestStartDate: Date | null;
//         estimatedEndDate: Date | null;
//     };
// }

// type TTourModel = Model<TTour, Record<string, unknown>, ITourMethods>

// export default TTourModel;
