import Image from "next/image";
import type { BeforeAfterItemData } from "@/types/beforeAfter";

export function BeforeAfterCard({
  label,
  beforeImage,
  afterImage,
}: BeforeAfterItemData) {
  return (
    <div className="flex flex-col items-center gap-3 flex-1 min-w-64 max-w-96">
      <div className="group relative w-full aspect-4/5 rounded-lg overflow-hidden ring-1 ring-white/10 cursor-pointer shadow-lg shadow-black/20 transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/40 hover:ring-[#4C80C2]/60">
        {beforeImage?.asset?.url && (
          <Image
            src={beforeImage.asset.url}
            alt={`${label} - før`}
            fill
            className="object-cover transition-all duration-700 ease-out group-hover:opacity-0 group-hover:scale-110"
          />
        )}

        {afterImage?.asset?.url && (
          <Image
            src={afterImage.asset.url}
            alt={`${label} - efter`}
            fill
            className="object-cover absolute inset-0 opacity-0 scale-110 transition-all duration-700 ease-out group-hover:opacity-100 group-hover:scale-100"
          />
        )}

        <div className="absolute inset-0 -translate-x-full skew-x-12 bg-linear-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full pointer-events-none" />

        <span className="absolute top-2 left-2 bg-white text-gray-900 text-xs font-semibold px-2 py-1 rounded-md shadow transition-all duration-300 ease-out group-hover:opacity-0 group-hover:-translate-y-1">
          Før
        </span>

        <span className="absolute top-2 left-2 bg-[#4C80C2] text-white text-xs font-semibold px-2 py-1 rounded-md shadow opacity-0 translate-y-1 transition-all duration-300 ease-out group-hover:opacity-100 group-hover:translate-y-0">
          Efter
        </span>
      </div>

      <p className="text-white font-medium text-sm text-center">{label}</p>
    </div>
  );
}
