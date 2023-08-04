import mongoose from 'mongoose';
import 'dotenv/config';

mongoose.connect(process.env.DATABASEURL!);

let db = mongoose.connection;

export default db;
