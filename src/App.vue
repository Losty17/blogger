<script setup lang="ts">
import { ref } from "vue";
import Navbar from "./components/containers/Navbar.vue";
const viewName = ref("default");
</script>

<template>
  <RouterView :name="viewName" v-slot="{ Component, route }">
    <!-- <Navbar class="navbar" /> -->
    <div class="navbar"></div>
    <component
      :is="Component"
      :key="route.name === 'repeat' ? route.path : route.meta.key"
      class="component"
    />
  </RouterView>
</template>

<style>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  background: #242424;
  height: 64px;
}
.component {
  margin-top: 80px;
}
</style>
