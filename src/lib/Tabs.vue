<template>
  <div class="momo-tabs">
    <div class="momo-tabs-nav" ref="container">
      <div
        class="momo-tabs-nav-item"
        v-for="(t, index) in titles"
        :ref="
          (el) => {
            if (t === selected) selectedItem = el;
          }
        "
        @click="select(t)"
        :class="{ selected: t === selected }"
        :key="index"
      >
        {{ t }}
      </div>
      <div class="momo-tabs-nav-indicator" ref="indicator"></div>
    </div>
    <div class="momo-tabs-content">
      <component
        class="momo-tabs-content-item"
        :class="{ selected: c.props.title === selected }"
        v-for="c in defaults"
        :is="c"
        :key="c.props.title"
      ></component>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Tab from "./Tab.vue";
import { computed, ref, watchEffect } from "vue";

export default defineComponent({
  props: {
    selected: {
      type: String,
    },
  },
  setup(props, context) {
    const selectedItem = ref<HTMLDivElement>(null);
    const indicator = ref<HTMLDivElement>(null);
    const container = ref<HTMLDivElement>(null);
    watchEffect(() => {
      if(selectedItem.value === null) {return}
      const { width } = selectedItem.value.getBoundingClientRect();
      if(indicator.value === null) {return}
      indicator.value.style.width = width + "px";
      const { left: left1 } = container.value.getBoundingClientRect();
      const { left: left2 } = selectedItem.value.getBoundingClientRect();
      const left = left2 - left1;
      indicator.value.style.left = left + "px";
    });

    const slots = context.slots;

    const defaults = slots.default === undefined ? [] : slots.default();

    defaults.forEach((tag) => {
      if (tag.type !== Tab) {
        throw new Error("Tabs 子标签必须是 Tab");
      }
    });
    const current = computed(() => {
      return defaults.filter((tag) => {
        if (tag.props === null) {
          return;
        }
        return tag.props.title === props.selected;
      })[0];
    });
    const titles = defaults.map((tag) => {
      if (tag.props === null) {
        return;
      }
      return tag.props.title;
    });
    const select = (title: string) => {
      context.emit("update:selected", title);
    };
    return {
      defaults,
      titles,
      current,
      select,
      selectedItem,
      indicator,
      container,
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
    position: relative;
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
    &-indicator {
      position: absolute;
      height: 3px;
      background-color: $blue;
      left: 0;
      bottom: -1px;
      width: 100%;
      transition: all 250ms;
    }
  }
  &-content {
    padding: 8px 0;
    &-item {
      display: none;
      &.selected {
        display: block;
      }
    }
  }
}
</style>
