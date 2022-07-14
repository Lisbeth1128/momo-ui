<template>
  <div class="momo-tabs">
    <div class="momo-tabs-nav">
      <div
        class="momo-tabs-nav-item"
        v-for="(t, index) in titles"
        @click="select(t)"
        :class="{ selected: t === selected }"
        :key="index"
      >
        {{ t }}
      </div>
    </div>
    <div class="momo-tabs-content">
      <component class="momo-tabs-content-item" :class="{selected: c.props.title === selected}" v-for="c in defaults" :is="c" :key="c.props.title"></component>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Tab from "./Tab.vue";
import { computed } from "vue";

export default defineComponent({
  props: {
    selected: {
      type: String
    }
  },
  setup(props, context) {
    const slots = context.slots;

    const defaults = slots.default === undefined ? [] : slots.default();

    defaults.forEach((tag) => {
      if (tag.type !== Tab) {
        throw new Error("Tabs 子标签必须是 Tab");
      }
    });
    const current = computed(() => {
      return defaults.filter((tag) => {
        if(tag.props === null) {return}
        return tag.props.title === props.selected
      })[0]
    })
    const titles = defaults.map((tag) => {
      if (tag.props === null) {
        return;
      }
      return tag.props.title;
    });
    const select = (title: string) => {
      context.emit('update:selected', title)
    }
    return {
      defaults,
      titles,
      current,
      select
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
    &-item {
      display: none;
      &.selected {
        display: block;
      }
    }
  }
}
</style>
