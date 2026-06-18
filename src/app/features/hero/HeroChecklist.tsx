type HeroChecklistProps = {
  items: Array<{ _key: string; title: string }>;
};

export function HeroChecklist({ items }: HeroChecklistProps) {
  return (
    <ul className="space-y-3 mb-8">
      {items.map((item) => (
        <li key={item._key} className="flex items-center text-lg">
          <span className="w-6 h-6 rounded-full bg-white text-gray-900 flex items-center justify-center mr-3 flex-shrink-0">
            ✓
          </span>
          <span>{item.title}</span>
        </li>
      ))}
    </ul>
  );
}
