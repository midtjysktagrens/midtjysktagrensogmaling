import Image from "next/image";
import {
  FileSignature,
  Grid2x2,
  Hammer,
  MapPin,
  PaintRoller,
  Wrench,
} from "lucide-react";
import type { ServiceCardData, ServiceIconName } from "@/types/services";

const presetIcons: Record<ServiceIconName, typeof Wrench> = {
  paintRoller: PaintRoller,
  tiles: Grid2x2,
  pin: MapPin,
  hammer: Hammer,
  fileSignature: FileSignature,
};

export function ServiceHero({
  icon,
  iconName,
  title,
  description,
  heroImage,
  heroMobileImage,
}: ServiceCardData) {
  const PresetIcon = iconName ? presetIcons[iconName] : Wrench;
  const desktopUrl = heroImage?.asset?.url;
  const mobileUrl = heroMobileImage?.asset?.url ?? desktopUrl;

  return (
    <section className="relative min-h-[85vh] w-full overflow-hidden flex items-center">
      {mobileUrl && (
        <Image
          src={mobileUrl}
          alt=""
          fill
          priority
          className="object-cover sm:hidden"
        />
      )}

      {desktopUrl && (
        <Image
          src={desktopUrl}
          alt=""
          fill
          priority
          className="object-cover hidden sm:block"
        />
      )}

      <div className="absolute inset-0 bg-linear-to-r from-[#2A384B]/90 via-[#2A384B]/70 to-[#2A384B]/40" />

      <div className="relative z-10 w-full max-w-2xl 2xl:max-w-3xl px-6 sm:px-12 lg:px-20 text-white">
        {icon?.asset?.url ? (
          <Image
            src={icon.asset.url}
            alt=""
            width={64}
            height={64}
            className="w-16 h-16 2xl:w-20 2xl:h-20 mb-4"
          />
        ) : (
          <PresetIcon className="w-16 h-16 2xl:w-20 2xl:h-20 mb-4" strokeWidth={1.5} />
        )}

        <h1 className="text-4xl sm:text-5xl 2xl:text-6xl font-extrabold mb-4">
          {title}
        </h1>

        {description && (
          <p className="text-lg 2xl:text-xl text-white/90 max-w-xl 2xl:max-w-2xl">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
