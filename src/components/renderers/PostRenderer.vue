<script setup lang="ts">
import Prism from "prismjs";
import Post from "../../types/post";
import { onUpdated } from "vue";
import { marked } from "marked";

defineProps<{
  post: Post;
}>();

onUpdated(() => Prism.highlightAll());
</script>

<template>
  <div class="unreset post">
    <span class="post-info" v-if="post.title">
      <h1>{{ post.title }}</h1>
      <p>
        {{ post.author }}
        <br />
        {{
          post.updatedAt &&
          new Date(post.updatedAt).toLocaleDateString("pt-BR", {
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "numeric",
            minute: "numeric",
          })
        }}
      </p>
    </span>
    <hr v-if="post.title" />
    <content v-html="marked(post.content)"></content>
  </div>
</template>

<style scoped lang="scss">
.post-info {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  place-items: flex-end;
  margin-top: 8px;

  p {
    text-align: right;
    line-height: 16px;
    font-size: 14px;
  }
}
.post :deep() {
  * {
    font-weight: 500;
  }

  table {
    margin: 0;
    border-spacing: 0;
    border-collapse: collapse;
  }

  th,
  td {
    margin: 0;
    padding: 8px;
    border-spacing: 0;
    border: 1px solid black;
    text-align: center;
    min-width: 100px;
  }

  th {
    font-weight: 600;
    background-color: #e3e3e3;
  }
  td {
    background-color: #f3f3f3;
  }

  hr {
    margin: 0;
    border: none;
    border-top: 1px solid black;
  }

  figure {
    margin: 0;
  }

  figcaption {
    margin-top: 4px;
    font-size: 0.8rem;
    color: #666;
    text-align: center;
  }

  img {
    width: 100%;
  }
}
</style>
