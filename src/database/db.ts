import mongoose from 'mongoose';

mongoose.connect(
  'mongodb+srv://leonavidareal:cYTy4otLVRMVgQOf@cluster0.bmjsizq.mongodb.net/leo-node'
);

let db = mongoose.connection;

export default db;
