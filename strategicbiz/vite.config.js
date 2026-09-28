import { defineConfig } from "vite";
import { resolve } from "path";

// One HTML entry per course page, plus the homepage.
// Keep this list in sync with the slugs in data.js if you add/remove a course.
const courseSlugs = [
  "ai-content-monetization",
  "ai-chatbot-engineering",
  "ai-virtual-assistance",
  "ai-software-development",
  "ai-logistics",
  "ai-customer-service",
  "ai-ui-ux",
  "ai-cybersecurity",
  "ai-business-automation",
  "ai-data-analytics",
  "ai-business-intelligence",
];

const courseInputs = Object.fromEntries(
  courseSlugs.map((slug) => [
    `courses/${slug}`,
    resolve(__dirname, `courses/${slug}.html`),
  ])
);

export default defineConfig({
  root: __dirname,
  build: {
    outDir: "dist",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        ...courseInputs,
      },
    },
  },
});
