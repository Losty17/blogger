<script setup lang="ts">

const { type, placeholder, value, onChange } = defineProps<{
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (event: Event) => void;
}>()

</script>

<template>
  <div class="underline-input">
    <input
      :type="type || 'text'"
      :placeholder="placeholder"
      :value="value"
      @input="onChange"
    />
    <slot class="slot" />
  </div>
</template>


<style scoped>
.slot {
  height: fit-content;
}
.underline-input {
  display: flex;
  place-items: center;
  gap: 16px;
  width: 100%;
  height: 40px;
  border-bottom: 1px solid #000;
  padding: 4px 0;
  margin: 0 auto;
}
.underline-input > input {
  height: 100%;
  border: none;
  outline: none;
  font-size: 1.2rem;
  font-weight: 500;
  flex-grow: 1;
}
</style>