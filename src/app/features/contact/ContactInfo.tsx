import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import type { ContactPageData } from "@/types/contactPage";

export function ContactInfo({
  heading,
  subheading,
  phoneNumber,
  phoneLink,
  email,
  address,
  openingHoursTitle,
  openingHours,
}: ContactPageData) {
  return (
    <div>
      {heading && (
        <h1 className="text-3xl sm:text-4xl 2xl:text-5xl font-extrabold text-[#2A384B] mb-4">
          {heading}
        </h1>
      )}

      {subheading && (
        <p className="text-lg 2xl:text-xl font-semibold text-[#2A384B] mb-8">
          {subheading}
        </p>
      )}

      <div className="flex flex-col gap-4 mb-10">
        {phoneNumber && (
          <Link
            href={phoneLink ?? `tel:${phoneNumber}`}
            className="flex items-center gap-3 text-[#2A384B] font-medium 2xl:text-lg"
          >
            <Phone className="w-5 h-5 2xl:w-6 2xl:h-6 text-[#4C80C2] shrink-0" />
            {phoneNumber}
          </Link>
        )}

        {email && (
          <Link
            href={`mailto:${email}`}
            className="flex items-center gap-3 text-[#2A384B] font-medium 2xl:text-lg"
          >
            <Mail className="w-5 h-5 2xl:w-6 2xl:h-6 text-[#4C80C2] shrink-0" />
            {email}
          </Link>
        )}

        {address && (
          <div className="flex items-center gap-3 text-[#2A384B] font-medium 2xl:text-lg">
            <MapPin className="w-5 h-5 2xl:w-6 2xl:h-6 text-[#4C80C2] shrink-0" />
            {address}
          </div>
        )}
      </div>

      {openingHoursTitle && (
        <h2 className="text-xl 2xl:text-2xl font-bold text-[#2A384B] mb-3">
          {openingHoursTitle}
        </h2>
      )}

      {openingHours && openingHours.length > 0 && (
        <div className="flex flex-col gap-1 mb-10">
          {openingHours.map((row) => (
            <p key={row._key} className="text-[#2A384B] 2xl:text-lg">
              {row.label}
              {row.value ? ` ${row.value}` : ""}
            </p>
          ))}
        </div>
      )}

      {address && (
        <iframe
          title="Find os på kortet"
          src={`https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`}
          className="w-full h-64 rounded-lg border-0"
          loading="lazy"
        />
      )}
    </div>
  );
}
