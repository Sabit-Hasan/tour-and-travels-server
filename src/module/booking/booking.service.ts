import mongoose from 'mongoose';
import Tour from '../tour/tour.model';
import { TBooking } from './booking.interface';
import Booking from './booking.model';

// Function to create a booking
const createBooking = async (payload: TBooking): Promise<TBooking> => {

    const session = await mongoose.startSession();
    session.startTransaction();

    try {
        const existingTour = await Tour.findById(payload.tour);

        if (!existingTour) {
            throw new Error('Tour not found!');
        }

        const totalPrice = existingTour.price * payload.bookedSlots;

        payload.totalPrice = totalPrice;

        if (payload.bookedSlots > existingTour.availableSeats) {
            throw new Error('Not enough available seats!');
        }

        const result = await Booking.create([payload], { session });

        const updatedTour = await Tour.findByIdAndUpdate(
            result[0].tour,
            {
                $inc: {
                    availableSeats: -payload.bookedSlots,
                }
            },
            { new: true, session }
        );

        if (updatedTour) {
            throw new Error('Failed to update tour!');
        }

        await session.commitTransaction();
        await session.endSession();

        return result[0];

    } catch (error) {
        await session.abortTransaction();
        await session.endSession();

        throw error;
    }
}

// Function to updateBooking
const updateBooking = async (id: string, payload: Partial<TBooking>) => {

    const session = await mongoose.startSession();
    session.startTransaction();

    try {

        const existingBooking = await Booking.findById(id).session(session);

        if (!existingBooking) {
            throw new Error('Booking not found!');
        }




    } catch (error) {
        await session.abortTransaction();
        await session.endSession();

        throw error;
    }
}

export const bookingService = {
    createBooking,
}