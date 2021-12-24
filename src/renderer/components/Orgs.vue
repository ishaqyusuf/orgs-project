<template>
  <div
    class="
      grid
      w-full
      grid-cols-2
      sm:grid-cols-3
      lg:grid-cols-4
      m-4
      gap-4
      sm:gap-8
    "
  >
    <OrgCard v-for="(card, index) in 2" />
  </div>
  <!-- <div class="bg-" -->
  <NewOrg ref="orgForm"></NewOrg>
  <!-- </div> -->
</template>
<script lang="ts">
import { onMounted, provide, ref } from 'vue'
import useList from '../utils/list'
import OrgCard from './OrgCard.vue'
import NewOrg from './NewOrg.vue'
import { useOrg } from '../utils/use-orgs'

export default {
  props: {},
  components: { OrgCard, NewOrg },
  setup(props, { emit }) {
    let list = useList({
      storeKey: 'orgs_list',
    })
    provide('list', list)

    let orgForm = ref<any>()
    useOrg.orgForm = orgForm
    onMounted(() => {
      list.load()
    })
    return { orgForm, list }
  },
}
</script>
