import { env } from "./env";

const userRoutes = {
  getUsers: env.dev + "users",
  getUserById: env.dev + "users/${id}",
  createUser: env.dev + "users",
  updateUser: env.dev + "users/${id}",
};
export default userRoutes;
