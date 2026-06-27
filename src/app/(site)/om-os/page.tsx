import {
  AboutCta,
  AboutHero,
  AboutTeam,
  AboutTimeline,
  AboutValues,
} from "../../features/about";

export default function AboutPage() {
  return (
    <div>
      <AboutHero />
      <AboutTimeline />
      <AboutValues />
      <AboutTeam />
      <AboutCta />
    </div>
  );
}
