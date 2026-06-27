import Image from "next/image";
import { Button } from "@/app/global/components/Button";
import { Heading } from "@/app/global/components/Heading";
import type { AboutPageData } from "@/types/about";

export function AboutHero({
  heroEyebrow,
  heroTitle,
  heroDescription,
  heroImage,
  heroButton,
}: AboutPageData) {
  if (!heroTitle) return null;

  const imageUrl = heroImage?.asset?.url;

  return (
    <section className="bg-[#2A384B] py-20 lg:py-28">
      <div className="max-w-7xl 2xl:max-w-[1600px] mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div>
          {heroEyebrow && (
            <p className="text-blue-400 font-semibold uppercase tracking-widest text-sm mb-4">
              {heroEyebrow}
            </p>
          )}

          <Heading color="light" size="lg" case="none" className="mb-6">
            {heroTitle}
          </Heading>

          {heroDescription && (
            <p className="text-white/80 text-lg max-w-xl mb-8">
              {heroDescription}
            </p>
          )}

          {heroButton?.text && (
            <Button
              variant="primary"
              href={heroButton.link ?? "#"}
              className="px-8 py-4 rounded-lg"
            >
              {heroButton.text}
            </Button>
          )}
        </div>

        {imageUrl && (
          <div className="relative w-full h-72 sm:h-96 lg:h-112 rounded-2xl overflow-hidden">
            <Image src={imageUrl} alt="" fill className="object-cover" />
          </div>
        )}
      </div>
    </section>
  );
}
