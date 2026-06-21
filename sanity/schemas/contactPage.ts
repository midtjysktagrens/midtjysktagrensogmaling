import { defineArrayMember, defineField, defineType } from "sanity";

export const contactPage = defineType({
  name: "contactPage",
  title: "Contact Page",
  type: "document",
  fields: [
    defineField({ name: "heading", title: "Heading", type: "string" }),
    defineField({ name: "subheading", title: "Subheading", type: "text" }),
    defineField({
      name: "phoneNumber",
      title: "Phone Number (displayed)",
      type: "string",
    }),
    defineField({
      name: "phoneLink",
      title: "Phone Link",
      type: "string",
      description: "e.g. tel:+4530869692",
    }),
    defineField({ name: "email", title: "Email", type: "string" }),
    defineField({
      name: "address",
      title: "Address",
      description: "Also used to render the map below.",
      type: "string",
    }),
    defineField({
      name: "openingHoursTitle",
      title: "Opening Hours Title",
      type: "string",
    }),
    defineField({
      name: "openingHours",
      title: "Opening Hours",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          name: "openingHoursRow",
          fields: [
            defineField({ name: "label", title: "Days", type: "string" }),
            defineField({ name: "value", title: "Hours", type: "string" }),
          ],
          preview: {
            select: { title: "label", subtitle: "value" },
          },
        }),
      ],
    }),
  ],
  preview: {
    select: { title: "heading" },
  },
});
