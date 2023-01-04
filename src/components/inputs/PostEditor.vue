<script setup lang="ts">
import { debounce } from "lodash";
import { editor as Monaco, IKeyboardEvent } from "monaco-editor";
import { onMounted, watch } from "vue";
import Post from "../../types/post";

const { post } = defineProps<{
  post: Post;
}>();

onMounted(() => {
  const editor = Monaco.create(
    document.getElementById("code-editor") as HTMLDivElement,
    {
      value: post.content,
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
    debounce((e: IKeyboardEvent) => {
      const preview = document.getElementById("post-preview") as HTMLDivElement;

      editor.getModel()?.getLineCount() ===
        editor.getSelection()?.getEndPosition().lineNumber &&
        preview.scrollTo(0, preview.scrollHeight);

      post.content = editor.getValue();
    }, 25)
  );
});

watch(post, (post) => Monaco.getModels()[0]?.setValue(post.content));
</script>

<template>
  <div id="code-editor"></div>
</template>

<style scoped></style>
