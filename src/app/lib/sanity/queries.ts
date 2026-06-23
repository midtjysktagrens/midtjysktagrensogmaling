import { client } from "@/app/studio/lib/client";
import type { BeforeAfterSectionData } from "@/types/beforeAfter";
import type { CasesSectionData } from "@/types/cases";
import type { ContactPageData } from "@/types/contactPage";
import type { FooterData } from "@/types/footer";
import type { HeroData } from "@/types/hero";
import type { KpiSectionData } from "@/types/kpi";
import type { NavbarData } from "@/types/navbar";
import type { ProcessSectionData } from "@/types/process";
import type { ServiceCardData, ServicesSectionData } from "@/types/services";

export async function getHero(): Promise<HeroData> {
  const query = `*[_type == "hero"][0]{
    headline,
    subheading,
    backgroundImage{
      asset->{
        url
      },
      alt
    },
    mobileBackgroundImage{
      asset->{
        url
      }
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
    ctaButton,
    contactPerson{
      name,
      title,
      avatar{
        asset->{
          url
        }
      },
      email,
      phone
    }
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
      slug,
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

export async function getServiceSlugs(): Promise<string[]> {
  const query = `*[_type == "servicesSection"][0].cards[defined(slug.current)].slug.current`;

  return (await client.fetch(query)) ?? [];
}

export async function getServiceBySlug(
  slug: string,
): Promise<ServiceCardData | null> {
  const query = `*[_type == "servicesSection"][0].cards[slug.current == $slug][0]{
    _key,
    title,
    slug,
    description,
    icon{
      asset->{
        url
      }
    },
    iconName,
    heroImage{
      asset->{
        url
      }
    },
    heroMobileImage{
      asset->{
        url
      }
    },
    button
  }`;

  return await client.fetch(query, { slug });
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

export async function getBeforeAfterSection(): Promise<BeforeAfterSectionData | null> {
  const query = `*[_type == "beforeAfterSection"][0]{
    sectionTitle,
    items[]{
      _key,
      label,
      beforeImage{
        asset->{
          url
        }
      },
      afterImage{
        asset->{
          url
        }
      }
    },
    button
  }`;

  return await client.fetch(query);
}

export async function getCasesSection(): Promise<CasesSectionData | null> {
  const query = `*[_type == "casesSection"][0]{
    sectionTitle,
    cases[]{
      _key,
      title,
      category,
      image{
        asset->{
          url
        }
      },
      facts,
      testimonial
    }
  }`;

  return await client.fetch(query);
}

export async function getFooter(): Promise<FooterData | null> {
  const query = `*[_type == "footer"][0]{
    ctaHeadline,
    ctaSubheading,
    ctaNote,
    ctaChecklist,
    ctaImage{
      asset->{
        url
      }
    },
    ctaPrimaryButton,
    ctaSecondaryButton,
    logo{
      asset->{
        url
      },
      alt
    },
    description,
    socialLinks[]{
      _key,
      platform,
      link
    },
    servicesColumnTitle,
    servicesLinks[]{
      _key,
      label,
      link
    },
    shortcutsColumnTitle,
    shortcutsLinks[]{
      _key,
      label,
      link
    },
    contactColumnTitle,
    phoneNumber,
    phoneLink,
    email,
    address,
    copyrightText,
    legalLinks[]{
      _key,
      label,
      link
    }
  }`;

  return await client.fetch(query);
}

export async function getContactPage(): Promise<ContactPageData | null> {
  const query = `*[_type == "contactPage"][0]{
    heading,
    subheading,
    phoneNumber,
    phoneLink,
    email,
    address,
    openingHoursTitle,
    openingHours[]{
      _key,
      label,
      value
    }
  }`;

  return await client.fetch(query);
}
