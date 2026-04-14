import { NextResponse } from "next/server";
import { loadTSB } from "../../../lib/tsbStore";

export const dynamic = "force-dynamic";

export async function GET() {
  const data = loadTSB();
  return NextResponse.json({
    success: true,
    count: data.length,
    data
  });
}
