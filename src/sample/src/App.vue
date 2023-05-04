<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
  inheritAttrs: true
});
</script>

<script setup lang="ts">
import { VueLoader } from "@/lib";

interface Props {
}

interface Emits {
}

const props = defineProps<Props>();
const emit = defineEmits<Emits>();
</script>

<template>
  <div>
    <div style="width: 500px"></div>
  </div>
  <VueLoader visible message="Loading ..." />
</template>
