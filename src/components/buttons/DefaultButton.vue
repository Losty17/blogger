<script setup lang="ts">
import {computed} from 'vue'

const props = defineProps<{
  onClick?: (event: MouseEvent) => void;
  width?: string;
  height?: string;
  backgroundColor?: string;
  color?: string;
  fontSize?: string;
}>()

const style = computed(() => {
  return {
    width: props.width,
    height: props.height,
    backgroundColor: props.backgroundColor,
    color: props.color,
    fontSize: props.fontSize,
  };
});

</script>

<template>
  <button class="default-button" @click="onClick" :style="style">
    <slot />
  </button>
</template>


<style scoped>
.default-button {
  width: 96px;
  height: 36px;
  border: none;
  border-radius: 6px;
  background-color: #000;
  color: #fff;
  font-size: .8rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>