import { Button } from "@/app/global/components/Button";
import { Heading } from "@/app/global/components/Heading";
import type { AboutPageData } from "@/types/about";

export function AboutCta({ ctaHeading, ctaDescription, ctaButton }: AboutPageData) {
  if (!ctaHeading) return null;

  return (
    <section className="bg-[#2A384B] py-16">
      <div className="max-w-7xl 2xl:max-w-[1600px] mx-auto px-6 lg:px-12 text-center">
        <Heading color="light" case="none" className="mb-4">
          {ctaHeading}
        </Heading>

        {ctaDescription && (
          <p className="text-white/80 max-w-2xl mx-auto mb-8">
            {ctaDescription}
          </p>
        )}

        {ctaButton?.text && (
          <Button
            variant="primary"
            href={ctaButton.link ?? "#"}
            className="px-8 py-4 rounded-lg"
          >
            {ctaButton.text}
          </Button>
        )}
      </div>
    </section>
  );
}
