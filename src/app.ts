import express, { NextFunction, Request, Response } from 'express';
import userRouter from './module/user/user.route';
import tourRouter from './module/tour/tour.route';
import { StatusCodes } from 'http-status-codes';

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/api/v1/user', userRouter);
app.use('/api/v1/tour', tourRouter);

app.get('/', (req: Request, res: Response) => {
  res.send('Server Live!');
});

// Error handling middleware
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  res.status(err.status || StatusCodes.INTERNAL_SERVER_ERROR).json({
    success: false,
    message: err.message || 'Internal Server Error',
    error: err,
  });
});

export default app;
