import { NextResponse } from "next/server";

export async function POST(req: Request) {
  return NextResponse.json({ successCount: 8, failCount: 0, errors: [] });
}
