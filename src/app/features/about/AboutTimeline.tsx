import { Heading } from "@/app/global/components/Heading";
import { getAboutTimeline } from "@/app/lib/sanity/queries";

export default async function AboutTimeline() {
  const timeline = await getAboutTimeline();

  if (!timeline?.milestones?.length) return null;

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl 2xl:max-w-[1600px] mx-auto px-6 lg:px-12">
        {timeline.sectionTitle && (
          <Heading className="mb-4">{timeline.sectionTitle}</Heading>
        )}

        {timeline.sectionDescription && (
          <p className="text-gray-600 max-w-2xl mb-16">
            {timeline.sectionDescription}
          </p>
        )}

        <ul className="relative">
          <div className="absolute left-1.5 lg:left-1/2 top-0 bottom-0 w-px bg-gray-200 lg:-translate-x-1/2" />

          {timeline.milestones.map((milestone, index) => {
            const isEven = index % 2 === 1;

            return (
              <li
                key={milestone._key}
                className="relative pl-10 lg:pl-0 lg:flex lg:items-center lg:gap-12 py-6"
              >
                <span className="absolute left-0 top-7 w-3 h-3 rounded-full bg-blue-500 lg:left-1/2 lg:-translate-x-1/2" />

                <div
                  className={`lg:w-1/2 ${
                    isEven ? "lg:order-2 lg:pl-12" : "lg:text-right lg:pr-12"
                  }`}
                >
                  {milestone.year && (
                    <span className="text-blue-500 font-extrabold text-xl">
                      {milestone.year}
                    </span>
                  )}
                  <h3 className="font-semibold text-[#2A384B] text-lg mt-1">
                    {milestone.title}
                  </h3>
                  {milestone.description && (
                    <p className="text-gray-600 mt-2">
                      {milestone.description}
                    </p>
                  )}
                </div>

                <div className="hidden lg:block lg:w-1/2" />
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
