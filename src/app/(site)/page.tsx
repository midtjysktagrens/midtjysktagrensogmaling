import { Hero } from "../features/hero";
import { Kpi } from "../features/kpi";
import { Services } from "../features/services";

export default function Home() {
  return (
    <div>
      <Hero />
      <Kpi />
      <Services />
    </div>
  );
}
