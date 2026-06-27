import { defineArrayMember, defineField, defineType } from "sanity";

export const casesPage = defineType({
  name: "casesPage",
  title: "Cases Page",
  type: "document",
  fields: [
    defineField({ name: "heroTitle", title: "Hero Title", type: "string" }),
    defineField({
      name: "heroDescription",
      title: "Hero Description",
      type: "text",
    }),
    defineField({
      name: "heroImageLeft",
      title: "Hero Background Image (Left Half)",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "heroImageRight",
      title: "Hero Background Image (Right Half)",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "serviceCaseSections",
      title: "Service Case Sections",
      description:
        "One section per service. Each renders the same way as the Cases section on the homepage.",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          name: "serviceCaseSection",
          title: "Service Case Section",
          fields: [
            defineField({
              name: "serviceTitle",
              title: "Service Title",
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
                    defineField({
                      name: "title",
                      title: "Title",
                      type: "string",
                    }),
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
            select: { title: "serviceTitle" },
          },
        }),
      ],
    }),
  ],
  preview: {
    select: { title: "heroTitle" },
  },
});
