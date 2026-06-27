import type { CaseItemData } from "./cases";

export interface ServiceCaseSectionData {
  _key: string;
  serviceTitle?: string;
  cases?: CaseItemData[];
}

export interface CasesPageData {
  heroTitle?: string;
  heroDescription?: string;
  heroImageLeft?: {
    asset?: { url: string };
  };
  heroImageRight?: {
    asset?: { url: string };
  };
  serviceCaseSections?: ServiceCaseSectionData[];
}
