import "server-only";
import { db } from "../_db";

export async function getStuff() {
  return await db.query.stuff.findMany();
}
