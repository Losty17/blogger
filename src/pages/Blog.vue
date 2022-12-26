<script setup lang="ts">
import Post from "../types/Post";
import { TheCard } from "flowbite-vue";
import { useRouter } from "vue-router";
import { useNavigate } from "../utils";
const router = useRouter();
const navigate = useNavigate(router);

const posts: Post[] = [
  {
    id: 1,
    title: "Post 1",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    cover: "https://picsum.photos/720/480?random=1",
  },
  {
    id: 2,
    title: "Post 2",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    cover: "https://picsum.photos/720/480?random=2",
  },
  {
    id: 3,
    title: "Post 3",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    cover: "https://picsum.photos/720/480?random=3",
  },
  {
    id: 4,
    title: "Post 4",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    cover: "https://picsum.photos/720/480?random=4",
  },
  {
    id: 5,
    title: "Post 5",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    cover: "https://picsum.photos/720/480?random=5",
  },
  {
    id: 6,
    title: "Post 6",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    cover: "https://picsum.photos/720/480?random=6",
  },
];
</script>

<template>
  <div class="flex gap-8 flex-wrap text-black">
    <TheCard
      variant="image"
      v-for="post in posts"
      :key="post.id"
      :img-src="post.cover"
      class="border-none text-left text-ellipsis"
      href="#"
      @click="(e) => navigate(e, 'posts/' + post.id)"
    >
      <h5
        class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
      >
        {{ post.title }}
      </h5>
      <p class="font-normal text-gray-700 dark:text-gray-400">
        {{ post.content }}
      </p>
    </TheCard>
  </div>
</template>

<style scoped></style>
