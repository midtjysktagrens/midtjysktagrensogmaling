import { defineArrayMember, defineField, defineType } from "sanity";

export const casesSection = defineType({
  name: "casesSection",
  title: "Cases Section",
  type: "document",
  fields: [
    defineField({
      name: "sectionTitle",
      title: "Section Title",
      type: "string",
    }),
    defineField({
      name: "cases",
      title: "Cases",
      description:
        "The first case's details are open by default. Hovering any other case opens its details instead.",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          name: "caseItem",
          title: "Case",
          fields: [
            defineField({
              name: "image",
              title: "Image",
              type: "image",
              options: { hotspot: true },
            }),
            defineField({ name: "title", title: "Title", type: "string" }),
            defineField({
              name: "category",
              title: "Category",
              type: "string",
            }),
            defineField({
              name: "facts",
              title: "Facts",
              type: "array",
              of: [defineArrayMember({ type: "string" })],
            }),
            defineField({
              name: "testimonial",
              title: "Testimonial Quote",
              type: "text",
            }),
          ],
          preview: {
            select: { title: "title", subtitle: "category" },
          },
        }),
      ],
    }),
  ],
  preview: {
    select: { title: "sectionTitle" },
  },
});
