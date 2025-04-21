import { Request, Response } from 'express';
import { userService } from './user.service';
import sendResponse from '../../utils/sendResponse';
import { StatusCodes } from 'http-status-codes';

// create user
const createUser = async (req: Request, res: Response) => {
    try {
        const userInfo = req.body;

        const result = await userService.createUser(userInfo);

        sendResponse(res, {
            statusCode: StatusCodes.CREATED,
            message: 'User created successfully!',
            data: result,
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            error: true,
            message: 'User creation failed!',
            error,
        });
    }
};

// get user
const getUser = async (req: Request, res: Response) => {
    try {
        const result = await userService.getUser();
        res.status(200).json({
            success: true,
            error: false,
            message: 'Users retrieved successfully!',
            data: result,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: true,
            message: 'Users retrieval failed!',
            error,
        });
    }
};

// get single user by id
const getSingleUser = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const result = await userService.getSingleUser(id);

        res.status(200).json({
            success: true,
            error: false,
            message: 'User retrieved successfully!',
            data: result,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: true,
            message: 'User retrieval failed!',
            error,
        });
    }
};

// update user by id
const updateUser = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const userInfo = req.body;

        const result = await userService.updateUser(id, userInfo);

        res.status(200).json({
            success: true,
            error: false,
            message: 'User updated successfully!',
            data: result,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: true,
            message: 'User update failed!',
            error,
        });
    }
};

// delete user by id
const deleteUser = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const result = await userService.deleteUser(id);

        res.status(200).json({
            success: true,
            error: false,
            message: 'User deleted successfully!',
            data: result,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: true,
            message: 'User deletion failed!',
            error,
        });
    }
};

export const userController = {
    createUser,
    getUser,
    getSingleUser,
    updateUser,
    deleteUser,
};
