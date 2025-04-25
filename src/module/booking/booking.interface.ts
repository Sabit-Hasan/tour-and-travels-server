import mongoose from "mongoose";

export type TBooking = {
    user: mongoose.Schema.Types.ObjectId;
    tour: mongoose.Schema.Types.ObjectId;
    bookedSlots: number;
    bookingStatus: 'pending' | 'paid' | 'cancelled';
    totalPrice: number;
}