"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Equal, Mail, Phone, X } from "lucide-react";
import { Button } from "@/app/global/components/Button";
import type { NavbarData } from "@/types/navbar";

function closeMenu() {
  const checkbox = document.getElementById(
    "mobile-menu-toggle",
  ) as HTMLInputElement | null;

  if (checkbox) checkbox.checked = false;
}

export function MobileMenu({ navbar }: { navbar: NavbarData }) {
  return (
    <div className="lg:hidden relative">
      <input type="checkbox" id="mobile-menu-toggle" className="peer hidden" />

      <label
        htmlFor="mobile-menu-toggle"
        aria-label="Open menu"
        className="relative z-50 flex items-center justify-center w-8 h-8 text-white cursor-pointer transition-opacity peer-checked:opacity-0 peer-checked:pointer-events-none"
      >
        <Equal className="w-7 h-7" />
      </label>

      <label
        htmlFor="mobile-menu-toggle"
        aria-label="Close menu"
        className="absolute inset-0 z-50 flex items-center justify-center w-8 h-8 text-white cursor-pointer opacity-0 pointer-events-none transition-opacity peer-checked:opacity-100 peer-checked:pointer-events-auto"
      >
        <X className="w-7 h-7" />
      </label>

      {/* Backdrop */}
      <label
        htmlFor="mobile-menu-toggle"
        aria-hidden
        className="fixed inset-0 z-30 bg-black/50 opacity-0 pointer-events-none transition-opacity duration-300 peer-checked:opacity-100 peer-checked:pointer-events-auto"
      />

      {/* Bottom sheet */}
      <div className="fixed inset-x-0 bottom-0 z-40 h-[88dvh] overflow-y-auto rounded-t-2xl bg-white px-6 pt-3 pb-8 translate-y-full pointer-events-none transition-transform duration-300 ease-out peer-checked:translate-y-0 peer-checked:pointer-events-auto">
        <div className="w-10 h-1.5 bg-gray-300 rounded-full mx-auto mb-6" />

        {navbar.navItems?.map((item) => {
          const hasDropdown = !!item.dropdownItems?.length;

          if (!hasDropdown) {
            return (
              <Link
                key={item._key}
                href={item.link ?? "#"}
                onClick={closeMenu}
                className="block py-4 border-b border-gray-200 text-[#2A384B] font-medium"
              >
                {item.label}
              </Link>
            );
          }

          return (
            <div key={item._key} className="border-b border-gray-200">
              <input
                type="checkbox"
                id={`mobile-accordion-${item._key}`}
                className="peer hidden"
              />
              <label
                htmlFor={`mobile-accordion-${item._key}`}
                className="flex items-center justify-between py-4 cursor-pointer text-[#2A384B] font-medium"
              >
                {item.label}
                <ChevronDown className="w-4 h-4 transition-transform peer-checked:rotate-180" />
              </label>

              <div className="max-h-0 peer-checked:max-h-96 overflow-hidden transition-all duration-300 ease-out">
                <div className="flex flex-col gap-3 pb-4">
                  {item.dropdownItems!.map((dropdownItem) => (
                    <Link
                      key={dropdownItem._key}
                      href={dropdownItem.link ?? "#"}
                      onClick={closeMenu}
                      className="text-gray-500 text-sm pl-1"
                    >
                      {dropdownItem.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          );
        })}

        {navbar.ctaButton?.text && (
          <Button
            href={navbar.ctaButton.link ?? "#"}
            onClick={closeMenu}
            variant="primary"
            className="w-full mt-6 py-3 rounded-lg uppercase tracking-wide text-sm"
          >
            {navbar.ctaButton.text}
          </Button>
        )}

        {navbar.contactPerson?.name && (
          <div className="mt-6 border border-gray-200 rounded-xl p-4">
            <div className="flex items-center gap-3 mb-4">
              {navbar.contactPerson.avatar?.asset?.url && (
                <Image
                  src={navbar.contactPerson.avatar.asset.url}
                  alt={navbar.contactPerson.name}
                  width={48}
                  height={48}
                  className="w-12 h-12 rounded-full object-cover shrink-0"
                />
              )}

              <div>
                <p className="text-[#2A384B] font-semibold">
                  {navbar.contactPerson.name}
                </p>
                {navbar.contactPerson.title && (
                  <p className="text-[#4C80C2] text-xs font-bold uppercase tracking-wide">
                    {navbar.contactPerson.title}
                  </p>
                )}
              </div>
            </div>

            {navbar.contactPerson.email && (
              <Link
                href={`mailto:${navbar.contactPerson.email}`}
                onClick={closeMenu}
                className="flex items-center gap-2 bg-gray-100 rounded-lg px-4 py-3 text-[#2A384B] text-sm mb-3"
              >
                <Mail className="w-4 h-4 shrink-0" />
                {navbar.contactPerson.email}
              </Link>
            )}

            {navbar.contactPerson.phone && (
              <Link
                href={`tel:${navbar.contactPerson.phone}`}
                onClick={closeMenu}
                className="flex items-center gap-2 bg-gray-100 rounded-lg px-4 py-3 text-[#2A384B] text-sm font-semibold"
              >
                <Phone className="w-4 h-4 shrink-0" />
                {navbar.contactPerson.phone}
              </Link>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
