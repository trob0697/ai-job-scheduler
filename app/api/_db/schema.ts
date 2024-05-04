import { pgTableCreator, timestamp, uuid } from "drizzle-orm/pg-core";

export const createTable = pgTableCreator((name) => `${name}`);

export const jobs = createTable("jobs", {
  id: uuid("id").defaultRandom().primaryKey(),
  createdAt: timestamp("createdAt").defaultNow(),
});
