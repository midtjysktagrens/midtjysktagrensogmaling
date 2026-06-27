import { Button } from "@/app/global/components/Button";
import { Heading } from "@/app/global/components/Heading";
import { ProcessStep } from "@/app/features/process";
import type { ServiceCardData } from "@/types/services";

export function ServiceProcess({
  processTitle,
  processSteps,
  processButton,
}: ServiceCardData) {
  if (!processSteps?.length) return null;

  return (
    <section className="bg-gray-200  py-16">
      <div className="max-w-7xl 2xl:max-w-[1600px] mx-auto px-6 lg:px-12">
        {processTitle && (
          <Heading size="md" case="none" className="mb-12">
            {processTitle}
          </Heading>
        )}

        <div className="flex flex-wrap lg:flex-nowrap items-stretch justify-center gap-4">
          {processSteps.map((step, index) => (
            <div key={step._key} className="flex flex-1">
              <ProcessStep {...step} step={index + 1} />
            </div>
          ))}
        </div>

        {processButton?.text && (
          <div className="flex justify-center mt-12">
            <Button
              variant="primary"
              href={processButton.link ?? "#"}
              className="px-8 py-4 rounded-lg"
            >
              {processButton.text}
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
