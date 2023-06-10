<script setup lang="ts">
defineProps({
  input: {
    type: Boolean,
    required: false
  }
})
</script>
<template>
  <button class="container col align justify center control" :class="{ input: input }">
    <Transition name="fade">
      <slot />
    </Transition>
  </button>
</template>
<style lang="scss">
.control {
  @include border($all: true, $color: $color-light-theme-border);

  cursor: pointer;
  position: relative;

  width: 50px;
  height: 50px;

  overflow: hidden;

  border-radius: 12px;

  background: $color-dark-theme-fill;

  &.input {
    cursor: text;
  }

  svg {
    @include absolute-center;

    width: 24px;
    height: 24px;
  }
}
</style>
