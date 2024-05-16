import { clerkMiddleware } from "@clerk/nextjs/server";
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";
import { NextRequest, NextResponse } from "next/server";

export default clerkMiddleware();

export const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(10, "60 s"),
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};

export async function middleware(request: NextRequest) {
  const { success } = await ratelimit.limit(request.ip || "127.0.0.1");
  if (!success) return NextResponse.json("Rate Limited!", { status: 429 });

  return NextResponse.next();
}
