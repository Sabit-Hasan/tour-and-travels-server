import { TUser } from './user.interface';
import User from './user.model';

// create user
const createUser = async (usrInfo: TUser): Promise<TUser> => {

  const existingUser = await User.findOne({ email: usrInfo.email });

  if (existingUser) {
    throw new Error('User already exists!');
  }

  const result = await User.create(usrInfo);
  return result;
};

// get user
const getUser = async () => {
  const result = await User.find();
  return result;
};

// get single user by id
const getSingleUser = async (id: string): Promise<TUser> => {
  const result = await User.findById(id);

  if (!result) {
    throw new Error('User not found!');
  }

  return result;
};

// update user by id
const updateUser = async (id: string, userInfo: Partial<TUser>) => {
  const result = await User.findByIdAndUpdate(id, userInfo, {
    new: true,
    runValidators: true,
  });

  if (!result) {
    throw new Error('User not found!');
  }

  return result;
};

// delete user by id
const deleteUser = async (id: string) => {
  const result = await User.findByIdAndDelete(id);

  if (!result) {
    throw new Error('User not found!');
  }

  return result;
};

export const userService = {
  createUser,
  getUser,
  getSingleUser,
  updateUser,
  deleteUser,
};
