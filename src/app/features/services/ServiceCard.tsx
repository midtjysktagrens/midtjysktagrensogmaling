import Image from "next/image";
import {
  FileSignature,
  Grid2x2,
  Hammer,
  MapPin,
  PaintRoller,
  Wrench,
} from "lucide-react";
import { Button } from "@/app/global/components/Button";
import type { ServiceCardData, ServiceIconName } from "@/types/services";

const presetIcons: Record<ServiceIconName, typeof Wrench> = {
  paintRoller: PaintRoller,
  tiles: Grid2x2,
  pin: MapPin,
  hammer: Hammer,
  fileSignature: FileSignature,
};

export function ServiceCard({
  icon,
  iconName,
  title,
  slug,
  description,
  button,
}: ServiceCardData) {
  const PresetIcon = iconName ? presetIcons[iconName] : Wrench;

  return (
    <div className="bg-[#2A384B] rounded-xl p-6 text-center flex flex-col items-center h-full snap-center shrink-0 w-[85%] sm:w-auto">
      {icon?.asset?.url ? (
        <Image
          src={icon.asset.url}
          alt=""
          width={56}
          height={56}
          className="w-14 h-14"
        />
      ) : (
        <PresetIcon className="w-14 h-14 text-white" strokeWidth={1.5} />
      )}

      <h3 className="text-white font-semibold text-lg mt-4 min-h-14 flex items-center">
        {title}
      </h3>

      <div className="flex-1 w-full">
        {description && (
          <p className="text-white/60 text-sm mt-2">{description}</p>
        )}
      </div>

      {button?.text && (
        <Button
          href={slug?.current ? `/ydelser/${slug.current}` : button.link ?? "#"}
          variant="primary"
          className="px-6 py-2 rounded-md mt-6"
        >
          {button.text}
        </Button>
      )}
    </div>
  );
}
