<template>
  <Navbar class="bg-[#242424]" id="navbar">
    <!-- LEFT SIDE -->
    <template #logo="{ isShowMenu }">
      <div class="flex justify-start gap-4">
        <NavbarLogo
          link="/"
          alt="kappke.tech logo"
          image-url="https://flowbite.com/docs/images/logo.svg"
          class="font-mono text-white hover:text-purple-400"
          @click="(e) => navigate(e, '/')"
        >
          kappke<span class="text-xs">.tech</span>
        </NavbarLogo>
        <NavbarCollapse :is-show-menu="isShowMenu">
          <RouterLink
            v-for="page in pages"
            :key="page.name"
            :to="page.path"
            class="text-white hover:text-purple-400"
          >
            {{ page.name }}
          </RouterLink>
        </NavbarCollapse>
      </div>
    </template>
    <!-- RIGHT SIDE -->
    <template #right-side>
      <button
        type="button"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        @click="navigate($event, '/posts/new')"
      >
        Get started
      </button>
    </template>
    <!-- MENU DROPDOWN MOBILE -->
    <template #default="{ isShowMenu }">
      <NavbarCollapse
        :is-show-menu="isShowMenu"
        :id="!isShowMenu ? 'collapsed-menu' : ''"
      >
        <NavbarLink
          v-for="page in pages"
          :key="page.name"
          @click="(e) => navigate(e, page.path)"
        >
          {{ page.name }}
        </NavbarLink>
      </NavbarCollapse>
    </template>
  </Navbar>
</template>

<script setup lang="ts">
import {
  Navbar,
  NavbarLogo,
  Avatar,
  NavbarLink,
  NavbarCollapse,
} from "flowbite-vue";
import { ref, onMounted } from "vue";
import { useNavigate } from "../../utils";
import { useRouter } from "vue-router";
const router = useRouter();
const navigate = useNavigate(router);

const pages = ref([
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Blog",
    path: "/blog",
  },
  {
    name: "About Us",
    path: "/about",
  },
  {
    name: "Get in touch!",
    path: "/contact",
  },
]);

onMounted(() => {
  console.log(router.currentRoute.value.path);
});
</script>

<style scoped>
#collapsed-menu {
  display: none !important;
}
</style>
