import { CasesHero, CasesServiceSections } from "../../features/cases-page";
import { getCasesPage } from "../../lib/sanity/queries";

export default async function CasesPage() {
  const cases = await getCasesPage();

  if (!cases) return null;

  return (
    <div>
      <CasesHero {...cases} />
      <CasesServiceSections {...cases} />
    </div>
  );
}
