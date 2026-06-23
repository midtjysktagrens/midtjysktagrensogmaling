import { getKpiSection } from "@/app/lib/sanity/queries";
import { KpiItem } from "./KpiItem";

export default async function Kpi() {
  const kpi = await getKpiSection();

  if (!kpi?.items?.length) return null;

  return (
    <section className="bg-[#2A384B] py-10">
      <div className="max-w-7xl 2xl:max-w-[1600px] mx-auto px-6 lg:px-12 flex flex-wrap items-center justify-between gap-8">
        {kpi.items.map((item) => (
          <KpiItem key={item._key} {...item} />
        ))}
      </div>
    </section>
  );
}
