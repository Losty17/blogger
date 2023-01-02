<script setup lang="ts">
import { marked } from "marked";
import { onMounted, reactive } from "vue";
import { useRoute } from "vue-router";
import { PostRenderer } from "../components";
const route = useRoute();
const post = reactive({
  title: "",
  content: "",
  author: "",
  date: "",
});

const widgets = [
  {
    title: "Recent Posts",
    content: [
      {
        title: "Post 1",
      },
      {
        title: "Post 2",
      },
      {
        title: "Post 3",
      },
    ],
  },
  {
    title: "Categories",
    content: [
      {
        title: "Category 1",
      },
      {
        title: "Category 2",
      },
      {
        title: "Category 3",
      },
    ],
  },
  {
    title: "Tags",
    content: [
      {
        title: "Tag 1",
      },
      {
        title: "Tag 2",
      },
      {
        title: "Tag 3",
      },
    ],
  },
];

onMounted(() => {
  fetch(`/api/posts/${route.params.id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((res) => {
      post.content = marked(res.content);
      post.title = res.title;
      post.author = res.author;
      post.date = res.date;
    });
});
</script>

<template>
  <div class="content">
    <PostRenderer
      class="post-content"
      :markdown="post.content"
      :title="post.title"
      :author="post.author"
      :date="post.date"
    />
    <div class="side-panel">
      <div v-for="widget of widgets" :key="widget.title" class="widget">
        {{ widget.title }}
        <div v-for="item of widget.content" :key="item.title">
          {{ item.title }}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.content {
  display: flex;
  width: 100%;
  height: auto;
  box-sizing: border-box;
  gap: 32px;
}
.post-content {
  width: 75%;
}
.side-panel {
  width: 25%;
  height: auto;
}
.widget {
  padding: 16px;
  background-color: #ffffff;
  border-radius: 8px;
  margin-bottom: 16px;
  filter: drop-shadow(0 0 5px rgba(0, 0, 0, 0.2));
}
.widget > div {
  font-size: 14px;
  line-height: 18px;
  margin-left: 16px;
}
</style>
