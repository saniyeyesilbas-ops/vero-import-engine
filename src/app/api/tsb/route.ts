import { NextResponse } from "next/server";
import { tsbReference } from "@/lib/tsb";

// GET - TSB listesini getir
export async function GET() {
  return NextResponse.json({
    success: true,
    data: tsbReference,
    count: tsbReference.length,
  });
}

// POST - TSB yükle (VA-only, şimdilik mock)
export async function POST(req: Request) {
  const formData = await req.formData();
  const file = formData.get("file");

  if (!file) {
    return NextResponse.json(
      { success: false, error: "Dosya gerekli" },
      { status: 400 }
    );
  }

  // Mock: Başarılı yükleme
  return NextResponse.json({
    success: true,
    message: "TSB listesi yüklendi",
    count: tsbReference.length,
  });
}
