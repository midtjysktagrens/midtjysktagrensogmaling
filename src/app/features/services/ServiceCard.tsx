import Image from "next/image";
import { Wrench } from "lucide-react";
import { Button } from "@/app/global/components/Button";
import type { ServiceCardData } from "@/types/services";

export function ServiceCard({
  icon,
  title,
  description,
  button,
}: ServiceCardData) {
  return (
    <div className="bg-[#2A384B] rounded-xl p-6 text-center flex flex-col items-center h-full">
      {icon?.asset?.url ? (
        <Image
          src={icon.asset.url}
          alt=""
          width={56}
          height={56}
          className="w-14 h-14"
        />
      ) : (
        <Wrench className="w-14 h-14 text-white" strokeWidth={1.5} />
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
          href={button.link ?? "#"}
          variant="primary"
          className="px-6 py-2 rounded-md mt-6"
        >
          {button.text}
        </Button>
      )}
    </div>
  );
}
