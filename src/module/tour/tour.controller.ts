import { Request, Response } from 'express';
import { tourService } from './tour.service';

// create tour service
const createTour = async (req: Request, res: Response) => {
  try {
    const payload = req.body;

    const result = await tourService.createTour(payload);

    res.status(200).json({
      success: true,
      error: false,
      message: 'Tour created successfully! ',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: true,
      message: 'Failed to create tour!',
      data: null,
    });
  }
};

// get all tours service
const getAllTours = async (req: Request, res: Response) => {
  try {
    const result = await tourService.getAllTours();

    res.status(200).json({
      success: true,
      error: false,
      message: 'All tours fetched successfully!',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: true,
      message: 'Failed to fetch all tours!',
      data: null,
    });
  }
};

// get single tour service
const getSingleTour = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const result = await tourService.getSingleTour(id);

    res.status(200).json({
      success: true,
      error: false,
      message: 'Tour fetched successfully!',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: true,
      message: 'Failed to fetch tour!',
      data: null,
    });
  }
};

// update tour service
const updateTour = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const payload = req.body;

    const result = await tourService.updateTour(id, payload);

    res.status(200).json({
      success: true,
      error: false,
      message: 'Tour updated successfully!',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: true,
      message: 'Failed to update tour!',
      data: null,
    });
  }
};

// delete tour service
const deleteTour = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const result = await tourService.deleteTour(id);

    res.status(200).json({
      success: true,
      error: false,
      message: 'Tour deleted successfully!',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: true,
      message: 'Failed to delete tour!',
      data: null,
    });
  }
};

// get next nearest start date and end date service
const getNextNearestStartDateAndEndDate = async (
  req: Request,
  res: Response,
) => {
  try {
    const { id } = req.params;

    const result = await tourService.getNextNearestStartDateAndEndDate(id);

    res.status(200).json({
      success: true,
      error: false,
      message: 'Next nearest start date and end date fetched successfully!',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: true,
      message: 'Failed to fetch next nearest start date and end date!',
      data: null,
    });
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
