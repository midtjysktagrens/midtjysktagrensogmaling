import { Button } from "@/app/global/components/Button";
import { Heading } from "@/app/global/components/Heading";
import { getAboutCta } from "@/app/lib/sanity/queries";

export default async function AboutCta() {
  const cta = await getAboutCta();

  if (!cta?.heading) return null;

  return (
    <section className="bg-[#2A384B] py-16">
      <div className="max-w-7xl 2xl:max-w-[1600px] mx-auto px-6 lg:px-12 text-center">
        <Heading color="light" case="none" className="mb-4">
          {cta.heading}
        </Heading>

        {cta.description && (
          <p className="text-white/80 max-w-2xl mx-auto mb-8">
            {cta.description}
          </p>
        )}

        {cta.button?.text && (
          <Button
            variant="primary"
            href={cta.button.link ?? "#"}
            className="px-8 py-4 rounded-lg"
          >
            {cta.button.text}
          </Button>
        )}
      </div>
    </section>
  );
}
