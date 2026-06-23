import { ChevronDown } from "lucide-react";
import { getServicesSection } from "@/app/lib/sanity/queries";

type QuoteFormSize = "sm" | "md" | "lg";

const sizeClasses: Record<
  QuoteFormSize,
  { card: string; title: string; gap: string; input: string }
> = {
  sm: {
    card: "max-w-[320px] p-5",
    title: "text-base mb-3",
    gap: "gap-2",
    input: "px-3 py-2.5",
  },
  md: {
    card: "max-w-[420px] 2xl:max-w-120 p-6 2xl:p-8",
    title: "text-lg 2xl:text-xl mb-4",
    gap: "gap-3",
    input: "px-4 py-3 2xl:py-3.5",
  },
  lg: {
    card: "max-w-[560px] 2xl:max-w-[640px] p-8 2xl:p-10",
    title: "text-xl 2xl:text-2xl mb-5",
    gap: "gap-4",
    input: "px-5 py-3.5 2xl:py-4",
  },
};

type QuoteFormProps = {
  size?: QuoteFormSize;
};

export default async function QuoteForm({ size = "md" }: QuoteFormProps) {
  const services = await getServicesSection();
  const sizing = sizeClasses[size];

  const inputClass = `border border-gray-300 rounded-md ${sizing.input} text-base placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#4C80C2]`;

  return (
    <div
      className={`bg-white rounded-xl shadow-2xl w-full text-gray-900 ${sizing.card}`}
    >
      <h2 className={`font-bold ${sizing.title}`}>Bestil et gratis tilbud</h2>

      <form className={`flex flex-col ${sizing.gap}`}>
        <input
          type="text"
          name="name"
          placeholder="Navn"
          className={inputClass}
        />

        <input
          type="text"
          name="address"
          placeholder="Adresse"
          className={inputClass}
        />

        <input
          type="tel"
          name="phone"
          placeholder="Telefon"
          className={inputClass}
        />

        <input
          type="email"
          name="email"
          placeholder="E-mail"
          className={inputClass}
        />

        <div className="relative">
          <select
            name="service"
            defaultValue=""
            className={`w-full appearance-none ${inputClass} pr-10 text-gray-500`}
          >
            <option value="" disabled>
              Vælg ydelse
            </option>
            {services?.cards?.map((card) => (
              <option key={card._key} value={card.title}>
                {card.title}
              </option>
            ))}
          </select>

          <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
        </div>

        <label className="border border-dashed border-gray-300 rounded-md px-4 py-6 text-center text-sm text-gray-500 cursor-pointer hover:border-[#4C80C2] transition">
          <input type="file" name="image" accept="image/*" className="hidden" />
          <span className="block font-medium">Upload billede</span>
          <span className="block text-xs text-gray-400">Træk fil hertil</span>
        </label>

        <button
          type="submit"
          className="bg-[#4C80C2] hover:bg-blue-600 text-white font-semibold rounded-md px-4 py-3 mt-1 transition"
        >
          Send ansøgning
        </button>
      </form>
    </div>
  );
}
