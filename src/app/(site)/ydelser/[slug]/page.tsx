import { notFound } from "next/navigation";
import { getServiceBySlug, getServiceSlugs } from "../../../lib/sanity/queries";
import {
  ServiceBenefits,
  ServiceComparison,
  ServiceHero,
  ServiceProcess,
} from "../../../features/services";

export async function generateStaticParams() {
  const slugs = await getServiceSlugs();
  return slugs.map((slug) => ({ slug }));
}

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = await getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return (
    <div>
      <ServiceHero {...service} />
      <ServiceBenefits {...service} />
      <ServiceComparison {...service} />
      <ServiceProcess {...service} />
    </div>
  );
}
