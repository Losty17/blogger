<script setup lang="ts">
import { computed, StyleValue } from "vue";
import { createRipple } from "../../utils";

const props = defineProps<{
  onClick?: (event: MouseEvent) => void;
  width?: string;
  height?: string;
  backgroundColor?: string;
  color?: string;
  fontSize?: string;
  rippleColor?: string;
  rippleSpeed?: string;
  borderRadius?: string;
  shadow?: string;
}>();

const style = computed<StyleValue>(() => {
  return {
    width: props.width,
    height: props.height,
    backgroundColor: props.backgroundColor,
    color: props.color,
    fontSize: props.fontSize,
    borderRadius: props.borderRadius,
    boxShadow: props.shadow,
  };
});

const handleClick = (e: MouseEvent) => {
  createRipple(e, props.rippleColor, props.rippleSpeed);
  props.onClick && props.onClick(e);
};

const handleEnter = (button: HTMLButtonElement) => {
  props.backgroundColor === "transparent"
    ? (button.style.backgroundColor = "rgba(0, 0, 0, 0.1)")
    : (button.style.filter = "brightness(0.9)");
};

const handleOut = (button: HTMLButtonElement) => {
  props.backgroundColor === "transparent"
    ? (button.style.backgroundColor = "transparent")
    : (button.style.filter = "");
};
</script>

<template>
  <button
    class="default-button"
    @click="handleClick"
    @mouseenter="(e) => handleEnter(e.target as HTMLButtonElement)"
    @mouseout="(e) => handleOut(e.target as HTMLButtonElement)"
    :style="style"
  >
    <slot
      @mouseenter="(e: MouseEvent) => handleEnter(e.target as HTMLButtonElement)"
      @mouseout="(e: MouseEvent) => handleOut(e.target as HTMLButtonElement)"
    />
  </button>
</template>

<style scoped>
.default-button {
  position: relative;
  overflow: hidden;
  transition: 400ms;
  color: #fff;
  background-color: #000;
  font-size: 0.8rem;
  outline: 0;
  border: 0;
  padding: 0;
  border-radius: 0.25rem;
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.3);
  cursor: pointer;
  width: 96px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
}
.default-button:hover {
  cursor: pointer;
}
</style>
