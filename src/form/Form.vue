<template>
  <div>
    <form>
      <slot></slot>
    </form>
  </div>
</template>

<script>
export default {
  name: 'SqForm',
  props: {
    model: {
      type: Object
    },
    rules: {
      type: Object
    }
  },
  provide () {
    return {
      form: this
    }
  },
  methods: {
    validate(cb) {
      const validates = this.$children.filter(child => child.prop).map(child => child.validate())
      Promise.all(validates).then(() => {
        cb(true)
      }).catch(() => {
        cb(false)
      })
    }
  }
}
</script>

<style>

</style>