import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { SiFacebook, SiInstagram } from "@icons-pack/react-simple-icons";
import { getFooter } from "@/app/lib/sanity/queries";
import { FooterCtaBanner } from "./FooterCtaBanner";

const socialIcons: Record<string, React.ReactNode> = {
  facebook: <SiFacebook className="w-4 h-4" />,
  instagram: <SiInstagram className="w-4 h-4" />,
};

export default async function Footer() {
  const footer = await getFooter();

  if (!footer) return null;

  return (
    <footer>
      <FooterCtaBanner {...footer} />

      <div className="bg-[#132238] pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr_1fr_1fr] gap-10 pb-12">
            <div>
              {footer.logo?.asset?.url && (
                <Image
                  src={footer.logo.asset.url}
                  alt={footer.logo.alt ?? ""}
                  width={140}
                  height={50}
                  className="h-10 w-auto mb-4"
                />
              )}

              {footer.description && (
                <p className="text-white/60 text-sm leading-relaxed mb-4">
                  {footer.description}
                </p>
              )}

              {footer.socialLinks && footer.socialLinks.length > 0 && (
                <div className="flex gap-3">
                  {footer.socialLinks.map((social) => (
                    <Link
                      key={social._key}
                      href={social.link ?? "#"}
                      className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white/10 transition"
                    >
                      {social.platform && socialIcons[social.platform]}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div className="md:border-l border-white/10 md:pl-10">
              {footer.servicesColumnTitle && (
                <h4 className="text-white font-semibold mb-4">
                  {footer.servicesColumnTitle}
                </h4>
              )}
              <ul className="space-y-2">
                {footer.servicesLinks?.map((item) => (
                  <li key={item._key}>
                    <Link
                      href={item.link ?? "#"}
                      className="text-white/60 hover:text-white text-sm transition"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="md:border-l border-white/10 md:pl-10">
              {footer.shortcutsColumnTitle && (
                <h4 className="text-white font-semibold mb-4">
                  {footer.shortcutsColumnTitle}
                </h4>
              )}
              <ul className="space-y-2">
                {footer.shortcutsLinks?.map((item) => (
                  <li key={item._key}>
                    <Link
                      href={item.link ?? "#"}
                      className="text-white/60 hover:text-white text-sm transition"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="md:border-l border-white/10 md:pl-10">
              {footer.contactColumnTitle && (
                <h4 className="text-white font-semibold mb-4">
                  {footer.contactColumnTitle}
                </h4>
              )}
              <ul className="space-y-3 text-sm">
                {footer.phoneNumber && (
                  <li>
                    <Link
                      href={footer.phoneLink ?? `tel:${footer.phoneNumber}`}
                      className="flex items-center gap-2 text-white/60 hover:text-white transition"
                    >
                      <Phone className="w-4 h-4 shrink-0" />
                      {footer.phoneNumber}
                    </Link>
                  </li>
                )}

                {footer.email && (
                  <li>
                    <Link
                      href={`mailto:${footer.email}`}
                      className="flex items-center gap-2 text-white/60 hover:text-white transition"
                    >
                      <Mail className="w-4 h-4 shrink-0" />
                      {footer.email}
                    </Link>
                  </li>
                )}

                {footer.address && (
                  <li className="flex items-center gap-2 text-white/60">
                    <MapPin className="w-4 h-4 shrink-0" />
                    {footer.address}
                  </li>
                )}
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-6 flex flex-wrap items-center justify-between gap-4 text-white/50 text-sm">
            {footer.copyrightText && <p>{footer.copyrightText}</p>}

            {footer.legalLinks && footer.legalLinks.length > 0 && (
              <div className="flex gap-2">
                {footer.legalLinks.map((item, index) => (
                  <span key={item._key} className="flex items-center gap-2">
                    <Link
                      href={item.link ?? "#"}
                      className="hover:text-white transition"
                    >
                      {item.label}
                    </Link>
                    {index < footer.legalLinks!.length - 1 && <span>|</span>}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
