import { client } from "@/app/studio/lib/client";
import type { KpiSectionData } from "@/types/kpi";
import type { NavbarData } from "@/types/navbar";
import type { ProcessSectionData } from "@/types/process";
import type { ServicesSectionData } from "@/types/services";

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

export async function getKpiSection(): Promise<KpiSectionData | null> {
  const query = `*[_type == "kpiSection"][0]{
    items[]{
      _key,
      title,
      description,
      icon{
        asset->{
          url
        }
      },
      fallbackIcon
    }
  }`;

  return await client.fetch(query);
}

export async function getServicesSection(): Promise<ServicesSectionData | null> {
  const query = `*[_type == "servicesSection"][0]{
    sectionTitle,
    cards[]{
      _key,
      title,
      description,
      icon{
        asset->{
          url
        }
      },
      iconName,
      button
    }
  }`;

  return await client.fetch(query);
}

export async function getProcessSection(): Promise<ProcessSectionData | null> {
  const query = `*[_type == "processSection"][0]{
    sectionTitle,
    steps[]{
      _key,
      title,
      description,
      icon{
        asset->{
          url
        }
      },
      iconName
    }
  }`;

  return await client.fetch(query);
}
