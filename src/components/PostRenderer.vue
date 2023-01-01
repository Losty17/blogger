<template>
  <div class="unreset post" v-html="markdown"></div>
</template>

<script setup lang="ts">
import Prism from "prismjs";
import { onUpdated } from "vue";

defineProps<{
  markdown: string;
}>();

onUpdated(() => {
  Prism.highlightAll();
});
</script>

<style scoped lang="scss">
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

  pre {
    @extend .prettyprint !optional;
  }
}
</style>
