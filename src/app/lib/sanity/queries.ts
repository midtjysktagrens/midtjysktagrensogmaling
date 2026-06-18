import { client } from "@/app/studio/lib/client";

export async function getHero() {
  const query = `*[_type == "hero"][0]{
    headline,
    subheading,
    backgroundImage{
      asset->{
        url
      },
      alt
    },
    features,
    primaryButton,
    secondaryButton
  }`;

  return await client.fetch(query);
}
