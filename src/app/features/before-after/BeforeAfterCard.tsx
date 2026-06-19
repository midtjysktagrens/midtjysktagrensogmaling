import Image from "next/image";
import type { BeforeAfterItemData } from "@/types/beforeAfter";

export function BeforeAfterCard({
  label,
  beforeImage,
  afterImage,
}: BeforeAfterItemData) {
  return (
    <div className="flex flex-col items-center gap-3 flex-1 min-w-40 max-w-56">
      <div className="flex w-full aspect-4/5 rounded-lg overflow-hidden ring-1 ring-white/10">
        <div className="relative w-1/2 h-full">
          {beforeImage?.asset?.url && (
            <Image
              src={beforeImage.asset.url}
              alt={`${label} - før`}
              fill
              className="object-cover"
            />
          )}

          <span className="absolute top-2 left-2 bg-white text-gray-900 text-xs font-semibold px-2 py-1 rounded">
            Før
          </span>
        </div>

        <div className="relative w-1/2 h-full border-l-2 border-white/40">
          {afterImage?.asset?.url && (
            <Image
              src={afterImage.asset.url}
              alt={`${label} - efter`}
              fill
              className="object-cover"
            />
          )}

          <span className="absolute top-2 right-2 bg-[#4C80C2] text-white text-xs font-semibold px-2 py-1 rounded">
            Efter
          </span>
        </div>
      </div>

      <p className="text-white font-medium text-sm text-center">{label}</p>
    </div>
  );
}
