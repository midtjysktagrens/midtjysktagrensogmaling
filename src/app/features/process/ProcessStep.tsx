import Image from "next/image";
import { Camera, CalendarCheck, CheckCircle2, FileCheck } from "lucide-react";
import type { ProcessIconName, ProcessStepData } from "@/types/process";

const presetIcons: Record<ProcessIconName, typeof Camera> = {
  camera: Camera,
  checkCircle: CheckCircle2,
  fileCheck: FileCheck,
  calendarCheck: CalendarCheck,
};

type ProcessStepProps = ProcessStepData & {
  step: number;
};

export function ProcessStep({
  step,
  icon,
  iconName,
  title,
  description,
}: ProcessStepProps) {
  const PresetIcon = iconName ? presetIcons[iconName] : Camera;

  return (
    <div className="bg-[#2A384B] rounded-xl p-6 2xl:p-8 text-center flex flex-col items-center h-full w-full sm:flex-1 sm:w-auto sm:min-w-50 sm:max-w-64 2xl:max-w-80">
      <span className="self-start text-white font-bold text-lg 2xl:text-xl">{step}</span>

      {icon?.asset?.url ? (
        <Image
          src={icon.asset.url}
          alt=""
          width={56}
          height={56}
          className="w-14 h-14 2xl:w-16 2xl:h-16 -mt-2"
        />
      ) : (
        <PresetIcon
          className="w-14 h-14 2xl:w-16 2xl:h-16 text-white -mt-2"
          strokeWidth={1.5}
        />
      )}

      <h3 className="text-white font-semibold text-lg 2xl:text-xl mt-4 min-h-14 flex items-center">
        {title}
      </h3>

      {description && (
        <p className="text-white/60 text-sm 2xl:text-base mt-2">{description}</p>
      )}
    </div>
  );
}
