export interface NavDropdownItem {
  _key: string;
  label: string;
  link?: string;
}

export interface NavItem {
  _key: string;
  label: string;
  link?: string;
  dropdownItems?: NavDropdownItem[];
}

export interface NavbarData {
  siteName?: string;
  logo?: {
    asset?: { url: string };
    alt?: string;
  };
  navItems?: NavItem[];
  phoneNumber?: string;
  phoneLink?: string;
  ctaButton?: {
    text: string;
    link: string;
  };
  contactPerson?: {
    name?: string;
    title?: string;
    avatar?: {
      asset?: { url: string };
    };
    email?: string;
    phone?: string;
  };
}
