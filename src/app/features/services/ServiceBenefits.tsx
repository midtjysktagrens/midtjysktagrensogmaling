import { Check } from "lucide-react";
import { Button } from "@/app/global/components/Button";
import { Heading } from "@/app/global/components/Heading";
import type { ServiceCardData } from "@/types/services";

export function ServiceBenefits({
  benefitsTitle,
  benefitsDescription,
  benefitsChecklist,
  benefitsPrimaryButton,
  benefitsSecondaryButton,
}: ServiceCardData) {
  if (!benefitsTitle) return null;

  return (
    <section className="bg-[#2A384B] py-16 min-h-[70vh] flex items-center">
      <div className="w-full max-w-7xl 2xl:max-w-[1600px] mx-auto px-6 lg:px-12 grid lg:grid-cols-[3fr_2fr] gap-12 lg:gap-32 2xl:gap-40 items-center">
        <div>
          <Heading
            size="md"
            color="light"
            case="none"
            className="whitespace-nowrap mb-6"
          >
            {benefitsTitle}
          </Heading>

          {benefitsDescription && (
            <p className="text-white/90 whitespace-pre-line mb-8 max-w-xl">
              {benefitsDescription}
            </p>
          )}

          <div className="flex flex-wrap gap-4">
            {benefitsPrimaryButton?.text && (
              <Button
                variant="primary"
                href={benefitsPrimaryButton.link ?? "#"}
                className="px-6 py-3 rounded-lg"
              >
                {benefitsPrimaryButton.text}
              </Button>
            )}

            {benefitsSecondaryButton?.text && (
              <Button
                variant="secondary"
                href={benefitsSecondaryButton.link ?? "#"}
                className="px-6 py-3 rounded-lg"
              >
                {benefitsSecondaryButton.text}
              </Button>
            )}
          </div>
        </div>

        {benefitsChecklist && benefitsChecklist.length > 0 && (
          <ul className="space-y-5">
            {benefitsChecklist.map((item) => (
              <li
                key={item._key}
                className="flex items-center gap-4 text-white text-md"
              >
                <span className="w-7 h-7 rounded-full bg-white text-blue-500 flex items-center justify-center shrink-0">
                  <Check className="w-4 h-4" strokeWidth={3} />
                </span>
                <span>{item.title}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
