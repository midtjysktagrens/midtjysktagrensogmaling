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
    <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-gray-900/40 flex items-center">
      <div className="w-1/2 text-white px-12 py-12">
        <h1 className="text-5xl font-bold leading-tight mb-6">
          {hero.headline}
        </h1>

        <p className="text-lg mb-8 leading-relaxed">{hero.subheading}</p>

        {hero.features && <HeroChecklist items={hero.features} />}

        {(hero.primaryButton || hero.secondaryButton) && (
          <HeroActions
            primary={hero.primaryButton}
            secondary={hero.secondaryButton}
          />
        )}
      </div>
    </div>
  );
}
