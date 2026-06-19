import { defineArrayMember, defineField, defineType } from "sanity";

export const beforeAfterSection = defineType({
  name: "beforeAfterSection",
  title: "Before & After Section",
  type: "document",
  fields: [
    defineField({
      name: "sectionTitle",
      title: "Section Title",
      type: "string",
    }),
    defineField({
      name: "items",
      title: "Before & After Items",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          name: "beforeAfterItem",
          title: "Before & After Item",
          fields: [
            defineField({ name: "label", title: "Label", type: "string" }),
            defineField({
              name: "beforeImage",
              title: "Before Image",
              type: "image",
              options: { hotspot: true },
            }),
            defineField({
              name: "afterImage",
              title: "After Image",
              type: "image",
              options: { hotspot: true },
            }),
          ],
          preview: {
            select: { title: "label" },
          },
        }),
      ],
    }),
    defineField({
      name: "button",
      title: "Button",
      type: "object",
      fields: [
        defineField({ name: "text", title: "Button Text", type: "string" }),
        defineField({ name: "link", title: "Link", type: "string" }),
      ],
    }),
  ],
  preview: {
    select: { title: "sectionTitle" },
  },
});
