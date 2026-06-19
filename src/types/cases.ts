export interface CaseItemData {
  _key: string;
  title?: string;
  category?: string;
  image?: {
    asset?: { url: string };
  };
  facts?: string[];
  testimonial?: string;
}

export interface CasesSectionData {
  sectionTitle?: string;
  cases?: CaseItemData[];
}
