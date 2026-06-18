import { ChevronDown } from "lucide-react";
import type { NavDropdownItem } from "@/types/navbar";

type NavLinkProps = {
  label: string;
  link?: string;
  dropdownItems?: NavDropdownItem[];
};

export function NavLink({ label, link, dropdownItems }: NavLinkProps) {
  const hasDropdown = !!dropdownItems?.length;

  return (
    <div className="relative group">
      <a
        href={link ?? "#"}
        className="flex items-center gap-1 text-white/90 hover:text-white transition py-2"
      >
        {label}
        {hasDropdown && (
          <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
        )}
      </a>

      {hasDropdown && (
        <div className="absolute left-0 top-full pt-2 invisible opacity-0 -translate-y-1 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200">
          <ul className="min-w-56 rounded-lg bg-white text-gray-900 shadow-xl py-2">
            {dropdownItems!.map((item) => (
              <li key={item._key}>
                <a
                  href={item.link ?? "#"}
                  className="block px-4 py-2 hover:bg-gray-100 transition"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
