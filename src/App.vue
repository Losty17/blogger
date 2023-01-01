<script setup lang="ts">
import { ref } from "vue";
import Navbar from "./components/Navbar.vue";
const viewName = ref("default");
</script>

<template>
  <RouterView :name="viewName" v-slot="{ Component, route }">
    <Navbar class="navbar" />
    <Suspense timeout="0">
      <template #default>
        <component
          :is="Component"
          :key="route.name === 'repeat' ? route.path : route.meta.key"
          class="pt-24"
        />
      </template>
      <template #fallback> Loading... </template>
    </Suspense>
    <!-- </KeepAlive> -->
  </RouterView>
</template>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  background: #242424;
}
</style>
