<template>
  <button
    :class="{
      'bg-gray-600': active,
      'text-gray-400 hover:bg-gray-600': !active,
    }"
    class="p-2 w-full flex space-x-2 items-center py-2s"
  >
    <slot></slot>
    <span
      class="text-sm"
      :class="{
        'text-gray-400': active,
        'text-white': !active,
      }"
      >{{ title }}</span
    >
  </button>
</template>
<script lang="ts">
export default {
  props: {
    title: String,
    active: Boolean,
  },
  components: {},
  setup(props, { emit }) {
    return {}
  },
}
</script>
