// @ts-check
import { defineConfig } from "astro/config";
import sveltia from "astro-loader-sveltia-cms";

export default defineConfig({
  integrations: [
    sveltia({
      config: {
        backend: {
          name: "github",
          repo: "my-org/my-site",
          branch: "main",
        },
        media_folder: "public/images",
        collections: [
          {
            name: "posts",
            folder: "src/content/posts",
            fields: [
              { name: "title", widget: "string" },
              { name: "date", widget: "datetime" },
              { name: "draft", widget: "boolean", required: false },
              { name: "body", widget: "markdown" },
            ],
          },
        ],
      },
    }),
  ],
});