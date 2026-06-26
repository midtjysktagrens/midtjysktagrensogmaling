export type ServiceIconName =
  | "paintRoller"
  | "tiles"
  | "pin"
  | "hammer"
  | "fileSignature";

export interface ServiceCardData {
  _key: string;
  title: string;
  slug?: { current: string };
  description?: string;
  icon?: {
    asset?: { url: string };
  };
  iconName?: ServiceIconName;
  heroImage?: {
    asset?: { url: string };
  };
  heroMobileImage?: {
    asset?: { url: string };
  };
  button?: {
    text: string;
    link: string;
  };
  benefitsTitle?: string;
  benefitsDescription?: string;
  benefitsChecklist?: Array<{ _key: string; title: string }>;
  benefitsPrimaryButton?: {
    text: string;
    link: string;
  };
  benefitsSecondaryButton?: {
    text: string;
    link: string;
  };
  comparisonTitle?: string;
  comparisonBeforeImage?: {
    asset?: { url: string };
  };
  comparisonAfterImage?: {
    asset?: { url: string };
  };
  comparisonChecklist?: Array<{ _key: string; title: string }>;
}

export interface ServicesSectionData {
  sectionTitle?: string;
  cards?: ServiceCardData[];
}
