import Image from "next/image";
import { Check } from "lucide-react";
import type { CaseItemData } from "@/types/cases";

type CaseCardProps = CaseItemData & {
  defaultOpen?: boolean;
};

export function CaseCard({
  image,
  title,
  category,
  facts,
  testimonial,
  defaultOpen,
}: CaseCardProps) {
  return (
    <div
      data-default={defaultOpen || undefined}
      className="case-card flex flex-col sm:flex-row flex-1 min-w-32 sm:h-72 2xl:h-80"
    >
      <div className="relative w-full h-48 sm:flex-1 sm:min-w-32 sm:h-full rounded-lg overflow-hidden">
        {image?.asset?.url && (
          <Image
            src={image.asset.url}
            alt={title ?? ""}
            fill
            className="object-cover"
          />
        )}
      </div>

      <div className="case-details flex flex-col w-full mt-4 sm:mt-0 sm:shrink-0 sm:h-full sm:overflow-y-auto sm:overflow-x-hidden">
        {title && (
          <h3 className="text-[#2A384B] font-semibold text-lg 2xl:text-xl">
            {title}
          </h3>
        )}

        {category && (
          <p className="text-gray-500 text-sm 2xl:text-base mb-3">{category}</p>
        )}

        {facts && facts.length > 0 && (
          <ul className="space-y-2 mb-4">
            {facts.map((fact) => (
              <li
                key={fact}
                className="flex items-center gap-2 text-sm 2xl:text-base text-[#2A384B]"
              >
                <Check
                  className="w-4 h-4 2xl:w-5 2xl:h-5 text-blue-500 shrink-0"
                  strokeWidth={3}
                />
                {fact}
              </li>
            ))}
          </ul>
        )}

        {testimonial && (
          <p className="text-gray-500 text-sm 2xl:text-base italic">
            &quot;{testimonial}&quot;
          </p>
        )}
      </div>
    </div>
  );
}
