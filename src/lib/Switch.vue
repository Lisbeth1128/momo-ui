<template>
  <button class="momo-switch" @click="toggle" :class="{ 'momo-checked': value }">
    <span></span>
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Switch",
  props: {
    value: Boolean,
  },
  setup(props, context) {
    const toggle = () => {
      context.emit("update:value", !props.value);
    };
    return { toggle };
  },
});
</script>

<style lang="scss">
$h: 22px;
$h2: $h - 4px;
.momo-switch {
  height: $h;
  width: $h * 2;
  border: none;
  background-color: #bfbfbf;
  border-radius: calc($h / 2);
  position: relative;
  > span {
    position: absolute;
    top: 2px;
    left: 2px;
    height: $h2;
    width: $h2;
    background-color: white;
    border-radius: calc($h2 / 2);
    transition: all 250ms;
  }
  &.momo-checked {
    background-color: #1890ff;
    > span {
      left: calc(100% - #{$h2} - 2px);
    }
  }
  &:focus {
    outline: none;
  }
  &:active {
    > span {
      width: $h2 + 4px;
    }
  }
  &.momo-checked:active {
    > span {
      width: $h2 + 4px;
      margin-left: -4px;
    }
  }
}
</style>
