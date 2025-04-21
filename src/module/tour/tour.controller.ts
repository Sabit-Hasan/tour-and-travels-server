import { Request, Response, NextFunction } from 'express';
import { tourService } from './tour.service';
import { StatusCodes } from 'http-status-codes';
import sendResponse from '../../utils/sendResponse';

// create tour service
const createTour = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const payload = req.body;

    const result = await tourService.createTour(payload);

    sendResponse(res, {
      statusCode: StatusCodes.CREATED,
      message: 'Tour created successfully!',
      data: result,
    })

  } catch (error) {

    next(error);
  }
};

// get all tours service
const getAllTours = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await tourService.getAllTours();

    sendResponse(res, {
      statusCode: StatusCodes.OK,
      message: 'All tours fetched successfully!',
      data: result,
    })

  } catch (error) {
    next(error);
  }
};

// get single tour service
const getSingleTour = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;

    const result = await tourService.getSingleTour(id);

    sendResponse(res, {
      statusCode: StatusCodes.OK,
      message: 'Tour fetched successfully!',
      data: result,
    })

  } catch (error) {
    next(error);
  }
};

// update tour service
const updateTour = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const payload = req.body;

    const result = await tourService.updateTour(id, payload);

    sendResponse(res, {
      statusCode: StatusCodes.OK,
      message: 'Tour updated successfully!',
      data: result,
    })

  } catch (error) {
    next(error);
  }
};

// delete tour service
const deleteTour = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;

    const result = await tourService.deleteTour(id);

    sendResponse(res, {
      statusCode: StatusCodes.OK,
      message: 'Tour deleted successfully!',
      data: result,
    })

  } catch (error) {
    next(error);
  }
};

// get next nearest start date and end date service
const getNextNearestStartDateAndEndDate = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;

    const result = await tourService.getNextNearestStartDateAndEndDate(id);

    sendResponse(res, {
      statusCode: StatusCodes.OK,
      message: 'Next nearest start date and end date fetched successfully!',
      data: result,
    })

  } catch (error) {
    next(error);
  }
};

export const tourController = {
  createTour,
  getAllTours,
  getSingleTour,
  updateTour,
  deleteTour,
  getNextNearestStartDateAndEndDate,
};
