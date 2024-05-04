import { sql } from "drizzle-orm";
import { pgTableCreator, timestamp, uuid } from "drizzle-orm/pg-core";

export const createTable = pgTableCreator((name) => `${name}`);

export const jobs = createTable("jobs", {
  id: uuid("id").primaryKey(),
  createdAt: timestamp("createdAt")
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  updatedAt: timestamp("updatedAt"),
});
