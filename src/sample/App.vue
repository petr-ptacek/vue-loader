<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
  inheritAttrs: true
});
</script>

<script setup lang="ts">
import { VueLoader } from "@/lib";
import { ref }       from "vue";

const loaderVisible = ref(false);
</script>

<template>
  <div class="container">
    <button @click="loaderVisible = !loaderVisible">Toggle Loader</button>

    <div class="vue-loader-container" style="width: 500px; height: 500px;">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci ducimus ea incidunt laudantium non nulla
        odio placeat quam quia reprehenderit.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci ducimus ea incidunt laudantium non nulla
        odio placeat quam quia reprehenderit.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci ducimus ea incidunt laudantium non nulla
        odio placeat quam quia reprehenderit.
      </p>

      <VueLoader :visible="loaderVisible" message="Loading ..." />
    </div>
  </div>
</template>

<style>
* {
  box-sizing: inherit;
  padding: 0;
  margin: 0;
}

html {
  color: #212121;
}

body {
  box-sizing: border-box;
}

p {
  margin-bottom: 15px;
}

button {
  padding: 10px;
  text-transform: uppercase;
  border: 2px solid #494747;
  background-color: #ad49de;
  cursor: pointer;
}

.container {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  background-color: #dcd8d8;
}

.vue-loader-container {
  border-radius: 20px;
  overflow: hidden;
  border: 4px solid #494747;
  line-height: 1.5;
  padding: 25px;
  background-color: #ad49de;
}
</style>
