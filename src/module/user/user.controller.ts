import { userService } from './user.service';
import sendResponse from '../../utils/sendResponse';
import { StatusCodes } from 'http-status-codes';
import catchAsync from '../../utils/catchAsync';

// create user
const createUser = catchAsync(async (req, res) => {
  const userInfo = req.body;

  const result = await userService.createUser(userInfo);

  sendResponse(res, {
    statusCode: StatusCodes.CREATED,
    message: 'User created successfully!',
    data: result,
  });
});

// get user
const getUser = catchAsync(async (req, res) => {
  const result = await userService.getUser();

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    message: 'Users retrieved successfully!',
    data: result,
  });
});

// get single user by id
const getSingleUser = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await userService.getSingleUser(id);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    message: 'User retrieved successfully!',
    data: result,
  });
});

// update user by id
const updateUser = catchAsync(async (req, res) => {
  const { id } = req.params;
  const userInfo = req.body;

  const result = await userService.updateUser(id, userInfo);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    message: 'User updated successfully!',
    data: result,
  });
});

// delete user by id
const deleteUser = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await userService.deleteUser(id);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    message: 'User deleted successfully!',
    data: result,
  });
});

export const userController = {
  createUser,
  getUser,
  getSingleUser,
  updateUser,
  deleteUser,
};
