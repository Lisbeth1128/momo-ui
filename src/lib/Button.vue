<template>
  <button class="momo-button" :class="classes">
    <slot />
  </button>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";

export default defineComponent({
  name: "Button",
  props: {
    theme: {
      type: String,
      default: "button",
    },
    size: {
      type: String,
      default: "normal",
    },
    level: {
      type: String,
      default: "normal",
    },
  },
  setup(props) {
    const { theme, size, level } = props;
    const classes = computed(() => {
      return {
        [`momo-theme-${theme}`]: theme,
        [`momo-size-${size}`]: size,
        [`momo-level-${level}`]: level,
      };
    });
    return { classes };
  },
});
</script>

<style lang="scss">
$h: 32px;
$border-color: #d9d9d9;
$color: #333;
$blue: #30a9ff;
$radius: 4px;
$red: red;
.momo-button {
  box-sizing: border-box;
  height: $h;
  padding: 0 12px;
  cursor: pointer;
  display: inline-block;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  background-color: white;
  color: $color;
  border: 1px solid $border-color;
  border-radius: $radius;
  box-shadow: 0 1px 0 fade-out(black, 0.95);
  transition: background 250ms;
  & + & {
    margin-left: 8px;
  }
  &:hover,
  &:focus {
    color: $blue;
    border-color: $blue;
  }
  &:focus {
    outline: none;
  }
  &::-moz-focus-inner {
    border: 0;
  }
  &.momo-theme-link {
    border-color: transparent;
    box-shadow: none;
    color: $blue;
    &:hover,
    &:focus {
      color: lighten($blue, 10%);
    }
  }
  &.momo-theme-text {
    border-color: transparent;
    box-shadow: none;
    color: inherit;
    &:hover,
    &:focus {
      background-color: darken(white, 5%);
    }
  }
  &.momo-size-big {
    font-size: 24px;
    height: 48px;
    padding: 0 16px;
  }
  &.momo-size-small {
    font-size: 12px;
    height: 20px;
    padding: 0 4px;
  }
  &.momo-theme-button {
    &.momo-level-main {
      background-color: $blue;
      color: white;
      border-color: $blue;
      &:hover,
      &:focus {
        background-color: darken($blue, 10%);
        border-color: darken($blue, 10%);
      }
    }
    &.momo-level-danger {
      background-color: $red;
      border-color: $red;
      color: white;
      &:hover,
      &:focus {
        background-color: darken($red, 10%);
        border-color: darken($red, 10%);
      }
    }
  }
  &.momo-theme-link {
    &.momo-level-danger {
      color: $red;
      &:hover,
      &:focus {
        color: darken($red, 10%);
      }
    }
  }
  &.momo-theme-text {
    &.momo-level-main {
      color: $blue;
      &:hover,
      &:focus {
        color: darken($blue, 10%);
      }
    }
    &.momo-level-danger {
      color: $red;
      &:hover,
      &:focus {
        color: darken($red, 10%);
      }
    }
  }
}
</style>
