import Image from "next/image";
import { Award, MapPin, ShieldCheck } from "lucide-react";
import type { KpiItemData } from "@/types/kpi";

const fallbackIcons = {
  pin: MapPin,
  shieldCheck: ShieldCheck,
  award: Award,
};

export function KpiItem({ title, description, icon, fallbackIcon }: KpiItemData) {
  const FallbackIcon = fallbackIcons[fallbackIcon ?? "pin"];

  return (
    <div className="flex items-center gap-4">
      {icon?.asset?.url ? (
        <Image
          src={icon.asset.url}
          alt=""
          width={40}
          height={40}
          className="w-10 h-10 shrink-0"
        />
      ) : (
        <FallbackIcon className="w-10 h-10 shrink-0 text-blue-400" strokeWidth={1.5} />
      )}

      <div>
        <p className="text-white font-semibold">{title}</p>
        {description && <p className="text-white/60 text-sm">{description}</p>}
      </div>
    </div>
  );
}
