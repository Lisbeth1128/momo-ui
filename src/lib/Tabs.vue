<template>
  <div v-for="(t, index) in titles" :key="index">
    {{ t }}
  </div>
  <component v-for="(c, index) in defaults" :is="c" :key="index"></component>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Tab from "./Tab.vue";

export default defineComponent({
  setup(props, context) {
    const slots = context.slots;

    const defaults = slots.default === undefined ? [] : slots.default();

    defaults.forEach((tag) => {
      if (tag.type !== Tab) {
        throw new Error("Tabs 子标签必须是 Tab");
      }
    });
    const titles = defaults.map((tag) => {
      if (tag.props === null) {
        return;
      }
      return tag.props.title;
    });
    return {
      defaults,
      titles,
    };
  },
});
</script>
