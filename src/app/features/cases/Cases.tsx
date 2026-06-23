import { Heading } from "@/app/global/components/Heading";
import { getCasesSection } from "@/app/lib/sanity/queries";
import { CaseCard } from "./CaseCard";

export default async function Cases() {
  const cases = await getCasesSection();

  if (!cases?.cases?.length) return null;

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl 2xl:max-w-[1600px] mx-auto px-6 lg:px-12">
        {cases.sectionTitle && (
          <Heading size="md" className="text-center mb-12">
            {cases.sectionTitle}
          </Heading>
        )}

        <div className="case-gallery flex flex-col sm:flex-row sm:flex-wrap items-start gap-6">
          {cases.cases.map((item, index) => (
            <CaseCard key={item._key} {...item} defaultOpen={index === 0} />
          ))}
        </div>
      </div>
    </section>
  );
}
