import { ChevronDown } from "lucide-react";
import { getServicesSection } from "@/app/lib/sanity/queries";

export default async function QuoteForm() {
  const services = await getServicesSection();

  return (
    <div className="bg-white rounded-xl shadow-2xl p-6 w-full max-w-[420px] text-gray-900">
      <h2 className="text-lg font-bold mb-4">Bestil et gratis tilbud</h2>

      <form className="flex flex-col gap-3">
        <input
          type="text"
          name="name"
          placeholder="Navn"
          className="border border-gray-300 rounded-md px-4 py-3 text-base placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#4C80C2]"
        />

        <input
          type="text"
          name="address"
          placeholder="Adresse"
          className="border border-gray-300 rounded-md px-4 py-3 text-base placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#4C80C2]"
        />

        <input
          type="tel"
          name="phone"
          placeholder="Telefon"
          className="border border-gray-300 rounded-md px-4 py-3 text-base placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#4C80C2]"
        />

        <input
          type="email"
          name="email"
          placeholder="E-mail"
          className="border border-gray-300 rounded-md px-4 py-3 text-base placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#4C80C2]"
        />

        <div className="relative">
          <select
            name="service"
            defaultValue=""
            className="w-full appearance-none border border-gray-300 rounded-md px-4 py-3 pr-10 text-base text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#4C80C2]"
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
