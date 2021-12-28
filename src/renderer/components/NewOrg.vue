<template>
  <div class="absolute inset-0 flex justify-center items-center" v-if="show">
    <div class="w-1/3 bg-gray-800 border-2 bg-opacity-60 border-gray-700">
      <div
        class="flex justify-between bg-gray-700 p-2 border-b border-gray-900"
      >
        <p>New Org</p>
        <button @click="close()">
          <CloseIcon />
        </button>
      </div>
      <div class="p-2 py-4 space-y-2">
        <div class="">
          <label class="text-xs">Org Name (sfdx alias)</label>
          <input
            v-model="form.name"
            class="
              appearance-none
              w-full
              bg-gray-800
              ring-blue-700
              focus:ring-2
              p-1
            "
          />
        </div>
        <div class="">
          <label class="text-xs">Org Status</label>
          <input
            v-model="form.status"
            class="
              appearance-none
              w-full
              bg-gray-800
              ring-blue-700
              focus:ring-2
              p-1
            "
          />
        </div>
        <div class="">
          <label class="text-xs">Org Type</label>
          <input
            v-model="form.type"
            class="
              appearance-none
              w-full
              bg-gray-800
              ring-blue-700
              focus:ring-2
              p-1
            "
          />
        </div>
        <div class="flex pt-4 justify-center">
          <button
            @click="save()"
            class="bg-green-700 border border-green-400 px-3 text-gray-200"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { reactive, toRefs } from 'vue'
import { useOrg } from '../utils/use-orgs'
import CloseIcon from './icons/CloseIcon.vue'
export default {
  props: {},
  components: { CloseIcon },
  setup(props, { emit }) {
    let _data = reactive({
      show: false,
      form: {
        id: null,
        name: '',
        status: '',
        type: '',
      } as any,
      open(org: any = null) {
        if (org) _data.form = { ...org }
        _data.show = true
      },
      close() {
        _data.show = false
        _data.form = {}
      },
      randomString(length: number = 16, chars: any = 'aA#') {
        var mask = ''
        if (chars.indexOf('a') > -1) mask += 'abcdefghijklmnopqrstuvwxyz'
        if (chars.indexOf('A') > -1) mask += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
        if (chars.indexOf('#') > -1) mask += '0123456789'
        if (chars.indexOf('!') > -1)
          mask += '~`!@#$%^&*()_+-={}[]:";\'<>?,./|\\'
        var result = ''
        for (var i = length; i > 0; --i)
          result += mask[Math.round(Math.random() * (mask.length - 1))]
        return result
      },
      save() {
        if (!this.form.id) this.form.id = this.randomString(17)
        useOrg.list.addItem(this.form)
        this.close()
      },
    })
    return {
      ...toRefs(_data),
    }
  },
}
</script>
