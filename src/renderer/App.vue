<template>
  <div class="bg-gray-900 overflow-hidden h-screen flex flex-col">
    <atoms-top-bar />
    <div class="flex flex-1">
      <side-nav class="" />
      <div class="flex-1">
        <orgs class=""></orgs>
      </div>
    </div>
  </div>
</template>

<script>
import AtomsTopBar from './components/atoms/TopBar.vue'
import SideNav from './components/SideNav.vue'
import Orgs from './components/Orgs.vue'

export default {
  components: { AtomsTopBar, SideNav, Orgs },
  name: 'App',
}
</script>
