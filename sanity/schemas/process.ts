import { defineArrayMember, defineField, defineType } from "sanity";

export const processSection = defineType({
  name: "processSection",
  title: "Process Section",
  type: "document",
  fields: [
    defineField({
      name: "sectionTitle",
      title: "Section Title",
      type: "string",
    }),
    defineField({
      name: "steps",
      title: "Process Steps",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          name: "processStep",
          title: "Process Step",
          fields: [
            defineField({
              name: "icon",
              title: "Custom Icon (SVG)",
              type: "image",
              options: { accept: "image/svg+xml" },
              description:
                "Optional. Upload your own SVG icon. Takes priority over the preset icon below.",
            }),
            defineField({
              name: "iconName",
              title: "Preset Icon",
              type: "string",
              description: "Used when no custom icon is uploaded above.",
              options: {
                list: [
                  { title: "Camera (contact/photos)", value: "camera" },
                  { title: "Check Circle (assessment)", value: "checkCircle" },
                  { title: "File Check (offer/contract)", value: "fileCheck" },
                  { title: "Calendar Check (scheduling/work)", value: "calendarCheck" },
                ],
              },
              initialValue: "camera",
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
