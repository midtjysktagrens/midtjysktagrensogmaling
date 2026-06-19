import { Fragment } from "react";
import { ArrowRight } from "lucide-react";
import { Heading } from "@/app/global/components/Heading";
import { getProcessSection } from "@/app/lib/sanity/queries";
import { ProcessStep } from "./ProcessStep";

export default async function Process() {
  const process = await getProcessSection();

  if (!process?.steps?.length) return null;

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {process.sectionTitle && (
          <Heading size="md" className="text-center mb-12">
            {process.sectionTitle}
          </Heading>
        )}

        <div className="flex flex-wrap items-start justify-center gap-4">
          {process.steps.map((step, index) => (
            <Fragment key={step._key}>
              <ProcessStep {...step} step={index + 1} />

              {index < process.steps!.length - 1 && (
                <div className="hidden lg:flex items-center justify-center pt-16 shrink-0">
                  <ArrowRight className="w-6 h-6 text-gray-400" />
                </div>
              )}
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
