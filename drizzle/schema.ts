import { relations } from "drizzle-orm";
import { pgTable, text, uuid, boolean, pgEnum } from "drizzle-orm/pg-core";

export const typeEnum = pgEnum("type", ["folder", "file", "image"]);

export const structure = pgTable("structure", {
  id: uuid("id").defaultRandom().primaryKey(),
  name: text("name"),
  type: typeEnum("type"),
  extension: text("extension"),
  icon: text("icon").default(" "),
  content: text("content").default(" "),
  parent_id: uuid("parent_id"),
});

export const childrenRelation = relations(structure, ({ one, many }) => ({
  parent: one(structure, {
    references: [structure.id],
    fields: [structure.parent_id],
    relationName: "structures",
  }),
  children: many(structure, {
    relationName: "structures",
  }),
}));
