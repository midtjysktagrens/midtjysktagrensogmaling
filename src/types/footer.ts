export interface FooterLink {
  _key: string;
  label?: string;
  link?: string;
}

export interface SocialLink {
  _key: string;
  platform?: "facebook" | "instagram";
  link?: string;
}

export interface FooterData {
  ctaHeadline?: string;
  ctaSubheading?: string;
  ctaNote?: string;
  ctaChecklist?: string[];
  ctaImage?: {
    asset?: { url: string };
  };
  ctaPrimaryButton?: {
    text: string;
    link: string;
  };
  ctaSecondaryButton?: {
    text: string;
    link: string;
  };

  logo?: {
    asset?: { url: string };
    alt?: string;
  };
  description?: string;
  socialLinks?: SocialLink[];
  servicesColumnTitle?: string;
  servicesLinks?: FooterLink[];
  shortcutsColumnTitle?: string;
  shortcutsLinks?: FooterLink[];
  contactColumnTitle?: string;
  phoneNumber?: string;
  phoneLink?: string;
  email?: string;
  address?: string;
  copyrightText?: string;
  legalLinks?: FooterLink[];
}
