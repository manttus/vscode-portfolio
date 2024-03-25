import { pgTable, text, uuid } from "drizzle-orm/pg-core";

export const structure = pgTable("structure", {
  id: uuid("id").defaultRandom(),
  filename: text("filename"),
  extension: text("extension"),
});
