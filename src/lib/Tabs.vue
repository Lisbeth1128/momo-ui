<template>
  <div class="momo-tabs">
    <div class="momo-tabs-nav">
      <div class="momo-tabs-nav-item" v-for="(t, index) in titles" :key="index">
        {{ t }}
      </div>
    </div>
    <div class="momo-tabs-content">
      <component
        class="momo-tabs-content-item"
        v-for="(c, index) in defaults"
        :is="c"
        :key="index"
      ></component>
    </div>
  </div>
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

<style lang="scss">
$blue: #40a9ff;
$color: #333;
$border-color: #d9d9d9;

.momo-tabs {
  &-nav {
    display: flex;
    color: $color;
    border-bottom: 1px solid $border-color;
    &-item {
      padding: 8px 0;
      margin: 0 16px;
      cursor: pointer;
      &:first-child {
        margin-left: 0;
      }
      &.selected {
        color: $blue;
      }
    }
  }
  &-content {
    padding: 8px 0;
  }
}
</style>
