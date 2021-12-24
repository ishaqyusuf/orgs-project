<template>
  <div class="w-56 bg-gray-800">
    <NavItem active title="ORGS">
      <CloudAltIcon />
    </NavItem>
    <NavItem title="Metadata Utilities">
      <CodeIcon />
    </NavItem>
    <NavItem title="Org Utilities">
      <BeakerIcon />
    </NavItem>
    <NavItem title="Placeholder">
      <RocketIcon />
    </NavItem>
    <NavItem title="Placeholder">
      <DatabaseIcon />
    </NavItem>
  </div>
</template>
<script lang="ts">
import NavItem from './NavItem.vue'
import CloudAltIcon from './icons/CloudAltIcon.vue'
import DatabaseIcon from './icons/DatabaseIcon.vue'
import RocketIcon from './icons/RocketIcon.vue'
import BeakerIcon from './icons/BeakerIcon.vue'
import CodeIcon from './icons/CodeIcon.vue'
export default {
  props: {},
  components: {
    NavItem,
    CloudAltIcon,
    DatabaseIcon,
    RocketIcon,
    BeakerIcon,
    CodeIcon,
  },
  setup(props, { emit }) {
    return {}
  },
}
</script>
