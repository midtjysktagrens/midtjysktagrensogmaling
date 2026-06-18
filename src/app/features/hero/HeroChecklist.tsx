type HeroChecklistProps = {
  items: Array<{ _key: string; title: string }>;
};

export function HeroChecklist({ items }: HeroChecklistProps) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item._key}>{item.title}</li>
      ))}
    </ul>
  );
}
