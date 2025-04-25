import mongoose from "mongoose";
import { TBooking } from "./booking.interface";

const bookingSchema = new mongoose.Schema<TBooking>({
    user: {
        type: mongoose.Types.ObjectId,
        required: true,
        ref: 'User',
    },
    tour: {
        type: mongoose.Types.ObjectId,
        required: true,
        ref: 'Tour',
    },
    bookedSlots: {
        type: Number,
        required: true,
        min: 1,
    },
    bookingStatus: {
        type: String,
        enum: ['pending', 'paid', 'cancelled'],
        default: 'pending',
    },
    totalPrice: {
        type: Number,
        min: 0,
    }
}, { timestamps: true });

const Booking = mongoose.model<TBooking>('Booking', bookingSchema);

export default Booking;
