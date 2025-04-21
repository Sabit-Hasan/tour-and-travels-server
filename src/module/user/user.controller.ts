import { NextFunction, Request, Response } from 'express';
import { userService } from './user.service';
import sendResponse from '../../utils/sendResponse';
import { StatusCodes } from 'http-status-codes';

// create user
const createUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const userInfo = req.body;

    const result = await userService.createUser(userInfo);

    sendResponse(res, {
      statusCode: StatusCodes.CREATED,
      message: 'User created successfully!',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

// get user
const getUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await userService.getUser();

    sendResponse(res, {
      statusCode: StatusCodes.OK,
      message: 'Users retrieved successfully!',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

// get single user by id
const getSingleUser = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params;
    const result = await userService.getSingleUser(id);

    sendResponse(res, {
      statusCode: StatusCodes.OK,
      message: 'User retrieved successfully!',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

// update user by id
const updateUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const userInfo = req.body;

    const result = await userService.updateUser(id, userInfo);

    sendResponse(res, {
      statusCode: StatusCodes.OK,
      message: 'User updated successfully!',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

// delete user by id
const deleteUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const result = await userService.deleteUser(id);

    sendResponse(res, {
      statusCode: StatusCodes.OK,
      message: 'User deleted successfully!',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const userController = {
  createUser,
  getUser,
  getSingleUser,
  updateUser,
  deleteUser,
};
