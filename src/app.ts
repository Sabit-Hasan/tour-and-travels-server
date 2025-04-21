import express, { Request, Response } from 'express';
import userRouter from './module/user/user.route';
import tourRouter from './module/tour/tour.route';

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/api/v1/user', userRouter);
app.use('/api/v1/tour', tourRouter);

app.get('/', (req: Request, res: Response) => {
  res.send('Server Live!');
});

export default app;
