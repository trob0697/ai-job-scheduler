import "server-only";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { z } from "zod";

import { db } from "../_db";
import { stuff } from "../_db/schema";

export async function getAllStuff() {
  const stuff = await db.query.stuff.findMany();
  return stuff;
}

const postStuffSchema = z.object({
  name: z.string(),
});
export async function postStuff(body: object) {
  const { data, success, error } = postStuffSchema.safeParse(body);
  if (!success) throw new Error(error.toString());

  const user = auth();
  if (!user.userId) throw new Error("Unauthorized");

  await db.insert(stuff).values({
    name: data.name,
  });

  redirect("/");
}
