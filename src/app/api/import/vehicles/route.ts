import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const formData = await req.formData();
  const file = formData.get("file");
  
  if (!file) {
    return NextResponse.json({ 
      successCount: 0, 
      failCount: 1, 
      errors: [{ row: 0, field: "file", reason: "Dosya gerekli" }] 
    }, { status: 400 });
  }

  // Mock: basit basari donusu
  return NextResponse.json({ 
    successCount: 15, 
    failCount: 0, 
    errors: [] 
  });
}
