<template>
  <div class="bg-gray-800 rounded-lg text-sm">
    <div
      v-if="org"
      class="
        border-b
        text-gray-500
        flex
        items-center
        justify-between
        p-2
        border-gray-900
      "
    >
      <button class="flex flex-col items-center">
        <OpenInNewIcon />
        <span class="text-xs">Open</span>
      </button>
      <button class="flex flex-col items-center">
        <MenuIcon />
      </button>
    </div>
    <div class="h-28 relative">
      <div class="absolute inset-0 flex justify-center items-center">
        <CloudIcon class="text-9xl absolute text-gray-900 text-opacity-10" />
      </div>
      <div class="flex justify-between">
        <div class="p-2">
          <p class="font-semibold mb-2">sales-feature-scratch</p>
          <p class="text-gray-400 text-xs mb-1">Type: {{ org.type }}</p>
          <p class="text-gray-400 text-xs">Org Id: {{ org.id }}</p>
        </div>
        <div
          class="p-1 rounded-full bg-green-500 absolute top-o right-0 m-2 mt-4"
        ></div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import CloudIcon from './icons/CloudIcon.vue'
import OpenInNewIcon from './icons/OpenInNewIcon.vue'
import MenuIcon from './icons/MenuIcon.vue'
export default {
  props: {
    org: Object,
    id: String,
  },
  components: { CloudIcon, OpenInNewIcon, MenuIcon },
  setup(props, { emit }) {
    return {}
  },
}
</script>
