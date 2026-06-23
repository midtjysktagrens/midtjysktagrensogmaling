export interface HeroFeature {
  _key: string;
  title: string;
}

export interface HeroData {
  headline: string;
  subheading: string;
  backgroundImage?: {
    asset?: { url: string };
    alt?: string;
  };
  mobileBackgroundImage?: {
    asset?: { url: string };
  };
  features?: HeroFeature[];
  primaryButton?: {
    text: string;
    link: string;
  };
  secondaryButton?: {
    text: string;
    link: string;
  };
}
