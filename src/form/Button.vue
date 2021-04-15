<template>
  <div>
    <button @click.prevent="handleClick">
      <slot></slot>
    </button>
  </div>
</template>

<script>
export default {
  name: 'SqButton',
  methods: {
    handleClick(e) {
      this.$emit('click', e)
    }
  }
}
</script>

<style>

</style>