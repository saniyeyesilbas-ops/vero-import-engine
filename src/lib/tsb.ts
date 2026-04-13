export const tsbReference = [
  { marka: "VOLKSWAGEN", model: "Passat 1.5 TSI Business DSG", yillar: [2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026] },
  { marka: "VOLKSWAGEN", model: "Passat 2.0 TDI DSG", yillar: [2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026] },
  { marka: "VOLKSWAGEN", model: "Golf 1.0 TSI", yillar: [2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026] },
  { marka: "VOLKSWAGEN", model: "Tiguan 1.5 eTSI Life DSG", yillar: [2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026] },
  { marka: "VOLKSWAGEN", model: "T-Roc 1.5 TSI", yillar: [2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026] },
  { marka: "MERCEDES", model: "C 180 AMG", yillar: [2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026] },
  { marka: "MERCEDES", model: "C 200 AMG", yillar: [2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026] },
  { marka: "MERCEDES", model: "E 200 AMG", yillar: [2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026] },
  { marka: "MERCEDES", model: "GLC 220d 4MATIC", yillar: [2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026] },
  { marka: "BMW", model: "3 Serisi 320i M Sport", yillar: [2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026] },
  { marka: "BMW", model: "5 Serisi 520i M Sport", yillar: [2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026] },
  { marka: "TOYOTA", model: "Corolla 1.8 Hybrid", yillar: [2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026] },
  { marka: "TOYOTA", model: "RAV4 2.5 Hybrid AWD", yillar: [2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026] },
  { marka: "FORD", model: "Focus 1.5 EcoBoost", yillar: [2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026] },
  { marka: "FORD", model: "Kuga 2.5 PHEV", yillar: [2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026] },
  { marka: "RENAULT", model: "Megane 1.3 TCe", yillar: [2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026] },
  { marka: "RENAULT", model: "Captur 1.3 TCe", yillar: [2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026] },
  { marka: "PEUGEOT", model: "308 1.2 PureTech", yillar: [2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026] },
  { marka: "HYUNDAI", model: "Tucson 1.6 T-GDI Hybrid", yillar: [2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026] },
  { marka: "KIA", model: "Sportage 1.6 T-GDI Hybrid", yillar: [2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026] },
];

export function validateTSB(marka: string, model: string, modelYili: number): boolean {
  const found = tsbReference.find(
    (t) =>
      t.marka.toUpperCase() === marka.toUpperCase() &&
      t.model.toUpperCase() === model.toUpperCase()
  );
  
  if (!found) return false;
  
  return found.yillar.includes(modelYili);
}

export function getTSBMarkalar(): string[] {
  return [...new Set(tsbReference.map(t => t.marka))];
}

export function getTSBModeller(marka: string): string[] {
  return tsbReference
    .filter(t => t.marka.toUpperCase() === marka.toUpperCase())
    .map(t => t.model);
}
