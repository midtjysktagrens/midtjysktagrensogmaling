import { client } from "@/app/studio/lib/client";

async function getHero() {
  const query = `*[_type == "hero"][0]{
    headline,
    subheading,
    ctaPrimary,
    ctaSecondary,
    image
  }`;

  return await client.fetch(query);
}
