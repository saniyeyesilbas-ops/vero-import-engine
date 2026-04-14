import * as fs from "fs";
import * as path from "path";
import * as XLSX from "xlsx";

export type TSBRow = {
  MODEL_YILI: number;
  MARKA: string;
  MODEL_TIPI: string;
  DEGER: number;
};

let cache: TSBRow[] | null = null;

export function loadTSB(): TSBRow[] {
  if (cache) return cache;

  const filePath = path.join(process.cwd(), "tsb_uzun_format.xlsx");
  const workbook = XLSX.readFile(filePath);
  const sheetName = workbook.SheetNames[0];
  const sheet = workbook.Sheets[sheetName];
  const rows = XLSX.utils.sheet_to_json<TSBRow>(sheet);

  cache = rows;
  return rows;
}
