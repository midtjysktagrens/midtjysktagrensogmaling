import Image from "next/image";
import { Check } from "lucide-react";
import { Button } from "@/app/global/components/Button";
import type { FooterData } from "@/types/footer";

export function FooterCtaBanner({
  ctaHeadline,
  ctaSubheading,
  ctaNote,
  ctaChecklist,
  ctaImage,
  ctaPrimaryButton,
  ctaSecondaryButton,
}: FooterData) {
  return (
    <section className="bg-[#132238] py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          {ctaHeadline && (
            <h2 className="text-white text-3xl font-extrabold mb-4">
              {ctaHeadline}
            </h2>
          )}

          {ctaSubheading && <p className="text-white/80">{ctaSubheading}</p>}

          {ctaNote && <p className="text-white/80 mb-8">{ctaNote}</p>}

          {ctaChecklist && ctaChecklist.length > 0 && (
            <ul className="space-y-4 mb-8">
              {ctaChecklist.map((item) => (
                <li key={item} className="flex items-center gap-3 text-white">
                  <span className="w-7 h-7 rounded-full bg-white text-[#4C80C2] flex items-center justify-center shrink-0">
                    <Check className="w-4 h-4" strokeWidth={3} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          )}

          <div className="flex flex-wrap gap-4">
            {ctaPrimaryButton?.text && (
              <Button
                href={ctaPrimaryButton.link ?? "#"}
                variant="primary"
                className="px-6 py-3 rounded-md"
              >
                {ctaPrimaryButton.text}
              </Button>
            )}

            {ctaSecondaryButton?.text && (
              <Button
                href={ctaSecondaryButton.link ?? "#"}
                variant="secondary"
                className="px-6 py-3 rounded-md uppercase"
              >
                {ctaSecondaryButton.text}
              </Button>
            )}
          </div>
        </div>

        {ctaImage?.asset?.url && (
          <div className="relative w-full aspect-video">
            <Image
              src={ctaImage.asset.url}
              alt=""
              fill
              className="object-contain"
            />
          </div>
        )}
      </div>
    </section>
  );
}
