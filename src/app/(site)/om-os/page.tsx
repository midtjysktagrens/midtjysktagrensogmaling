import {
  AboutCta,
  AboutHero,
  AboutTeam,
  AboutTimeline,
  AboutValues,
} from "../../features/about";
import { getAboutPage } from "../../lib/sanity/queries";

export default async function AboutPage() {
  const about = await getAboutPage();

  if (!about) return null;

  return (
    <div>
      <AboutHero {...about} />
      <AboutTimeline {...about} />
      <AboutValues {...about} />
      <AboutTeam {...about} />
      <AboutCta {...about} />
    </div>
  );
}
