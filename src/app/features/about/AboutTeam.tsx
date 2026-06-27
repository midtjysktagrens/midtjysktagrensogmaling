import Image from "next/image";
import { Heading } from "@/app/global/components/Heading";
import type { AboutPageData } from "@/types/about";

export function AboutTeam({
  teamTitle,
  teamDescription,
  members,
}: AboutPageData) {
  if (!members?.length) return null;

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl 2xl:max-w-[1600px] mx-auto px-6 lg:px-12 text-center">
        {teamTitle && <Heading className="mb-4">{teamTitle}</Heading>}

        {teamDescription && (
          <p className="text-gray-600 max-w-2xl mx-auto mb-12">
            {teamDescription}
          </p>
        )}

        <div className="flex flex-wrap justify-center gap-10">
          {members.map((member) => {
            const photoUrl = member.photo?.asset?.url;

            return (
              <div key={member._key} className="flex flex-col items-center w-40">
                <div className="relative w-32 h-32 2xl:w-36 2xl:h-36 rounded-full overflow-hidden bg-gray-200 mb-4">
                  {photoUrl && (
                    <Image
                      src={photoUrl}
                      alt=""
                      fill
                      className="object-cover"
                    />
                  )}
                </div>

                <h3 className="font-semibold text-[#2A384B]">{member.name}</h3>

                {member.role && (
                  <p className="text-gray-500 text-sm">{member.role}</p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
