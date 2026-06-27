import { defineArrayMember, defineField, defineType } from "sanity";

export const aboutPage = defineType({
  name: "aboutPage",
  title: "About Page",
  type: "document",
  fields: [
    defineField({
      name: "heroEyebrow",
      title: "Hero Eyebrow Label",
      description: "Small label above the title, e.g. \"OM OS\".",
      type: "string",
    }),
    defineField({ name: "heroTitle", title: "Hero Title", type: "string" }),
    defineField({
      name: "heroDescription",
      title: "Hero Description",
      type: "text",
    }),
    defineField({
      name: "heroImage",
      title: "Hero Image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "heroButton",
      title: "Hero Button",
      type: "object",
      fields: [
        defineField({ name: "text", title: "Button Text", type: "string" }),
        defineField({ name: "link", title: "Link", type: "string" }),
      ],
    }),
    defineField({
      name: "timelineTitle",
      title: "Timeline Section Title",
      type: "string",
    }),
    defineField({
      name: "timelineDescription",
      title: "Timeline Section Description",
      type: "text",
    }),
    defineField({
      name: "milestones",
      title: "Milestones",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          name: "milestone",
          title: "Milestone",
          fields: [
            defineField({ name: "year", title: "Year", type: "string" }),
            defineField({ name: "title", title: "Title", type: "string" }),
            defineField({
              name: "description",
              title: "Description",
              type: "text",
            }),
          ],
          preview: {
            select: { title: "title", subtitle: "year" },
          },
        }),
      ],
    }),
    defineField({
      name: "valuesTitle",
      title: "Values Section Title",
      type: "string",
    }),
    defineField({
      name: "valuesDescription",
      title: "Values Section Description",
      type: "text",
    }),
    defineField({
      name: "values",
      title: "Values",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          name: "valueItem",
          title: "Value",
          fields: [
            defineField({
              name: "iconName",
              title: "Icon",
              type: "string",
              options: {
                list: [
                  { title: "Award (quality)", value: "quality" },
                  { title: "Shield Check (trust)", value: "trust" },
                  { title: "Clock (experience)", value: "experience" },
                  { title: "Heart (care)", value: "care" },
                ],
              },
              initialValue: "quality",
            }),
            defineField({ name: "title", title: "Title", type: "string" }),
            defineField({
              name: "description",
              title: "Description",
              type: "text",
            }),
          ],
          preview: {
            select: { title: "title", subtitle: "description" },
          },
        }),
      ],
    }),
    defineField({
      name: "teamTitle",
      title: "Team Section Title",
      type: "string",
    }),
    defineField({
      name: "teamDescription",
      title: "Team Section Description",
      type: "text",
    }),
    defineField({
      name: "members",
      title: "Team Members",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          name: "teamMember",
          title: "Team Member",
          fields: [
            defineField({
              name: "photo",
              title: "Photo",
              type: "image",
              options: { hotspot: true },
            }),
            defineField({ name: "name", title: "Name", type: "string" }),
            defineField({ name: "role", title: "Role", type: "string" }),
          ],
          preview: {
            select: { title: "name", subtitle: "role" },
          },
        }),
      ],
    }),
    defineField({ name: "ctaHeading", title: "CTA Heading", type: "string" }),
    defineField({
      name: "ctaDescription",
      title: "CTA Description",
      type: "text",
    }),
    defineField({
      name: "ctaButton",
      title: "CTA Button",
      type: "object",
      fields: [
        defineField({ name: "text", title: "Button Text", type: "string" }),
        defineField({ name: "link", title: "Link", type: "string" }),
      ],
    }),
  ],
  preview: {
    select: { title: "heroTitle" },
  },
});
