export interface ServiceCardData {
  _key: string;
  title: string;
  description?: string;
  icon?: {
    asset?: { url: string };
  };
  button?: {
    text: string;
    link: string;
  };
}

export interface ServicesSectionData {
  sectionTitle?: string;
  cards?: ServiceCardData[];
}
