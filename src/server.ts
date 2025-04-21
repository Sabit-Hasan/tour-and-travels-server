import mongoose from 'mongoose';
import app from './app';
import config from './config';

async function server() {
  try {
    // Connect to the database
    await mongoose.connect(config.dataBaseURL as string);

    app.listen(config.port, () => {
      console.log(`Server is running on http://localhost:${config.port}`);
    });
  } catch (error) {
    console.error('Error starting the server:', error);
  }
}

server();
