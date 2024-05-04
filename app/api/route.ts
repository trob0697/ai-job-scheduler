import "server-only";
import { db } from "./_db";

export async function getItems() {
  const items = await db.query.jobs.findMany();
  return items;
}
