import { defineField, defineType } from "sanity";

export const aboutHero = defineType({
  name: "aboutHero",
  title: "About Hero",
  type: "document",
  fields: [
    defineField({
      name: "eyebrow",
      title: "Eyebrow Label",
      description: "Small label above the title, e.g. \"OM OS\".",
      type: "string",
    }),
    defineField({ name: "title", title: "Title", type: "string" }),
    defineField({ name: "description", title: "Description", type: "text" }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "primaryButton",
      title: "Primary Button",
      type: "object",
      fields: [
        defineField({ name: "text", title: "Button Text", type: "string" }),
        defineField({ name: "link", title: "Link", type: "string" }),
      ],
    }),
  ],
  preview: {
    select: { title: "title" },
  },
});
