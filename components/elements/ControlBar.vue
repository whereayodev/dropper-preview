<template>
  <ClientOnly>
    <div class="container row p5 align center control-bar">
      <slot />
    </div>
  </ClientOnly>
</template>
<style lang="scss">
.control-bar {
  @include border($all: true, $color: $color-light-theme-border);

  gap: 2.5px;
  border-radius: 16px;

  background: $color-dark-theme-border;
}
</style>
