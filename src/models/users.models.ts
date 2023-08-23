import mongoose from 'mongoose';
import { UserDTO } from '../interfaces/user.interface';

const userSchema = new mongoose.Schema<UserDTO>(
  {
    id: { type: String },
    name: { type: String, required: true },
    email: { type: String, unique: true },
    password: { type: String, required: true, select: false },
  },
  { versionKey: false }
);

const Users = mongoose.model('users', userSchema);

export default Users;
