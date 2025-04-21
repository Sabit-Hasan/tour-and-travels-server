import { Router } from 'express';
import { tourController } from './tour.controller';

const tourRouter = Router();

tourRouter.get('/get-tour/:id', tourController.getSingleTour);
tourRouter.get('/get-all-tours', tourController.getAllTours);
tourRouter.post('/create-tour', tourController.createTour);
tourRouter.put('/update-tour/:id', tourController.updateTour);
tourRouter.delete('/delete-tour/:id', tourController.deleteTour);
tourRouter.get(
  '/schedule/:id',
  tourController.getNextNearestStartDateAndEndDate,
);

export default tourRouter;
