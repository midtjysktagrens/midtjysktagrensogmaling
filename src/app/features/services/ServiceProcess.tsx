import { Fragment } from "react";
import { ArrowRight } from "lucide-react";
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
            <Fragment key={step._key}>
              <div className="flex flex-1">
                <ProcessStep {...step} step={index + 1} />
              </div>

              {index < processSteps.length - 1 && (
                <div className="hidden lg:flex items-center justify-center shrink-0">
                  <ArrowRight className="w-6 h-6 2xl:w-8 2xl:h-8 text-gray-400" />
                </div>
              )}
            </Fragment>
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
