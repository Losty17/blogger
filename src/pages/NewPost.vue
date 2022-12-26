<script setup lang="ts">
import _ from "lodash";
import { marked } from "marked";
import { computed, reactive } from "vue";

const input = reactive({ text: "# hello" });

const compiledMarkdown = computed(() => marked(input.text));
const update = _.debounce((e: Event) => {
  input.text = (e.target as HTMLInputElement).value;
}, 300);
</script>

<template>
  <div class="post-editor">
    <textarea :value="input.text" @input="update" class="text-black"></textarea>
    <div v-html="compiledMarkdown"></div>
  </div>
</template>

<style scoped>
.post-editor {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
  height: 100%;
}
</style>
