export interface AboutHeroData {
  eyebrow?: string;
  title?: string;
  description?: string;
  image?: {
    asset?: { url: string };
  };
  primaryButton?: {
    text: string;
    link: string;
  };
}

export interface MilestoneData {
  _key: string;
  year?: string;
  title: string;
  description?: string;
}

export interface AboutTimelineData {
  sectionTitle?: string;
  sectionDescription?: string;
  milestones?: MilestoneData[];
}

export type AboutValueIconName = "quality" | "trust" | "experience" | "care";

export interface AboutValueData {
  _key: string;
  iconName?: AboutValueIconName;
  title: string;
  description?: string;
}

export interface AboutValuesData {
  sectionTitle?: string;
  sectionDescription?: string;
  values?: AboutValueData[];
}

export interface TeamMemberData {
  _key: string;
  name: string;
  role?: string;
  photo?: {
    asset?: { url: string };
  };
}

export interface AboutTeamData {
  sectionTitle?: string;
  sectionDescription?: string;
  members?: TeamMemberData[];
}

export interface AboutCtaData {
  heading?: string;
  description?: string;
  button?: {
    text: string;
    link: string;
  };
}
