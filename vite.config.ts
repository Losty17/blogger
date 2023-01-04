import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import monacoEditorPlugin from "vite-plugin-monaco-editor";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => ["content"].includes(tag),
        },
      },
    }),
    // @ts-ignore
    monacoEditorPlugin.default({
      languageWorkers: ["css", "typescript"],
      customWorkers: [
        {
          label: "markdown",
          entry: "monaco-editor/esm/vs/editor/editor.worker.js",
        },
      ],
    }),
  ],
});
