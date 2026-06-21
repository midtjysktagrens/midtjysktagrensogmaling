import { QuoteForm } from "@/app/features/quote-form";
import { getContactPage } from "@/app/lib/sanity/queries";
import { ContactInfo } from "./ContactInfo";

export default async function Contact() {
  const contact = await getContactPage();

  if (!contact) return null;

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <ContactInfo {...contact} />

        <div className="bg-gray-200 rounded-xl p-6 sm:p-10">
          <QuoteForm />
        </div>
      </div>
    </section>
  );
}
