<script setup lang="ts">
interface Props {
  text: string
  href: string
  type: 'npm' | 'github'
}

defineProps<Props>()
</script>
<template>
  <NuxtLink
    external
    class="container row g10 align center button-gradient"
    :class="type"
    :to="href"
  >
    <SvgoNpm v-if="type == 'npm'" :font-controlled="false" filled="false" />
    <SvgoGithub v-if="type == 'github'" :font-controlled="false" filled="false" />
    {{ text }}
  </NuxtLink>
</template>
<style lang="scss">
.button-gradient {
  @include text-style-main;

  padding: 10px 15px 10px 12px;
  border-radius: 9px;

  background: white;
  color: $color-light-theme-fill;

  text-decoration: none;

  &.npm {
    @include border-gradient($color-gradients-npm);
  }

  &.github {
    @include border-gradient($color-gradients-github);
  }
}
</style>
