import { defineArrayMember, defineField, defineType } from "sanity";

export const navbar = defineType({
  name: "navbar",
  title: "Navbar",
  type: "document",
  fields: [
    defineField({
      name: "siteName",
      title: "Site Name",
      type: "string",
      description: "Shown next to the logo image",
    }),
    defineField({
      name: "logo",
      title: "Logo",
      type: "image",
      options: { hotspot: true },
      fields: [
        defineField({ name: "alt", title: "Alt Text", type: "string" }),
      ],
    }),
    defineField({
      name: "navItems",
      title: "Navigation Items",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          name: "navItem",
          title: "Nav Item",
          fields: [
            defineField({ name: "label", title: "Label", type: "string" }),
            defineField({ name: "link", title: "Link", type: "string" }),
            defineField({
              name: "dropdownItems",
              title: "Dropdown Items",
              description:
                "Optional. Add items here to show a dropdown under this nav item on hover.",
              type: "array",
              of: [
                defineArrayMember({
                  type: "object",
                  name: "dropdownItem",
                  fields: [
                    defineField({
                      name: "label",
                      title: "Label",
                      type: "string",
                    }),
                    defineField({
                      name: "link",
                      title: "Link",
                      type: "string",
                    }),
                  ],
                  preview: {
                    select: { title: "label" },
                  },
                }),
              ],
            }),
          ],
          preview: {
            select: { title: "label" },
          },
        }),
      ],
    }),
    defineField({
      name: "phoneNumber",
      title: "Phone Number (displayed)",
      type: "string",
    }),
    defineField({
      name: "phoneLink",
      title: "Phone Link",
      type: "string",
      description: "e.g. tel:+4530869692",
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
    select: { title: "siteName" },
  },
});
