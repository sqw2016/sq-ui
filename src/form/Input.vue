<template>
  <div>
    <input v-bind="$attrs" :type="type" @input="onInput">
  </div>
</template>

<script>
export default {
  name: 'SqInput',
  inheritAttrs: false,
  props: {
    type: {
      type: String,
      default: 'text'
    },
    value: {
      type: String
    }
  },
  methods: {
    onInput(e) {
      this.$emit('input', e.target.value)
      const findParentFormItem = (parent) => {
        while(parent) {
          if (parent.$options.name === 'SqFormItem') {
            break;
          }
          parent = parent.$parent
        }
        return parent
      }
      const formItem = findParentFormItem(this.$parent)
      formItem.validate()
    }
  }
}
</script>

<style>

</style>