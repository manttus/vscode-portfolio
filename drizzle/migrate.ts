import { migrate } from "drizzle-orm/postgres-js/migrator";

import { db, sql } from "./index";

(async () => {
  await migrate(db, { migrationsFolder: "./migrations" });
  await sql.end();
})();
