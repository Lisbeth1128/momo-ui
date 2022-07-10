<template>
  <router-view />
</template>

<script lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { ref, provide } from 'vue';

export default {
  name: 'App',
  setup() {
    const menuVisible = ref(false)
    provide('menuVisible', menuVisible)
  }
}
</script>