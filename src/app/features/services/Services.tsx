import { getServicesSection } from "@/app/lib/sanity/queries";
import { ServiceCard } from "./ServiceCard";

export default async function Services() {
  const services = await getServicesSection();

  if (!services?.cards?.length) return null;

  return (
    <section className="bg-gray-200 py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-6">
        {services.sectionTitle && (
          <h2 className="text-[#2A384B] text-3xl font-extrabold uppercase tracking-tight text-center mb-12">
            {services.sectionTitle}
          </h2>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {services.cards.map((card) => (
            <ServiceCard key={card._key} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}
