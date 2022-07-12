<template>
  <div :size="size">
    <button v-bind="rest">
        <slot />
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core"

export default defineComponent ({
    name: 'Button',
    inheritAttrs: false,
    setup(props, context) {
        const { size, ...rest } = context.attrs
        return { size, rest }
    }
})
</script>

<style lang="scss" scoped>
div {
    border: 1px solid red;
}
</style>