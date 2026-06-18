type HeroActionsProps = {
  primary?: { text: string; link: string };
  secondary?: { text: string; link: string };
};

export function HeroActions({ primary, secondary }: HeroActionsProps) {
  return (
    <div className="flex gap-4">
      {primary && (
        <button className="bg-blue-500 text-white px-8 py-3 rounded font-semibold hover:bg-blue-600 transition">
          {primary.text}
        </button>
      )}

      {secondary && (
        <button className="bg-white text-gray-900 px-8 py-3 rounded font-semibold hover:bg-gray-100 transition">
          {secondary.text}
        </button>
      )}
    </div>
  );
}
