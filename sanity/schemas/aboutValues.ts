import { defineArrayMember, defineField, defineType } from "sanity";

export const aboutValues = defineType({
  name: "aboutValues",
  title: "About Values",
  type: "document",
  fields: [
    defineField({
      name: "sectionTitle",
      title: "Section Title",
      type: "string",
    }),
    defineField({
      name: "sectionDescription",
      title: "Section Description",
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
  ],
  preview: {
    select: { title: "sectionTitle" },
  },
});
