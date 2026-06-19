import { BeforeAfter } from "../features/before-after";
import { Cases } from "../features/cases";
import { Hero } from "../features/hero";
import { Kpi } from "../features/kpi";
import { Process } from "../features/process";
import { Services } from "../features/services";

export default function Home() {
  return (
    <div>
      <Hero />
      <Kpi />
      <Services />
      <Process />
      <BeforeAfter />
      <Cases />
    </div>
  );
}
