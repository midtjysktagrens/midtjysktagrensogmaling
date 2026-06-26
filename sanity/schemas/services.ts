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
              name: "slug",
              title: "Slug",
              type: "slug",
              description:
                "Click \"Generate\" - don't type this by hand. Used for the service's own page at /ydelser/[slug]; the card's button links there automatically when set.",
              options: {
                source: "title",
                slugify: (input: string) =>
                  input
                    .toLowerCase()
                    .replace(/&/g, "og")
                    .replace(/[^a-z0-9]+/g, "-")
                    .replace(/^-+|-+$/g, ""),
              },
              validation: (Rule) =>
                Rule.custom((value) => {
                  if (!value?.current) return true;
                  return /^[a-z0-9]+(-[a-z0-9]+)*$/.test(value.current)
                    ? true
                    : "Use only lowercase letters, numbers, and hyphens - click \"Generate\" instead of typing this.";
                }),
            }),
            defineField({
              name: "description",
              title: "Description",
              type: "text",
            }),
            defineField({
              name: "heroImage",
              title: "Page Background Image",
              description: "Used as the background on the service's own page.",
              type: "image",
              options: { hotspot: true },
            }),
            defineField({
              name: "heroMobileImage",
              title: "Page Background Image (Mobile)",
              description:
                "Optional. Shown on mobile instead of the background image above. If left empty, the background image above is used on mobile too.",
              type: "image",
              options: { hotspot: true },
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
            defineField({
              name: "benefitsTitle",
              title: "Benefits Title",
              description: "Title for the benefits section on the service's own page.",
              type: "string",
            }),
            defineField({
              name: "benefitsDescription",
              title: "Benefits Description",
              type: "text",
            }),
            defineField({
              name: "benefitsChecklist",
              title: "Benefits Checklist",
              type: "array",
              of: [
                defineArrayMember({
                  type: "object",
                  fields: [
                    defineField({
                      name: "title",
                      title: "Item Title",
                      type: "string",
                    }),
                  ],
                  preview: {
                    select: { title: "title" },
                  },
                }),
              ],
            }),
            defineField({
              name: "benefitsPrimaryButton",
              title: "Benefits Primary Button",
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
            defineField({
              name: "benefitsSecondaryButton",
              title: "Benefits Secondary Button",
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
            defineField({
              name: "comparisonTitle",
              title: "Before & After Title",
              description:
                "Title for the before/after comparison section on the service's own page.",
              type: "string",
            }),
            defineField({
              name: "comparisonBeforeImage",
              title: "Before Image",
              type: "image",
              options: { hotspot: true },
            }),
            defineField({
              name: "comparisonAfterImage",
              title: "After Image",
              type: "image",
              options: { hotspot: true },
            }),
            defineField({
              name: "comparisonChecklist",
              title: "Before & After Checklist",
              type: "array",
              of: [
                defineArrayMember({
                  type: "object",
                  fields: [
                    defineField({
                      name: "title",
                      title: "Item Title",
                      type: "string",
                    }),
                  ],
                  preview: {
                    select: { title: "title" },
                  },
                }),
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
