import { tourService } from './tour.service';
import { StatusCodes } from 'http-status-codes';
import sendResponse from '../../utils/sendResponse';
import catchAsync from '../../utils/catchAsync';

// create tour service
const createTour = catchAsync(async (req, res) => {
  const payload = req.body;

  const result = await tourService.createTour(payload);

  sendResponse(res, {
    statusCode: StatusCodes.CREATED,
    message: 'Tour created successfully!',
    data: result,
  })
});

// get all tours service
const getAllTours = catchAsync(async (req, res) => {
  const result = await tourService.getAllTours();

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    message: 'All tours fetched successfully!',
    data: result,
  })
});

// get single tour service
const getSingleTour = catchAsync(async (req, res) => {
  const { id } = req.params;

  const result = await tourService.getSingleTour(id);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    message: 'Tour fetched successfully!',
    data: result,
  })
});

// update tour service
const updateTour = catchAsync(async (req, res) => {
  const { id } = req.params;
  const payload = req.body;

  const result = await tourService.updateTour(id, payload);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    message: 'Tour updated successfully!',
    data: result,
  })
});

// delete tour service
const deleteTour = catchAsync(async (req, res) => {
  const { id } = req.params;

  const result = await tourService.deleteTour(id);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    message: 'Tour deleted successfully!',
    data: result,
  })
});

// get next nearest start date and end date service
const getNextNearestStartDateAndEndDate = catchAsync(async (req, res) => {
  const { id } = req.params;

  const result = await tourService.getNextNearestStartDateAndEndDate(id);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    message: 'Next nearest start date and end date fetched successfully!',
    data: result,
  })
});

export const tourController = {
  createTour,
  getAllTours,
  getSingleTour,
  updateTour,
  deleteTour,
  getNextNearestStartDateAndEndDate,
};
