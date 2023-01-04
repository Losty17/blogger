<script setup lang="ts">
import { onBeforeMount, reactive } from "vue";
import { PostRenderer } from "../components";
import { PostEditor } from "../components";
import Post from "../types/post";

const post = reactive<Post>({
  id: 1,
  title: "",
  content: "",
  author: "",
});

onBeforeMount(() => {
  fetch("/api/posts/1", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((res) => Object.assign(post, res));
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
      <PostEditor :post="post" />
      <PostRenderer :post="post" id="post-preview" />
    </div>
  </div>
</template>

<style scoped>
.post-editor-container {
  display: flex;
  flex-direction: column;
  height: calc(100vh - 80px);
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
