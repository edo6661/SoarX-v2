import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export const GET = async (req: Request, res: Response) => {
  const { searchParams } = new URL(req.url);
  const externalUserId = searchParams.get("externalUserId");
  if (!externalUserId) return NextResponse.json(false);
  const user = await db.user.findUnique({
    where: {
      externalUserId,
    },
  });
  return NextResponse.json(user);
};
