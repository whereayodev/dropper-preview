<script setup lang="ts">
import { DropDown } from 'vue3-dropper'
import { useColorMode } from '@vueuse/core'

import 'vue3-dropper/dist/base.css'

const props = defineProps({
  width: {
    type: Number,
    required: true
  },
  theme: {
    type: String as () => 'dark' | 'light' | 'auto' | undefined,
    required: true
  },
  direction: {
    type: String,
    required: true
  }
})

const items: string[] = ['Expand me', 'Now', 'Click', 'Outside']
const mode = useColorMode()
const choosedItem = ref(items[0])
const dropperVisible: Ref<Boolean> = ref(true)

watch(
  () => props.theme,
  () => {
    dropperVisible.value = false

    setTimeout(() => {
      dropperVisible.value = true
    }, 100)
  },
  { immediate: true }
)
</script>
<template>
  <div class="preview-body" :class="theme == 'auto' ? mode : theme">
    <div class="container col align justify center wrapper">
      <Transition name="fade">
        <DropDown
          v-if="dropperVisible"
          :bottom="direction == 'bottom'"
          :top="direction == 'top'"
          :label="choosedItem"
          :theme="theme == 'auto' ? mode : theme"
          :style="{ width: `${width}px` }"
        >
          <span
            v-for="(item, index) in items.filter((current) => {
              return current !== choosedItem
            })"
            :key="index"
            @click="choosedItem = item"
            >{{ item }}
          </span>
        </DropDown>
      </Transition>
    </div>
    <div class="container col align justify center wrapper">
      <span class="hint alt">Dropper is closed!</span>
    </div>
    <span class="hint">Scroll Down</span>
  </div>
</template>
<style lang="scss">
.preview-body {
  @include border($all: true, $color: $color-light-theme-border);
  @include animate-quick(all);
  @include hide-scrollbar;

  position: relative;
  overflow: scroll;

  width: 500px;
  height: 300px;

  border-radius: 24px;

  background: $color-dark-theme-fill;

  .wrapper {
    width: 100%;
    height: 300px;
  }

  .hint {
    @include text-style-hint;

    position: absolute;

    left: 50%;
    bottom: 25px;

    transform: translateX(-50%);

    color: rgba($color: $color-light-theme-fill, $alpha: 0.5);

    &.alt {
      position: static;
      transform: unset;
    }
  }

  &.dark {
    background: $color-light-theme-fill;

    .hint {
      color: rgba($color: $color-dark-theme-fill, $alpha: 0.5);
    }
  }
}
</style>
