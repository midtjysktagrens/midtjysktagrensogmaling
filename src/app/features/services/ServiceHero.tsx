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
}: ServiceCardData) {
  const PresetIcon = iconName ? presetIcons[iconName] : Wrench;

  return (
    <section className="relative min-h-[60vh] w-full overflow-hidden flex items-center">
      {heroImage?.asset?.url && (
        <Image
          src={heroImage.asset.url}
          alt=""
          fill
          priority
          className="object-cover"
        />
      )}

      <div className="absolute inset-0 bg-linear-to-r from-[#2A384B]/90 via-[#2A384B]/70 to-[#2A384B]/40" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 text-white">
        {icon?.asset?.url ? (
          <Image
            src={icon.asset.url}
            alt=""
            width={64}
            height={64}
            className="w-16 h-16 mb-4"
          />
        ) : (
          <PresetIcon className="w-16 h-16 mb-4" strokeWidth={1.5} />
        )}

        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">{title}</h1>

        {description && (
          <p className="text-lg text-white/90 max-w-xl">{description}</p>
        )}
      </div>
    </section>
  );
}
