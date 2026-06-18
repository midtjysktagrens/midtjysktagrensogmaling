import { getHero } from "@/app/lib/sanity/queries";
import { HeroBackground } from "./HeroBackground";
import { HeroContent } from "./HeroContent";

export default async function Hero() {
  const hero = await getHero();

  return (
    <section>
      <HeroBackground image={hero.backgroundImage} />

      <HeroContent hero={hero} />
    </section>
  );
}
