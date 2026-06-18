export type KpiFallbackIcon = "pin" | "shieldCheck" | "award";

export interface KpiItemData {
  _key: string;
  title: string;
  description?: string;
  icon?: {
    asset?: { url: string };
  };
  fallbackIcon?: KpiFallbackIcon;
}

export interface KpiSectionData {
  items?: KpiItemData[];
}
