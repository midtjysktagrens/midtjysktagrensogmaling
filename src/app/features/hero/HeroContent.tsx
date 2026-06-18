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
    <div>
      <h1>{hero.headline}</h1>

      <p>{hero.subheading}</p>

      {hero.features && <HeroChecklist items={hero.features} />}

      {(hero.primaryButton || hero.secondaryButton) && (
        <HeroActions
          primary={hero.primaryButton}
          secondary={hero.secondaryButton}
        />
      )}
    </div>
  );
}
