import Image from "next/image";
import { Button } from "@/app/global/components/Button";
import { Heading } from "@/app/global/components/Heading";
import { getAboutHero } from "@/app/lib/sanity/queries";

export default async function AboutHero() {
  const hero = await getAboutHero();

  if (!hero?.title) return null;

  const imageUrl = hero.image?.asset?.url;

  return (
    <section className="bg-[#2A384B] py-20 lg:py-28">
      <div className="max-w-7xl 2xl:max-w-[1600px] mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div>
          {hero.eyebrow && (
            <p className="text-blue-400 font-semibold uppercase tracking-widest text-sm mb-4">
              {hero.eyebrow}
            </p>
          )}

          <Heading color="light" size="lg" case="none" className="mb-6">
            {hero.title}
          </Heading>

          {hero.description && (
            <p className="text-white/80 text-lg max-w-xl mb-8">
              {hero.description}
            </p>
          )}

          {hero.primaryButton?.text && (
            <Button
              variant="primary"
              href={hero.primaryButton.link ?? "#"}
              className="px-8 py-4 rounded-lg"
            >
              {hero.primaryButton.text}
            </Button>
          )}
        </div>

        {imageUrl && (
          <div className="relative w-full h-72 sm:h-96 lg:h-[28rem] rounded-2xl overflow-hidden">
            <Image src={imageUrl} alt="" fill className="object-cover" />
          </div>
        )}
      </div>
    </section>
  );
}
