import { defineField, defineType } from "sanity";

export const aboutCta = defineType({
  name: "aboutCta",
  title: "About CTA",
  type: "document",
  fields: [
    defineField({ name: "heading", title: "Heading", type: "string" }),
    defineField({ name: "description", title: "Description", type: "text" }),
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
    select: { title: "heading" },
  },
});
