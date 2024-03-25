import type { Config } from "drizzle-kit";
import config from "./config";

export default {
  schema: "./drizzle/schema.ts",
  driver: "pg",
  out: "./drizzle/migrations",
  dbCredentials: {
    connectionString: config.connection_string,
  },
} satisfies Config;
