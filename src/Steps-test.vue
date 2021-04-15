<template>
  <div>
    <steps :count="count" :active="active"></steps>
    <button :disabled="btnDisabled" @click="next()">下一步</button>
  </div>
</template>

<script>
import Steps from './Steps';
export default {
  name: 'StepTest',
  computed: {
    btnDisabled() {
      return this.active >= this.count
    }
  },
  data() {
    return {
      count: 4,
      active: 0
    }
  },
  components: {
    Steps,
  },
  methods: {
    next() {
      if(this.active < this.count) this.active++
    }
  }
}
</script>

<style>

</style>