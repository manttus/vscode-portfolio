import { drizzle } from "drizzle-orm/postgres-js";
import * as schema from "./schema";
import postgres from "postgres";
import config from "../config";

export const sql = postgres(config.connection_string, { max: 1 });
export const db = drizzle(sql, { schema });
