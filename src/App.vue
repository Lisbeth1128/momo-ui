<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { ref, provide } from "vue";
import { router } from "./router"

const width = document.documentElement.clientWidth
const menuVisible = ref(width <= 500 ? false : true);
provide("menuVisible", menuVisible);

router.afterEach(() => {
  if (width <= 500) {
    menuVisible.value = false
  }
})

</script>

<template>
  <router-view />
</template>
