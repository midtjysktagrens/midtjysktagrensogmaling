import { Award, Clock, Heart, ShieldCheck } from "lucide-react";
import { Heading } from "@/app/global/components/Heading";
import { getAboutValues } from "@/app/lib/sanity/queries";
import type { AboutValueIconName } from "@/types/about";

const presetIcons: Record<AboutValueIconName, typeof Award> = {
  quality: Award,
  trust: ShieldCheck,
  experience: Clock,
  care: Heart,
};

export default async function AboutValues() {
  const values = await getAboutValues();

  if (!values?.values?.length) return null;

  return (
    <section className="bg-gray-200 py-16">
      <div className="max-w-7xl 2xl:max-w-[1600px] mx-auto px-6 lg:px-12">
        {values.sectionTitle && (
          <Heading className="mb-4">{values.sectionTitle}</Heading>
        )}

        {values.sectionDescription && (
          <p className="text-gray-600 max-w-2xl mb-12">
            {values.sectionDescription}
          </p>
        )}

        <div className="grid sm:grid-cols-2 gap-6">
          {values.values.map((value) => {
            const Icon = presetIcons[value.iconName ?? "quality"];

            return (
              <div
                key={value._key}
                className="bg-white rounded-xl p-6 2xl:p-8 flex gap-5 items-start"
              >
                <span className="shrink-0 w-12 h-12 2xl:w-14 2xl:h-14 rounded-full bg-[#2A384B] text-white flex items-center justify-center">
                  <Icon className="w-6 h-6 2xl:w-7 2xl:h-7" strokeWidth={1.5} />
                </span>

                <div>
                  <h3 className="font-semibold text-[#2A384B] text-lg 2xl:text-xl">
                    {value.title}
                  </h3>
                  {value.description && (
                    <p className="text-gray-600 text-sm 2xl:text-base mt-2">
                      {value.description}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
