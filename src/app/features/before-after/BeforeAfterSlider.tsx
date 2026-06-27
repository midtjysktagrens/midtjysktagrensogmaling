"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { BeforeAfterItemData } from "@/types/beforeAfter";
import { BeforeAfterCard } from "./BeforeAfterCard";

export function BeforeAfterSlider({
  items,
}: {
  items: BeforeAfterItemData[];
}) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollByCard = (direction: 1 | -1) => {
    const container = scrollRef.current;
    if (!container) return;

    const card = container.querySelector<HTMLElement>("[data-card]");
    const step = (card?.offsetWidth ?? container.clientWidth) + 32;

    container.scrollBy({ left: direction * step, behavior: "smooth" });
  };

  return (
    <div className="relative sm:px-14 lg:px-16">
      <div
        ref={scrollRef}
        className="flex items-start gap-6 sm:gap-8 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-2 scrollbar-none"
      >
        {items.map((item) => (
          <div
            key={item._key}
            data-card
            className="snap-start shrink-0 w-64 sm:w-72 2xl:w-80"
          >
            <BeforeAfterCard {...item} />
          </div>
        ))}
      </div>

      <button
        type="button"
        aria-label="Forrige"
        onClick={() => scrollByCard(-1)}
        className="hidden sm:flex absolute left-0 top-[40%] -translate-y-1/2 items-center justify-center w-10 h-10 rounded-full bg-white text-gray-900 shadow-lg cursor-pointer hover:bg-[#4C80C2] hover:text-white transition-colors"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      <button
        type="button"
        aria-label="Næste"
        onClick={() => scrollByCard(1)}
        className="hidden sm:flex absolute right-0 top-[40%] -translate-y-1/2 items-center justify-center w-10 h-10 rounded-full bg-white text-gray-900 shadow-lg cursor-pointer hover:bg-[#4C80C2] hover:text-white transition-colors"
      >
        <ChevronRight className="w-5 h-5" />
      </button>
    </div>
  );
}
