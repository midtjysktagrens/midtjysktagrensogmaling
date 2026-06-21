export interface OpeningHoursRow {
  _key: string;
  label?: string;
  value?: string;
}

export interface ContactPageData {
  heading?: string;
  subheading?: string;
  phoneNumber?: string;
  phoneLink?: string;
  email?: string;
  address?: string;
  openingHoursTitle?: string;
  openingHours?: OpeningHoursRow[];
}
