import * as dotenv from "dotenv";

dotenv.config();

export default {
  app: {
    env: process.env.APP_ENV ?? "prod",
    port: parseInt(process.env.APP_PORT) ?? 8000,
  },
  database: {
    host: process.env.DATABASE_MYSQL_HOST ?? "localhost",
    port: parseInt(process.env.DATABASE_MYSQL_PORT) ?? 5000,
    name: process.env.DATABASE_MYSQL_NAME ?? "database",
    username: process.env.DATABASE_MYSQL_USERNAME ?? "username",
    password: process.env.DATABASE_MYSQL_PASSWORD ?? "password",
  },
};
