import { Button } from "@/app/global/components/Button";

type HeroActionsProps = {
  primary?: { text: string; link: string };
  secondary?: { text: string; link: string };
};

export function HeroActions({ primary, secondary }: HeroActionsProps) {
  return (
    <div className="flex flex-col sm:flex-row gap-4">
      {primary && (
        <Button
          href={primary.link}
          variant="primary"
          className="w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-4 rounded-lg"
        >
          {primary.text}
        </Button>
      )}

      {secondary && (
        <Button
          href={secondary.link}
          variant="secondary"
          className="w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-4 rounded-lg"
        >
          {secondary.text}
        </Button>
      )}
    </div>
  );
}
