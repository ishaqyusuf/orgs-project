import { reactive } from 'vue'

let state = reactive({
  orgForm: null as any,
  list: null as any,
})

export let useOrg = state
