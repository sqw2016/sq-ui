import SqInput from '../'

export default {
  title: 'SqInput',
  component: SqInput
}

export const Text = () => ({
  components: { SqInput },
  template: '<sq-input v-model="value" />',
  data() {
    return {
      value: ''
    }
  }
})

export const password = () => ({
  components: {
    SqInput
  },
  template: '<sq-input type="password" v-model="value" />',
  data() {
    return {
      value: ''
    }
  }
})