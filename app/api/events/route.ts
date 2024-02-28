import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export const GET = async (req: Request, res: Response) => {
  const events = await db.event.findMany();
  return NextResponse.json(events);
};
