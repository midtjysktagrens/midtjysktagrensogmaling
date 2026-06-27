import { CaseCard } from "@/app/features/cases";
import { Heading } from "@/app/global/components/Heading";
import type { CasesPageData } from "@/types/casesPage";

export function CasesServiceSections({
  serviceCaseSections,
}: CasesPageData) {
  if (!serviceCaseSections?.length) return null;

  return (
    <>
      {serviceCaseSections.map((section, index) => {
        if (!section.cases?.length) return null;

        const isEven = index % 2 === 1;

        return (
          <section
            key={section._key}
            className={isEven ? "bg-gray-200 py-16" : "bg-white py-16"}
          >
            <div className="max-w-7xl 2xl:max-w-[1600px] mx-auto px-6 lg:px-12">
              {section.serviceTitle && (
                <Heading size="md" className="mb-12">
                  {section.serviceTitle}
                </Heading>
              )}

              <div className="case-gallery flex flex-col sm:flex-row sm:flex-wrap items-start gap-6">
                {section.cases.map((item, caseIndex) => (
                  <CaseCard
                    key={item._key}
                    {...item}
                    defaultOpen={caseIndex === 0}
                  />
                ))}
              </div>
            </div>
          </section>
        );
      })}
    </>
  );
}
