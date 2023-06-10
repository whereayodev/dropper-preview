<script setup lang="ts">
import { ArrowUp, ArrowDown, Moon, Sun, Laptop } from 'lucide-vue-next'
import { onKeyStroke } from '@vueuse/core'

type Theme = 'dark' | 'light' | 'auto'
type Direction = 'top' | 'bottom'

const width: Ref<number> = ref(125)
const theme: Ref<Theme> = ref('light')
const direction: Ref<Direction> = ref('top')

onKeyStroke('ArrowDown', (e) => {
  e.preventDefault()
  direction.value = 'bottom'
})

onKeyStroke('ArrowUp', (e) => {
  e.preventDefault()
  direction.value = 'top'
})

onKeyStroke('ArrowRight', (e) => {
  e.preventDefault()
  if (theme.value === 'light') {
    theme.value = 'dark'
  } else if (theme.value === 'dark') {
    theme.value = 'auto'
  } else {
    theme.value = 'light'
  }
})

onKeyStroke('ArrowLeft', (e) => {
  e.preventDefault()
  if (theme.value === 'light') {
    theme.value = 'auto'
  } else if (theme.value === 'dark') {
    theme.value = 'light'
  } else {
    theme.value = 'dark'
  }
})
</script>
<template>
  <main class="container col g45 align justify center">
    <div class="container col g25 align center app-heading">
      <div class="container row g10 align center logo">
        <img src="~~/assets/images/logo.png" alt="Dropper - vue3 dropdown component library" />
        <h1>Dropper</h1>
      </div>
      <h4>Lightweight opensource Vue 3 Dropdown</h4>
    </div>
    <div class="container row g10">
      <ElementsGradientButton
        text="Github"
        href="https://github.com/whereayodev/vue3-dropper"
        type="github"
      />
      <ElementsGradientButton
        text="NPM"
        href="https://www.npmjs.com/package/vue3-dropper"
        type="npm"
      />
    </div>
    <ElementsPreviewBody :theme="theme" :direction="direction" :width="width" />
    <ElementsControlBar>
      <ElementsControlButton
        @click="
          theme === 'light'
            ? (theme = 'dark')
            : theme === 'dark'
            ? (theme = 'auto')
            : theme === 'auto'
            ? (theme = 'light')
            : theme
        "
      >
        <Sun v-if="theme == 'light'" color="#191919" :stroke-width="1.5" />
        <Moon v-if="theme == 'dark'" color="#191919" :stroke-width="1.5" />
        <Laptop v-if="theme == 'auto'" color="#191919" :stroke-width="1.5" />
      </ElementsControlButton>
      <ElementsControlButton
        @click="direction == 'top' ? (direction = 'bottom') : (direction = 'top')"
      >
        <ArrowUp v-if="direction == 'top'" color="#191919" :stroke-width="1.5" />
        <ArrowDown v-if="direction == 'bottom'" color="#191919" :stroke-width="1.5" />
      </ElementsControlButton>
      <ElementsControlButton input>
        <input v-model="width" type="number" maxlength="3" placeholder="0" />
      </ElementsControlButton>
    </ElementsControlBar>
    <h5 class="credits left">🇺🇦 From Ukraine with love by Max A.</h5>
    <NuxtLink
      external
      to="https://www.buymeacoffee.com/whereayodev"
      target="_blank"
      class="credits right"
      >Buy me a coffee</NuxtLink
    >
  </main>
</template>
<style lang="scss">
main {
  width: 100vw;
  height: 100svh;

  .app-heading {
    .logo {
      padding-right: 10px;

      img {
        @include user-select-none;

        object-fit: cover;

        width: 65px;
        height: 65px;
      }

      h1 {
        @include text-style-h1;

        color: $color-light-theme-fill;
      }
    }

    h4 {
      @include text-style-h4;

      color: $color-grey;
    }
  }

  input {
    position: absolute;

    inset: 0;

    width: 100%;
    text-align: center;
    border: none;

    &:focus-visible {
      outline: none;
    }

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }

  .credits {
    @include text-style-copyright;

    position: absolute;

    bottom: 30px;

    color: rgba($color: $color-grey, $alpha: 0.5);

    &.left {
      left: 60px;
    }

    &.right {
      right: 60px;
    }
  }
}
</style>
