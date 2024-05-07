import { pgTableCreator, text, timestamp, uuid } from "drizzle-orm/pg-core";

export const createTable = pgTableCreator((name) => `${name}`);

export const jobs = createTable("stuff", {
  id: uuid("id").defaultRandom().primaryKey(),
  createdAt: timestamp("createdAt").defaultNow(),
  name: text("name").notNull(),
});
