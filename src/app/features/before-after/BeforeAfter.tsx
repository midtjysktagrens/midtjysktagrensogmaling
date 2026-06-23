import { Heading } from "@/app/global/components/Heading";
import { Button } from "@/app/global/components/Button";
import { getBeforeAfterSection } from "@/app/lib/sanity/queries";
import { BeforeAfterCard } from "./BeforeAfterCard";

export default async function BeforeAfter() {
  const beforeAfter = await getBeforeAfterSection();

  if (!beforeAfter?.items?.length) return null;

  return (
    <section className="bg-[#2A384B] py-16">
      <div className="max-w-7xl 2xl:max-w-[1600px] mx-auto px-6 lg:px-12 text-center">
        {beforeAfter.sectionTitle && (
          <Heading size="md" color="light" className="mb-12">
            {beforeAfter.sectionTitle}
          </Heading>
        )}

        <div className="flex flex-wrap items-start justify-center gap-8">
          {beforeAfter.items.map((item) => (
            <BeforeAfterCard key={item._key} {...item} />
          ))}
        </div>

        {beforeAfter.button?.text && (
          <Button
            href={beforeAfter.button.link ?? "#"}
            variant="primary"
            className="px-8 py-4 rounded-lg mt-12"
          >
            {beforeAfter.button.text}
          </Button>
        )}
      </div>
    </section>
  );
}
