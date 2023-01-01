<script setup lang="ts">
import _, { endsWith } from "lodash";
import { marked } from "marked";
import { onMounted, computed, reactive } from "vue";
import PostRenderer from "../components/PostRenderer.vue";
import * as monaco from "monaco-editor";

const input = reactive({
  text: `# Lorem Ipsum
---

## Abstract
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ornare, dolor sed porta volutpat, orci ligula ultrices dolor, sed commodo metus ex at lorem. Nulla pellentesque erat vel diam dictum, nec tempor ipsum molestie. Integer ut nulla efficitur, porttitor augue at, consectetur tortor. Vivamus euismod, ex ut ornare feugiat, sapien lacus venenatis augue, ut gravida lacus felis eget erat. Vivamus hendrerit magna rhoncus tincidunt interdum. Nunc bibendum, felis ut pharetra semper, elit est luctus quam, nec semper eros quam id ante. Sed iaculis nisi mi, a ullamcorper enim convallis finibus.

<figure>
	<img src="https://picsum.photos/1920/1080.jpg">
	<figcaption style="text-align: center">Caption text</figcaption>
</figure>

Sed auctor tempus libero, in vulputate mi hendrerit a. Cras ultrices accumsan tristique. In hendrerit neque ut leo molestie, at sodales sapien hendrerit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus sodales mollis vulputate. Morbi condimentum rhoncus velit, ultrices interdum leo luctus nec. Aenean porttitor tempor tellus, eu tempor nunc aliquam ut. Quisque tortor ex, facilisis in pretium quis, varius id felis.

## Table of Contents
- Title 1
- Title 2
	- Subtitle 1
	- Subtitle 2
- Title 3
	- Subtitle 3
		- Inner subtitle 1
	- Subtitle 4
- Title 5

## Actual table
| head 1 | head 2 | head 3 | head 4 |
|--------|--------|--------|--------|
| row  1 | row  1 | row  1 | row  1 |
| row  2 | row  2 | row  2 | row  2 |
| row  3 | row  3 | row  3 | row  3 |
| row  4 | row  4 | row  4 | row  4 |

\`\`\`js
const a = 1;
const b = 2;
const c = a + b;
\`\`\``,
});

const compiledMarkdown = computed(() => marked(input.text));

onMounted(() => {
  const preview = document.getElementById("post-preview") as HTMLDivElement;
  const editor = monaco.editor.create(
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
    _.debounce((e: monaco.IKeyboardEvent) => {
      editor.getModel()?.getLineCount() ===
        editor.getSelection()?.getEndPosition().lineNumber &&
        preview.scrollTo(0, preview.scrollHeight);

      input.text = editor.getValue();
    }, 25)
  );
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
      <PostRenderer :markdown="compiledMarkdown" id="post-preview" />
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
}
#code-editor {
  width: 50%;
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
