import Image from "next/image";
import { Check } from "lucide-react";
import { Heading } from "@/app/global/components/Heading";
import type { ServiceCardData } from "@/types/services";

export function ServiceComparison({
  comparisonTitle,
  comparisonBeforeImage,
  comparisonAfterImage,
  comparisonChecklist,
}: ServiceCardData) {
  if (!comparisonTitle) return null;

  const beforeUrl = comparisonBeforeImage?.asset?.url;
  const afterUrl = comparisonAfterImage?.asset?.url;

  return (
    <section className="bg-white py-16">
      <div className="w-full max-w-7xl 2xl:max-w-[1600px] mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-12 lg:gap-20 2xl:gap-28 items-center">
        {(beforeUrl || afterUrl) && (
          <div className="flex flex-col gap-1 overflow-hidden rounded-lg">
            {beforeUrl && (
              <div className="relative w-full h-56 sm:h-64 lg:h-72">
                <Image src={beforeUrl} alt="" fill className="object-cover" />
              </div>
            )}

            {afterUrl && (
              <div className="relative w-full h-56 sm:h-64 lg:h-72">
                <Image src={afterUrl} alt="" fill className="object-cover" />
              </div>
            )}
          </div>
        )}

        <div>
          <Heading case="none" className="mb-8">
            {comparisonTitle}
          </Heading>

          {comparisonChecklist && comparisonChecklist.length > 0 && (
            <ul className="space-y-5">
              {comparisonChecklist.map((item) => (
                <li
                  key={item._key}
                  className="flex items-center gap-4 text-[#2A384B] text-sm lg:text-xl"
                >
                  <span className="w-7 h-7 rounded-full bg-[#2A384B] text-white flex items-center justify-center shrink-0">
                    <Check className="w-4 h-4" strokeWidth={3} />
                  </span>
                  <span>{item.title}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
}
