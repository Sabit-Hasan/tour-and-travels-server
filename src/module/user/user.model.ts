import mongoose from 'mongoose';
import { TUser } from './user.interface';

const userSchema = new mongoose.Schema<TUser>(
  {
    name: {
      type: String,
      required: [true, 'Please provide a name'],
    },
    age: {
      type: Number,
      required: [true, 'Please provide an age'],
    },
    email: {
      type: String,
      required: [true, 'Please provide an email'],
      unique: true,
      validate: {
        validator: function (value: string) {
          return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value);
        },
        message: 'Please provide a valid email',
      },
    },
    photo: String,
    role: {
      type: String,
      enum: {
        values: ['admin', 'user'],
        message: 'Provided {VALUE} is not a valid role',
      },
      default: 'user',
      required: [true, 'Please provide a role'],
    },
    userStatus: {
      type: String,
      enum: {
        values: ['active', 'inactive'],
        message: 'Provided {VALUE} is not a valid status',
      },
      default: 'active',
    },
  },
  { timestamps: true },
);

const User = mongoose.model<TUser>('User', userSchema);

export default User;
