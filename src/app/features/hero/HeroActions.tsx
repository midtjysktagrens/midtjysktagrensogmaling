type HeroActionsProps = {
  primary?: { text: string; link: string };
  secondary?: { text: string; link: string };
};

export function HeroActions({ primary, secondary }: HeroActionsProps) {
  return (
    <div>
      {primary && (
        <button className="bg-primary text-white px-4 py-2 rounded">
          {primary.text}
        </button>
      )}

      {secondary && (
        <button className="bg-transparent border border-secondary text-secondary px-4 py-2 rounded">
          {secondary.text}
        </button>
      )}
    </div>
  );
}
