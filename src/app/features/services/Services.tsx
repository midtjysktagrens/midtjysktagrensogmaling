import { Heading } from "@/app/global/components/Heading";
import { getServicesSection } from "@/app/lib/sanity/queries";
import { ServiceCard } from "./ServiceCard";

export default async function Services() {
  const services = await getServicesSection();

  if (!services?.cards?.length) return null;

  return (
    <section className="bg-gray-200 py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-6">
        {services.sectionTitle && (
          <Heading size="md" className="text-center mb-12">
            {services.sectionTitle}
          </Heading>
        )}

        <div className="no-scrollbar flex overflow-x-auto snap-x snap-mandatory gap-4 -mx-6 px-6 pb-2 sm:grid sm:grid-cols-2 lg:grid-cols-5 sm:overflow-visible sm:snap-none sm:mx-0 sm:px-0 sm:pb-0">
          {services.cards.map((card) => (
            <ServiceCard key={card._key} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}
