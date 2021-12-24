import { reactive } from 'vue'
import useStorage from './use-storage'

export default function useList({
  structure = [],
  keyName = 'id',
  items = [],
  transformer,
  formTransform,
  actions = {},
  baseUrl,
  beforeInit,
  afterInit,
  options = {},
  _filter,
  filter,
  storageKey,
  disableLoader,
  listName = 'items',
  formKeyName = 'id',
  push = false,
  loader,
}: any) {
  function transformForm(item) {
    return formTransform ? formTransform(item) : item
  }
  const data = reactive<any>({
    items,
    actions,
    ids: [],
    keyName,
    formKeyName,
    push,
    itemsById: {},
    checkedIds: [],
    load,
    listed: true,
    show: true,
    loading: false,
    initialized: false,
    refresh,
    query: {},
    // filter,
    transform(item) {
      return transformer ? transformer(item) : item
    },
    formId(item) {
      return item[this.formKeyName]
    },
    itemId(item) {
      return item[this.keyName]
    },
    count() {
      return data.ids.length
    },
    init(_items: any[], reset = false) {
      this.initialized = true
      beforeInit && beforeInit()
      if (reset) this.reset()
      this.ids.splice(0)
      this.items = _items.map((item) => {
        const _id = this.itemId(item)
        const freezed = (this.itemsById[_id] = this.transform(
          Object.freeze(item)
        ))
        this.ids.indexOf(_id) < 0 && data.ids.push(_id)
        return freezed
      })
      afterInit && afterInit()
      // this.listed = this.show = false;
      // setTimeout(() => {
      //   this.show = this.listed = true;
      // }, 200);
    },
    reset() {
      this.ids.splice(0)
      this.checkedIds.splice(0)
      this.items.splice(0)
    },
    checkedItems() {
      return this.checkedIds.map((c) => this.itemsById[c])
    },
    clearChecked() {
      this.checkedIds.splice(0)
    },
    toggleCheck(id: any, isChecked) {
      //   console.log(id);
      const index = this.checkedIds.indexOf(id)
      if (isChecked && index === -1) this.checkedIds.push(id)
      else if (!isChecked && index !== 1) this.checkedIds.splice(index, 1)
    },
    isChecked(id) {
      return this.checkedIds.includes(id)
    },
    toggleAll(isChecked) {
      this.ids.map((id) => this.toggleCheck(id, isChecked))
    },

    get isEmpty() {
      return this.ids.length == 0
    },
    deleteItem(item) {
      const index = this.ids.findIndex((id) => id == this.itemId(item))
      if (index > -1) {
        this.ids.splice(index, 1)
        delete this.itemsById[this.itemId(item)]
        this.pager.total--
        this.pager.to--
      }
    },
    deleteSelection() {
      this.checkedIds.map((id) => this.deleteItem({ id }))
    },
    addItem(item) {
      const id = this.itemId(item)
      const _item = this.itemsById[id]
      if (_item) {
        this.itemsById[id] = this.transform(
          Object.freeze({
            // ..._item,
            ...item,
          })
        )
      } else {
        this.itemsById[id] = this.transform(
          Object.freeze({
            ...item,
          })
        )
        if (this.push) this.ids.push(id)
        else data.ids.unshift(id)
      }
    },

    allChecked() {
      return this.ids.every((id) => this.checkedIds.includes(id))
    },
    structure,
    allItems() {
      return Object.values(this.itemsById)
    },
  })

  function load(reset = true) {
    let _od = useStorage.get(storageKey, [])
    data.init(_od ?? [], reset)
  }
  function refresh() {
    load(false)
  }
  if (items) {
    data.init(items, true)
  }
  return data
}
