import { QuoteForm } from "@/app/features/quote-form";
import { HeroActions } from "./HeroActions";
import { HeroChecklist } from "./HeroChecklist";

type HeroContentProps = {
  hero: {
    headline: string;
    subheading: string;
    features?: Array<{ _key: string; title: string }>;
    primaryButton?: { text: string; link: string };
    secondaryButton?: { text: string; link: string };
  };
};

export function HeroContent({ hero }: HeroContentProps) {
  return (
    <div className="absolute inset-0 bg-linear-to-r from-[#2A384B]/90 via-[#2A384B]/80 to-[#2A384B]/60 sm:via-[#2A384B]/50 sm:to-transparent flex items-center">
      <div className="w-full flex items-center justify-between gap-8 px-6 sm:px-12 lg:px-20">
        <div className="w-full max-w-2xl text-white">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold uppercase leading-tight tracking-tight mb-6">
            {hero.headline}
          </h1>

          <p className="text-lg leading-relaxed mb-8 max-w-md text-white/90">
            {hero.subheading}
          </p>

          {hero.features && <HeroChecklist items={hero.features} />}

          {(hero.primaryButton || hero.secondaryButton) && (
            <HeroActions
              primary={hero.primaryButton}
              secondary={hero.secondaryButton}
            />
          )}
        </div>

        <div className="hidden lg:block shrink-0 w-[420px]">
          <QuoteForm />
        </div>
      </div>
    </div>
  );
}
