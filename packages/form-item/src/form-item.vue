<template>
  <div>
    <label>{{ label }}</label>
    <div> 
      <slot></slot>
    </div>
    <p v-if="errorMessage">{{ errorMessage }}</p>
  </div>
</template>

<script>
import AsyncValidator from 'async-validator';

export default {
  name: 'SqFormItem',
  inject: ['form'],
  data() {
    return {
      errorMessage: ''
    }
  },
  props: {
    label: {
      type: String
    },
    prop: {
      type: String
    }
  },
  methods: {
    validate() {
      if (!this.prop) return
      const value = this.form.model[this.prop]
      const rules = this.form.rules[this.prop]
      const descriptor = { [this.prop]: rules }
      const validator = new AsyncValidator(descriptor)
      return validator.validate({ [this.prop]: value }, errors => {
        if (errors) {
          this.errorMessage = errors[0].message
        } else {
          this.errorMessage = ''
        }
      })
    }
  }
}
</script>

<style>

</style>