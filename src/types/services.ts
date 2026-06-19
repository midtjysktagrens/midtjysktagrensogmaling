export type ServiceIconName =
  | "paintRoller"
  | "tiles"
  | "pin"
  | "hammer"
  | "fileSignature";

export interface ServiceCardData {
  _key: string;
  title: string;
  description?: string;
  icon?: {
    asset?: { url: string };
  };
  iconName?: ServiceIconName;
  button?: {
    text: string;
    link: string;
  };
}

export interface ServicesSectionData {
  sectionTitle?: string;
  cards?: ServiceCardData[];
}
