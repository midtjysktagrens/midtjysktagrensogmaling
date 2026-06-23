import Image from "next/image";
import type { BeforeAfterItemData } from "@/types/beforeAfter";

export function BeforeAfterCard({
  label,
  beforeImage,
  afterImage,
}: BeforeAfterItemData) {
  return (
    <div className="flex flex-col items-center gap-3 flex-1 min-w-64 max-w-96 2xl:max-w-md">
      <div className="group relative w-full aspect-4/5 rounded-lg overflow-hidden ring-1 ring-white/10 cursor-default sm:cursor-pointer shadow-lg shadow-black/20 transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/40 hover:ring-[#4C80C2]/60 flex sm:block">
        <div className="relative w-1/2 h-full sm:absolute sm:inset-0 sm:w-full">
          {beforeImage?.asset?.url && (
            <Image
              src={beforeImage.asset.url}
              alt={`${label} - før`}
              fill
              className="object-cover sm:transition-all sm:duration-700 sm:ease-out sm:group-hover:opacity-0 sm:group-hover:scale-110"
            />
          )}
        </div>

        <div className="relative w-1/2 h-full border-l-2 border-white/40 sm:border-l-0 sm:absolute sm:inset-0 sm:w-full">
          {afterImage?.asset?.url && (
            <Image
              src={afterImage.asset.url}
              alt={`${label} - efter`}
              fill
              className="object-cover sm:opacity-0 sm:scale-110 sm:transition-all sm:duration-700 sm:ease-out sm:group-hover:opacity-100 sm:group-hover:scale-100"
            />
          )}
        </div>

        <div className="hidden sm:block absolute inset-0 -translate-x-full skew-x-12 bg-linear-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full pointer-events-none" />

        <span className="absolute top-2 left-2 bg-white text-gray-900 text-xs font-semibold px-2 py-1 rounded-md shadow sm:transition-all sm:duration-300 sm:ease-out sm:group-hover:opacity-0 sm:group-hover:-translate-y-1">
          Før
        </span>

        <span className="absolute top-2 right-2 sm:left-2 sm:right-auto bg-[#4C80C2] text-white text-xs font-semibold px-2 py-1 rounded-md shadow sm:opacity-0 sm:translate-y-1 sm:transition-all sm:duration-300 sm:ease-out sm:group-hover:opacity-100 sm:group-hover:translate-y-0">
          Efter
        </span>
      </div>

      <p className="text-white font-medium text-sm text-center">{label}</p>
    </div>
  );
}
