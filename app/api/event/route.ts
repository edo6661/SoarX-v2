import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export const POST = async (req: Request, res: Response) => {
  const sendedData = await req.json();

  await db.event.create({
    data: {
      ...sendedData,
    },
  });

  return NextResponse.json({ title: sendedData.title });
};
