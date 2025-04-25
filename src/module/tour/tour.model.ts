import mongoose from 'mongoose';
import { TTour } from './tour.interface';

const tourSchema = new mongoose.Schema<TTour>(
  {
    name: {
      type: String,
      required: [true, 'Please provide a name'],
    },
    duration: {
      type: Number,
      required: [true, 'Please provide a duration'],
    },
    availableSeats: {
      type: Number,
      required: [true, 'Please provide available seats'],
      default: 0,
    },
    averageRating: {
      type: Number,
      default: 4.5,
    },
    price: {
      type: Number,
      required: [true, 'Please provide a price'],
    },
    coverImage: {
      type: String,
      required: [true, 'Please provide a cover image'],
    },
    images: [String],
    startDates: [Date],
    startLocation: String,
    slug: String,
  },
  { timestamps: true },
);

// generate slug using pre save hook
tourSchema.pre<TTour>('save', function (this: TTour, next) {
  this.slug = this.name.toLowerCase().split(' ').join('-');

  next();
});

const Tour = mongoose.model<TTour>('Tour', tourSchema);

export default Tour;
