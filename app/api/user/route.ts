import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export const GET = async (req: Request, res: Response) => {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");
  if (!id) return NextResponse.json({ error: "id is required" });
  const user = await db.user.findUnique({
    where: {
      id,
    },
  });
  return NextResponse.json(user);
};
