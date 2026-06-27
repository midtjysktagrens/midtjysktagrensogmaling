import Image from "next/image";
import type { CasesPageData } from "@/types/casesPage";

export function CasesHero({
  heroTitle,
  heroDescription,
  heroImageLeft,
  heroImageRight,
}: CasesPageData) {
  if (!heroTitle) return null;

  const leftUrl = heroImageLeft?.asset?.url;
  const rightUrl = heroImageRight?.asset?.url;

  return (
    <section className="relative min-h-[85vh] w-full overflow-hidden flex items-center">
      <div className="absolute inset-0 flex">
        <div className="relative w-1/2 h-full">
          {leftUrl && (
            <Image
              src={leftUrl}
              alt=""
              fill
              priority
              className="object-cover"
            />
          )}
        </div>

        <div className="relative w-1/2 h-full">
          {rightUrl && (
            <Image
              src={rightUrl}
              alt=""
              fill
              priority
              className="object-cover"
            />
          )}
        </div>
      </div>

      <div className="absolute inset-0 bg-linear-to-r from-[#2A384B]/70 via-[#2A384B]/50 to-[#2A384B]/20" />

      <div className="relative z-10 w-full max-w-7xl 2xl:max-w-[1600px] mx-auto px-6 lg:px-12">
        <div className="max-w-2xl 2xl:max-w-3xl text-white">
          <h1 className="text-4xl sm:text-5xl 2xl:text-6xl font-extrabold mb-4">
            {heroTitle}
          </h1>

          {heroDescription && (
            <p className="text-lg 2xl:text-xl text-white/90 max-w-xl 2xl:max-w-2xl">
              {heroDescription}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
