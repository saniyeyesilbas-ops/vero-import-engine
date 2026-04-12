import { NextResponse } from "next/server";

export async function POST(req: Request) {
  return NextResponse.json({ successCount: 45, failCount: 2, errors: [{ row: 7, field: "plaka", reason: "Bos olamaz" }] });
}
