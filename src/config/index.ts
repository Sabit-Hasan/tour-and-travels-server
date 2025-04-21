import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join(process.cwd(), '.env') });

export default {
  dataBaseURL: process.env.MONGO_URI,
  port: process.env.PORT || 3000,
};
