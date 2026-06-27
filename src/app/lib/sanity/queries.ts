import { client } from "@/app/studio/lib/client";
import type {
  AboutCtaData,
  AboutHeroData,
  AboutTeamData,
  AboutTimelineData,
  AboutValuesData,
} from "@/types/about";
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

  return await client.fetch(query, {}, { next: { tags: ["hero"] } });
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

  return await client.fetch(query, {}, { next: { tags: ["navbar"] } });
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

  return await client.fetch(query, {}, { next: { tags: ["kpiSection"] } });
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

  return await client.fetch(query, {}, { next: { tags: ["servicesSection"] } });
}

export async function getServiceSlugs(): Promise<string[]> {
  const query = `*[_type == "servicesSection"][0].cards[defined(slug.current)].slug.current`;

  return (
    (await client.fetch(query, {}, { next: { tags: ["servicesSection"] } })) ?? []
  );
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
    button,
    benefitsTitle,
    benefitsDescription,
    benefitsChecklist[]{
      _key,
      title
    },
    benefitsPrimaryButton,
    benefitsSecondaryButton,
    comparisonTitle,
    comparisonBeforeImage{
      asset->{
        url
      }
    },
    comparisonAfterImage{
      asset->{
        url
      }
    },
    comparisonChecklist[]{
      _key,
      title
    },
    processTitle,
    processSteps[]{
      _key,
      title,
      description,
      icon{
        asset->{
          url
        }
      },
      iconName
    },
    processButton
  }`;

  return await client.fetch(
    query,
    { slug },
    { next: { tags: ["servicesSection"] } },
  );
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

  return await client.fetch(query, {}, { next: { tags: ["processSection"] } });
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

  return await client.fetch(
    query,
    {},
    { next: { tags: ["beforeAfterSection"] } },
  );
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

  return await client.fetch(query, {}, { next: { tags: ["casesSection"] } });
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

  return await client.fetch(query, {}, { next: { tags: ["footer"] } });
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

  return await client.fetch(query, {}, { next: { tags: ["contactPage"] } });
}

export async function getAboutHero(): Promise<AboutHeroData | null> {
  const query = `*[_type == "aboutHero"][0]{
    eyebrow,
    title,
    description,
    image{
      asset->{
        url
      }
    },
    primaryButton
  }`;

  return await client.fetch(query, {}, { next: { tags: ["aboutHero"] } });
}

export async function getAboutTimeline(): Promise<AboutTimelineData | null> {
  const query = `*[_type == "aboutTimeline"][0]{
    sectionTitle,
    sectionDescription,
    milestones[]{
      _key,
      year,
      title,
      description
    }
  }`;

  return await client.fetch(query, {}, { next: { tags: ["aboutTimeline"] } });
}

export async function getAboutValues(): Promise<AboutValuesData | null> {
  const query = `*[_type == "aboutValues"][0]{
    sectionTitle,
    sectionDescription,
    values[]{
      _key,
      iconName,
      title,
      description
    }
  }`;

  return await client.fetch(query, {}, { next: { tags: ["aboutValues"] } });
}

export async function getAboutTeam(): Promise<AboutTeamData | null> {
  const query = `*[_type == "aboutTeam"][0]{
    sectionTitle,
    sectionDescription,
    members[]{
      _key,
      name,
      role,
      photo{
        asset->{
          url
        }
      }
    }
  }`;

  return await client.fetch(query, {}, { next: { tags: ["aboutTeam"] } });
}

export async function getAboutCta(): Promise<AboutCtaData | null> {
  const query = `*[_type == "aboutCta"][0]{
    heading,
    description,
    button
  }`;

  return await client.fetch(query, {}, { next: { tags: ["aboutCta"] } });
}
