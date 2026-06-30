"use client";

import { ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { getServicesSection } from "@/app/lib/sanity/queries";
import type { ServiceCardData } from "@/types/services";

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

export default function QuoteForm({ size = "md" }: QuoteFormProps) {
  const sizing = sizeClasses[size];
  const formRef = useRef<HTMLFormElement>(null);
  const [services, setServices] = useState<ServiceCardData[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");
  const [selectedFileName, setSelectedFileName] = useState<string>("");
  const [base64Image, setBase64Image] = useState<string | null>(null);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const servicesSection = await getServicesSection();
        setServices(servicesSection?.cards ?? []);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };

    void fetchServices();
  }, []);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Check file size (limit to 5MB)
      const maxSize = 5 * 1024 * 1024;
      if (file.size > maxSize) {
        setSubmitStatus("error");
        return;
      }

      setSelectedFileName(file.name);

      const reader = new FileReader();
      reader.onload = (event) => {
        // Store the base64 string in state
        const base64String = event.target?.result as string;
        setBase64Image(base64String);
      };
      reader.onerror = () => {
        console.error("Error reading file");
        setSubmitStatus("error");
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("");

    const formData = new FormData(e.currentTarget);

    // Collect all form fields including base64 image from state
    const data = {
      name: formData.get("name"),
      address: formData.get("address"),
      phone: formData.get("phone"),
      email: formData.get("email"),
      service: formData.get("service"),
      image: base64Image, // Use base64 image from state
    };

    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitStatus("success");
        // Reset form using ref
        if (formRef.current) {
          formRef.current.reset();
        }
        setSelectedFileName("");
        setBase64Image(null);
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass = `border border-gray-300 rounded-md ${sizing.input} text-base placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#4C80C2]`;

  return (
    <div
      className={`bg-white rounded-xl shadow-2xl w-full text-gray-900 ${sizing.card}`}
    >
      <h2 className={`font-bold ${sizing.title}`}>Bestil et gratis tilbud</h2>

      <form
        ref={formRef}
        className={`flex flex-col ${sizing.gap}`}
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          name="name"
          placeholder="Navn"
          required
          className={inputClass}
        />

        <input
          type="text"
          name="address"
          placeholder="Adresse"
          required
          className={inputClass}
        />

        <input
          type="tel"
          name="phone"
          placeholder="Telefon"
          required
          className={inputClass}
        />

        <input
          type="email"
          name="email"
          placeholder="E-mail"
          required
          className={inputClass}
        />

        <div className="relative">
          <select
            name="service"
            defaultValue=""
            required
            className={`w-full appearance-none ${inputClass} pr-10 text-gray-500`}
          >
            <option value="" disabled>
              Vælg ydelse
            </option>
            {services.map((card) => (
              <option key={card._key} value={card.title}>
                {card.title}
              </option>
            ))}
          </select>

          <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
        </div>

        <label className="border border-dashed border-gray-300 rounded-md px-4 py-6 text-center text-sm text-gray-500 cursor-pointer hover:border-[#4C80C2] transition">
          <input
            type="file"
            name="image"
            accept="image/*"
            className="hidden"
            onChange={handleFileChange}
          />
          <span className="block font-medium">Upload billede</span>
          <span className="block text-xs text-gray-400">
            {selectedFileName
              ? `✓ ${selectedFileName}`
              : "Træk fil hertil (max 5MB)"}
          </span>
        </label>

        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-[#4C80C2] hover:bg-blue-600 text-white font-semibold rounded-md px-4 py-3 mt-1 transition disabled:opacity-50"
        >
          {isSubmitting ? "Sender..." : "Send ansøgning"}
        </button>

        {submitStatus === "success" && (
          <p className="text-green-600 text-sm">
            Takk! Vi modtog din ansøgning.
          </p>
        )}
        {submitStatus === "error" && (
          <p className="text-red-600 text-sm">
            Fejl ved indsendelse. Prøv igen.
          </p>
        )}
      </form>
    </div>
  );
}
