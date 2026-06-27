import { defineField, defineType } from "sanity";

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
  ],
  preview: {
    select: { title: "heroTitle" },
  },
});
