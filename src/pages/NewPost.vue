<script setup lang="ts">
import { onBeforeMount, reactive } from "vue";
import { PostRenderer, UnderlineInput } from "../components";
import { PostEditor } from "../components";
import DefaultButton from "../components/buttons/DefaultButton.vue";
import Post from "../types/post";

const post = reactive<Post>({
  id: 1,
  title: "",
  content: "",
  author: "",
});

onBeforeMount(() => {
  fetch("/api/posts/69", {
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
    <UnderlineInput placeholder="Post Title" :value="post.title">
      <div>asdasd</div>
      <DefaultButton background-color="transparent" color="black" ripple-color="#f0f0f0" width="40px" height="40px" border-radius="100%" shadow="none">
        <img src="../assets/up-arrow-and-cloud.svg" class="icon" />
      </DefaultButton>
    </UnderlineInput>
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
.icon {
  width: 24px;
  height: 24px;
  z-index: -1;
}
</style>
