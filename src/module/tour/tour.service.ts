import { TTour } from './tour.interface';
import Tour from './tour.model';

// create tour service
const createTour = async (payload: TTour) => {
  const result = await Tour.create(payload);

  return result;
};

// get all tours service
const getAllTours = async () => {
  const result = await Tour.find();

  return result;
};

// get single tour service
const getSingleTour = async (id: string) => {
  const result = await Tour.findById(id);

  return result;
};

// update tour service
const updateTour = async (id: string, payload: Partial<TTour>) => {
  const result = await Tour.findByIdAndUpdate(id, payload, { new: true });

  return result;
};

// delete tour service
const deleteTour = async (id: string) => {
  const result = await Tour.findByIdAndDelete(id);

  return result;
};

// get next nearest start date and end date service
const getNextNearestStartDateAndEndDate = async (id: string) => {
  const tour = await Tour.findById(id);

  if (!tour) {
    throw new Error('Tour not found');
  }

  const today = new Date();

  const futureStartDates = tour.startDates
    .filter((startDate: Date) => {
      return startDate > today;
    })
    .sort((a: Date, b: Date) => {
      return a.getTime() - b.getTime();
    });

  const nearestStartDate = futureStartDates[0];
  const estimatedEndDate = new Date(
    nearestStartDate.getTime() + tour.duration * 60 * 60 * 1000,
  );

  return {
    tour,
    nextSchedule: {
      nearestStartDate,
      estimatedEndDate,
    },
  };
};

export const tourService = {
  createTour,
  getAllTours,
  getSingleTour,
  updateTour,
  deleteTour,
  getNextNearestStartDateAndEndDate,
};
