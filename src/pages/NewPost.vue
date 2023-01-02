<script setup lang="ts">
import _ from "lodash";
import { marked } from "marked";
import { onMounted, computed, reactive } from "vue";
import { editor as Monaco, IKeyboardEvent } from "monaco-editor";
import { PostRenderer } from "../components";

const input = reactive({
  title: "",
  text: "",
});

const compiledMarkdown = computed(() => marked(input.text));

onMounted(() => {
  const preview = document.getElementById("post-preview") as HTMLDivElement;
  const editor = Monaco.create(
    document.getElementById("code-editor") as HTMLDivElement,
    {
      value: input.text,
      language: "markdown",
      minimap: {
        enabled: false,
      },
      wordWrap: "on",
      lineNumbers: "off",
      scrollbar: {
        // vertical: "hidden",
        horizontal: "hidden",
        verticalScrollbarSize: 0,
        useShadows: false,
      },
    }
  );

  editor.onKeyDown(
    _.debounce((e: IKeyboardEvent) => {
      editor.getModel()?.getLineCount() ===
        editor.getSelection()?.getEndPosition().lineNumber &&
        preview.scrollTo(0, preview.scrollHeight);

      input.text = editor.getValue();
    }, 25)
  );

  fetch("/api/posts/1", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((res) => {
      editor.setValue(res.content);
      input.text = res.content;
    });
});
</script>

<template>
  <div class="post-editor-container">
    <div class="flex items-center border-b border-teal-500 py-2">
      <input
        class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
        type="text"
        placeholder="Post Title"
      />
      <button
        class="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
        type="button"
      >
        Publish
      </button>
    </div>
    <div class="post-editor-content">
      <div id="code-editor"></div>
      <PostRenderer
        title="Post Title"
        :markdown="compiledMarkdown"
        author="John Doe"
        date="2023-01-01"
        id="post-preview"
      />
    </div>
  </div>
</template>

<style scoped>
.post-editor-container {
  display: flex;
  flex-direction: column;
  height: 100vh;
}
.post-editor-content {
  display: flex;
  overflow: auto;
  height: 100%;
}
#code-editor {
  width: 50%;
  height: 100%;
}
#post-preview {
  padding: 0 16px;
  max-width: 50%;
  width: 50%;
  word-break: break-all;
  overflow: auto;
}
#post-preview::-webkit-scrollbar {
  width: 0px;
}
</style>
