import { env } from "./env";

const postRoutes = {
    getAll: env.dev + 'posts',
    create: env.dev + 'posts',
    getById: env.dev + 'posts/${id}',
    update: env.dev + 'posts/${id}',
    delete: env.dev + 'posts/${id}',
    getComments: env.dev + 'comments'
  };

  export default postRoutes;