import { client } from "@/app/studio/lib/client";
import type { NavbarData } from "@/types/navbar";

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

export async function getNavbar(): Promise<NavbarData | null> {
  const query = `*[_type == "navbar"][0]{
    siteName,
    logo{
      asset->{
        url
      },
      alt
    },
    navItems[]{
      _key,
      label,
      link,
      dropdownItems[]{
        _key,
        label,
        link
      }
    },
    phoneNumber,
    phoneLink,
    ctaButton
  }`;

  return await client.fetch(query);
}
