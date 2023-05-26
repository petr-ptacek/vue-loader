<script setup lang="ts">
import { computed }   from "vue";
import type { Props } from "./types";

defineOptions({
  name: "VueLoader"
});

const props = withDefaults(
  defineProps<Props>(), {
    disableLoader: false,
    disableMessage: false,
    zIndex: 100
  }
);

const styleDeclaration = computed<Record<string, any>>(() => {
  return {
    zIndex: props.zIndex.toString(10)
  };
});

</script>

<template>
  <div
    class="vue-loader"
    :class="{ 'vue-loader--hidden': !visible }"
    :style="styleDeclaration"
  >
    <!--LOADER-->
    <div
      v-if="disableLoader"
      class="vue-loader__loader"
    >
      <slot>
        <div class="vue-loader__circle-1">
          <div class="vue-loader__circle-2"></div>
        </div>
      </slot>
    </div>

    <!--MESSAGE-->
    <div
      v-if="!disableMessage"
      class="vue-loader__message"
    >
      <slot name="message" :message="message">
        {{ message }}
      </slot>
    </div>
  </div>
</template>
