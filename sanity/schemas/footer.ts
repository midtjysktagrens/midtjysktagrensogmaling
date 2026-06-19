import { defineArrayMember, defineField, defineType } from "sanity";

const footerLink = {
  type: "object" as const,
  name: "footerLink",
  title: "Link",
  fields: [
    defineField({ name: "label", title: "Label", type: "string" }),
    defineField({ name: "link", title: "Link", type: "string" }),
  ],
  preview: {
    select: { title: "label" },
  },
};

export const footer = defineType({
  name: "footer",
  title: "Footer",
  type: "document",
  groups: [
    { name: "cta", title: "CTA Banner" },
    { name: "footer", title: "Footer" },
  ],
  fields: [
    defineField({
      name: "ctaHeadline",
      title: "Headline",
      type: "string",
      group: "cta",
    }),
    defineField({
      name: "ctaSubheading",
      title: "Subheading",
      type: "string",
      group: "cta",
    }),
    defineField({
      name: "ctaNote",
      title: "Note",
      type: "string",
      group: "cta",
    }),
    defineField({
      name: "ctaChecklist",
      title: "Checklist",
      type: "array",
      of: [defineArrayMember({ type: "string" })],
      group: "cta",
    }),
    defineField({
      name: "ctaImage",
      title: "Image",
      type: "image",
      options: { hotspot: true },
      group: "cta",
    }),
    defineField({
      name: "ctaPrimaryButton",
      title: "Primary Button",
      type: "object",
      group: "cta",
      fields: [
        defineField({ name: "text", title: "Button Text", type: "string" }),
        defineField({ name: "link", title: "Link", type: "string" }),
      ],
    }),
    defineField({
      name: "ctaSecondaryButton",
      title: "Secondary Button",
      type: "object",
      group: "cta",
      fields: [
        defineField({ name: "text", title: "Button Text", type: "string" }),
        defineField({ name: "link", title: "Link", type: "string" }),
      ],
    }),

    defineField({
      name: "logo",
      title: "Logo",
      type: "image",
      options: { hotspot: true },
      group: "footer",
      fields: [defineField({ name: "alt", title: "Alt Text", type: "string" })],
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      group: "footer",
    }),
    defineField({
      name: "socialLinks",
      title: "Social Links",
      type: "array",
      group: "footer",
      of: [
        defineArrayMember({
          type: "object",
          name: "socialLink",
          fields: [
            defineField({
              name: "platform",
              title: "Platform",
              type: "string",
              options: {
                list: [
                  { title: "Facebook", value: "facebook" },
                  { title: "Instagram", value: "instagram" },
                ],
              },
            }),
            defineField({ name: "link", title: "Link", type: "string" }),
          ],
          preview: {
            select: { title: "platform" },
          },
        }),
      ],
    }),
    defineField({
      name: "servicesColumnTitle",
      title: "Services Column Title",
      type: "string",
      group: "footer",
    }),
    defineField({
      name: "servicesLinks",
      title: "Services Links",
      type: "array",
      group: "footer",
      of: [defineArrayMember(footerLink)],
    }),
    defineField({
      name: "shortcutsColumnTitle",
      title: "Shortcuts Column Title",
      type: "string",
      group: "footer",
    }),
    defineField({
      name: "shortcutsLinks",
      title: "Shortcuts Links",
      type: "array",
      group: "footer",
      of: [defineArrayMember(footerLink)],
    }),
    defineField({
      name: "contactColumnTitle",
      title: "Contact Column Title",
      type: "string",
      group: "footer",
    }),
    defineField({
      name: "phoneNumber",
      title: "Phone Number",
      type: "string",
      group: "footer",
    }),
    defineField({
      name: "phoneLink",
      title: "Phone Link",
      type: "string",
      group: "footer",
    }),
    defineField({ name: "email", title: "Email", type: "string", group: "footer" }),
    defineField({
      name: "address",
      title: "Address",
      type: "string",
      group: "footer",
    }),
    defineField({
      name: "copyrightText",
      title: "Copyright Text",
      type: "string",
      group: "footer",
    }),
    defineField({
      name: "legalLinks",
      title: "Legal Links",
      type: "array",
      group: "footer",
      of: [defineArrayMember(footerLink)],
    }),
  ],
  preview: {
    select: { title: "ctaHeadline" },
  },
});
