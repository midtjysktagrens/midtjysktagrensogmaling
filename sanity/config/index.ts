"use client";

import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { schemaTypes } from "../schemas";

export default defineConfig({
  name: "default",
  title: "Midtjysk Tagrens & Maling",

  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "",

  basePath: "/studio",

  plugins: [deskTool()],

  schema: {
    types: schemaTypes,
  },
});
