import { NextResponse } from "next/server";
import { validateTSB } from "../../../../lib/tsb";

const vehicles: any[] = [];

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { customerId, vehicles: vehicleList } = body;

    if (!customerId) {
      return NextResponse.json(
        { 
          successCount: 0, 
          failCount: vehicleList?.length || 1, 
          errors: [{ row: 0, field: "customerId", reason: "Müşteri seçimi zorunludur" }] 
        },
        { status: 400 }
      );
    }

    const results = { successCount: 0, failCount: 0, errors: [] as any[] };

    for (let i = 0; i < vehicleList.length; i++) {
      const v = vehicleList[i];
      const row = i + 1;

      if (!v.plaka) {
        results.errors.push({ row, field: "plaka", reason: "Plaka zorunludur" });
        results.failCount++;
        continue;
      }

      if (!v.sasiNo) {
        results.errors.push({ row, field: "sasiNo", reason: "Şasi No zorunludur" });
        results.failCount++;
        continue;
      }

      if (!validateTSB(v.marka, v.model, parseInt(v.modelYili))) {
        results.errors.push({ row, field: "marka/model/modelYili", reason: "TSB'de kayıtlı değil" });
        results.failCount++;
        continue;
      }

      const existingPlate = vehicles.find(ve => ve.plaka === v.plaka);
      if (existingPlate) {
        results.errors.push({ row, field: "plaka", reason: "Plaka zaten kayıtlı" });
        results.failCount++;
        continue;
      }

      const existingSasi = vehicles.find(ve => ve.sasiNo === v.sasiNo);
      if (existingSasi) {
        results.errors.push({ row, field: "sasiNo", reason: "Şasi No zaten kayıtlı" });
        results.failCount++;
        continue;
      }

      vehicles.push({
        id: `v-${Date.now()}-${i}`,
        ...v,
        customerId,
        createdAt: new Date().toISOString(),
      });

      results.successCount++;
    }

    return NextResponse.json(results);
  } catch (error: any) {
    return NextResponse.json(
      { successCount: 0, failCount: 1, errors: [{ row: 0, field: "general", reason: error.message }] },
      { status: 500 }
    );
  }
}

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const customerId = searchParams.get("customerId");

  let result = vehicles;
  if (customerId) {
    result = vehicles.filter(v => v.customerId === customerId);
  }

  return NextResponse.json({ success: true, data: result, count: result.length });
}
