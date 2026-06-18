import { defineArrayMember, defineField, defineType } from "sanity";

export const kpiSection = defineType({
  name: "kpiSection",
  title: "KPI Section",
  type: "document",
  fields: [
    defineField({
      name: "items",
      title: "KPI Items",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          name: "kpiItem",
          title: "KPI Item",
          fields: [
            defineField({ name: "title", title: "Title", type: "string" }),
            defineField({
              name: "description",
              title: "Description",
              type: "string",
            }),
            defineField({
              name: "icon",
              title: "Custom Icon (SVG)",
              type: "image",
              options: { accept: "image/svg+xml" },
              description:
                "Optional. Upload your own SVG icon. Falls back to the icon selected below when left empty.",
            }),
            defineField({
              name: "fallbackIcon",
              title: "Fallback Icon",
              type: "string",
              options: {
                list: [
                  { title: "Pin (location)", value: "pin" },
                  { title: "Shield Check", value: "shieldCheck" },
                  { title: "Award", value: "award" },
                ],
              },
              initialValue: "pin",
            }),
          ],
          preview: {
            select: { title: "title", subtitle: "description" },
          },
        }),
      ],
    }),
  ],
  preview: {
    select: { title: "items.0.title" },
  },
});
