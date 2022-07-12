<template>
  <button class="momo-button" :class="{ [`theme-${theme}`]: theme }">
    <slot />
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Button",
  props: {
    theme: {
      type: String,
      default: "button",
    },
  },
});
</script>

<style lang="scss" scoped>
div {
  border: 1px solid red;
}
</style>
