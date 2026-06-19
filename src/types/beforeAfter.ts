export interface BeforeAfterItemData {
  _key: string;
  label: string;
  beforeImage?: {
    asset?: { url: string };
  };
  afterImage?: {
    asset?: { url: string };
  };
}

export interface BeforeAfterSectionData {
  sectionTitle?: string;
  items?: BeforeAfterItemData[];
  button?: {
    text: string;
    link: string;
  };
}
