import Image from "next/image";
import Link from "next/link";
import { Phone } from "lucide-react";
import { Button } from "@/app/global/components/Button";
import { getNavbar } from "@/app/lib/sanity/queries";
import { NavLink } from "./NavLink";

export default async function Navbar() {
  const navbar = await getNavbar();

  if (!navbar) return null;

  return (
    <header className="sticky top-0 z-50 bg-[#2A384B]">
      <nav className="flex items-center justify-between gap-8 px-6 lg:px-12 py-4 max-w-7xl mx-auto">
        <Link href="/" className="flex items-center gap-3 shrink-0">
          {navbar.logo?.asset?.url && (
            <Image
              src={navbar.logo.asset.url}
              alt={navbar.logo.alt ?? navbar.siteName ?? ""}
              width={48}
              height={48}
              className="h-10 w-auto"
            />
          )}
          {navbar.siteName && (
            <span className="text-white font-bold uppercase tracking-wide text-sm leading-tight">
              {navbar.siteName}
            </span>
          )}
        </Link>

        <div className="hidden lg:flex items-center gap-8">
          {navbar.navItems?.map((item) => (
            <NavLink
              key={item._key}
              label={item.label}
              link={item.link}
              dropdownItems={item.dropdownItems}
            />
          ))}

          {navbar.phoneNumber && (
            <Link
              href={navbar.phoneLink ?? `tel:${navbar.phoneNumber}`}
              className="flex items-center gap-2 text-white font-semibold whitespace-nowrap"
            >
              <Phone className="w-4 h-4" />
              {navbar.phoneNumber}
            </Link>
          )}

          {navbar.ctaButton?.text && (
            <Button
              href={navbar.ctaButton.link ?? "#"}
              variant="primary"
              className="px-6 py-2.5 rounded-full"
            >
              {navbar.ctaButton.text}
            </Button>
          )}
        </div>
      </nav>
    </header>
  );
}
