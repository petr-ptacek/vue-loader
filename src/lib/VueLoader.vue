<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "VueLoader"
});
</script>

<script setup lang="ts">
export interface Props {
  visible?: boolean;
  message?: string;
  disableMessage?: boolean;
}

withDefaults(
  defineProps<Props>(),
  {
    disableMessage: false
  }
);
</script>

<template>
  <div
    class="vue-loader"
    :class="{ 'vue-loader--hidden': !visible }"
  >
    <div class="vue-loader__circle-1">
      <div class="vue-loader__circle-2"></div>
    </div>
    <div v-if="!disableMessage" class="vue-loader__message">
      <slot name="message" :message="message">
        {{ message }}
      </slot>
    </div>
  </div>
</template>

<style>
.vue-loader, .vue-loader * {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.vue-loader {
  --spinner-circle1--color: #5591f5;
  --spinner-circle1--size: 100px;
  --spinner-circle1--duration: 2s;
  --spinner-circle2--color: #27a769;
  --spinner-circle2--size: 80px;
  --spinner-circle2--duration: 1.5s;

  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 10;
  background-color: rgba(132, 132, 132, 0.35);
  backdrop-filter: blur(2px);
}

.vue-loader--hidden {
  display: none;
}

.vue-loader__message {
  margin-top: 15px;
  font-weight: 500;
  font-size: 2.2rem;
  font-family: sans-serif;
  display: inline-block;
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  background-image: linear-gradient(120deg, var(--spinner-circle1--color), var(--spinner-circle2--color));
  color: #fff;
}

.vue-loader__circle-1,
.vue-loader__circle-2 {
  border-radius: 50%;
  animation-name: spinner;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}

.vue-loader__circle-1 {
  display: flex;
  align-items: center;
  justify-content: center;
  width: var(--spinner-circle1--size);
  height: var(--spinner-circle1--size);
  border-left: 12px solid var(--spinner-circle1--color);
  animation-duration: var(--spinner-circle1--duration);
}

.vue-loader__circle-2 {
  width: var(--spinner-circle2--size);
  height: var(--spinner-circle2--size);
  border-right: 12px solid var(--spinner-circle2--color);
  animation-duration: var(--spinner-circle2--duration);
}

@keyframes spinner {
  100% {
    transform: rotate(360deg);
  }
}
</style>
