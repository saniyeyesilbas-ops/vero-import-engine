import { NextResponse } from "next/server";

export async function POST(req: Request) {
  return NextResponse.json({ successCount: 5, failCount: 1, errors: [{ row: 2, field: "seriNo", reason: "Tekil değil" }] });
}
