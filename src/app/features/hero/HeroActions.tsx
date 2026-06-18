type HeroActionsProps = {
  primary?: { text: string; link: string };
  secondary?: { text: string; link: string };
};

export function HeroActions({ primary, secondary }: HeroActionsProps) {
  return (
    <div className="flex flex-nowrap gap-4">
      {primary && (
        <a
          href={primary.link}
          className="bg-[#4C80C2] text-white px-8 py-4 rounded-lg font-semibold whitespace-nowrap hover:bg-blue-600 transition"
        >
          {primary.text}
        </a>
      )}

      {secondary && (
        <a
          href={secondary.link}
          className="bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold whitespace-nowrap hover:bg-gray-100 transition"
        >
          {secondary.text}
        </a>
      )}
    </div>
  );
}
