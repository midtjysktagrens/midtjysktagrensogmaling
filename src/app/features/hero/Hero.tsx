import { getHero } from "@/app/lib/sanity/queries";
import { HeroBackground } from "./HeroBackground";
import { HeroContent } from "./HeroContent";

export default async function Hero() {
  const hero = await getHero();

  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      <div className="absolute inset-0 z-0">
        <HeroBackground image={hero.backgroundImage} />
      </div>

      <div className="absolute inset-0 z-10">
        <HeroContent hero={hero} />
      </div>
    </section>
  );
}
