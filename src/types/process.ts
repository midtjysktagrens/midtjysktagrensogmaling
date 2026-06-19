export type ProcessIconName =
  | "camera"
  | "checkCircle"
  | "fileCheck"
  | "calendarCheck";

export interface ProcessStepData {
  _key: string;
  title: string;
  description?: string;
  icon?: {
    asset?: { url: string };
  };
  iconName?: ProcessIconName;
}

export interface ProcessSectionData {
  sectionTitle?: string;
  steps?: ProcessStepData[];
}
