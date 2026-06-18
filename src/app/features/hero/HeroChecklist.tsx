import { Check } from "lucide-react";

type HeroChecklistProps = {
  items: Array<{ _key: string; title: string }>;
};

export function HeroChecklist({ items }: HeroChecklistProps) {
  return (
    <ul className="space-y-3 mb-8">
      {items.map((item) => (
        <li key={item._key} className="flex items-center gap-3 text-lg">
          <span className="w-6 h-6 rounded-full bg-white text-blue-500 flex items-center justify-center shrink-0">
            <Check className="w-4 h-4" strokeWidth={3} />
          </span>
          <span>{item.title}</span>
        </li>
      ))}
    </ul>
  );
}
