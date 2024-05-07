import "server-only";
import { z } from "zod";

import { db } from "../_db";
import { stuff } from "../_db/schema";

export async function GET(request: Request) {
  const items = await db.query.stuff.findMany();
  return Response.json(items, { status: 200 });
}

const postSchema = z.object({
  name: z.string(),
});
export async function POST(request: Request) {
  const body = await request.json();
  const { data, success, error } = postSchema.safeParse(body);
  if (!success) {
    return Response.json(error.format(), { status: 400 });
  }
  await db.insert(stuff).values({
    name: data.name,
  });
  return Response.json({}, { status: 201 });
}
