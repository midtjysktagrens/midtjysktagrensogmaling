import { defineArrayMember, defineField, defineType } from "sanity";

export const servicesSection = defineType({
  name: "servicesSection",
  title: "Services Section",
  type: "document",
  fields: [
    defineField({
      name: "sectionTitle",
      title: "Section Title",
      type: "string",
    }),
    defineField({
      name: "cards",
      title: "Service Cards",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          name: "serviceCard",
          title: "Service Card",
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
              description:
                "Used when no custom icon is uploaded above.",
              options: {
                list: [
                  { title: "Roof cleaning & painting", value: "paintRoller" },
                  { title: "Tile cleaning & impregnation", value: "tiles" },
                  { title: "Pin (location)", value: "pin" },
                  { title: "Roof replacement", value: "hammer" },
                  { title: "Facade renovation", value: "fileSignature" },
                ],
              },
              initialValue: "pin",
            }),
            defineField({ name: "title", title: "Title", type: "string" }),
            defineField({
              name: "description",
              title: "Description",
              type: "text",
            }),
            defineField({
              name: "button",
              title: "Button",
              type: "object",
              fields: [
                defineField({
                  name: "text",
                  title: "Button Text",
                  type: "string",
                }),
                defineField({ name: "link", title: "Link", type: "string" }),
              ],
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
