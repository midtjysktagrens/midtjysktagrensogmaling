export interface MilestoneData {
  _key: string;
  year?: string;
  title: string;
  description?: string;
}

export type AboutValueIconName = "quality" | "trust" | "experience" | "care";

export interface AboutValueData {
  _key: string;
  iconName?: AboutValueIconName;
  title: string;
  description?: string;
}

export interface TeamMemberData {
  _key: string;
  name: string;
  role?: string;
  photo?: {
    asset?: { url: string };
  };
}

export interface AboutPageData {
  heroEyebrow?: string;
  heroTitle?: string;
  heroDescription?: string;
  heroImage?: {
    asset?: { url: string };
  };
  heroButton?: {
    text: string;
    link: string;
  };
  timelineTitle?: string;
  timelineDescription?: string;
  milestones?: MilestoneData[];
  valuesTitle?: string;
  valuesDescription?: string;
  values?: AboutValueData[];
  teamTitle?: string;
  teamDescription?: string;
  members?: TeamMemberData[];
  ctaHeading?: string;
  ctaDescription?: string;
  ctaButton?: {
    text: string;
    link: string;
  };
}
