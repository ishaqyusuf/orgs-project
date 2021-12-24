<template>
  <nav
    class="
      w-screen
      h-12
      bg-gray-700
      border-gray-800
      flex
      justify-end
      px-4
      space-x-2
      border-b
      items-center
      shadow-xl
    "
    style="-webkit-app-region: drag"
  >
    <button
      @click="useOrg.orgForm.open()"
      class="
        flex
        rounded-full
        bg-gray-600
        border border-green-700
        flex-col
        items-center
      "
    >
      <AddIcon class="text-xl" />
    </button>
    <button class="flex flex-col items-center">
      <MenuIcon />
    </button>
  </nav>
</template>
<script lang="ts">
import MenuIcon from '../icons/MenuIcon.vue'
import AddIcon from '../icons/AddIcon.vue'
import { inject } from 'vue'
import { useOrg } from '../../utils/use-orgs'
export default {
  props: {},
  components: { MenuIcon, AddIcon },
  setup(props, { emit }) {
    let list = inject('list', {})
    return {
      useOrg,
    }
  },
}
</script>
